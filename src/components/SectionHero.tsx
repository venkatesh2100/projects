import { Button } from "./Button";
import { EffectsCard } from "./EffectsCard";



export function SectionHero() {
  return (
    <div
      className="bg-backgroundColor bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url('https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/hero_home_03.jpg')`,
      }}
    >
      {/* Main Content */}
      <div className="flex w-full h-screen items-center justify-start">
        <div className="lg:col-span-2 text-center text-white lg:text-left lg:pl-60 lg:pb-60">
          <div className="ml-0 lg:ml-80 pb-32 lg:pb-10 pl-40 lg:pl-8">
            <img
              src="/superMonImage.png"
              alt="Green Leaf"
              className="absolute mx-6 ml-0 lg:ml-80 w-36"
              width={80}
            />
          </div>
          <div className="text-4xl sm:text-5xl lg:text-7xl font-paytone max-w-3xl mt-6 ml-6 text-start">
            Freshly prepared UGGU for Little Ones
          </div>
          <div className="mt-6">
            <EffectsCard
              imgUrl="/leafimg.png"
              title="Great ingredients"
              titleColor="text-green-500"
              description="We only use organic ingredients – no nasties!"
              descriptionWidth="max-w-xs"
            />
          </div>
          <div className="ml-8 text-start">
            <Button text="Order now" />
          </div>
        </div>
      </div>

      {/* Bottom Grey Wave */}
      <div className="absolute bottom-0 w-full">
        <img
          src="/bottom_grey_wave_home_04.png"
          alt="Bottom Grey Wave"
          className="w-full"
        />
      </div>
    </div>
  );
}
