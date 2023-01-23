import { mouse, Point, Button } from '@nut-tree/nut-js';

export const circle = async (radius: number) => { 
  const trajectory: Array<Point> = [];
  const cursorPosition = await mouse.getPosition()
  const step = Math.PI / (2 * radius);
  for (let fi = 0; fi < Math.PI * 2; fi = fi + step) {
    trajectory.push(new Point(radius * Math.cos(fi) + cursorPosition.x, cursorPosition.y - radius * Math.sin(fi)));
  }
  await mouse.setPosition(trajectory[0]!);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(trajectory);
  await mouse.releaseButton(Button.LEFT);
  await mouse.setPosition(cursorPosition);
  return 'draw_circle';
}