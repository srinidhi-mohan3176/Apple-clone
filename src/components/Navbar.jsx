import { FaApple, FaBook, FaSearch, FaStore } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white text-black p-4 hidden md:flex shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-center">
        <ul className="flex gap-6 sm:gap-10 lg:gap-14 overflow-x-auto no-scrollbar">
          <li><a href="#" className="flex items-center gap-2 pt-1 hover:text-blue-500 transition"><FaApple /></a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Store</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Mac</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">iPad</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Watch</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">AirPods</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">TV & Home</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Entertainment</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Accessories</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Support</a></li>
          <li>
            <a
              href="#"
              className="flex items-center pt-1 hover:text-blue-500 transition"
            >
              <FaBook />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center pt-1 hover:text-blue-500 transition"
            >
              <FaSearch />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
