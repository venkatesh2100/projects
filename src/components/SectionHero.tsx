import { Button } from "./Button";
import { Effects } from "./Effects";


export function SectionHero(){
    return (
    <div className="h-auto bg-backgroundColor">
        <div className="flex justify-between">
            <div className="ml-96 mt-32">
                <div>
                    <img src="../assets/green_leaf.png" alt="" width={5}/>
                </div>
                <div className="text-7xl font-paytone max-w-xl">
                    Fruits & Veggies for Little Ones
                </div>
                <div>
                    <Effects/>
                </div>
                <div className="mt-12">
                    <Button text="Learn more"/>
                </div>
            </div>
            <div className="text-3xl">
                <div>
                    <img src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/hero_home_04.png" alt="hero image  " />
                </div>
            </div>
        </div>
    </div>
    )
}

// font-family: "Paytone One", Arial, Helvetica, sans-serif;