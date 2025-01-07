import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-[#5d8169] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Explore Plantera</h3>
            <ul>
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">Shop</Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:underline">Our Story</Link>
              </li>
              rm -rf .git/subtree-cache

              <li>
                <Link href="/sustainability" className="hover:underline">Sustainability</Link>
              </li>
              <li>
                <Link href="/care" className="hover:underline">Care</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
            <ul>
              <li>
                <Link href="https://facebook.com" className="hover:underline">Facebook</Link>
              </li>
              <li>
                <Link href="https://instagram.com/venky_ins" className="hover:underline">Instagram</Link>
              </li>
              <li>
                <Link href="https://twitter.com/venky_officials" className="hover:underline">Twitter</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Company Info</h3>
            <ul>
              <li>
                <Link href="/careers" className="hover:underline">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:underline">Newsletter</Link>
              </li>
              <li>
                <Link href="/partners" className="hover:underline">Partners</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-8 mt-8 text-center">
          <p>&copy; 2024 Plantera, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
