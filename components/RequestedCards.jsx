import Link from 'next/link';

const seeAllRequestBooks = ({ requestBook }) => (

  <div className="md:container md:mx-auto   ">

    <div className=" w-full h-auto lg:max-w-full lg:flex">

      <div className="mx-auto w-3/4 border-r border-b border-l border-t mt-1  border-gray-500 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l  flex">

        <div className="flex items-center border-r-2 border-gray-500 mr-2">
          <img className="w-20 h-20 ml-7 mr-7" alt="CPU Logo" src="/cpulog.png" />
        </div>
        <div className=" flex p-2">
          <div className=" space-y-1">

            <p className="text-gray-700 text-s">
              Date Requested:
              {new Date(requestBook.date).toDateString()}
            </p>

            <p className="text-sm text-gray-600 font-bold flex items-center">
              Rush or Not Rush:
              {requestBook.rushornrush}
            </p>

            <p className="text-sm text-gray-600 font-bold flex items-center">
              Author:
              {requestBook.authorName}
            </p>

            <p>
              Title:
              {requestBook.title}
            </p>

            <p className="text-sm text-gray-600 font-bold flex items-center">
              Copy of Volumes:
              {requestBook.copvol}
            </p>

            <p className="text-gray-700 text-s">
              Publication Name:
              {requestBook.pubName}
            </p>

            <p className="text-gray-700 text-s">
              Publication Address:
              {requestBook.pubAddress}
            </p>

            <p className="text-gray-700 text-s">
              Publication Date:
              {new Date(requestBook.pubdate).toDateString()}
            </p>

            <p className="text-gray-700 text-s">
              Recommended By:
              {requestBook.recomby}
            </p>

            <p className="text-gray-700 text-s">
              Position :
              {requestBook.position}
            </p>

            <p className="text-gray-700 text-xs">
              Charge to:
              {requestBook.chargeto}
            </p>

            <p className="text-gray-700 text-xs">
              Edition:
              {requestBook.edition}
            </p>

            <p className="text-gray-700 text-xs">
              Subjects:
              {requestBook.subject}
            </p>

            <p className="text-gray-700 text-xs">
              Existing Number of Titles:
              {requestBook.enumtitle}
            </p>

            <p className="text-gray-700 text-xs">
              Note:
              {requestBook.notereqform}
            </p>

            <p className="text-gray-700 text-xs">
              Dealer:
              {requestBook.dealer}
            </p>

            <p className="text-gray-700 text-xs">
              Price:
              {requestBook.price}
            </p>

            <p className="text-gray-700 text-xs">
              Dated:
              {requestBook.dated}
            </p>

            <p className="text-gray-700 text-xs">
              SI#:
              {requestBook.sinumb}
            </p>

            <p className="text-gray-700 text-xs">
              Added As:
              {requestBook.addedAs}
            </p>

            <p className="text-gray-700 text-xs">
              Status:
              {requestBook.status}
            </p>

            <Link href={`/enter-books/${requestBook.requestID}`}>
              <button
                type="button"
                className="mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                                       text-white bg-indigo-600 hover:bg-indigo-700
                                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update Request
              </button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  </div>

);

export default seeAllRequestBooks;
