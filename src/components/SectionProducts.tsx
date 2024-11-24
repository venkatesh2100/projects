import { Button } from "./Button";


export function SectionProducts(){
    return <div className="">
        <div>
            <div>
                <img src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_02_home_04.png" alt="" />
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="font-paytone">
                    Making mealtimes easy since 2017
                </div>
                <div>
                    <h2>
                        ORGANIC BABY FOOD
                    </h2>
                    <div>
                        We’ve researched hundreds of great-tasting ingredients to find the ones that really pack a nutritional punch – so you don’t have to. We only use organic ingredients – no nasties. It’s guilt-free goodness.
                    </div>
                </div>
                <div>
                    <Button text="Our Products" />
                </div>
            </div>
        </div>
    </div>
}