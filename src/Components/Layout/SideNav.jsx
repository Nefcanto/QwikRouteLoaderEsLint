import { Image } from 'Base'
import { Button } from 'Shared'

const SideNav = ({
    menuItems,
    mobileNavParts,
    navIsOpen,
}) => {

    const {
        firstCtaLink,
        firstCtaText,
        secondCtaLink,
        secondCtaText,
        thirdCtaLink,
        thirdCtaText,
    } = mobileNavParts

    return <>
        <div class={`${navIsOpen.value ? 'visible w-full translate-x-0' : 'invisible translate-x-[100%]'} backdrop-brightness-50 backdrop-blur-[1px] transition-all duration-500 absolute z-40 inset-0 lg:hidden`} onClick$={() => navIsOpen.value = !navIsOpen.value} />
        <nav class={`${navIsOpen.value ? 'visible translate-x-0' : 'invisible translate-x-[-100%]'} transition-all duration-500 w-4/5 start-0 max-w-[400px] top-0 absolute bg-white dark:bg-zinc-950 z-50 shadow-xl h-screen flex flex-col justify-between`}>
            <div>
                <div class='px-6 h-16 flex items-center justify-start border-b border-gray-300'>
                    <div class='flex gap-x-6'>
                        <Image
                            containerClass='w-40 h-10 bg-red-200 overflow-hidden'
                            imageClass='object-contain'
                            src='https://picsum.photos'
                        />
                    </div>
                </div>
                <ul class='py-4 pe-4'>
                    {
                        menuItems && <>
                            {
                                menuItems.map(menu => <li class='py-1'>
                                    <a
                                        class='block dark:text-white hover:bg-gray-100 hover:bg-zinc-900 py-3 px-4 rounded-e-full'

                                    >
                                        {menu.title}
                                    </a>
                                </li>
                                )

                            }
                        </>
                    }
                </ul>
            </div>
            <div class='border-t-2 border-gray-300 px-2 py-2'>
                <Button
                    href={firstCtaLink}
                    filled
                    class="block text-center"
                >
                    {firstCtaText}
                </Button>
                <Button
                    href={secondCtaLink}
                    outlined
                    class="block text-center my-2"
                >
                    {secondCtaText}
                </Button>
                <Button
                    href={thirdCtaLink}
                    class="block text-center"
                >
                    {thirdCtaText}
                </Button>
            </div>
        </nav>
    </>
}

export default SideNav
