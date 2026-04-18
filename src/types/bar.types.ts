export type BarPosition = 'horizontal' | 'left' | 'right';

export type BarOptionPosition =
  | Exclude<BarPosition, 'horizontal'>
  | 'top'
  | 'bottom'
  | 'top-vertical';

export type ActiveBars = {
  position: BarPosition[];
  options?: {
    invertColor?: BarOptionPosition[];
    offset?: BarOptionPosition[];
  };
};
