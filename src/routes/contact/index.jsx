import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { getPage } from 'Contents'
import { getForm } from 'Forms'
import { useSeo } from 'Seo'
import {
    Form
} from 'Contact'

const getData = routeLoader$(async (props) => {
    const [
        page,
        form,
    ] = await useAsync([
        getPage('contact', props),
        getForm('contact', props)
    ])
    return {
        ...page,
        ...form,
    }
})

const Index = component$(() => {
    const data = getData().value
    const {
        contactInfo,
        form,
        fields,
    } = data

    return <div>
        <div>{contactInfo.title}</div>
        <hr />
        <div>{form.title}</div>
        <Form
            form={form}
            fields={fields}
        />
    </div>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
