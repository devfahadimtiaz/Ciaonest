import Link from "next/link";
import Logo from "../components/assets/images/logo.png"
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-5 w-full z-50 bg-transparent px-4">
      <div className="container mx-auto px-8 py-2 flex justify-between items-center bg-tranparent-grey rounded-xl  ">
        <div className="text-2xl font-bold text-white-800">
          <Link href="/"><Image src={Logo} width={50}/></Link>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-white-600 hover:text-gray-600">
            Find A Room
          </Link>
          <Link href="/about" className="text-white-600 hover:text-gray-600">
            Become A Partner
          </Link>
          <Link href="/contact" className="text-white-600 hover:text-gray-600">
            Support
          </Link>
          <Link href="/contact" className="text-white-600 hover:text-gray-600">
            Blog
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button - can be expanded later */}
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="space-x-6">
          <button className="btn btn-transparent">Sign in</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
