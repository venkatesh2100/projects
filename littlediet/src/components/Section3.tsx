import { Button } from "./Button";

export function SectionProducts() {


    const handleClick = () => {
        const phoneNumber = "9032221070";
        const message = encodeURIComponent(
          "Hello, I am interested in the product. Please provide more details."
        );
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <div className="bg-backgroundColor pt-32">
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_02_home_04.png"
                        alt=""
                        className="w-full h-auto"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-20 lg:ml-20 lg:mt-10 lg:mr-60 flex flex-col text-start items-start lg:items-start">
                    {/* Green Leaf Icon */}
                    <div>
                        <img
                            src="/public/green_leaf.png"
                            alt="green leaf"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Heading */}
                    <div className="font-paytone text-start text-3xl lg:text-6xl max-w-4xl text-textColorblack my-8 lg:text-left">
                        Making mealtimes easy since 2017
                    </div>

                    {/* Subheading and Description */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-textColorgreen text-start font-medium mb-4 lg:mb-6">
                            ORGANIC BABY FOOD
                        </h2>
                        <div className="max-w-xl text-start mb-4 lg:mb-6">
                            We’ve researched hundreds of great-tasting ingredients to find the ones
                            that really pack a nutritional punch – so you don’t have to. We only use
                            organic ingredients – no nasties. It’s guilt-free goodness.
                        </div>
                    </div>

                    {/* Button */}
                    <div className="items-start">
                        <Button text="Our Products" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}
