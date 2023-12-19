<script setup lang="ts">
import { ref, shallowRef, ShallowRef } from 'vue'
import { random } from '../../functions/number.ts'

import M3Mask from '../../m3/Mask/M3Mask.vue'

import {
  type MaskEventData,
  type MaskSpecialList
} from '../../constructors/Mask/typesBasic.ts'
import { GeoPhone } from '../../classes/GeoPhone.ts'

const value = ref(1000)
const valueDate = ref('1987-09-21')
const basicValue = ref('')
const basicFull = ref(false)
const groupBasicValue = ref('')
const groupBasicFull = ref(false)
const rubberValue = ref('')
const rubberFull = ref(false)
const rubber2Value = ref('')
const rubber2Full = ref(false)
const dateValue = ref('')
const dateValueUS = ref('')
const dateFull = ref(false)
const dateError = ref('')
const numberValue = ref('')
const numberFull = ref(false)
const fractionValue = ref('')
const fractionFull = ref(false)
const fractionMaxValue = ref('')
const fractionMaxFull = ref(false)
const fractionMaxError = ref('')
const currencyValue = ref('')
const currencyFull = ref(false)
const visible = ref(true)

const codePhoneMask = ref<string | string[]>('+******')
const codePhoneValue = ref('')
const codePhoneFull = ref(false)

const special1: ShallowRef<MaskSpecialList> = shallowRef({
  '@': {
    match: /[a-zA-Z]+/,
    view: 'A'
  },
  '*': {
    view: '0'
  }
})
const special2: ShallowRef<MaskSpecialList> = shallowRef({
  '*': {
    rubber: true,
    transitionChar: '.'
  },
  '#': {
    defaultValue: '0',
    rubber: true
  }
})

const onValue = () => value.value++
const onValueDate = () => {
  valueDate.value = `1987-0${random(1, 9)}-21`
}

const onInputBasic = (_: Event, value: MaskEventData) => {
  basicValue.value = value.value
  basicFull.value = Boolean(value.required)
}
const onInputGroupBasic = (_: Event, value: MaskEventData) => {
  groupBasicValue.value = value.value
  groupBasicFull.value = Boolean(value.required)
}
const onInputRubber = (_: Event, value: MaskEventData) => {
  rubberValue.value = value.value
  rubberFull.value = Boolean(value.required)
}
const onInputRubber2 = (_: Event, value: MaskEventData) => {
  rubber2Value.value = value.value
  rubber2Full.value = Boolean(value.required)
}
const onInputDate = (_: Event, value: MaskEventData) => {
  dateValue.value = value.value
  dateFull.value = Boolean(value.required)
  dateError.value = value.validationMessage ?? ''
}
const onInputDateUS = (_: Event, value: MaskEventData) => {
  dateValueUS.value = value.value
}
const onInputNumber = (_: Event, value: MaskEventData) => {
  numberValue.value = value.value
  numberFull.value = Boolean(value.required)
}
const onInputFraction = (_: Event, value: MaskEventData) => {
  fractionValue.value = value.value
  fractionFull.value = Boolean(value.required)
}
const onInputFractionMax = (_: Event, value: MaskEventData) => {
  fractionMaxValue.value = value.value
  fractionMaxFull.value = Boolean(value.required)
  fractionMaxError.value = value.validationMessage ?? ''
}
const onInputCurrency = (_: Event, value: MaskEventData) => {
  currencyValue.value = value.value
  currencyFull.value = Boolean(value.required)
}
const onVisible = () => {
  visible.value = !visible.value
}

const onCodePhoneMask = (_: Event, value: MaskEventData) => {
  const number = value.value
  const phone = GeoPhone.getByPhone(number)

  if (phone?.item) {
    if (
      phone.item?.maskFull &&
      phone.item?.maskFull?.length > 0
    ) {
      codePhoneMask.value = phone.item.maskFull
    }
  } else {
    codePhoneMask.value = '+******'
  }

  if (phone.phone?.match(/^0/)) {
    codePhoneValue.value = `${phone.item?.info?.phone}${phone.phone?.replace(/^0/, '')}`
  } else {
    codePhoneValue.value = number
  }

  codePhoneFull.value = Boolean(value.required)
}
</script>

