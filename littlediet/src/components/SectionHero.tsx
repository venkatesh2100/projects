import { handleOrderClick } from "../whatsapp/redirectWhatsapp";
import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";

export function SectionHero() {
  return (
    <div
      className="h-screen bg-backgroundColor bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/littlediet_baby_homepage_resize.jpg)",
      }}
    >
      {/* Main Content */}
      <div className="flex h-screen mt-200 w-full pt-20 sm:items-center justify-start">
        <div className="text-center text-white lg:pl-16  pt-200  lg:text-left lg:col-span-2">
          <div className="text-start  sm:ml-6 sm:mt-6 text-3xl font-paytone sm:text-5xl lg:text-7xl max-w-2xl">
            Freshly prepared UGGU for Little Ones
          </div>

          {/* Effects Card */}
          <div className="hidden sm:block mt-6">
            <EffectsCard
              imgUrl="/leafimg.png"
              title="Great ingredients"
              titleColor="text-green-600"
              description="We only use organic ingredients – no nasties!"
              descriptionWidth="max-w-xs"
            />
          </div>
          {/* Button */}
          <div className="lg:pl-6  lg:pt-6  pr-64">
            <Button text="Order now" onClick={handleOrderClick} />
          </div>
        </div>
      </div>

      <div className="">
        <img
          src="/bottom_grey_wave_home_04.png"
          alt="Bottom Grey Wave"
          className="flex w-full absolute bottom-0 left-0 h-4 bg-no-repeat"
        />
      </div>
    </div>
  );
}
