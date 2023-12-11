import { component$ } from '@builder.io/qwik'
import {
    Form as BaseForm,
    Email,
    Text,
    useForm,
} from 'Forms'

const Form = component$(({
    fields,
    form,
}) => {

    const fieldClass = "bg-red-400 border-blue-800 rounded-xl"

    const {
        name,
        email,
        phone,
    } = fields || {}

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })
    return <BaseForm>
        <Text
            modelBind={model}
            property={name?.key}
            class={fieldClass}
        />
        <Email
            modelBind={model}
            placeholder={email?.placeholder}
            property={email?.key}
            class={fieldClass}
        />
        <Text
            modelBind={model}
            property={phone?.key}
            class={fieldClass}
        />
    </BaseForm>
})

export default Form
