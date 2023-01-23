var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mouse, Point } from '@nut-tree/nut-js';
export const motion = {
    mouse_up: (delta) => __awaiter(void 0, void 0, void 0, function* () {
        const cursorPosition = yield mouse.getPosition();
        yield mouse.setPosition(new Point(cursorPosition.x, cursorPosition.y - delta));
        const newMousePosition = yield mouse.getPosition();
        console.log(`Result: new mouse position is ${newMousePosition}`);
        return 'mouse_up';
    }),
    mouse_down: (delta) => __awaiter(void 0, void 0, void 0, function* () {
        const cursorPosition = yield mouse.getPosition();
        yield mouse.setPosition(new Point(cursorPosition.x, cursorPosition.y + delta));
        const newMousePosition = yield mouse.getPosition();
        console.log(`Result: new mouse position is ${newMousePosition}`);
        return 'mouse_down';
    }),
    mouse_left: (delta) => __awaiter(void 0, void 0, void 0, function* () {
        const cursorPosition = yield mouse.getPosition();
        yield mouse.setPosition(new Point(cursorPosition.x - delta, cursorPosition.y));
        const newMousePosition = yield mouse.getPosition();
        console.log(`Result: new mouse position is ${newMousePosition}`);
        return 'mouse_left';
    }),
    mouse_right: (delta) => __awaiter(void 0, void 0, void 0, function* () {
        const cursorPosition = yield mouse.getPosition();
        yield mouse.setPosition(new Point(cursorPosition.x + delta, cursorPosition.y));
        const newMousePosition = yield mouse.getPosition();
        console.log(`Result: new mouse position is ${newMousePosition}`);
        return 'mouse_right';
    }),
    mouse_position: () => __awaiter(void 0, void 0, void 0, function* () {
        const cursorPosition = yield mouse.getPosition();
        console.log(`Result: mouse position is ${cursorPosition}`);
        return `mouse_position ${cursorPosition.x},${cursorPosition.y})`;
    })
};
