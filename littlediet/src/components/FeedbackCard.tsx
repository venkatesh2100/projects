export function FeedbackCard() {
  return (
    <div className="flex flex-col justify-center items-center text-white text-center px-4 py-10 lg:py-20">
      {/* Quotation Mark */}
      <div>
        <img
          src="https://i.postimg.cc/43khyWS3/Comma.png"
          alt="Comma"
          className="w-12 h-auto lg:w-16"
        />
      </div>

      {/* Feedback Title */}
      <div className="font-paytone text-3xl lg:text-5xl mt-6">Taste is amazing!</div>

      {/* Feedback Text */}
      <div className="max-w-lg my-6 text-base lg:text-xl font-sans-serif leading-relaxed">
        First of all, they taste amazing! Second of all, I love the idea of my
        baby getting homemade fresh food without me having to spend hours
        preparing it. I find comfort in knowing that my baby is receiving a
        balanced and nutritious meal. This is perfect for us busy mums who
        still want the best for their babies.
      </div>

      {/* User Information */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start mt-6">
        {/* User Image */}
        <div>
          <img
            src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/testimonials_06.jpg"
            width={60}
            className="rounded-full lg:w-20"
            alt="User"
          />
        </div>

        {/* User Details */}
        <div className="text-start mt-4 sm:mt-0 sm:ml-4">
          <div className="font-semibold text-sm lg:text-base">KELLY G. FLUSHING, NY</div>
          <div className="text-sm lg:text-base text-gray-300">Hanna’s mother</div>
        </div>
      </div>
    </div>
  );
}
