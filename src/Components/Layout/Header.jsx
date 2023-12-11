import { Image } from 'Base'
import { Menu } from 'Svg'

const Header = ({ navIsOpen }) => {

    return <div class='px-6 h-16 flex items-center justify-start border-b border-gray-300'>
        <div class='flex gap-x-6'>
            <Menu
                class='w-6 aspect-square fill-gray-800 dark:fill-gray-100'
                onClick$={() => navIsOpen.value = !navIsOpen.value}
            />
            <Image
                containerClass='w-40 h-10 bg-red-200 overflow-hidden'
                imageClass='object-contain'
                src='https://picsum.photos'
            />
        </div>
    </div>
}

export default Header
