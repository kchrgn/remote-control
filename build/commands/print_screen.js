var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
export const printScreen = () => __awaiter(void 0, void 0, void 0, function* () {
    const cursorPosition = yield mouse.getPosition();
    const GRAB_WIDTH = 200;
    const GRAB_HIGHT = 200;
    let left = cursorPosition.x - GRAB_WIDTH / 2;
    let top = cursorPosition.y - GRAB_HIGHT / 2;
    const screenWidth = yield screen.width();
    const screenHeight = yield screen.height();
    if (cursorPosition.x - GRAB_WIDTH / 2 < 0)
        left = 0;
    if (cursorPosition.x + GRAB_WIDTH / 2 > screenWidth)
        left = screenWidth - GRAB_WIDTH;
    if (cursorPosition.y - GRAB_HIGHT / 2 < 0) {
        top = 0;
    }
    ;
    if (cursorPosition.y + GRAB_HIGHT / 2 > screenHeight)
        top = screenHeight - GRAB_HIGHT;
    const region = new Region(left, top, 200, 200);
    const image = yield screen.grabRegion(region);
    const imageRGB = yield image.toRGB();
    const imageJimp = new Jimp(imageRGB);
    const result = yield imageJimp.getBase64Async(Jimp.MIME_PNG);
    console.log('Result: image grabbed');
    return `prnt_scrn ${result.replace('data:image/png;base64,', '')}`;
});
