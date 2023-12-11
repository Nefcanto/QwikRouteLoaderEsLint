import { merge } from 'Base'

const Button = ({
    children,
    class: _class,
    filled,
    href,
    outlined,
}) => {
    return <a
        href={href}
        class={merge(`py-3 px-7 rounded-md hover:border-2 hover:border-blue-400 ${filled ? 'bg-blue-500 text-white' : ''} ${outlined ? 'border text-blue-500 dark:border-blue-500 dark:text-white' : ''} ${!outlined && !filled ? 'text-blue-500' : ''}`, _class)}
    >
        {children}
    </a>
}

export default Button
