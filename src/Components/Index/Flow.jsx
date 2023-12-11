const Flow = ({
    items,
    link,
    title,
}) => {
    return <div class='px-8'>
        <div class='text-center'>
            {
                items?.map((item, index) => <div class='relative flex'>
                    <div class={`w-full aspect-[2/1] 
                    ${index % 2 === 0 && `before:absolute before:top-0 before:w-[calc(50%-10px)] before:h-full before:border-blue-200 before:rounded-s-full before:start-[10px] before:border-s-[10px] before:border-b-[10px] before:border-t-[10px]`} 
                    ${index % 2 === 1 && `before:absolute before:top-0 before:w-[calc(50%-10px)] before:h-full before:border-green-200 before:rounded-e-full before:end-[10px] before:border-e-[10px] before:border-b-[10px] before:border-t-[10px]`} 
                    ${index % 2 === 0 && `after:absolute after:-top-[10px] after:w-[50%] after:h-[calc(100%+20px)] after:rounded-s-full after:start-0 after:border-s-[10px] after:border-blue-200 after:border-b-[10px] after:border-t-[10px]`} 
                    ${index % 2 === 1 && `after:absolute after:-top-[10px] after:w-[50%] after:h-[calc(100%+20px)] after:border-green-200 after:rounded-e-full after:end-0 after:border-e-[10px] after:border-b-[10px] after:border-t-[10px]`}`}>
                    </div>
                    <div class={`absolute w-full px-10 top-0 bottom-0 my-auto justify-center items-center py-4 gap-x-2 flex ${index % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <span class='text-md text-gray-800 dark:text-gray-100'>
                            {item.title}
                        </span>
                        <div
                            dangerouslySetInnerHTML={item.svg}
                            class='[&>svg]:dark:fill-white [&>svg]:h-8 [&>svg]:w-8'
                        />
                    </div>
                </div>
                )
            }
        </div>
    </div>
}

export default Flow
