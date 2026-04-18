export type ConnectorPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-left-inverted';

export type ActiveConnectors = {
  position: ConnectorPosition[];
  offset?: ConnectorPosition[];
};
