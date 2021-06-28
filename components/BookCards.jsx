const bookcards = ({ books }) => (
  <div className="md:container md:mx-auto">
    <div className=" w-full lg:max-w-full lg:flex flex text-sm">
      <div className="border-2 rounded-l border-gray-400 lg:border-l-1 lg:border-t\
       lg:border-gray-400 bg-white  lg:rounded-b-1
        lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div className="mb-8">
          <img className="w-auto h-auto  lazy mr-4" src="bookcover.jpg" alt="Book Cover" />
        </div>
        <small className="font-thin text-gray-700">
          {books.bookRef}
        </small>
        <h3 className="text-gray-600 font-bold text-2xl mb-2">{books.title}</h3>
        <p className="text-gray-600 mb-5">
          {books.notereqform}
        </p>
        <div className="flex justify-between text-gray-600 text-xs">
          <div>
            <small className="font-bold">Author</small>
            <p>
              {books.authorName}
            </p>
          </div>
          <div>
            <small className="font-bold">Publication Date</small>
            <p>
              {new Date(books.pubdate).toDateString()}
            </p>
          </div>
          <div>
            <small className="font-bold">Entry Date</small>
            <p>
              {new Date(books.entryDate).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default bookcards;
