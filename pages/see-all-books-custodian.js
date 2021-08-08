import Head from 'next/head';
import mysql from '../providers/mysql';
import validateSession from '../lib/session';

import RequestedCardsCustodian from '../components/RequestedCardsCustodian';

export const getServerSideProps = async (context) => {
    try {
        const result = await
            mysql.query('SELECT * FROM requestform WHERE verifytocustodian = 1 AND verified = 0');
        const session = await validateSession(context);

        const post = JSON.parse(JSON.stringify(result));
        return {
            props: { booksToVerify: post, session },
        };
    } catch (error) {
        return { props: { post: false } };
    }
};
export default function seeAllBooksCustodian({ booksToVerify }) {
    console.log(booksToVerify);

    return (
        <>
            <Head>
                <title>Library Acquisition | Books Requested </title>
                <meta name="keywords" content="someting" />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <section className="max-w-screen from-blue-900 to-yellow-600 bg-gradient-to-br  min-h-screen mx-auto ">

                <div className=" mx-auto  min-w-full  sm:px-6 lg:px-8">
                    <img src="/1234.jpg" className="  min-w-full h-10/12 rounded-xl mx-autos" alt="1234" />
                </div>
                <h2 className=" bg-gray-500 text-gray-100 text-center w-3/4 mx-auto p-4 mt-5 rounded">
                    All Requested Book
                </h2>
                <div className="p-28 grid grid-cols-3 gap-1
        sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5
         xl:grid-cols-4"
                >
                    {

                        booksToVerify && booksToVerify.map((reqbook) => (
                            <RequestedCardsCustodian booksToVerify={reqbook} />
                        ))

                    }
                </div>
            </section>
        </>
    );
}
