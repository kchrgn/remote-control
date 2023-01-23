import { mouse, Point, Button } from '@nut-tree/nut-js';

export const square = async (length: number) => { 
  const trajectory = [];
  const cursorPosition = await mouse.getPosition()
  let x = cursorPosition.x;
  let y = cursorPosition.y;
  for (let dy = 0; dy <= length; dy++) {trajectory.push(new Point (x, y - dy))};
  for (let dx = 0; dx <= length; dx++) {trajectory.push(new Point (x + dx, y - length))};
  for (let dy = 0; dy <= length; dy++) {trajectory.push(new Point (x + length, y - length + dy))};
  for (let dx = 0; dx <= length; dx++) {trajectory.push(new Point (x  + length - dx, y))};

  await mouse.setPosition(trajectory[0]!);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(trajectory);
  await mouse.releaseButton(Button.LEFT);
  await mouse.setPosition(cursorPosition);
  return 'draw_square';
}