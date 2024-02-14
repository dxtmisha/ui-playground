import { b as t, c as n } from "./useEnabled-OgpLYIBQ.js";
const e = {
  type: "text",
  autocomplete: "off"
}, o = {
  ...t,
  ...n,
  // Values
  name: String,
  value: String,
  modelValue: String,
  detail: Object,
  // Input
  type: {
    type: String,
    default: e.type
  },
  inputmode: String,
  spellcheck: Boolean,
  required: Boolean,
  pattern: String,
  match: [String, HTMLInputElement, Object],
  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],
  minlength: [String, Number],
  maxlength: [String, Number],
  autofocus: Boolean,
  autocomplete: {
    type: String,
    default: e.autocomplete
  },
  input: Object,
  // Messages & Validation
  placeholder: String,
  helperMessage: String,
  validationMessage: String,
  validationCode: [String, Object],
  // On
  on: Object,
  "onUpdate:value": Function,
  "onUpdate:modelValue": Function
}, r = {
  ...o
};
export {
  r as a,
  o as p
};
