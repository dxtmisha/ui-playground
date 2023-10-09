import {
  cssBackgrounds,
  cssBorder,
  cssColor,
  cssColumns,
  cssContent,
  cssDeprecated,
  cssDifferent,
  cssEffects,
  cssExperimental,
  cssFlexbox,
  cssInteractivity,
  cssLayout,
  cssMath,
  cssOther,
  cssPrint,
  cssScrolls,
  cssSizing,
  cssSpacing,
  cssSVG,
  cssTables,
  cssTransforms,
  cssTransitions,
  cssTypography
} from './propertiesListCss'

import { type Item } from '../types/object'
import { PropertyType } from '../types/property'

export const sortList: Item<string[][]>[] = [
  {
    index: PropertyType.var,
    value: []
  },
  {
    index: PropertyType.property,
    value: [
      cssLayout,
      cssFlexbox,
      cssColumns,
      cssSpacing,
      cssSizing,
      cssContent,
      cssTypography,
      cssMath,
      cssColor,
      cssBackgrounds,
      cssBorder,
      cssEffects,
      cssTransforms,
      cssTables,
      cssTransitions,
      cssInteractivity,
      cssScrolls,
      cssSVG,
      cssPrint,
      cssOther,
      cssExperimental,
      cssDifferent,
      cssDeprecated
    ]
  },
  {
    index: PropertyType.selector,
    value: []
  }
]
