import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            dark: {
                colors: {
                    primary: '#00BFA5',
                    secondary: '#263238',
                    background: '#37474F',
                },
            },
        },
    },
})
