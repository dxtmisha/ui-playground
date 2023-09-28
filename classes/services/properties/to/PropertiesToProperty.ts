import { toKebabCase } from '../../../../functions/string.ts'

import { PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToVar } from './PropertiesToVar.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const FILE_CACHE = '024-property'

/**
 * Class for working with custom styles in CSS.<br>
 * Класс для работы с пользовательскими стилями в CSS.
 */
export class PropertiesToProperty extends PropertiesToVar {
  protected type = PropertyType.property
  protected cacheName = FILE_CACHE

  /**
   * Name transformation for the var type.<br>
   * Преобразование имени для типа var.
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   */
  protected getName ({
    name,
    item
  }: PropertiesItemsItem) {
    return toKebabCase(this.items.getReName(name, item))
  }

  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   * @param design design name /<br>название дизайна
   * @param component component name /<br>название компонента
   * @param item current element /<br>текущий элемент
   */
  protected toFull ({
    design,
    component,
    item
  }: PropertiesItemsItem): string | string[] {
    let value: string | string[] = item?.[PropertyKey.modification] === false
      ? `${item[PropertyKey.name]}: ${item[PropertyKey.css]};`
      : `${this.getPropertyValue(item[PropertyKey.name] as string, item[PropertyKey.css])};`

    if (
      component &&
      item?.[PropertyKey.varKey]
    ) {
      value = [this.getPropertyVar(design, component, item), value]
    }

    return value
  }

  getPropertyVar (
    design: string,
    component: string,
    item: PropertyItem
  ) {
    return `--${design}-${component}-${item[PropertyKey.name]}: ${item[PropertyKey.css]};`
  }

  /**
   * Generating value for property.<br>
   * Генерация значения для свойства.
   * @param name base property name /<br>базовое название свойства
   * @param value current element /<br>текущий элемент
   * @private
   */
  private getPropertyValue (name: string, value?: string): string {
    if (
      /* Flex */
      name === 'flex-position'
    ) {
      return `flexPosition(#{${value}})`
    } else if (name === 'flex-dynamic') {
      return `flexDynamic(#{${value}})`
    } else if (name === 'justify-content') {
      return `justifyContent(#{${value}})`
    } else if (
      /* Position */
      name === 'inset'
    ) {
      return `inset(#{${value}})`
    } else if (name === 'horizon') {
      return `horizon(#{${value}})`
    } else if (name === 'vertically') {
      return `vertically(#{${value}})`
    } else if (name === 'left') {
      return `left(#{${value}})`
    } else if (name === 'right') {
      return `right(#{${value}})`
    } else if (name === 'absolute') {
      return `absolute(#{${value}})`
    } else if (name === 'absoluteAfter') {
      return `absoluteAfter(#{${value}})`
    } else if (
      /* Padding */
      name === 'padding-x'
    ) {
      return `paddingX(#{${value}})`
    } else if (name === 'padding-y') {
      return `paddingY(#{${value}})`
    } else if (name === 'padding-left') {
      return `paddingLeft(#{${value}})`
    } else if (name === 'padding-right') {
      return `paddingRight(#{${value}})`
    } else if (
      /* Margin */
      name === 'margin-x'
    ) {
      return `marginX(#{${value}})`
    } else if (name === 'margin-y') {
      return `marginY(#{${value}})`
    } else if (name === 'margin-left') {
      return `marginLeft(#{${value}})`
    } else if (name === 'margin-right') {
      return `marginRight(#{${value}})`
    } else if (
      /* Dimension */
      name === 'width'
    ) {
      return `width(#{${value}})`
    } else if (name === 'height') {
      return `height(#{${value}})`
    } else if (name === 'width-basis') {
      return `widthBasis(#{${value}})`
    } else if (name === 'height-basis') {
      return `heightBasis(#{${value}})`
    } else if (name === 'aspect-ratio') {
      return `aspectRatio(#{${value}})`
    } else if (name === 'aspect-ratio-width') {
      return `aspectRatioByWidth(#{${value}})`
    } else if (name === 'aspect-ratio-height') {
      return `aspectRatioByHeight(#{${value}})`
    } else if (name === 'squared') {
      return `squared(#{${value}})`
    } else if (name === 'circle') {
      return `circle(#{${value}})`
    } else if (
      /* Font */
      name === 'font-size'
    ) {
      return `fontSize(#{${value}})`
    } else if (name === 'line-height') {
      return `lineHeight(#{${value}})`
    } else if (name === 'text-align') {
      return `textAlign(#{${value}})`
    } else if (name === 'text-overflow') {
      return `textOverflow(#{${value}})`
    } else if (name === 'clamp') {
      return `clamp(#{${value}})`
    } else if (name === 'text-select-none') {
      return 'textSelectNone'
    } else if (
      /* Color */
      name === 'palette'
    ) {
      return `palette(#{${value}})`
    } else if (name === 'palette-color') {
      return `paletteColor(#{${value}})`
    } else if (name === 'palette-stroke') {
      return `paletteStroke(#{${value}})`
    } else if (name === 'palette-background') {
      return `paletteBackground(#{${value}})`
    } else if (name === 'palette-fill') {
      return `paletteFill(#{${value}})`
    } else if (name === 'palette-gradient') {
      return `paletteGradient(#{${value}})`
    } else if (name === 'palette-border') {
      return `paletteBorder(#{${value}})`
    } else if (name === 'color') {
      return `color(#{${value}})`
    } else if (name === 'color-opacity') {
      return `colorOpacity(#{${value}})`
    } else if (name === 'stroke') {
      return `stroke(#{${value}})`
    } else if (name === 'stroke-opacity') {
      return `strokeOpacity(#{${value}})`
    } else if (name === 'background-color') {
      return `background(#{${value}})`
    } else if (name === 'background-opacity') {
      return `backgroundOpacity(#{${value}})`
    } else if (name === 'background-size') {
      return `backgroundSize(#{${value}})`
    } else if (name === 'fill') {
      return `fill(#{${value}})`
    } else if (name === 'fill-opacity') {
      return `fillOpacity(#{${value}})`
    } else if (name === 'gradient') {
      return `gradient(#{${value}})`
    } else if (name === 'gradient-opacity') {
      return `gradientOpacity(#{${value}})`
    } else if (name === 'border-color') {
      return `border(#{${value}})`
    } else if (name === 'border-opacity') {
      return `borderOpacity(#{${value}})`
    } else if (
      /* Transform */
      name === 'translate-x'
    ) {
      return `translateX(#{${value}})`
    } else if (name === 'translate-y') {
      return `translateY(#{${value}})`
    } else if (name === 'scale') {
      return `scale(#{${value}})`
    } else if (name === 'rotate') {
      return `rotate(#{${value}})`
    }

    return `${name}: #{${value}}`
  }
}
