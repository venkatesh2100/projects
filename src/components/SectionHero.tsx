import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function SectionHero() {
  return (
    <div data-aos="fade-in" className="pt-16 bg-backgroundColor">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Content (2/3) */}
        <div className="lg:col-span-2 text-center lg:text-left lg:pl-48 lg:mt-12">
          <div>
            <img
              src="/public/green_leaf.png"
              alt="Green Leaf"
              className="mx-6 animate-bounce"
              width={80}
            />
          </div>
          <div className="text-4xl sm:text-5xl lg:text-7xl font-paytone max-w-3xl mt-6 ml-6 text-start">
            Freshly prepared UGGU for Little Ones
          </div>
          <div className="mt-6">
            <EffectsCard
              imgUrl="/public/leafimg.png"
              title="Great ingredients"
              titleColor="text-green-500"
              description="We only use organic ingredients – no nasties!"
              descriptionWidth="max-w-xs"
            />
          </div>
          <div className="ml-8 text-start">
            <Button text="Learn more" />
          </div>
        </div>

        {/* Right Section - Image (1/3) */}
        <div className="lg:col-span-1 items-center mt-8 lg:mt-10 shadow-sm flex justify-center lg:justify-end">
          <img
            src="/public/homepage.png"
            alt="Hero Image"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
}
