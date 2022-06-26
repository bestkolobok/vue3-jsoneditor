export type HEX = `#${string}`;

interface ValidationError {
  type: string;
  path: string;
  message: string;
}

interface NodeCreate {
  type: 'single' | 'multiple' | 'append';
  path: [];
  paths: NodeCreate['path'][];
}

interface NodeEvent {
  field: string;
  path: Array<string | number>;
  value?: string;
}

interface NodeTimestamp {
  field: string;
  path: string[];
  value: string;
}

interface Autocomplete {
  filter?: 'start' | 'contain' | ((value: any) => boolean);
  trigger?: 'keydown' | 'focus';
  confirmKeys?: number[];
  caseSensitive?: boolean;
  getOptions?(
    text: string,
    path: string[],
    input: string,
    editor: object
  ): string[] | null | {startFrom: number; options: string[]};
}

export type SerializableNode = {
  value: string | object | number | boolean;
  path: Array<string | number>;
};

interface QueryOptions {
  filter?: {
    field: string | '@';
    relation: '==' | '!=' | '<' | '<=' | '>' | '>=';
    value: string;
  };
  sort?: {
    field: string | '@';
    direction: 'asc' | 'desc';
  };
  projection?: {
    fields: string[];
  };
}

type Mode = 'tree' | 'view' | 'form' | 'code' | 'text' | 'preview';

export type Options = {
  ace?: object;
  ajv?: object;
  onChange?(): void;
  onChangeJSON?(json: JSON): void;
  onChangeText?(json: JSON | string): void;
  onClassName?(params: {path: string[]; field: string; value: string}): void;
  onExpand?(params: {path: string[]; isExpand: boolean; recursive: boolean}): void;
  onEditable?(params: {path: string[]; field: string; value: boolean}): void;
  onError?(error: Error): void;
  onNodeName?(params: {path: string[]; type: 'object' | 'array'; size: number; value: object}): void;
  onValidate?(json: JSON): {path: Array<string | number>; message: string};
  onValidationError?(errors: ValidationError[]): void;
  onCreateMenu?(items: [], node: NodeCreate): void;
  escapeUnicode?: boolean;
  sortObjectKeys?: boolean;
  limitDragging?: boolean;
  history?: boolean;
  mode: Mode;
  modes?: Mode[];
  name?: string;
  schema?: object;
  schemaRefs?: object;
  allowSchemaSuggestions?: boolean;
  search?: boolean;
  indentation?: number;
  theme?: string;
  templates?: object[];
  autocomplete?: Autocomplete;
  mainMenuBar?: boolean;
  navigationBar?: boolean;
  statusBar?: boolean;
  onTextSelectionChange?(start: {row: number; column: number}, end: {row: number; column: number}, text: string): any;
  onSelectionChange?(start: SerializableNode, end: SerializableNode): any;
  onEvent?(node: NodeEvent, event: object): void;
  onFocus?(event: {type: 'focus'; target: EventTarget | null}): void;
  onBlur?(event: {type: 'blur'; target: EventTarget | null}): void;
  colorPicker?: boolean;
  onColorPicker?(parent: HTMLElement, color: HEX, onChange: (newColor: HEX) => void): void;
  timestampTag?: boolean | ((node: NodeTimestamp) => boolean);
  timestampFormat?(node: NodeTimestamp): string | null;
  language?: string;
  languages?: object;
  modalAnchor?: HTMLElement;
  popupAnchor?: HTMLElement;
  enableSort?: boolean;
  enableTransform?: boolean;
  maxVisibleChilds?: number;
  createQuery?(json: object, queryOptions: QueryOptions): string;
  executeQuery?(json: object, query: string): object;
  queryDescription?: string;
};

export type ExpandOptions = {
  path: string[];
  isExpand: boolean;
  recursive: boolean;
}[];
