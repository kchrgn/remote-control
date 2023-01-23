import { mouse, Point } from '@nut-tree/nut-js';

export const motion = {
  mouse_up: async (delta: number) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x, cursorPosition.y - delta));
    const newMousePosition = await mouse.getPosition();
    console.log(`Result: new mouse position is ${newMousePosition}`);
    return 'mouse_up';
  },
  mouse_down: async (delta: number) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x, cursorPosition.y + delta));
    const newMousePosition = await mouse.getPosition();
    console.log(`Result: new mouse position is ${newMousePosition}`);
    return 'mouse_down';
  },
  mouse_left: async (delta: number) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x - delta, cursorPosition.y));
    const newMousePosition = await mouse.getPosition();
    console.log(`Result: new mouse position is ${newMousePosition}`);
    return 'mouse_left';
  },
  mouse_right: async (delta: number) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x + delta, cursorPosition.y));
    const newMousePosition = await mouse.getPosition();
    console.log(`Result: new mouse position is ${newMousePosition}`);
    return 'mouse_right';
  },
  mouse_position: async () => { 
    const cursorPosition = await mouse.getPosition()
    console.log(`Result: mouse position is ${cursorPosition}`);
    return `mouse_position ${cursorPosition.x},${cursorPosition.y})`;
  }
}