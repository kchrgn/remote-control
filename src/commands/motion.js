import { mouse, Point } from '@nut-tree/nut-js';

export const motion = {
  mouse_up: async (delta) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x + 1, cursorPosition.y - delta));
    return 'mouse_up';
  },
  mouse_down: async (delta) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x + 1, cursorPosition.y + delta));
    return 'mouse_down';
  },
  mouse_left: async (delta) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x - delta, cursorPosition.y));
    return 'mouse_left';
  },
  mouse_right: async (delta) => { 
    const cursorPosition = await mouse.getPosition()
    await mouse.setPosition(new Point(cursorPosition.x + delta, cursorPosition.y));
    return 'mouse_right';
  },
  mouse_position: async () => { 
    const cursorPosition = await mouse.getPosition()
    return `mouse_position ${cursorPosition.x},${cursorPosition.y})`;
  }
}