import Head from 'next/head'
import BookCards from '../components/BookCards';
import { useSession } from 'next-auth/client';


const [session] = useSession();




export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/postBooks");
  const posts = await res.json();

  return {
    props: { booksDisplay: posts }
  }

}

const Home = ({ booksDisplay }) => {


  return (
    <>
      <Head>
        <title>Library Acquisition | Home </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />

      </Head>
      <section className="max-w-screen from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen mx-auto ">

        <div className=" mx-auto  sm:px-6 lg:px-8">
          <img src='/1234.jpg' className=" w-full h-10/12 mx-auto  " />
        </div>
        <div>
          <h2 className="bg-gray-100  p-4 mt-5 mb-1 rounded">See What's new! </h2>
        </div>
        {booksDisplay.map(books => (

          <BookCards books={books} key={books.BookID} />

        ))}

      </section>
    </>
  )
}
export default Home;