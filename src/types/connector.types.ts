export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-left-inverted';

export type ActiveConnectors = {
  position: Position[];
  offset?: Position[];
};
