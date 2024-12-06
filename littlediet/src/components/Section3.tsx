import { Button } from "./Button";
import { handleOrderClick } from "../whatsapp/redirectWhatsapp";

export function SectionProducts() {

    return (
        <div className="bg-backgroundColor pt-32">
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        // src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_02_home_04.png"
                        src="/products_resize.png"
                        alt=""
                        className="w-full h-auto"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6  lg:p-20 lg:ml-20 lg:mt-10 lg:mr-6 0 flex flex-col text-start items-start lg:items-start">
                    {/* Green Leaf Icon */}
                    <div>
                        <img
                            src="/green_leaf.png"
                            alt="green leaf"
                            className="w-12 animate-bounce h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Heading */}
                    <div className="font-paytone text-start text-3xl lg:text-6xl max-w-4xl text-textColorblack my-8 lg:text-left">
                        Nourishing Your Baby's Future
                    </div>

                    {/* Subheading and Description */}
                    <div className="text-center lg:text-left">
                        {/* <h2 className="text-textColorgreen text-start font-medium mb-4 lg:mb-6">
                        Nourishing Your Baby's Future
                        </h2> */}
                        <div className="max-w-xl  text-2xl text-start mb-4 lg:mb-6">
                        At Littlediet, we understand that your baby's nutrition is of utmost importance. That's why we prepare UGGU that is not only delicious but also packed with nutrients.
                        </div>
                    </div>

                    {/* Button */}
                    <div className="items-start">
                        <Button text="Order Now" onClick={handleOrderClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}
