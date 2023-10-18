import type { ExtractPropTypes, PropType } from 'vue'
import { commonProps, isObject, isString } from '../_utils'
import type { ConfirmTextType, InputFormatTrigger, InputMode, InputType } from './type'

export const inputProps = {
  ...commonProps,
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  inputAlign: {
    type: String,
    default: 'left',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  maxLength: {
    type: [String, Number],
    default: 140,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  clearSize: {
    type: [String, Number],
    default: '14',
  },
  border: {
    type: Boolean,
    default: true,
  },
  formatTrigger: {
    type: String as PropType<InputFormatTrigger>,
    default: 'onChange',
  },
  formatter: {
    type: Function as PropType<(value: string) => string>,
    default: null,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  confirmType: {
    type: String as PropType<ConfirmTextType>,
    default: 'done',
  },
  adjustPosition: {
    type: Boolean,
    default: true,
  },
  alwaysSystem: {
    type: Boolean,
    default: false,
  },
  showClearIcon: {
    type: Boolean,
    default: false,
  },
  inputMode: {
    type: String as PropType<InputMode>,
    default: 'text',
  },
}

export const inputEmits = {
  'click': (evt: any) => isObject(evt),
  'clickInput': (evt: any) => isObject(evt),
  'blur': (evt: any) => isObject(evt),
  'focus': (evt: any) => isObject(evt),
  'clear': (_val: string) => isString(_val),
  'keypress': () => true,
  'confirm': (_val: string, _val2: any) => true,
  'update:modelValue': (_val1?: string, _val2?: any) => true,
}

export type InputEmits = typeof inputEmits

export type InputProps = ExtractPropTypes<typeof inputProps>
