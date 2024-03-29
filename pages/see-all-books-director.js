import { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import validateSession from '../lib/session';
import mysql from '../providers/mysql';
import ReactTable from '../components/table';

export const getServerSideProps = async (context) => {
  try {
    const result = await
    mysql.query('SELECT * FROM requestform WHERE sendtoDirector = 1 and approvalDirector = 0 ');
    const session = await validateSession(context);

    const post = JSON.parse(JSON.stringify(result));
    return {
      props: { booksDisplayDirector: post, session },
    };
  } catch (error) {
    return { props: { post: false } };
  }
};
export default function seeAllBooksFinance({ booksDisplayDirector }) {
  console.log(booksDisplayDirector);
  const columns = useMemo(
    () => [
      {
        Header: 'Acquisition #',
        accessor: 'requestID', // accessor is the "key" in the data
      },
      {
        Header: 'Request Date',
        accessor: 'date',
        Cell: ({ row: { values } }) => (
          <div>
            {new Date(values.date).toDateString()}
          </div>
        ),
      },
      {
        Header: 'Athor Name',
        accessor: 'authorName',
      },
      {
        Header: 'Title',
        accessor: 'title', // accessor is the "key" in the data
      },
      {
        Header: 'Publish Date',
        accessor: 'pubdate', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {new Date(values.pubdate).toDateString()}
          </div>
        ),
      },

      {
        Header: 'Department',
        accessor: 'selectDepartment', // accessor is the "key" in the data
      },
      {
        Header: 'Is Rush?',
        accessor: 'rushornrush',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },

      {
        Header: 'Approved By Dean',
        accessor: 'approvalDean', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.approvalDean ? 'Yes' : 'No'}
          </div>
        ),
      },
      {
        Header: 'Approved By Finance',
        accessor: 'approvalFinance', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.approvalFinance ? 'Yes' : 'No'}
          </div>
        ),
      },
      {
        Header: 'Verified By Custodian',
        accessor: 'verified', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.verified ? 'Yes' : 'No'}
          </div>
        ),
      },
      {
        Header: 'Signed By Acquisition',
        accessor: 'signatureAcquisition', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.signatureAcquisition ? 'Signed' : 'No'}
          </div>
        ),
      },
      {
        Header: 'Signed By Dean',
        accessor: 'signatureDean', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.signatureDean ? 'Signed' : 'No'}
          </div>
        ),
      },

      {
        Header: () => 'Action',
        accessor: 'action',
        Cell: ({ row: { values } }) => (
          <Link href={`/request-for-payments/${values.requestID}`}>

            <button
              type="button"
              className="mx-auto mt-3  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                                     text-white bg-indigo-600 hover:bg-indigo-700
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign this Request
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
        <title>Library Acquisition | Signing </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <section className="max-w-screen bg-base min-h-screen mx-auto ">
        <form className=" p-14 bg-blue-200 rounded-md my-16 w- mx-auto h-auto w-auto shadow-lg ">

          <div className="flex-shrink-0 flex content-around items-center">

            <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
            <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
            <h1 className="text-3xl font-bold text-black-600 ">All Books for Payment </h1>
          </div>

          <div className="text-xs shadow-md w-full mt-10 ">

            <span className="block  text-sm font-bold text-black-500 "> All Books</span>

            <ReactTable data={booksDisplayDirector} columns={columns} />
          </div>
        </form>

      </section>
    </>
  );
}
