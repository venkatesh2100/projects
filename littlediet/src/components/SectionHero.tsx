
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";


export function SectionHero(){
    return (
    <div className="h-auto w-full bg-backgroundColor">
        <div className="flex-row md:flex justify-between">
            <HeroLeft/>
            <HeroRight/>
        </div>
    </div>
    )
}


// font-family: "Paytone One", Arial, Helvetica, sans-serif;