const Menu = ({
    class: _class,
    onClick$: _onClick$
}) => {
    return <svg
        class={_class}
        onClick$={_onClick$}
        viewBox='0 -960 960 960'
    >
        <path d='M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z' />
    </svg>
}

export default Menu
