export enum StorybookControl {
  text = 'text',
  select = 'select'
}

export type StorybookArgsItem = {
  control?: StorybookControl
  options?: any[]
  table?: {
    category?: string
    defaultValue?: { summary: any, detail?: string }
    type?: { summary: string, detail?: string }
  },
  description?: string
}
export type StorybookArgs = Record<string, StorybookArgsItem>
export type StorybookArgsValue = Record<string, any>
