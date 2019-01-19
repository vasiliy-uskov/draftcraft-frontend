import {Level} from "./model/Level";
import {ServerApiHelper} from "./ServerApiHelper";
import {BaseCustomError} from "./common/exceptions/Exceptions";
import {Disposable} from "./common/disposable/Disposable";
import {EventDispatcher} from "./common/disposable/EventDispatcher";

class GameContext extends Disposable {
    constructor(api: ServerApiHelper) {
        super();
        this._api = api;
        this._serverRequestPromise = this._updateLevels();
    }

    public errorEvent(): EventDispatcher<BaseCustomError> {
        return this._errorEvent;
    }

    public async setCurrentLevel(id: string): Promise<void> {
        await this._serverRequestPromise;
        if (this._levels.has(id)) {
            this._currentLevel = this._levels.get(id);
        }
    }

    public async setCurrentLevelAnswer(answer: string) {
        await this._serverRequestPromise;
        await this._api.setLevelAnswer(this._currentLevel.id(), answer).catch(this._errorHandler.bind(this));
        this._serverRequestPromise = this._updateLevels();
        return this._serverRequestPromise;
    }

    public async selectNextLevel(): Promise<void> {
        await this._serverRequestPromise;
        let prevLevel: Level|null = null;
        for (const level of this._levels.values()) {
            if (prevLevel && prevLevel.id() == this._currentLevel.id()) {
                this._currentLevel = level;
                return;
            }
            prevLevel = level;
        }
    }

    public async lastLevelSelected(): Promise<boolean> {
        await this._serverRequestPromise;
        return Array(...this._levels.values()).reverse()[0] == this._currentLevel;
    }

    public async getLevels(): Promise<Array<Level>> {
        await this._serverRequestPromise;
        return Array(...this._levels.values());
    }

    public async isLevelEnabled(id: string): Promise<boolean> {
        await this._serverRequestPromise;
        return this._levels.get(id).enable();
    }

    public async currentLevel(): Promise<Level> {
        await this._serverRequestPromise;
        return this._currentLevel;
    }

    private _updateLevels(): Promise<void> {
        return this._api.getLevels().then((levels: Array<Level>) => {
            for (const level of levels) {
                this._levels.set(level.id(), level);
            }
            if (!this._currentLevel) {
                this._currentLevel = Array(...this._levels.values())[0];
            }
            else {
                this._currentLevel = this._levels.get(this._currentLevel.id());
            }
        }).catch(this._errorHandler.bind(this));
    }

    private _errorHandler(error: BaseCustomError): Promise<void> {
        this._errorEvent.dispatch(error);
        if (error.code < 500) {
            return this._updateLevels();
        }
        return Promise.resolve();
    }

    private _api: ServerApiHelper;
    private _levels: Map<string, Level> = new Map();
    private _currentLevel?: Level;
    private _serverRequestPromise: Promise<void>;
    private _errorEvent = this._createEventDispatcher<BaseCustomError>();
}

export {GameContext};