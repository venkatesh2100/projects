import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";
// const handleOrderClick = () => {
//     const phoneNumber = "9032221070"; // Replace with your WhatsApp number
//     const message = encodeURIComponent("Hello, I am interested in the product. Please provide more details.");
//     window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
// };

export function Farm() {
  return (
    <div className="bg-backgroundColor">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start pt-10">
        {/* Left Section */}
        <div className="items-start px-6 lg:px-20 mt-10 lg:mt-40 flex flex-col lg:items-start lg:w-1/2">
          {/* Green Leaf Icon */}
          <div>
            <img
              src="/public/green_leaf.png"
              alt="Green Leaf"
              className="w-12 h-12 lg:w-auto lg:h-auto"
            />
          </div>

          {/* Heading */}
          <div className="font-paytone items-start text-5xl lg:text-6xl text-textColorblack my-4 lg:text-left">
            From farm to spoon
          </div>

          {/* Effects Cards */}
          <div className="space-y-6">
            <EffectsCard
              imgUrl="/public/trusted img.png"
              title="TRUSTED PARTNERS"
              titleColor="font-Arial text-textColorgreen"
              description="All our ingredients come farms who are certified organic. We can track and trace each ingredient back to its roots."
              descriptionWidth="max-w-xl"
            />
            <EffectsCard
              imgUrl="/public/water drops.png"
              title="TASTE, COLOUR & TEXTURE"
              titleColor="font-Arial text-textColorgreen"
              description="We use cold-pressure, not heat, to lock in the nutrients, vitamins, colour and natural flavour."
              descriptionWidth="max-w-xl"
            />
          </div>

          {/* Button */}
          <div className="mt-6 items-start">
            <Button text="Order Now" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_03_home_04.png"
            alt="Farm Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
