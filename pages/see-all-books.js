import Head from 'next/head'
import api from '../lib/api';
import RequestedCards from '../components/RequestedCards';

export const getServerSideProps = async () => {
    const { data } = await api.get("/api/postRequestBooks");


    return {
        props: { requestBook: data }
    }
}


const seeAllBooks = ({ requestBook }) => {

    return (
        <>
            <Head>
                <title>Library Acquisition | Books Requested </title>
                <meta name="keywords" content="someting" />
                <link rel="icon" href="/icon.ico" />
            </Head>

            <section className="max-w-screen from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen mx-auto ">

                <div className=" mx-auto  sm:px-6 lg:px-8">
                    <img src='/1234.jpg' className=" w-full h-10/12 mx-auto  " />

                </div>
                <h2 className="bg-gray-100  items-center mx-auto p-4 pl-96 text-xl  pr-96 mt-5 mb-1 rounded">All Requested Books </h2>


                {
                    requestBook && requestBook.map(reqbook => (
                        <RequestedCards requestBook={reqbook} />
                    ))

                }
            </section>
        </>

    );
}

export default seeAllBooks;