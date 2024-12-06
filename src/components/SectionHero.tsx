import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function SectionHero() {
  return (
    <div
      className="h-screen bg-backgroundColor bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(/littlediet_baby_homepage_resize.jpg)",
      }}
    >
      {/* Main Content */}
      <div className="flex h-screen mt-200 w-full items-center justify-start">
        <div className="text-center text-white lg:pl-16  pt-200  lg:text-left lg:col-span-2">
          <div className="text-start ml-6 mt-6 text-4xl font-paytone sm:text-5xl lg:text-7xl max-w-2xl">
            Freshly prepared UGGU for Little Ones
          </div>

          {/* Effects Card */}
          <div className="mt-6">
            <EffectsCard
              imgUrl="/leafimg.png"
              title="Great ingredients"
              titleColor="text-green-500"
              description="We only use organic ingredients – no nasties!"
              descriptionWidth="max-w-xs"
            />
          </div>

          {/* Button */}
          <div className="pl-6 pt-6">
            <Button text="Order now" />
          </div>
        </div>
      </div>
    </div>
  );
}
