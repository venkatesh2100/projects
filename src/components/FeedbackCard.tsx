

export function FeedbackCard() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-white w-auto text-center mt-52">
        <div>
          <img src="https://i.postimg.cc/43khyWS3/Comma.png" alt="Comma" />
        </div>
        <div className="font-paytone text-5xl">Taste is amazing!</div>
        <div className="max-w-xl my-6 text-xl font-sans-serif">
          First of all, they taste amazing! Second of all, I love the idea of my
          baby getting homemade fresh food without me having to spend hours
          preparing it. I find comfort in knowing that my baby is receiving a
          balanced and nutritious meal. This is perfect for us busy mums who
          still want the best for their babies.
        </div>
        <div className="flex">
          <div className="">
            <img
              src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/testimonials_06.jpg"
              width={80}
              className="rounded-full"
            />
          </div>
          <div className="text-start ml-4 mt-4">
            <div>KELLY G. FLUSHING, NY</div>
            <div>Hanna’s mother</div>
          </div>
        </div>
      </div>
    </div>
  );
}
