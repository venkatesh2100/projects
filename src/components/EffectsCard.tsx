

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
                    <div className={`text-2xl ${titleColor}`}>
                        {title}
                    </div>
                    <div className={`${descriptionWidth} pt-2`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </div>
}


// for hero tag max-w-xs
// for hero images Links
// https://i.postimg.cc/Jhbk6PW1/hero1.png
// https://i.postimg.cc/xCnbWM0L/hero2.png
// https://i.postimg.cc/ydjSBxdt/hero3.png


// section4 images
// https://i.postimg.cc/QCMKMDKt/section1.png
// https://i.postimg.cc/3Nb44q2Z/section2.png