import { motion } from './motion.js';
import { circle } from './circle.js';
import { rectangle } from './rectangle.js';
import { square } from './square.js';
import { printScreen } from './print_screen.js';

const commandSelector = {
  ...motion,
  draw_circle: circle,
  draw_rectangle: rectangle,
  draw_square: square,
  prnt_scrn: printScreen,
}

export const commandHandler = async (data) => {
  const [command, arg1, arg2] = data.split(' ');
  const result = await commandSelector[command](Number(arg1), Number(arg2));
  return result;
}