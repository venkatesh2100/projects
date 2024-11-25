import { FeedbackCard } from "./FeedbackCard";

export function SectionReviews() {
    return (
        <div className="p-1 bg-backgroundColor">
            <div className="bg-backgroundColor bg-contain bg-no-repeat bg-center my-20"
                style={{
                    backgroundImage: `url('https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/background_02_home_04.png')`,
                }}
            >
                <div className="w-full h-[950px] flex flex-col">
                    <FeedbackCard />
                </div>
            </div>
        </div>
    );
}
