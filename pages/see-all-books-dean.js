import { request } from 'http';
import Head from 'next/head';
import validateSession from '../lib/session';
import mysql from '../providers/mysql';



export const getServerSideProps = async (context) => {

  try {
    const session  = await validateSession(context);

    const  result = await mysql.query(`SELECT * FROM requestform WHERE approvalDean = 0 && 
    selectDepartment = ('${session.selectDepartment}')`);
  ``
    let post = JSON.parse(JSON.stringify(result));
    return {
      props: { post },
    };
  } catch (error) {
    return { props: { post:false } };
  };
};

export default function seeAllBooksDean(props ) {

  const { post } = props;
  console.log(post)

  return (
    <>
      <Head>
        <title>Library Acquisition | Books Requested </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <section className="max-w-screen from-blue-900 to-yellow-600 bg-gradient-to-br  min-h-screen mx-auto ">
       
      </section>
    </>
  );
}
{
  // requestBook && requestBook.map((reqbook) => (
  //   <RequestedCards requestBook={reqbook} />
  // ))

}

{/* <div className=" mx-auto min-w-full  sm:px-6 ">
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


</div> */}