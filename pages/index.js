import Head from 'next/head'
import { Form, Field } from 'react-final-form'

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/postBooks");
  const posts = await res.json();

  return {
    props: { books: posts }
  }

}

const Home = ({ books }) => {


  return (
    <>
      <Head>
        <title>Library Acquisition | Home </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />

      </Head>
      <section className="w-screen from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen mx-auto ">

        <div className=" mx-auto  sm:px-6 lg:px-8">
          <img src='/1234.jpg' className=" w-screen h-10/12 mx-auto  " />
        </div>

        <div className="md:container md:mx-auto   ">

          <div className=" w-full h-auto  lg:max-w-full lg:flex">
            <div className="mx-auto w-full border-r border-b border-l border-t mt-4  border-gray-500 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-3 flex ">

              <div className="flex items-center border-r border-gray-500 mr-5">
                <img className="w-20 h-20 mr-7 " src="/cpulogo.png" />
              </div>
              <h1>See Whats New</h1>
              {books.map(books => (
                <div className=" flex-row space-y-1 ">
                  <p className="text-sm text-gray-600 font-bold flex items-center">Book ID: {books.BookID} </p>
                  <p className="text-gray-700 text-s">Entry Date:{books.EntryDate}</p>

                  <div className="text-gray-900 font-bold text-s "><p>Title:{books.Title} </p></div>
                  
                  <p className="text-sm text-gray-600 font-bold flex items-center">Author: {books.Author} </p>
                  <p className="text-gray-700 text-xs">{books.noteEntry} </p>
                  <p className="text-gray-700 text-s">Publication Date:{books.PublicationDate}</p>

                </div>
              ))}



            </div>

          </div>

        </div>


      </section>
    </>
  )
}
export default Home;