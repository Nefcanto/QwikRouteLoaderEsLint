import baseConfig from './TailwindBase.js'

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    heading: '#202124',
                    text: '#5f6368',
                }
            },
            fontFamily: {
                google: ["Google Sans"],
                "google-text": ["Google Sans Text"],
            },
        },
    },
}

export default config
