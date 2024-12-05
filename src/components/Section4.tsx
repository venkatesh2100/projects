import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";
import { handleOrderClick } from "../whatsapp/redirectWhatsapp";

export function Farm() {
  return (
    <div className="bg-backgroundColor">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start pt-10">
        {/* Left Section */}
        <div className="items-start px-6 lg:px-20 mt-10 lg:mt-40 flex flex-col lg:items-start lg:w-1/2">
          {/* Green Leaf Icon */}
          <div>
            <img
              src="/green_leaf.png"
              alt="Green Leaf"
              className="w-12 h-12 lg:w-auto lg:h-auto"
            />
          </div>

          {/* Heading */}
          <div className="font-paytone items-start text-5xl lg:text-6xl text-textColorblack my-4 lg:text-left">
            Nurturing Your Baby's Growth and Development
          </div>

          {/* Effects Cards */}
          <div className="space-y-6">
            <EffectsCard
              imgUrl="/trusted img.png"
              title="HEALTHY DIGESTION"
              titleColor="font-Arial text-textColorgreen"
              description="We use only the finest, easily digestible ingredients to ensure that your baby's delicate digestive system is well cared for."
              descriptionWidth="max-w-xl"
            />
            <EffectsCard
              imgUrl="/water drops.png"
              title="GIVING YOUR BABY THE BEST START"
              titleColor="font-Arial text-textColorgreen"
              description="Our UGGU is carefully crafted to support your baby's development, every step of the way."
              descriptionWidth="max-w-xl"
            />
          </div>

          {/* Button */}
          <div className="mt-6 items-start">
            <Button text="Order Now" onClick={handleOrderClick}/>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-40">
          <img
            // src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_03_home_04.png"
            src="/child playing.png"
            alt="Farm Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
