import RED_BRICK_IMAGE from './images/red brick.jpeg';
import BLUE_BRICK_IMAGE from './images/blue brick.jpeg';
import GREEN_BRICK_IMAGE from './images/green brick.jpeg';
import YELLOW_BRICK_IMAGE from './images/yellow brick.jpeg';
import PURPLE_BRICK_IMAGE from './images/purple brick.jpeg';

const canvas: HTMLCanvasElement | null = document.querySelector('#playField');

export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
export const BRICK_PADDING = 5;
export const BRICK_WIDTH = canvas

  ? Math.floor((canvas.width - STAGE_PADDING * 2)/STAGE_COLS) - BRICK_PADDING
  : 100;
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2)/STAGE_ROWS) - BRICK_PADDING
  : 30;
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_STARTX = 450;
export const PADDLE_SPEED = 10;
export const BALL_SPEED = 5;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;

export const BRICK_IMAGES: { [key: number]: string } = {
    1: RED_BRICK_IMAGE,
    2: GREEN_BRICK_IMAGE,
    3: YELLOW_BRICK_IMAGE,
    4: BLUE_BRICK_IMAGE,
    5: PURPLE_BRICK_IMAGE
};

export const BRICK_ENERGY: { [key: number]: number } = {
    1:1,
    2:1,
    3:1,
    4:1,
    5:1
};

export const LEVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 4, 4, 4, 4, 4, 4, 0, 0,
    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];

