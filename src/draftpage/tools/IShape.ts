import {IDrawingContext} from "../workplace/drawingcontext/IDrawingContext";

interface IShape {
    draw(drawingContext: IDrawingContext): void;
    toString(): string;
}

export {IShape};