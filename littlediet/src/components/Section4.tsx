import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function Farm() {
    const handleOrderClick = () => {
        const phoneNumber = "9032221070"; // Replace with your WhatsApp number
        const message = encodeURIComponent("Hello, I am interested in the product. Please provide more details.");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <div className="bg-backgroundColor">
            <div className="flex justify-between pt-10">
                <div className="ml-72 mt-40 mr-10">
                    <div>
                        <img
                            src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/green_leaf.png"
                            alt=""
                        />
                    </div>
                    <div className="font-paytone text-6xl text-textColorblack my-8">
                        From farm to spoon
                    </div>
                    <div>
                        <EffectsCard
                            imgUrl="https://i.postimg.cc/QCMKMDKt/section1.png"
                            title="TRUSTED PARTNERS"
                            titleColor="font-Arial text-textColorgreen"
                            description="All our ingredients come farms who are certified organic. We can track and trace each ingredient back to its roots."
                            descriptionWidth="max-w-xl"
                        />
                        <EffectsCard
                            imgUrl="https://i.postimg.cc/3Nb44q2Z/section2.png"
                            title="TASTE, COLOUR & TEXTURE"
                            titleColor="font-Arial text-textColorgreen"
                            description="We use cold-pressure, not heat, to lock in the nutrients, vitamins, colour and natural flavour."
                            descriptionWidth="max-w-xl"
                        />
                    </div>
                    <div>
                        <Button text="Order Now" onClick={handleOrderClick} />
                    </div>
                </div>
                <div>
                    <img
                        src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_03_home_04.png"
                        alt=""
                        width={1000}
                    />
                </div>
            </div>
        </div>
    );
}