<template>
  <div>
    <div>MASK</div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">none</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">basic</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.****.TEST.***"
            name="test"
            @input="onInputBasic"
            @change="onInputBasic"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ basicValue }}<br />
          full: {{ basicFull }}
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">right</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.****.TEST.***"
            name="test"
            right
          />
        </div>
        <div class="demo-mask__item__description">Проверка выравнивания справа</div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">3 mask</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            :mask="['mask1: ***.**', 'mask2 (6): ***.***', 'mask3 (end): **.**.****']"
            name="test"
          />
        </div>
        <div class="demo-mask__item__description">Проверка изменения маски в зависимости от длины вводимых данных</div>
      </div>
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title" @click="onValue">Заполненные значения</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="******"
            name="test"
            :value="value"
          />
        </div>
        <div class="demo-mask__item__description" @click="onValue">
          Проверка изменения маски в зависимости от длины вводимых данных.
          <b style="cursor: pointer;">Нажмите на этот текст для изменения значения</b>.
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">group</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="**.@@..***"
            :special="special1"
            name="test"
            @input="onInputGroupBasic"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ groupBasicValue }}<br />
          full: {{ groupBasicFull }}
        </div>
        <div class="demo-mask__item__description">
          Проверка на воду маска с разными типами символов. Если 0 - это для чисел, а А - это для букв.
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">Резиновый тип</div>
        <div class="demo-mask__item__value">
          <m3-mask
            :special="special2"
            class="demo-mask__item__value__mask"
            mask="*"
            name="test"
            view="0"
            @input="onInputRubber"
            @change="onInputRubber"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ rubberValue }}<br />
          full: {{ rubberFull }}
        </div>
        <div class="demo-mask__item__description">
          Проверка работы резиновой маски. Это те маски, длина которых увеличивается по мере заполнения.<br />
          Здесь должно работать как простое поле для ввода числа.
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">Резиновый тип (2 group)</div>
        <div class="demo-mask__item__value">
          <m3-mask
            :special="special2"
            class="demo-mask__item__value__mask"
            mask="*.#"
            name="test"
            view="0"
            @input="onInputRubber2"
            @change="onInputRubber2"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ rubber2Value }}<br />
          full: {{ rubber2Full }}
        </div>
        <div class="demo-mask__item__description">
          Проверка работы резиновой маски с двумя группами.
          Для перехода на другую группу надо нажать (.).<br />
          Здесь должно работать как поле для ввода числа с дробной частью.
        </div>
      </div>
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title" @click="onVisible">Скрыть незаполненную часть</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            mask="+84 (***) ***-**-**"
            name="test"
            :visible="visible"
          />
        </div>
        <div class="demo-mask__item__description" @click="onVisible">
          Проверка на скрытие незаполненной части маски.
          <b style="cursor: pointer;">Нажмите на этот текст для изменения режима скрытия</b>.
        </div>
      </div>
    </div>
    <div class="demo-mask__title">Тип дата</div>
    <div class="demo-mask__description">
      Встроенные маски для работы с датами, внешний вид зависит от языка сайта.<br />
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">datetime</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="datetime"
            @input="onInputDate"
            @change="onInputDate"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ dateValue }}<br />
          full: {{ dateFull }}<br />
          error: {{ dateError }}
        </div>
        <div class="demo-mask__item__description">
          Должен высвечивать красным тот час, у которого ошибка, и выводить сообщение об ошибке.
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">date</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="date"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">time</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="time"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title" @click="onValueDate">Заполненные значения</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="date"
            :value="valueDate"
          />
        </div>
        <div class="demo-mask__item__description" @click="onValueDate">
          Проверка изменения маски в зависимости от длины вводимых данных.
          <b style="cursor: pointer;">Нажмите на этот текст для изменения значения</b>.
        </div>
      </div>
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">en-US</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="datetime"
            language="en-US"
            @input="onInputDateUS"
            @change="onInputDateUS"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ dateValueUS }}
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">ko</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="datetime"
            language="ko"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">vi</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="datetime"
            language="vi"
          />
        </div>
      </div>
    </div>
    <div class="demo-mask__title">Тип числа и валюты</div>
    <div class="demo-mask__description">
      Встроенные маски для ввода чисел и валюты.
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">number</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="number"
            @input="onInputNumber"
            @change="onInputNumber"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ numberValue }}<br />
          full: {{ numberFull }}
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">number + fraction</div>
        <div class="demo-mask__item__value">
          <m3-mask
            :fraction="true"
            class="demo-mask__item__value__mask"
            type="number"
            @change="onInputFraction"
            @input="onInputFraction"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ fractionValue }}<br />
          full: {{ fractionFull }}
        </div>
        <div class="demo-mask__item__description">
          Проверка числа с остатками.
          Для перехода в группу остатков должно срабатывать при нажатии на [.] или [,],
          если символ разделителя является [,].
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">maxLength: 6</div>
        <div class="demo-mask__item__value">
          <m3-mask
            :fraction="true"
            class="demo-mask__item__value__mask"
            type="number"
            :special="{n:{rubber:true,maxLength:6}}"
          />
        </div>
        <div class="demo-mask__item__description">
          Проверка числа с ограничением в 6 символов.
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">max: 500 000</div>
        <div class="demo-mask__item__value">
          <m3-mask
            :fraction="true"
            class="demo-mask__item__value__mask"
            type="number"
            :special="{n:{rubber:true,maxLength:6,pattern:{type:'number', max:'500000'}}}"
            :check="{type:'number', max:'500000',step:'0.12'}"
            @input="onInputFractionMax"
            @change="onInputFractionMax"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ fractionMaxValue }}<br />
          full: {{ fractionMaxFull }}<br />
          error: {{ fractionMaxError }}
        </div>
        <div class="demo-mask__item__description">
          Проверка числа с максимальным значением 500 000. Если ввести большее, выделяется красным.
        </div>
      </div>
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">currency</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="currency"
            currency="RUB"
            @change="onInputCurrency"
            @input="onInputCurrency"
          />
        </div>
        <div class="demo-mask__item__description">
          value: {{ currencyValue }}<br />
          full: {{ currencyFull }}
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">en-US</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="currency"
            currency="USD"
            language="en-US"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">ko</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="currency"
            currency="USD"
            language="ko"
          />
        </div>
      </div>
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">vi</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="currency"
            currency="USD"
            language="vi"
          />
        </div>
      </div>
    </div>
    <div class="demo-mask__title">Дополнительная проверка</div>
    <div class="demo-mask__description">
      Проверка на удобство внедрения маски.<br />
    </div>
    <div class="demo-mask">
      <div class="demo-mask__item">
        <div class="demo-mask__item__title">GeoPhone</div>
        <div class="demo-mask__item__value">
          <m3-mask
            class="demo-mask__item__value__mask"
            type="text"
            :mask="codePhoneMask"
            :value="codePhoneValue"
            @input="onCodePhoneMask"
          />
        </div>
        <div class="demo-mask__item__description">
          mask: {{ codePhoneMask }}<br />
          value: {{ codePhoneValue }}<br />
          full: {{ codePhoneFull }}
        </div>
        <div class="demo-mask__item__description">
          Проверка динамического обновления маски, основанного на вводе номера страны.<br />
          Для получения маски используем класс GeoPhone.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/color";
@import "../../styles/font";

.demo-mask {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;

  &__item {
    &__title {
      position: relative;
      z-index: 100;

      padding: 8px 0;

      @include truncate;
    }

    &__description {
      padding-top: 8px;

      width: 256px;

      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, .72);
    }

    &__value {
      display: flex;
      position: relative;

      width: 256px;

      &__mask {
        padding: 8px 16px;
        width: 100%;

        border: 1px solid rgba(0, 0, 0, .12);
      }
    }

    &--color {
      @include color(#0000ff);
    }
  }

  &__title {
    padding: 8px 16px 0;
  }

  &__description {
    padding: 0 16px 0;

    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, .72);
  }
}
</style>
