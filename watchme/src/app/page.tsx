"use client"; // This marks the component as client-side

import { useState } from "react";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleSendOtp = () => {
    // Make an API call to your OTP service to send the OTP
    // For example, call a backend function that sends OTP using a service like Twilio or Firebase
    // Here we simulate the OTP being sent
    console.log(`Sending OTP to ${phoneNumber}`);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Make an API call to verify the OTP
    // Simulate OTP verification
    if (otp === "123456") {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between p-5 bg-black text-white">
        <div className="text-2xl font-bold">WatchMe</div>
        <nav>
          <a href="#" className="mx-4 text-white">
            Home
          </a>
          <a href="#" className="mx-4 text-white">
            Movies
          </a>
          <a href="#" className="mx-4 text-white">
            TV Shows
          </a>
          <a href="#" className="mx-4 text-white">
            Browse
          </a>
          <a href="#" className="mx-4 text-white">
            About
          </a>
        </nav>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 bg-orange-500 rounded text-white"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleLoginModal}
            className="px-4 py-2 bg-orange-500 rounded text-white"
          >
            Login
          </button>
        )}
      </header>

      {/* Hero Section */}
      <main
        className="bg-cover bg-center text-white text-center py-40"
        style={{ backgroundImage: "url('your-background-image.jpg')" }}
      >
        <h1 className="text-5xl font-semibold mb-4">Welcome to WatchMe</h1>
        <p className="text-xl mb-8">Your Movie Hub</p>
        <button className="px-6 py-3 bg-orange-500 text-white rounded">
          Browse Movies
        </button>
      </main>

      {/* OTP Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg text-center w-96">
            <h2 className="text-2xl font-semibold text-black mb-4">Login</h2>
            {!isOtpSent ? (
              <>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mb-4 p-2 w-full border bg-black border-gray-300 rounded"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button
                  onClick={handleSendOtp}
                  className="px-6 py-2 bg-orange-500 text-white rounded mb-4"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="mb-4 p-2 w-full border bg-black border-gray-300 rounded"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  onClick={handleVerifyOtp}
                  className="px-6 py-2 bg-orange-500 text-white rounded mb-4"
                >
                  Verify OTP
                </button>
              </>
            )}
            <button
              onClick={handleLoginModal}
              className="mt-4 px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center bg-black text-white py-4">
        <p>Privacy Policy | Terms & Conditions | Contact</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2">
            Facebook
          </a>
          <a href="#" className="text-white mx-2">
            Twitter
          </a>
          <a href="#" className="text-white mx-2">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
