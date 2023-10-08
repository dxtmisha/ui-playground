export const cssLayout: string[] = [
  'direction', // задает направление текста
  'unicode-bidi', // определяет, как обрабатывается двунаправленный текст в документе
  'appearance', // для отображения элемента, используя базовые стили
  'aspect-ratio',
  'aspect-ratio-width', // mixin
  'aspect-ratio-height', // mixin
  'position',
  'absolute', // mixin
  'absoluteAfter', // mixin
  'z-index',
  'inset',
  'inset-block',
  'inset-block-start',
  'inset-block-end',
  'inset-inline',
  'inset-inline-start',
  'inset-inline-end',
  'top',
  'right', // mixin
  'bottom',
  'left', // mixin
  'display',
  'visibility',
  'clear', // может ли элемент быть рядом с плавающими floating элементами
  'contain', // указывает, что элемент и его содержимое максимально независимы от остальной части дерева документа
  'overflow',
  'overflow-x',
  'overflow-y',
  'overflow-block', // устанавливает, что будет отображаться, когда содержимое переполняет начальные и конечные края блока
  'overflow-inline', // устанавливает, что будет показано, когда содержимое выходит за пределы встроенных начального и конечного краев блока
  'overflow-wrap', // определяя, должен ли браузер вставлять разрывы строк в неразрывную строку
  'overflow-clip-margin', // определяет, насколько далеко за пределы границ может быть нарисован элемент перед его обрезкой
  'overflow-anchor', // предоставляет возможность отказаться от привязки прокрутки браузера, которая регулирует положение прокрутки, чтобы минимизировать сдвиги содержимого

  'float', // элемент должен быть взят из нормального потока и помещён вдоль левой или правой стороны его контейнера
  'shape-outside', // определяет форму, вокруг которой должно обтекаться соседнее встроенное содержимое
  'shape-margin', // устанавливает поле для фигуры CSS, созданной с использованием
  'shape-image-threshold', // устанавливает порог альфа-канала, используемый для извлечения фигуры, используя изображение в качестве значения для

  'min-zoom', // устанавливает минимальный коэффициент масштабирования документа
  'max-zoom' // устанавливает максимальный коэффициент масштабирования документа
]

export const cssFlexbox: string[] = [
  'flex',
  'flex-position', // mixin
  'flex-flow', // свойство, которое является сокращением для отдельных свойств flex-direction и flex-wrap
  'flex-basis',
  'flex-direction', // свойство, указывающее на то, как flex-элементы располагаются во flex-контейнере по главной оси и направлению
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'flex-dynamic', // mixin

  'grid',
  'grid-area', // это сокращённая форма записи для свойств grid-row-start, grid-column-start, grid-row-end и grid-column-end
  'grid-auto-flow', // управляет поведением автоматически размещаемых элементов
  'grid-auto-columns', // определяет размер неявно созданной дорожки столбца сетки или шаблона дорожек
  'grid-auto-rows', // определяет размер неявно созданной дорожки строки сетки или шаблона дорожек
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-row',
  'grid-row-start',
  'grid-row-end',

  'align-content',
  'align-items',
  'align-self',
  'align-tracks', // устанавливает выравнивание по оси кладки для контейнеров сетки, у которых кладка находится на оси блока
  'justify-content',
  'justify-items',
  'justify-self',
  'justify-tracks', // устанавливает выравнивание по оси кладки для контейнеров сетки, у которых кладка находится на встроенной оси
  'place-content',
  'place-items',
  'place-self',

  'gap',
  'row-gap',
  'order',

  'masonry-auto-flow' // изменяет способ размещения элементов при использовании кладки в CSS Grid Layout
]

export const cssColumns: string[] = [
  'columns', // устанавливает количество столбцов, которые будут использоваться
  'column-count', // разбивает содержимое элемента на заданное число столбцов
  'column-width', // устанавливает идеальную ширину столбца в макете с несколькими столбцами
  'column-fill', // разбитому на столбцы и указывает как содержимое располагается внутри столбца
  'column-gap', // задаёт отступ между колонками

  'column-rule', // устанавливает ширину, стиль и цвет линии, находящейся между колонками
  'column-rule-width',
  'column-rule-color',
  'column-rule-style',

  'column-span' // позволяет элементу охватывать все столбцы
]

