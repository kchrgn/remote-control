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
export const circle = (radius) => __awaiter(void 0, void 0, void 0, function* () {
    const trajectory = [];
    const cursorPosition = yield mouse.getPosition();
    const step = Math.PI / (2 * radius);
    for (let fi = 0; fi < Math.PI * 2; fi = fi + step) {
        trajectory.push(new Point(radius * Math.cos(fi) + cursorPosition.x, cursorPosition.y - radius * Math.sin(fi)));
    }
    yield mouse.setPosition(trajectory[0]);
    yield mouse.pressButton(Button.LEFT);
    yield mouse.move(trajectory);
    yield mouse.releaseButton(Button.LEFT);
    yield mouse.setPosition(cursorPosition);
    return 'draw_circle';
});
