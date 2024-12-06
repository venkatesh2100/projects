import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function SectionHero() {
  return (
    <div
      className="h-screen bg-backgroundColor bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(/public/littlediet_baby_homepage_resize.jpg)",
      }}
    >
      {/* Main Content */}
      <div className="flex h-screen mt-200 w-full items-center justify-start">
        <div className="text-center text-white   pt-200  lg:text-left lg:col-span-2">
          {/* Image Section */}
          {/* <div className="pl-39 pb-32 lg:pl-8 lg:pb-10 lg:ml-80">
            <img
              src="/superMonImage.png"
              alt="Green Leaf"
              className="mx-5 mt-6 sm:animate-bounce"
              width={81}
            />
          </div> */}

          {/* Title Section */}
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
          <div className="ml-8 p-6 text-3xl">
            <Button text="Order now" />
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div>
        <img
          src="/bottom_grey_wave_home_04.png"
          alt="Bottom Grey Wave"
          className="bg-no-repeat absolute bottom-0 left-0 h-16 w-full"
        />
      </div>

      {/* Optional Right Section */}
      {/*
      <div className="lg:col-span-1 flex items-center justify-center lg:justify-end mt-8 lg:mt-10">
        <img
          src="/homepage.png"
          alt="Hero Image"
          className="max-w-full"
        />
      </div>
      */}
    </div>
  );
}
