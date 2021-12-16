import { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import validateSession from '../lib/session';
import mysql from '../providers/mysql';
import ReactTable from '../components/table';

export const getServerSideProps = async (context) => {
  try {
    const { account } = await validateSession(context);

    const result = await mysql.query('SELECT * FROM requestform WHERE approvalFinancePayment = 1 AND approvalDirector = 1 AND approvalVpaaPayment = 1 AND approvalVpaa = 1 AND status = 0 ');

    const post = JSON.parse(JSON.stringify(result));
    return {
      props: { entryBooks: post, account },
    };
  } catch (error) {
    return { props: { post: false } };
  }
};

export default function seeAllEntryForm({ entryBooks }) {
  console.log(entryBooks);
  const postRequestedBooks = useMemo(
    () => [
      {
        Header: 'Request ID',
        accessor: 'requestID', // accessor is the "key" in the data
      },
      {
        Header: 'Requested Date',
        accessor: 'date', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {new Date(values.date).toDateString()}
          </div>
        ),
      },
      {
        Header: 'Author',
        accessor: 'authorName', // accessor is the "key" in the data
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
        Header: 'User ID',
        accessor: 'userID', // accessor is the "key" in the data
      },
      {
        Header: 'Requested By',
        accessor: 'requestee', // accessor is the "key" in the data
      },
      {
        Header: 'Position',
        accessor: 'selectPosition', // accessor is the "key" in the data
      },
      {
        Header: 'Department',
        accessor: 'selectDepartment', // accessor is the "key" in the data
      },

      {
        Header: 'Note',
        accessor: 'notereqform', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
        accessor: 'price', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => `₱${values.price}`,
      },
      {
        Header: 'Approved By Director',
        accessor: 'approvalDirector', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.approvalDirector ? 'Yes' : 'No'}
          </div>
        ),
      },
      {
        Header: 'Approved By President',
        accessor: 'approvalPresident', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.approvalPresident ? 'Yes' : 'No'}
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
        Header: 'Approved By Acquisition',
        accessor: 'approvalAcqui', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.approvalAcqui ? 'Yes' : 'No'}
          </div>
        ),
      },
      {
        Header: 'Status',
        accessor: 'status', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => (
          <div>
            {values.status === 0 && 'Processing'}
            {values.status === 1 && 'Arrived'}
            {values.status === 2 && 'Confirmed'}
            {values.status === 3 && 'Published'}
          </div>
        ),
      },
      {
        Header: () => 'Action',
        accessor: 'action',
        Cell: ({ row: { values } }) => (
          <Link href={`/Entry-Book/${values.requestID}`}>
            <div className="  bg-gray-100  text-center  border border-transparent shadow-sm text-sm  rounded-md
                       hover:bg-base-700
                    focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer text-gray-600
                flex "
            >
              Update Request

              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
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
      <section className="max-w-screen bg-base min-h-screen mx-auto ">

        <form className=" p-14 bg-white rounded-md my-16 w- mx-auto h-auto w-auto shadow-lg ">
          <div className="flex-shrink-0 flex content-around items-center">

            <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
            <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
            <h1 className="text-xl  text-gray-600 ">All Requested Books</h1>

          </div>

          <div className="text-xs shadow-md w-full mt-10 p">
            <label htmlFor="selectDepartment" className="block ">
              <span className="block  text-xs  text-gray-500 "> All Books</span>

              <ReactTable data={entryBooks} columns={postRequestedBooks} />
            </label>
          </div>

        </form>
      </section>
    </>
  );
}
