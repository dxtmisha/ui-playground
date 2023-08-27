export type Item<V> = {
  index: string
  value: V
}

export type ItemValue<V> = {
  label: string
  value: V
}

export type ItemNameValueType<V> = {
  name: string | number
  value: V
}
