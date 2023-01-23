var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mouse, Point, Button } from '@nut-tree/nut-js';
export const rectangle = (width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const trajectory = [];
    const cursorPosition = yield mouse.getPosition();
    let x = cursorPosition.x;
    let y = cursorPosition.y;
    for (let dy = 0; dy <= height; dy++) {
        trajectory.push(new Point(x, y - dy));
    }
    ;
    for (let dx = 0; dx <= width; dx++) {
        trajectory.push(new Point(x + dx, y - height));
    }
    ;
    for (let dy = 0; dy <= height; dy++) {
        trajectory.push(new Point(x + width, y - height + dy));
    }
    ;
    for (let dx = 0; dx <= width; dx++) {
        trajectory.push(new Point(x + width - dx, y));
    }
    ;
    yield mouse.setPosition(trajectory[0]);
    yield mouse.pressButton(Button.LEFT);
    yield mouse.move(trajectory);
    yield mouse.releaseButton(Button.LEFT);
    yield mouse.setPosition(cursorPosition);
    console.log('Result: rectangle has been drawn');
    return 'draw_rectangle';
});
