enum RequestType {
    POST = "POST",
    GET = "GET",
}

class HttpRequestFail extends Error {
    constructor(reason: string) {
        super(`Bad http request: ${reason}`);
    }
}

class WrongAnswerDataType extends HttpRequestFail {
    constructor() {
        super("Wrong answer data type");
    }
}

class UnrecognizedHttpRequestError extends HttpRequestFail {
    constructor() {
        super("Error");
    }
}

class RequestAbortedError extends HttpRequestFail {
    constructor() {
        super("Request abort");
    }
}

class TimeoutRequestFail extends HttpRequestFail {
    constructor() {
        super("Timeout");
    }
}


class AjaxHelper {
    public static post(url: string, data: Object): Promise<Object> {
        return AjaxHelper.request(RequestType.POST, url, data);
    }

    public static get(url: string, data: Object): Promise<Object> {
        return AjaxHelper.request(RequestType.GET, url, data);
    }

    private static request(requestType: RequestType, url: string, data: Object): Promise<Object> {
        return new Promise((resolve: (data: Object) => void, reject: (err: HttpRequestFail) => void) => {
            const xhr = new XMLHttpRequest();
            xhr.open(requestType, url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            let answerData = "";
            let progressHandler: () => void;
            let loadHandler: () => void;
            let baseErrHandler: (err: HttpRequestFail) => void;
            let errHandler = () => baseErrHandler(new UnrecognizedHttpRequestError());
            let abortHandler = () => baseErrHandler(new RequestAbortedError());
            let timeoutHandler = () => baseErrHandler(new TimeoutRequestFail());
            const removeHandlers = () => {
                xhr.removeEventListener("error", errHandler);
                xhr.removeEventListener("abort", abortHandler);
                xhr.removeEventListener("timeout", timeoutHandler);
                xhr.removeEventListener("progress", progressHandler);
                xhr.removeEventListener("load", loadHandler);
            };
            progressHandler = () => {
                answerData += xhr.responseText;
            };
            baseErrHandler = (err: HttpRequestFail) => {
                removeHandlers();
                reject(err);
            };
            loadHandler = () => {
                removeHandlers();
                try {
                    let data = JSON.parse(answerData);
                    resolve(data);
                }
                catch {
                    reject(new WrongAnswerDataType);
                }
            };

            xhr.addEventListener("error", () => errHandler);
            xhr.addEventListener("abort", () => abortHandler);
            xhr.addEventListener("timeout", () => timeoutHandler);
            xhr.addEventListener("progress", progressHandler);
            xhr.addEventListener("load", loadHandler);
            xhr.send(JSON.stringify(data));
        })
    }
}

export {AjaxHelper};