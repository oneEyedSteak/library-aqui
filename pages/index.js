import Head from 'next/head';
import { useSession } from 'next-auth/client';
import BookCards from '../components/BookCards';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/postBooks');
  const posts = await res.json();

  console.log();
  return {
    props: { booksDisplay: posts },
  };
};

const Home = ({ booksDisplay }) => {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Library Acquisition | Home </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />

      </Head>
      <section className="max-w-screen  from-blue-900 to-yellow-600 bg-gradient-to-br  min-h-screen mx-auto ">

        <div className=" mx-auto  min-w-full  sm:px-6 lg:px-8">
          <img src="/1234.jpg" className="  min-w-full h-10/12 rounded-xl mx-autos" alt="1234" />
        </div>

        <div>
          <h2 className=" bg-gray-500 text-yellow-50 text-center w-3/4 mx-auto p-4 mt-2 rounded">
            {!session && (
            <>
              <span className="mr-3 font-bold text-l">
                Sign In to
              </span>
            </>
            )}
            See Whats new!
          </h2>
        </div>
        <div className="p-28 grid grid-cols-3 gap-1
        sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5
         xl:grid-cols-4"
        >
          {session && (
            <>
              {
                booksDisplay && booksDisplay.map((books) => (
                  <BookCards books={books} key={books.entryBooksID} />
                ))
              }
            </>
          )}
        </div>
      </section>

    </>
  );
};
export default Home;