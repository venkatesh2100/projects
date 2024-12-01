

interface card{
    imgUrl: string,
    title: string,
    titleColor: string,
    description: string,
    descriptionWidth: string
}

export function EffectsCard({imgUrl, title, titleColor, description, descriptionWidth}: card){
    return <div>
        <div className="mt-10 my-6">
            <div className="flex">
                <div className="flex items-center justify-center p-4">
                    <img src={imgUrl} alt="" width={70}/>
                </div>
                <hr className="h-24 w-[1px] bg-slate-950" />
                <div className="px-6 py-1">
                    <div className={`text-2xl text-start ${titleColor}`}>
                        {title}
                    </div>
                    <div className={`${descriptionWidth} text-start pt-2`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
