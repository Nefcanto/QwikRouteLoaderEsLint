import { Image } from 'Base'
import { KeyboardArrowDown } from 'Svg'

const Services = ({
    items,
    title,
}) => {

    return <div class='px-7 sm:px-10 lg:px-20'>
        <div class='flex flex-col items-center justify-center'>
            <h2 class='text-gray-600 dark:text-white'>{title}</h2>
            <KeyboardArrowDown class='w-8 h-8 fill-gray-500 dark:fill-white' />
        </div>
        <div class='mt-10 lg:mt-20'>
            {
                items?.map((item, index) => <div
                    key={item.id}
                    class={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-20 flex flex-col text-start lg:gap-8 lg:mb-40 `}
                >
                    <div class='flex-1'>
                        <h3 class='text-2xl text-custom-heading font-google dark:text-white sm:text-3xl'>{item.title}</h3>
                        <p class='mt-9 mb-9 text-base font-google-text text-custom-text dark:text-gray-300 sm:text-[18px]'>{item.description}</p>
                    </div>
                    <div class='flex-1'>
                        <Image
                            src={item.mobileImage}
                            containerClass='w-[304px] h-auto mx-auto sm:hidden'
                            alt={item.title}
                        />
                        <Image
                            src={item.desktopImage}
                            containerClass='hidden sm:block w-full h-auto mx-auto'
                            alt={item.title}
                        />
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Services