export const cssSpacing: string[] = [
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'margin-x', // mixin
  'margin-y', // mixin
  'margin-block',
  'margin-block-start',
  'margin-block-end',
  'margin-inline',
  'margin-inline-start',
  'margin-inline-end',
  'margin-trim', // позволяет контейнеру обрезать поля своих дочерних элементов там, где они примыкают к краям контейнера

  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-x', // mixin
  'padding-y', // mixin
  'padding-block',
  'padding-block-start',
  'padding-block-end',
  'padding-inline',
  'padding-inline-start',
  'padding-inline-end'
]

export const cssSizing: string[] = [
  'box-sizing',

  'squared',

  'width',
  'min-width',
  'max-width',
  'width-basis',
  'height',
  'min-height',
  'max-height',
  'height-basis',

  'block-size',
  'min-block-size',
  'max-block-size',

  'inline-size',
  'min-inline-size',
  'max-inline-size',

  'tab-size' // используется для настройки ширины символа табуляции
]

export const cssContent: string[] = [
  'content',
  'content-visibility', // контролирует, отображает ли элемент вообще свое содержимое
  'quotes', // определяет, как браузер должен отображать кавычки
  'hanging-punctuation', // указывает, должен ли знак препинания висеть в начале или в конце строки текста
  'line-break', // определяет, как разрывать строки текста на китайском, японском или корейском языке

  'counter-set', // устанавливает для счетчика CSS заданное значение
  'counter-reset', // сбрасывает счетчик CSS на заданное значение
  'counter-increment', // увеличивает или уменьшает значение счетчика CSS на заданное значение

  'hyphens', // указывает, как следует переносить слова через дефис
  'hyphenate-character', // устанавливает символ (или строку), используемый в конце строки перед разрывом переноса
  'hyphenate-limit-chars' // определяет минимальную длину слова, позволяющую расставлять переносы в словах
]

export const cssTypography: string[] = [
  'font',
  'font-family',
  'font-size',
  'font-weight',
  'font-style',
  'font-variant', // позволяет вам установить все варианты шрифта
  'font-size-adjust', // позволяет изменить размер строчных букв относительно размера прописных букв
  'font-stretch', // выбирает обычное, сжатое или расширенное начертание шрифта
  'font-synthesis', // позволяет указать, может ли браузер синтезировать полужирный, курсив, прописные и/или подстрочные и надстрочные шрифты
  'line-height',
  'line-height-step', // устанавливает шаг для высоты линейного блока
  'letter-spacing',
  'word-spacing',
  'text-align',
  'text-align-all',
  'text-align-last', // описывает как выравнивается последняя строка в блоке
  'text-justify', // определяет какой тип выравнивания следует применить к тексту, когда text-align: justify
  'vertical-align',
  'white-space',
  'text-overflow', // определяет, как пользователю будет сообщаться скрытое содержимое переполнения
  'text-rendering', // предоставляет механизму рендеринга информацию о том, что следует оптимизировать при рендеринге текста

  'font-optical-sizing', // оптимизировано ли отображение текста для просмотра в разных размерах
  'font-variation-settings', // обеспечивает низкоуровневый контроль над переменными характеристиками шрифта
  'box-decoration-break', // определяет, как должны отображаться фрагменты элемента, разбитые на несколько строк
  'widows', // минимальное количество строк в блочном контейнере, которое должно отображаться вверху страницы
  'orphans', // устанавливает минимальное число строк в блочном контейнере, которое должно быть показано внизу страницы

  'text-transform',
  'text-indent', // определяет размер отступа перед строкой в текстовом блоке

  'text-decoration',
  'text-decoration-thickness', // задает толщину обводки декоративной линии
  'text-decoration-color', // устанавливает цвет украшений, добавляемых к тексту с помощью
  'text-decoration-style', // устанавливает стиль строк, заданный параметром
  'text-decoration-line', // задает тип оформления текста в элементе
  'text-decoration-skip', // определяет, какие части содержимого элемента любое текстовое оформление, влияющее на элемент, должно пропускать
  'text-decoration-skip-ink', // определяет, как рисуются надстрочные и подчеркивающие линии, когда они проходят над верхними и нижними элементами глифа
  'text-underline-offset', // устанавливает расстояние смещения линии оформления подчеркивания текста
  'text-underline-position', // определяет положение подчеркивания

  'font-feature-settings', // управляет расширенными типографскими функциями шрифтов OpenType
  'font-kerning', // устанавливает использование информации о кернинге, хранящейся в шрифте

  'font-language-override', // управляет использованием глифов, специфичных для языка, в шрифте
  'font-variant-caps', // управляет использованием альтернативных глифов для заглавных букв
  'font-variant-position', // управляет использованием альтернативных глифов меньшего размера, которые располагаются как надстрочные или подстрочные
  'font-variant-ligatures', // определяет, какие лигатуры и контекстные формы используются
  'font-variant-alternates', // управляет использованием альтернативных глифов
  'font-variant-east-asian', // управляет использованием альтернативных глифов для восточноазиатских алфавитов, таких как японский и китайский
  'font-variant-numeric', // управляет использованием альтернативных глифов для чисел
  'font-variant-emoji', // определяет стиль представления по умолчанию для отображения emoji

  'text-orientation',
  'text-combine-upright', // устанавливает комбинацию символов в пространство одного символа
  'writing-mode', // определяет, будут ли строки текста располагаться горизонтально или вертикально, а также направление перемещения блоков

  'word-break', // определяет, будут ли появляться разрывы строк там, где в противном случае текст вышел бы за пределы поля содержимого
  'word-wrap',

  'text-emphasis', // применяет к тексту знаки акцента
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',

  'ruby-align', // определяет распределение различных элементов Ruby по базе
  'ruby-position',

  'list-style', // установить все свойства стиля списка одновременно
  'list-style-position',
  'list-style-type',
  'list-style-image'
]

