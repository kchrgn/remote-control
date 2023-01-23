import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const printScreen = async () => {
  const cursorPosition = await mouse.getPosition();

  const GRAB_WIDTH = 200;
  const GRAB_HIGHT = 200;

  let left = cursorPosition.x - GRAB_WIDTH/2;
  let top = cursorPosition.y - GRAB_HIGHT/2;
  const screenWidth = await screen.width();
  const screenHeight = await screen.height();

  if (cursorPosition.x - GRAB_WIDTH/2 < 0) left = 0;
  if (cursorPosition.x + GRAB_WIDTH/2 > screenWidth) left = screenWidth - GRAB_WIDTH;
  if (cursorPosition.y - GRAB_HIGHT/2 < 0) { top = 0 };
  if (cursorPosition.y + GRAB_HIGHT/2 > screenHeight) top = screenHeight - GRAB_HIGHT;

  const region = new Region(left, top, 200, 200);
  const image = await screen.grabRegion(region);
  const imageRGB = await image.toRGB();
  const imageJimp = new Jimp(imageRGB);
  const result = await imageJimp.getBase64Async(Jimp.MIME_PNG);

  return `prnt_scrn ${result.replace('data:image/png;base64,', '')}`;
}