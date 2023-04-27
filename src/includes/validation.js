import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
import { required, min, max, alpha_spaces as alphaSpaces, email, min_value as minVal, max_value as maxVal } from '@vee-validate/rules'

export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('min', min)
        defineRule('min_value', minVal)
        defineRule('max_value', maxVal)
        defineRule('max', max)
        defineRule('email', email)
        defineRule('alpha_spaces', alphaSpaces)
    }
}