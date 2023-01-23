var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { motion } from './motion.js';
import { circle } from './circle.js';
import { rectangle } from './rectangle.js';
import { square } from './square.js';
import { printScreen } from './print_screen.js';
const commandSelector = Object.assign(Object.assign({}, motion), { draw_circle: circle, draw_rectangle: rectangle, draw_square: square, prnt_scrn: printScreen });
export const commandHandler = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [command, arg1, arg2] = data.split(' ');
    if (!command)
        return 'Unknown_command';
    const result = commandSelector[command](Number(arg1), Number(arg2));
    return result;
});
