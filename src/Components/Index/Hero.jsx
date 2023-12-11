import { Image } from 'Base'
import { Button } from 'Shared'

const Hero = ({
    description,
    firstCtaLink,
    firstCtaText,
    image,
    secondCtaLink,
    secondCtaText,
    thirdCtaCopy,
    thirdCtaLink,
    thirdCtaText,
    title,
}) => {
    return <div class='text-center flex flex-col items-center pt-16'>
        <h1 class='text-[36px] sm:text-6xl font-medium font-google px-10 leading-[36px] dark:text-white'>{title}</h1>
        <p class='mx-6 text-[16px] sm:text-xl font-base font-google leading-[26px] my-10 text-gray-600 dark:text-gray-200'>{description}</p>
        <div class='space-y-4'>
            <div class='space-y-3 sm:flex sm:items-center sm:space-y-0 sm:gap-x-4 sm:justify-center'>
                <Button
                    href={firstCtaLink}
                    filled
                    class="block md:inline"
                >
                    {firstCtaText}
                </Button>
                <Button
                    href={secondCtaLink}
                    outlined
                    class="block md:inline"
                >
                    {secondCtaText}
                </Button>
            </div>
            <div class='space-y-3 sm:flex sm:items-center sm:space-y-0 sm:gap-x-2 sm:justify-center'>
                <span class='dark:text-white text-gray-600'>{thirdCtaCopy}</span>
                <Button
                    href={thirdCtaLink}
                    class="block md:inline"
                >
                    {thirdCtaText}
                </Button>
            </div>
        </div>
        <Image
            containerClass="w-4/5 shadow-lg dark:shadow-gray-700 dark:shadow-xs rounded-md my-10 sm:mb-16"
            src={image}
            alt={title}
        />
        <span class='w-[75%] h-[1px] bg-gray-300 my-8'/>
    </div>
}

export default Hero
