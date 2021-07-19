import Head from 'next/head';
import validateSession from '../lib/session';
import mysql from '../providers/mysql';

export const getServerSideProps = async (context) => {
  try {
    const { account } = await validateSession(context);

    console.log(account);
    const result = await mysql.query(`SELECT * FROM requestform WHERE approvalDean = 0 AND 
    selectDepartment ='${account.selectDepartment}'`);

    const post = JSON.parse(JSON.stringify(result));
    return {
      props: { post },
    };
  } catch (error) {
    return { props: { post: false } };
  }
};

export default function seeAllBooksDean(props) {
  const { post } = props;
  console.log(post);

  return (
    <>
      <Head>
        <title>Library Acquisition | Books Requested </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <section className="max-w-screen from-blue-900 to-yellow-600 bg-gradient-to-br  min-h-screen mx-auto " />
    </>
  );
}
