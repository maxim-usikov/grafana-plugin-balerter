export interface ExampleAppSettings {
  customText?: string;
  customCheckbox?: boolean;
}

export interface SimpleOptions {
  text: string;
}

export const defaults: SimpleOptions = {
  text: 'The default text!',
};
