import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function HeroLeft(){
    return (
    <div className="">
        <div className="ml-6 mt-32">
            <div>
                <img src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/green_leaf.png" alt="" width={80}/>
            </div>
            <div className="text-7xl font-paytone max-w-xl">
                Fruits & Veggies for Little Ones
            </div>
            <div>
                <EffectsCard imgUrl="https://i.postimg.cc/xCnbWM0L/hero2.png" title="Great ingredients" titleColor="text-green-500" description="We only use organic ingredients – no nasties! It’s guilt-free goodness!" descriptionWidth="max-w-xs"/>
            </div>
            <div className="mt-12">
                <Button text="Learn more"/>
            </div>
        </div>
    </div>
    )
}