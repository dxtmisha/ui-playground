export enum StorybookControl {
  text = 'text',
  boolean = 'boolean',
  number = 'number',
  select = 'select',
  object = 'object'
}

export type StorybookArgsItem = {
  control?: StorybookControl | ({ type: StorybookControl } & Record<string, any>)
  options?: any[] | Record<string, any>
  table?: {
    category?: string
    defaultValue?: { summary: any, detail?: string }
    type?: { summary: string, detail?: string }
  },
  description?: string
}
export type StorybookArgs = Record<string, StorybookArgsItem>
export type StorybookArgsValue = Record<string, any>
