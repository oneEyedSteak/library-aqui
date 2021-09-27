import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';

export default function Header() {
  const [session] = useSession();
  const { account } = session || {};
  console.log(account);

  return (
    <nav className="bg-navbg   fixed left-0 right-0 top-0 p-1">
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
            <div className="hoverable hover:bg-gray-800 hover:text-gray-600">
              {account && (
              <>
                {['Acquisition', 'Admin', 'Dean', 'Acquisition', 'Custodian', 'Director of Librarie', 'Finance', 'VPAA'].includes(account.selectPosition) && (
                <div className=" block py-2 px-2 lg:p-2 text-sm lg:text-base font-medium hover:bg-gray-400 hover:text-gray-700 ">Menu</div>
                )}
              </>
              )}
              <div className="p-1 mega-menu mb-10 sm:mb-0 shadow-xl items-end bg-base text-gray-700  justify-end">
                <div className="container  w-full flex flex-wrap justify-end mx-2">
                  {account && (
                  <>
                    {['Acquisition', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                        <div className="justify-center items-center block">
                          <Link href="/see-all-books">
                            <span className="hover:bg-gray-300 cursor-pointer font-bold hover:text-gray-700 text-gray-600 px-auto mx-auto
                   text-sm "
                            >
                              See all requested books From Departments
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                            <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                  <>
                    {['Dean', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center">
                          <Link href="/see-all-books-dean">
                            <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-600 px-auto mx-auto
                   text-sm  font-bold"
                            >
                              All Requested Books
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">See all requested </p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                  <>
                    {['VPAA', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center">
                          <Link href="/see-all-books-vpaa">
                            <span className=" hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                            >
                              All Requested Books
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">See all requested books coming from all Department</p>
                            <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                  <>
                    {['Acquisition', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center">
                          <Link href="/see-all-verified-books">
                            <span className=" hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                            >
                              Verified Books from Custodian
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                            <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                    <>
                      {['Acquisition', 'Admin'].includes(account.selectPosition) && (
                      <>
                        <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0  lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                          <div className="block items-center">
                            <Link href="/see-all-books-to-print">
                              <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                              >
                                Print Request
                              </span>
                            </Link>
                            <div className="mt-1">
                              <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                              <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                            </div>
                          </div>
                        </ul>
                      </>
                      )}
                    </>
                  )}
                  {account && (
                  <>
                    {['Acquisition', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center">
                          <Link href="/see-all-books-topurchase">
                            <span className=" hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                            >
                              Books to Verify
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                            <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                    <>
                      {['Director of Libraries', 'Admin'].includes(account.selectPosition) && (
                      <>
                        <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                          <div className="flex items-center">
                            <Link href="/see-all-books-director">
                              <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                              >
                                Request for Payments
                              </span>
                            </Link>
                            <div className="mt-1">
                              <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                              <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                            </div>
                          </div>
                        </ul>
                      </>
                      )}
                    </>
                  )}
                  {account && (
                    <>
                      {['Admin'].includes(account.selectPosition) && (
                      <>
                        <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                          <div className="block items-center">
                            <Link href="/registrationProfile">
                              <span className=" hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                              >
                                Register
                              </span>
                            </Link>
                            <div className="mt-1">
                              <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                              <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                            </div>
                          </div>
                        </ul>
                      </>
                      )}
                    </>
                  )}
                  {account && (
                  <>
                    {['VPAA', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center">

                          <Link href="/see-all-books-payment-vpaa">
                            <span className=" hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                            >
                              Requested Books for Payment
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                            <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                  <>
                    {['Finance', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-1 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center">

                          <Link href="/see-all-books-payment-finance">
                            <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                            >
                              Request for Payment
                            </span>
                          </Link>
                          <div className="mt-1">
                            <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                            <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                          </div>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                  {account && (
                  <>
                    {['Custodian', 'Admin'].includes(account.selectPosition) && (
                    <>
                      <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r lg:border-b-1 pb-3 pt-3 lg:pt-1 ">
                        <div className="block items-center" />
                        <Link href="/see-all-books-custodian">
                          <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                          >
                            Books to Verify
                          </span>
                        </Link>
                        <div className="mt-1">
                          <p className=" text-gray-800 font-thin text-sm">All requested books coming from all Department</p>
                          <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
                        </div>
                      </ul>
                    </>
                    )}
                  </>
                  )}
                </div>
              </div>
            </div>
            {account && (
            <>
              {['President', 'Admin'].includes(account.selectPosition) && (
              <>
                <Link href="/see-all-books-president">
                  <span className=" sticky  hover:bg-gray-900 hover:text-white  cursor-pointer text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium mr-2"
                  >
                    See All Requested Books-President
                  </span>

                </Link>
              </>
              )}
              <Link href="/see-all-books-track">
                <span className=" sticky  hover:bg-gray-900 hover:text-white  cursor-pointer text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium mr-2"
                >
                  Track your Book
                </span>
              </Link>
              {['Acquisition'].includes(account.selectPosition) && (
              <Link href="/see-all-books-tsrack-librarian">
                <span className="  sticky  hover:bg-gray-900 hover:text-white  cursor-pointer text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium mr-2"
                >
                  Track
                </span>
              </Link>
              )}
              <Link href="/requestform">
                <span className=" sticky  hover:bg-gray-900 hover:text-white  cursor-pointer text-gray-300
                  px-3 py-2 rounded-md text-sm font-medium mr-2"
                >
                  Request Your Books Here!
                </span>
              </Link>
            </>
            )}
            {!account && (
              <>
                <Link href="/login">
                  <span className="cursor-pointer
                text-white px-3 py-2 rounded-md text-sm font-medium "
                  >
                    Sign In
                  </span>
                </Link>
              </>
            )}
            {account && (
              <>
                <div className="min-h-screen  flex flex-col justify-center sm:py-12">
                  <div className="flex items-center justify-center p-1">
                    <div className=" relative inline-block text-left dropdown">
                      <span className="rounded-md shadow-sm">
                        <button
                          className="inline-flex justify-center w-full transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="true"
                          aria-controls="headlessui-menu-items-117"
                        >
                          <div className="sec self-center pr-1">
                            <img data="picture" className="h-10 w-10 border rounded-full" src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo" alt="" />
                          </div>
                        </button>
                      </span>
                      <div className="opacity-0 invisible dropdown-menu duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                          <div className="px-4 py-3">
                            <p className="text-sm font-bold leading-5">Signed in as:</p>
                            <div className="text-gray-800   ">
                              <div className="flex font-medium ">
                                <small>
                                  {' '}
                                  ID:
                                  {account.id}
                                </small>
                              </div>
                              <div className="flex py-0.5">
                                <div className="name text-xs font-medium ">
                                  {' '}
                                  {account.fname}
                                  &nbsp;
                                  {account.mname}
                                  &nbsp;
                                  {account.lname}
                                </div>
                              </div>
                              <div className="flex">
                                <div className="name text-xs font-medium ">
                                  {' '}
                                  {account.selectPosition}
                                </div>
                              </div>
                              <div className="title text-xs font-medium ">
                                {' '}
                                {account.selectDepartment}
                              </div>
                            </div>

                          </div>
                          <div className="py-1">
                            <span role="menuitem" tabIndex="-1" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">View Profile</span>

                          </div>

                          <Link href="/">

                            <div
                              onClick={signOut}
                              className="cursor-pointer hover:text-gray-300
text-gray-900 px-3 py-2 rounded-md text-sm font-medium "
                            >
                              Sign Out
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )}

          </div>
        </div>
      </div>
    </nav>

  );
}
