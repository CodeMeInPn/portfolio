export type Position = 'horizontal' | 'vertical-left' | 'vertical-right';

export type OptionPosition = Omit<Position, 'horizontal'> | 'top' | 'bottom';

export type ActiveBars = {
  position: Position[];
  options?: {
    invertColor?: OptionPosition[];
    offset?: OptionPosition[];
  };
};
