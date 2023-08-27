export type ElementOrWindow = HTMLElement | Window
export type ElementOrString<E extends ElementOrWindow> = E | string

export type EventOptions = AddEventListenerOptions | boolean | undefined
export type EventListenerDetail<
  O extends Event,
  D extends Record<string, any>
> = (event: O, detail?: D) => void
export type EventActivityItem<E extends ElementOrWindow> = {
  element: E | undefined
  type: string
  listener?: (event: any | Event) => void
  observer?: ResizeObserver
}
