// :component.once import { type PropType } from 'vue'

// :component.once import {
// :component.once   ComponentProps,
// :component.once   defaultsComponent,
// :component.once   propsComponent
// :component.once } from '../../constructors/Component/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken/* :component.once  & Omit<ComponentProps, keyof PropsToken> */

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  /* :component.once ...defaultsComponent as Props, */
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  /* :component.once ...propsComponent, */
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
