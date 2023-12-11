import {
    component$,
    Slot,
    useSignal,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { getSystemConfig } from 'Configuration'
import { getGlobalization } from 'Globalization'
import { useLayoutSeo } from 'Seo'
import { getLayout } from 'Contents'
import { getMenu } from 'Navigation'
import {
    Header,
    SideNav,
} from 'Layout'

const getData = routeLoader$(async props => {
    const [
        globalization,
        systemConfig,
        layout,
        menu
    ] = await useAsync([
        getGlobalization(props),
        getSystemConfig(props),
        getLayout('main', props),
        getMenu(props)
    ])
    return {
        ...globalization,
        ...systemConfig,
        ...layout,
        ...menu
    }
})

const Layout = component$(() => {

    const navIsOpen = useSignal(false)

    const data = getData().value
    const {
        headerContact,
        headerLogo,
        menuItems,
        miniAbout,
        mobileNavParts,
        quickAccess,
        relatedLinks,
        team,
    } = data

    return <>
        <div class='dark:bg-black'>
            <SideNav
                navIsOpen={navIsOpen}
                {...data}
            />
            <Header
                navIsOpen={navIsOpen}
            />
            <Slot />
        </div>
    </>
})

export default Layout

const head = ({ resolveValue }) => {
    return useLayoutSeo(getData, resolveValue)
}

export { head }
