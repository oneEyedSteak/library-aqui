import Link from 'next/link';

const HeaderMenu = ({ account }) => (
  <div className="fixed shadow-xl items-end bg-base text-gray-700  rounded-md m-32 mt-20 z-50 w-auto h-72 pt-6">
    <div className="container  w-full flex flex-wrap justify-end">
      {account && (
      <>
        {['Acquisition', 'Admin'].includes(account.selectPosition) && (
        <>
          <ul className="px-4 w-auto sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
            <div className="justify-center items-center block">
              <Link href="/see-all-books">
                <span className="hover:bg-gray-300 cursor-pointer font-bold hover:text-gray-700 text-gray-600 px-auto mx-auto
                   text-sm "
                >
                  See all requested books From Departments
                </span>
              </Link>
              <div className="mt-1">
                <p className=" text-gray-800 font-thin   italic text-sm">All requested books coming from all Department</p>
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
                <p className=" text-gray-800 font-thin italic text-sm">All requested books coming from all Department</p>
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
                <p className=" text-gray-800 font-thin italic text-sm">All requested books coming from all Department</p>
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
                <p className=" text-gray-800 font-thin italic text-sm">All requested books coming from all Department</p>
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
            <div className="block items-center">
              <Link href="/see-all-books-director">
                <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
                >
                  Request for Payments
                </span>
              </Link>
              <div className="mt-1">
                <p className=" text-gray-800 font-thin italic text-sm">All requested books coming from all Department</p>
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
                <p className=" text-gray-800 font-thin italic  text-sm">All requested books coming from all Department</p>
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
          <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r-0 lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
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
          <ul className="px-4 w-aut sm:w-1/2 lg:w-1/4 border-gray-400 border-b sm:border-r lg:border-b-0 pb-3 pt-3 lg:pt-1 ">
            <div className="block items-center" />
            <Link href="/see-all-books-custodian">
              <span className="hover:bg-gray-300 cursor-pointer hover:text-gray-700 text-gray-800 px-auto mx-auto
                   text-sm font-medium"
              >
                Books to Verify
              </span>
            </Link>
            <div className="mt-1">
              <p className=" text-gray-800 font-thin italic text-sm">All requested books coming from all Department</p>
              <p className=" text-gray-800 font-medium text-xs">Approved by Dean</p>
            </div>
          </ul>
        </>
        )}
      </>
      )}
    </div>
  </div>
);

export default HeaderMenu;