export const cssMath: string[] = [
  'math-depth', // описывает понятие глубины для каждого элемента математической формулы относительно контейнера верхнего уровня этой формулы
  'math-shift', // указывает, должны ли верхние индексы внутри формул MathML подниматься обычным или компактным сдвигом
  'math-style' // указывает, должны ли уравнения MathML отображаться с нормальной или компактной высотой
]

export const cssColor: string[] = [
  'palette', // mixin
  'opacity',
  'color', // mixin
  'color-opacity', // mixin
  'color-scheme', // позволяет элементу указать, в каких цветовых схемах его удобно отображать
  'palette-color', // mixin

  'accent-color', // устанавливает цвет акцента для элементов управления пользовательского интерфейса
  'forced-color-adjust' // позволяет авторам отключать для определенных элементов режим принудительного цвета
]

export const cssBackgrounds: string[] = [
  'background',
  'background-color', // mixin
  'background-opacity', // mixin
  'palette-background', // mixin
  'background-image',
  'gradient', // mixin
  'gradient-opacity', // mixin
  'palette-gradient', // mixin
  'background-repeat',
  'background-attachment',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-clip',
  'background-origin',
  'background-size',

  'mask',
  'mask-type',
  'mask-mode',
  'mask-composite',
  'mask-image',
  'mask-repeat',
  'mask-position',
  'mask-clip',
  'mask-origin',
  'mask-size',

  'image-rendering', // устанавливает алгоритм масштабирования изображения
  'image-resolution', // определяет внутреннее разрешение всех растровых изображений, используемых в элементе или на нем
  'image-orientation',
  'object-fit', // определяет, как содержимое заменяемого элемента должно быть изменено в соответствии с его контейнером
  'object-position' // определяет выравнивание содержимого выбранного замененного элемента внутри поля элемента
]

export const cssBorder: string[] = [
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-start-start-radius',
  'border-start-end-radius',
  'border-end-start-radius',
  'border-end-end-radius',

  'border',
  'border-width',
  'border-style',
  'border-color',
  'border-opacity',
  'palette-border',

  'border-top',
  'border-top-width',
  'border-top-style',
  'border-top-color',
  'border-right',
  'border-right-width',
  'border-right-style',
  'border-right-color',
  'border-bottom',
  'border-bottom-width',
  'border-bottom-style',
  'border-bottom-color',
  'border-left',
  'border-left-width',
  'border-left-style',
  'border-left-color',

  'border-image',
  'border-image-source', // свойство устанавливает исходное изображение
  'border-image-slice', // делит изображение, указанное на области
  'border-image-repeat', // определяет, как края и средняя область исходного изображения корректируются в соответствии с размерами изображения границы элемента
  'border-image-width',
  'border-image-outset', // элемента располагается от его рамки

  'border-block',
  'border-block-width',
  'border-block-color',
  'border-block-style',
  'border-block-start',
  'border-block-start-width',
  'border-block-start-color',
  'border-block-start-style',
  'border-block-end',
  'border-block-end-width',
  'border-block-end-color',
  'border-block-end-style',

  'border-inline',
  'border-inline-width',
  'border-inline-color',
  'border-inline-style',
  'border-inline-end',
  'border-inline-end-width',
  'border-inline-end-color',
  'border-inline-end-style',
  'border-inline-start',
  'border-inline-start-width',
  'border-inline-start-color',
  'border-inline-start-style',

  'mask-border',
  'mask-border-mode',
  'mask-border-source',
  'mask-border-slice',
  'mask-border-repeat',
  'mask-border-width',
  'mask-border-outset',

  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
  'outline-offset'
]

