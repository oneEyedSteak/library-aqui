import Head from 'next/head';
import { useMemo } from 'react';
import Link from 'next/link';
import validateSession from '../lib/session';
import api from '../lib/api';
import RequestedCards from '../components/RequestedCards';
import ReactTable from '../components/table';

export const getServerSideProps = async (context) => {
  const { data } = await api.get('/api/postRequestBooks');

  const session = await validateSession(context);

  return {
    props: { requestBook: data, session },
  };
};

export default function seeAllBooks({ requestBook }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Request ID',
        accessor: 'requestID', // accessor is the "key" in the data
      },
      {
        Header: 'Request Date',
        accessor: 'date',
      },
      {
        Header: 'Is Rush?',
        accessor: 'rushornrush',
      },
      {
        Header: 'Athor Name',
        accessor: 'authorName',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row: { values } }) => (
          <div>
            {values.status ? 'Active' : 'In Active'}
          </div>
        ),
      },
      {
        Header: () => null,
        accessor: 'action',
        Cell: ({ row: { values } }) => (
          <Link href={`/approve-books-acquisition/${values.requestID}`}>
            <button
              type="button"
              className="mx-auto mt-3  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                                     text-white bg-indigo-600 hover:bg-indigo-700
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Request
            </button>
          </Link>
        ),
      },
    ],
    [],
  );

  return (

    <>
      <Head>
        <title>Library Acquisition | Books Requested </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <section className="max-w-screen from-blue-900 to-yellow-600 bg-gradient-to-br  min-h-screen mx-auto ">
        <div className=" mx-auto min-w-full   sm:px-6 ">
          <img src="/1234.jpg" className=" w-full h-10/12 min-w-full rounded-xl mx-auto " alt="1234" />
        </div>
        <div>

          <h2 className=" bg-gray-500 text-gray-100 text-center w-3/4 mx-auto p-4 mt-5 rounded">
            All Requested Book
          </h2>
        </div>
        <div className="p-28 grid grid-cols-3 gap-1
        sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5
         xl:grid-cols-4"
        >
          <ReactTable data={requestBook} columns={columns} />
        </div>
      </section>
    </>
  );
}
