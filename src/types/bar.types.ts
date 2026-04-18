export type BarPosition = 'horizontal' | 'vertical-left' | 'vertical-right';

export type BarOptionPosition =
  | Omit<BarPosition, 'horizontal'>
  | 'top'
  | 'bottom';

export type ActiveBars = {
  position: BarPosition[];
  options?: {
    invertColor?: BarOptionPosition[];
    offset?: BarOptionPosition[];
  };
};
