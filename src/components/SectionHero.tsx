import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function SectionHero() {
  return (
    <div className="bg-backgroundColor">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Section */}
        <div className="lg:ml-16 lg:mt-12 text-center lg:text-left">
          <div>
            <img
              src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/green_leaf.png"
              alt="Green Leaf"
              className="mx-auto lg:mx-0"
              width={80}
            />
          </div>
          <div className="text-4xl sm:text-5xl lg:text-7xl font-paytone max-w-sm mt-6 ml-6 text-start">
            Fruits & Veggies for Little Ones
          </div>
          <div className="mt-6">
            <EffectsCard
              imgUrl="https://i.postimg.cc/xCnbWM0L/hero2.png"
              title="Great ingredients"
              titleColor="text-green-500"
              description="We only use organic ingredients – no nasties! It’s guilt-free goodness!"
              descriptionWidth="max-w-xs"
            />
          </div>
          <div className="mt-8">
            <Button text="Learn more" />
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/hero_home_04.png"
            alt="Hero Image"
            className="max-w-full sm:w-3/4 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

// font-family: "Paytone One", Arial, Helvetica, sans-serif;
