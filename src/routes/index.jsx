import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { getPage } from 'Contents'
import { useSeo } from 'Seo'
import {
    Cta,
    Flow,
    Hero,
    Services,
} from 'Index'

const getData = routeLoader$(async props => {
    const page = await getPage('home', props)
    return page
})

const Index = component$(() => {

    const data = getData().value
    const {
        cta,
        flow,
        hero,
        services,
    } = data

    return <>
        <Hero {...hero} />
        <Services {...services} />
        <Flow {...flow} />
        <Cta {...cta} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
