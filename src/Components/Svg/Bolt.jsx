const Bolt = ({
    class: _class,
    onClick$: _onClick$,
}) => {
    return <svg
        class={_class}
        onClick$={_onClick$}
        viewBox='0 -960 960 960'
    >
        <path d='m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z' />
    </svg>
}

export default Bolt
