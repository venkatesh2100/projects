export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

      <div className="text-3xl  font-bold text-gray-900">Paymatter</div>


      <div className="flex space-x-6 text-gray-700">
        <span className="cursor-pointer  hover:text-blue-500 transition">Send & Receive</span>
        <span className="cursor-pointer hover:text-blue-500 transition">Pay Now</span>
        <span className="cursor-pointer hover:text-blue-500 transition">Help Center</span>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  );
}
