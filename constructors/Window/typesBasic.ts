export enum WindowStatusItem {
  display = 'display',
  preparation = 'preparation',
  flash = 'flash',
  open = 'open',
  hide = 'hide',
  close = 'close'
}

export enum WindowStatusControlItem {
  block = 'block',
  close = 'close',
  static = 'static',
  controlStatic = 'controlStatic'
}

export enum WindowLocation {
  top = 'top',
  center = 'center',
  bottom = 'bottom'
}

export type WindowEmitOptions = {
  id: string
  element: HTMLDivElement
  control: HTMLElement
  open: boolean
}
