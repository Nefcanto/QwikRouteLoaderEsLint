import {
    component$,
    useStyles$,
} from '@builder.io/qwik'
import Styles from '../../Styles/Styles.css?inline'

const Head = component$(() => {

    useStyles$(Styles)

    return <>
        {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Material+Symbols+Outlined|Roboto:100,300,400,500,700|Google+Sans+Text:400,500,700,400i,500i,700i|Google+Sans:400,500|Product+Sans:400&amp;lang=en&amp;display=swap"
            nonce="UQeQ4GArOEVhAgmq-2hpTA"
        /> */}
    </>
})

export default Head
