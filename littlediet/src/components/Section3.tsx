import { Button } from "./Button";


export function SectionProducts(){
    return <div className="bg-backgroundColor">
        <div className="flex">
            <div>
                <img src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_02_home_04.png" alt="" width={1400} />
            </div>
            <div className="ml-20 mt-40 mr-60">
                <div>
                    <img src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/green_leaf.png" alt="" />
                </div>
                <div className="font-paytone text-6xl max-w-4xl text-textColorblack my-8">
                    Making mealtimes easy since 2017
                </div>
                <div>
                    <h2 className="text-textColorgreen font-medium mb-6">
                        ORGANIC BABY FOOD
                    </h2>
                    <div className="max-w-xl mb-6">
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