export const cssEffects: string[] = [
  'box-shadow',
  'text-shadow',

  'filter',
  'backdrop-filter',
  'backface-visibility',
  'color-interpolation-filters', // определяет цветовое пространство для операций изображения, выполняемых с помощью эффектов фильтра

  'mix-blend-mode', // определяет, как содержимое элемента должно сочетаться с содержимым родительского элемента и фона элемента
  'background-blend-mode', // определяет, как фоновые изображения элемента должны сочетаться друг с другом
  'isolation' // определяет, должен ли элемент создавать новый контекст стекирования
]

export const cssTransforms: string[] = [
  'transform',
  'transform-box', // определяет поле макета, к которому относятся transform, отдельные свойства преобразования
  'transform-style', // определяет, располагаются ли дочерние элементы элемента в трехмерном пространстве или сглаживаются в плоскости элемента
  'transform-origin',
  'translate-x',
  'translate-y',
  'scale',
  'rotate',

  'clip-path',
  'clip-rule',

  'perspective', // определяет расстояние между плоскостью z=0 и пользователем
  'perspective-origin'
]

export const cssTables: string[] = [
  'table-layout', // устанавливает алгоритм, используемый для расположения <table>ячеек, строк и столбцов
  'empty-cells', // определяет, будут ли появляться границы и фон вокруг <table>ячеек, не имеющих видимого содержимого
  'border-collapse', // определяет, имеют ли ячейки внутри общие или отдельные границы
  'border-spacing', // устанавливает расстояние между границами соседних ячеек в файле

  'caption-side' // помещает содержимое таблицы на указанную сторону
]

export const cssTransitions: string[] = [
  'transition',
  'transition-delay',
  'transition-timing-function',
  'transition-duration',
  'transition-property',

  'animation',
  'animation-name',
  'animation-delay',
  'animation-timing-function',
  'animation-duration',
  'animation-direction', // определяет, должна ли анимация воспроизводиться вперёд, назад или переменно вперёд и назад
  'animation-iteration-count', // определяет сколько раз будет проигрываться анимационный цикл, перед тем как остановиться
  'animation-fill-mode', // определяет, как нужно применять стили к объекту анимации до и после её выполнения
  'animation-play-state', // определяет состояние анимации, паузы или проигрыша
  'animation-timeline', // определяет временную шкалу, которая используется для управления ходом анимации CSS

  'pause', // определения времени паузы до и после элемента
  'pause-before',
  'pause-after',

  'offset', // устанавливает все свойства offset, необходимые для анимации элемента по определенному пути
  'offset-path', // указывает путь, по которому должен следовать элемент
  'offset-anchor', // указывает точку внутри рамки элемента, перемещающегося по пути, который фактически движется по пути
  'offset-rotate', // определяет ориентацию/направление элемента при его расположении вдоль
  'offset-distance', // определяет положение размещаемого элемента
  'offset-position', // определяет начальное положение элемента на пути

  'will-change' // подсказывает браузерам, как ожидается изменение элемента
]

export const cssInteractivity: string[] = [
  'cursor',
  'pointer-events', // устанавливает, при каких обстоятельствах конкретный графический элемент может стать целью событий указателя,
  'user-select',
  'text-select-none',
  'caret-color',

  'resize',

  'touch-action', // определяет, как пользователь сенсорного экрана может манипулировать областью элемента
  'touch-callout' // управляет отображением выноски по умолчанию
]

