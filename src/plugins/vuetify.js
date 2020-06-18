import Vue from 'vue'
import Vuetify, {
    VApp,
    VAppBar,
    VCard,
    VBtn,
    VRow,
    VCol,
    VDivider,
    VContainer,
    VForm,
    VInput,
    VTextField,
    VTooltip,
    VAvatar,
    VChip,
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    components: {
        VApp,
        VAppBar,
        VCard,
        VBtn,
        VRow,
        VCol,
        VDivider,
        VContainer,
        VForm,
        VInput,
        VTextField,
        VTooltip,
        VAvatar,
        VChip,
    },
    directives: {
        Ripple,
    },
})

export default new Vuetify({
    theme: {
        dark: false,
    },
})
