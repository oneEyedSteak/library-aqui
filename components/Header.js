import Link from 'next/link';

const Header = () => (

  <nav className="bg-gray-700">
    <div className="max-w-10xl MT mx-auto px-2 sm:px-6 lg:px-8">

      <div className=" flex items-center justify-between h-16">

        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>

          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">

          <div className="flex-shrink-0 flex items-center ">
            <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
            <img className="hidden lg:block h-12 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
            <h1 className="mr- text-2xl text-gray-100"> University Library Acquition</h1>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/"><span className="hover:bg-gray-900 hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</span></Link>

                <Link href="/contactUs"><span className="hover:bg-gray-900 hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact Us</span></Link>

                <Link href="/aboutUs"><span className=" hover:bg-gray-900 hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About Us</span></Link>

              </div>
            </div>

          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" className="mr-2 bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none ring-1 focus:ring-offset-1 focus:ring-offset-gray-700 focus:ring-white">
            <Link href="/login"><span className="cursor-pointer hover:text-gray-900 text-gray-300 px-3 py-2 rounded-md text-sm font-medium ">Sign In</span></Link>
          </button>
          <button type="button" className="bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none ring-1 focus:ring-offset-0 focus:ring-offset-gray-700 focus:text-red-50 focus:ring-white">

            <Link href="/registrationProfile"><span className="cursor-pointer hover:text-gray-900 text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sign Up</span></Link>
          </button>

        </div>

      </div>
    </div>
  </nav>

);

export default Header;