export const cssScrolls: string[] = [
  'overscroll-behavior', // управлять поведением прокрутки при достижении границы области прокрутки
  'overscroll-behavior-x',
  'overscroll-behavior-y',
  'overscroll-behavior-block',
  'overscroll-behavior-inline',

  'scroll-behavior', // определяет поведение прокрутки для любого элемента на странице

  'scroll-margin', // устанавливает все поля прокрутки элемента одновременно
  'scroll-margin-top',
  'scroll-margin-right',
  'scroll-margin-bottom',
  'scroll-margin-left',
  'scroll-margin-block',
  'scroll-margin-block-start',
  'scroll-margin-block-end',
  'scroll-margin-inline',
  'scroll-margin-inline-start',
  'scroll-margin-inline-end',

  'scroll-padding', // устанавливает отступы прокрутки со всех сторон элемента одновременно
  'scroll-padding-top',
  'scroll-padding-right',
  'scroll-padding-bottom',
  'scroll-padding-left',
  'scroll-padding-block',
  'scroll-padding-block-start',
  'scroll-padding-block-end',
  'scroll-padding-inline',
  'scroll-padding-inline-start',
  'scroll-padding-inline-end',

  'scroll-snap-type', // определяет как строго прокрутка контейнера привязывается к точкам привязки
  'scroll-snap-align', // определяет положение привязки блока как выравнивание его области привязки
  'scroll-snap-stop', // определяет, разрешено ли контейнеру прокрутки «пропускать» возможные позиции привязки

  'scrollbar-gutter', // позволяет авторам резервировать место для полосы прокрутки
  'scrollbar-width', // позволяет автору устанавливать максимальную толщину полос прокрутки элемента при их отображении
  'scrollbar-color' // задает цвет полосы прокрутки и бегунка
]

export const cssSVG: string[] = [
  'fill', // атрибут представления, который определяет цвет, используемые для рисования элемента
  'paint-order', // позволяет вам контролировать порядок, в котором отрисовываются заливка и обводка

  'stroke',
  'stroke-width',
  'stroke-opacity',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',

  'flood-color', // указывает, какой цвет использовать для заливки текущей подобласти примитива фильтра
  'flood-opacity', // указывает значение непрозрачности, которое будет использоваться в текущей подобласти примитива фильтра

  'lighting-color' // определяет цвет источника света для примитивов фильтров
]

export const cssPrint: string[] = [
  'break-inside', // определяет, как должны вести себя разрывы страницы, столбца или региона внутри сгенерированного блока
  'break-before', // определяет, как должны вести себя разрывы страниц, столбцов или областей перед сгенерированным блоком
  'break-after', // определяет, как должны вести себя разрывы страниц, столбцов или областей после созданного поля

  'print-color-adjust' // определяет, что может сделать пользовательский агент для оптимизации внешнего вида элемента на устройстве вывода
]

export const cssOther: string[] = [
  'speak',
  'speak-as', // определяет, как символ счетчика, созданный с использованием @counter-style значения будет представлен в устной форме
  'speak-header',
  'speak-numeral',
  'speak-punctuation',
  'speech-rate', // скорости речи используется для объявления скорости, с которой произносится текст

  'voice-balance',
  'voice-duration',
  'voice-family',
  'voice-pitch',
  'voice-range',
  'voice-rate',
  'voice-stress',
  'voice-volume'
]

export const cssExperimental: string[] = []

export const cssDifferent: string[] = [
  'all',
  'clamp',
  'cue',
  'cue-after',
  'cue-before',
  'globalcompositeoperation',
  'horizon',
  'inherit',
  'initial',
  'initial-letter',
  'initial-letter-align',
  'initial-value',
  'pitch',
  'pitch-range',
  'play-during',
  'rest',
  'rest-after',
  'rest-before',
  'unset',
  'vertically'
]

export const cssDeprecated: string[] = [
  'glyph-orientation-vertical',
  'grid-gap',
  'grid-column-gap',
  'grid-row-gap',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'richness',
  'stress',
  'volume'
]

export const css: string[] = [
  ...cssLayout,
  ...cssFlexbox,
  ...cssColumns,
  ...cssSpacing,
  ...cssSizing,
  ...cssContent,
  ...cssTypography,
  ...cssMath,
  ...cssColor,
  ...cssBackgrounds,
  ...cssBorder,
  ...cssEffects,
  ...cssTransforms,
  ...cssTables,
  ...cssTransitions,
  ...cssInteractivity,
  ...cssScrolls,
  ...cssSVG,
  ...cssPrint,
  ...cssOther,
  ...cssExperimental,
  ...cssDifferent,
  ...cssDeprecated
]
