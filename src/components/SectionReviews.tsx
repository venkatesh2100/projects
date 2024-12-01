import { FeedbackCard } from "./FeedbackCard";

export function SectionReviews() {
    return (
        <div className="bg-backgroundColor">
            {/* Background Section */}
            <div
                className="bg-backgroundColor bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url('/public/background_02_home_04.png')`,
                }}
            >
                {/* Responsive Background Sizing */}
                <div className="w-full min-h-[900px] lg:min-h-[950px] flex flex-col items-center justify-center py-10 
                    bg-[length:150%] md:bg-[length:120%] lg:bg-[length:100%]">
                    {/* Feedback Card */}
                    <div className="max-w-4xl w-full px-4">
                        <FeedbackCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
