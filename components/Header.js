import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';

export default function Header() {
  const [session] = useSession();

  return (
    <nav className="bg-gray-700">
      <div className="max-w-10xl MT mx-auto px-2 sm:px-6 lg:px-8">

        <div className=" flex items-center justify-between h-16">

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex  cursor-pointer items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">

            <div className="flex-shrink-0 flex items-center  cursor-pointer ">
              <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
              <Link href="/"><img className="hidden lg:block h-12 w-auto  cursor-pointerrounded mr-3" src="/cpulogo.png" alt="okay" /></Link>
              <Link href="/"><h1 className="mr- text-2xl text-gray-100   cursor-pointer"> University Library Acquition</h1></Link>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/">
                    <span className="hover:bg-gray-900 hover:text-white text-gray-300
                    px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </span>
                  </Link>
                  <Link href="/contactUs">
                    <span className="hover:bg-gray-900 hover:text-white text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact Us
                    </span>
                  </Link>
                  <Link href="/aboutUs">
                    <span className=" hover:bg-gray-900 hover:text-white text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About Us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {session && (
            <>
              <Link href="/see-all-books">
                <span className=" hover:bg-gray-900 cursor-pointer hover:text-white text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium"
                >
                  See All Requested Books
                </span>
              </Link>
              <Link href="/see-all-books-dean">
                <span className=" hover:bg-gray-900 cursor-pointer hover:text-white text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium"
                >
                  See All Requested Books-Dean
                </span>
              </Link>
              <Link href="/see-all-books-vpaa">
                <span className=" hover:bg-gray-900 cursor-pointer hover:text-white text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium"
                >
                  See All Requested Books-VPAA
                </span>
              </Link>
              <Link href="/requestform">
                <span className=" hover:bg-gray-900 hover:text-white  cursor-pointer text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium mr-2"
                >
                  Request Your Books Here!
                </span>
              </Link>
            </>
            )}
            {!session && (
            <>
              <button
                type="button"
                className="mr-2 bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white
               focus:outline-none ring-1 focus:ring-offset-1 focus:ring-offset-gray-700 focus:ring-white"
              >
                <Link href="/login">
                  <span className="cursor-pointer hover:text-gray-900
                text-gray-300 px-3 py-2 rounded-md text-sm font-medium "
                  >
                    Sign In
                  </span>
                </Link>
              </button>
            </>
            )}
            {session && (
            <>
              <button
                type="button"
                onClick={signOut}
                className="mr-2 bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white
                focus:outline-none ring-1 focus:ring-offset-1 focus:ring-offset-gray-700 focus:ring-white"
              >
                <span className="cursor-pointer hover:text-gray-900
                text-gray-300 px-3 py-2 rounded-md text-sm font-medium "
                >
                  Sign Out
                </span>
              </button>
            </>
            )}

          </div>

        </div>
      </div>
    </nav>

  );
}
