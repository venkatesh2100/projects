export function Section5() {
    return (
        <div
            className="bg-backgroundColor bg-cover bg-no-repeat bg-center h-full"
            // You can uncomment the below line if you need to add a background image via inline style
            style={{
                backgroundImage: `url('https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/background_03_home_04.jpg')`
            }}
        >
            {/* Image is now inside the div, ensuring it's properly structured */}
            {/* <img src="/public/child playing.png" alt="Child Playing" className="w-full h-screen " /> */}

            <div
                className="flex w-full h-screen bg-no-repeat"
                style={{
                    backgroundImage: `url('/top_grey_wave_home_04.png')`
                }}
            >
                {/* Add content here if needed */}
            </div>

            <div className="">
                <img src="/bottom_grey_wave_home_04.png" alt="Bottom Grey Wave" className="flex w-full bg-no-repeat"/>
            </div>
        </div>
    );
}
