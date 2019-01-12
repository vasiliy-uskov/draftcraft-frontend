import {Vec2} from "../../../../common/utils/Vec2";
import {IDrawingContext} from "../../drawingcontext/IDrawingContext";
import {IShape} from "../IShape";
import {DrawingParams} from "../DrawingParams";

class Line implements IShape {
    constructor(start: Vec2, end: Vec2) {
        this._start = start;
        this._end = end;
    }

    public setEnd(end: Vec2) {
        this._end = end;
    }

    public end(): Vec2 {
        return this._end.clone();
    }

    public start(): Vec2 {
        return this._start.clone();
    }

    public draw(drawingContext: IDrawingContext): void {
        drawingContext.setStroke(DrawingParams.linesColor());
        drawingContext.setStrokeWidth(DrawingParams.linesWidth());
        drawingContext.beginPath();
        drawingContext.moveTo(this.start());
        drawingContext.lineTo(this.end());
        drawingContext.stroke();
    }

    public serialize(): Object {
        return {
            model: "line",
            data: {
                start: this._start,
                end: this._end,
            }
        };
    }

    private _start: Vec2;
    private _end: Vec2;
}

export {Line};