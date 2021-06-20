



const seeAllRequestBooks = ({ reqbooks }) => {
    return (
        <>

            <div className="md:container md:mx-auto   ">

                <div className=" w-full h-auto  lg:max-w-full lg:flex">

                    <div className="mx-auto w-3/4 border-r border-b border-l border-t mt-1  border-gray-500 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l  flex">

                        <div className="flex items-center border-r-2 border-gray-500 mr-2">
                            <img className="w-20 h-20 ml-7 mr-7 " src="/cpulogo.png" />
                        </div>

                        <div className=" flex  p-2">

                            <div className=" space-y-1">
                                <p className="text-sm text-gray-600 font-bold flex items-center">Book ID: {books.BookID} </p>
                                <p className="text-gray-700 text-s">Entry Date:{books.EntryDate}</p>
                                <p>Title:{books.Title} </p>
                                <p className="text-sm text-gray-600 font-bold flex items-center">Author: {books.Author} </p>
                                <p className="text-gray-700 text-xs">Note: {books.noteEntry} </p>
                                <p className="text-gray-700 text-s">Publication Date:{books.PublicationDate}</p>
                                <a className="text-xs text-blue-400 justify-items-end" href="/requestform">Request your books here!</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </>
    );
}

export default seeAllRequestBooks;