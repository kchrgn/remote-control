import { motion } from './motion.js';
import { circle } from './circle.js';
import { rectangle } from './rectangle.js';
import { square } from './square.js';
import { printScreen } from './print_screen.js';

const commandSelector: CommandsArray = {
  ...motion,
  draw_circle: circle,
  draw_rectangle: rectangle,
  draw_square: square,
  prnt_scrn: printScreen,
}

interface CommandsArray {
  [index: string]: (arg1: number, arg2: number ) => {}
}

export const commandHandler = async (data: string) => {
  const [command, arg1, arg2] = data.split(' ');
  if (!command) return 'Unknown_command'
  const result = commandSelector[command]!(Number(arg1), Number(arg2));
  return result;
}