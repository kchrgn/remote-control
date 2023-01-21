import { mouse, Point, Button } from '@nut-tree/nut-js';

export const rectangle = async (width, height) => { 
  const trajectory = [];
  const cursorPosition = await mouse.getPosition()
  let x = cursorPosition.x;
  let y = cursorPosition.y;
  for (let dy = 0; dy <= height; dy++) {trajectory.push(new Point (x, y - dy))};
  for (let dx = 0; dx <= width; dx++) {trajectory.push(new Point (x + dx, y - height))};
  for (let dy = 0; dy <= height; dy++) {trajectory.push(new Point (x + width, y - height + dy))};
  for (let dx = 0; dx <= width; dx++) {trajectory.push(new Point (x  + width - dx, y))};

  await mouse.setPosition(trajectory[0]);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(trajectory);
  await mouse.releaseButton(Button.LEFT);
  await mouse.setPosition(cursorPosition);
  return 'draw_rectangle';
}