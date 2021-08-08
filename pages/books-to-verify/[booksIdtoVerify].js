
import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import api from '../../lib/api';

export const getServerSideProps = async (context) => {
  const { booksIdtoVerify } = context.query;
  const { data } = await api.get(`/api/bookstoverify/${booksIdtoVerify}`);

  console.log(data);

  return {
    props: { booksIdtoVerify: data },

  };
};

export default function RequestForm({ booksIdtoVerify }) {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/bookUpdateVerified', payload);

    alert(data.message);
  };
  const [session] = useSession();
  return (

    <section className=" mx-auto  md:flex bg-gradient-to-br from-blue-900 to-yellow-600 min-h-screen ">

      <Head>
        <title>Library Acquisition | Verify Books</title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {!session && (
        <>
          <div className=" mx-auto p-10 md:flex bg-white  border-blue-900 border-1 rounded">
            <span className="
         text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Please Sign In First
            </span>
          </div>
        </>
      )}

      {session && (
      <>
        <Form
          onSubmit={handleOnSubmit}
          render={({ handleSubmit }) => (

            <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16  mx-auto min-h-screen ">

              <div className="flex-shrink-0 flex content-around items-center">

                <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                <h1 className="text-xl mt 4 font-bold text-gray-600 ">Library Acquisition Books to Verify</h1>

              </div>

              <div className="flex space-x-6 content-around items-center mt-10 justify-end">

                <label htmlFor="date" className="block ">
                  <span className="block  text-xs font-bold underline text-gray-500 mb-1">Verified Date</span>
                  <Field
                    className="text-xs font-bold text-gray-500 placeholder-gray-500  w-min placeholder-opacity-50 border-0  border-b-1 focus:outline-none focus:ring-0 focus:border-black  border-gray-300 shadow-sm
                                  leading-none focus:shadow-outline  mr-4"
                    name="verifiedDate"
                    component="input"
                    type="date"
                    required
                  />
                </label>

              </div>
              <br />
              <label htmlFor="author" className="">
                <span className="blockg hover:textColor-red  text-xs font-bold text-gray-500 mb-1">User ID</span>
                <Field
                  className="form-text  text-xs  font-bold   text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="userID"
                  type="text"
                  initialValue={booksIdtoVerify.userID}
                  disabled

                />
              </label>
              
              <div className="flex space-x-6 content-around items-center mt-6">

                <label htmlFor="author" className="">
                  <span className="blockg hover:textColor-red  text-xs font-bold text-gray-500 mb-1">Name</span>
                  <Field
                    className="form-text  text-xs  font-bold   text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="requestee"
                    type="text"
                    initialValue={booksIdtoVerify.requestee}
                    disabled
                  />
                </label>

              </div>

              <label htmlFor="author" className="">
                <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1">Author</span>
                <Field
                  className=" text-xs font-bold text-gray-500 w-full focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="Author"
                  type="text"
                  placeholder="Author"
                  initialValue={booksIdtoVerify.authorName}
                  disabled
                />
              </label>

              <label htmlFor="author" className="">
                <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1">Title</span>
                <Field
                  className="form-text text-xs font-bold text-gray-500 w-full focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="Title"
                  type="text"
                  placeholder="Title"
                  initialValue={booksIdtoVerify.title}
                  disabled
                />
              </label>

              <div className="flex flex-row space-x-20">

                <label htmlFor="edition" className="mt-6">
                  <span className="block  text-xs font-bold text-gray-500 ">Number of Copies</span>
                  <Field
                    className="  text-xs font-bold text-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-36 pl-16  mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="NumberOfCopies"
                    type="text"
                    initialValue={booksIdtoVerify.copvol}
                    disabled
                  />
                </label>

                <label htmlFor="edition" className="mt-6 ml">
                  <span className="block  text-xs font-bold text-gray-500 ">Edition</span>
                  <Field
                    className="focus:placeholder-gray-400 text-xs font-bold text-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-36  mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="Edition"
                    type="text"
                    initialValue={booksIdtoVerify.edition}
                    disabled
                  />
                </label>

              </div>
              <br />

              <label htmlFor="notereqform" className="">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Note:</span>
                <Field
                  className="resize-none w-56   border-0 block  text-xs font-bold text-gray-500  focus:outline-none
                                 appearance-none  focus:ring-0 focus:border-black focus:placeholder-gray-500
                                 placeholder-gray-500 placeholder-opacity-50 "
                  component="textarea"
                  name="noteDeanbook"
                  type="input"
                  initialValue={booksIdtoVerify.notereqform}
                  disabled
                />
              </label>
              <label htmlFor="enumtitle" className="">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Existing Number of titles</span>
                <Field
                  className=" text-xs  focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="enumtitle"
                  type="text"
                  placeholder="Existing Number of titles"
                />
              </label>

              <div className="flex space-x-6 content-around items-center mt-10 justify-start">

                <label htmlFor="publicationDate" className="mt-6 ml">
                  <span className="block  text-xs font-bold text-gray-500 ">Publication Date</span>
                  <Field
                    className="text-s focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-36 px-0 font-bold text-gray-500  mt-0 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="publicationDate"
                    type="text"
                    initialValue={new Date(booksIdtoVerify.pubdate).toDateString()}
                    disabled
                  />
                </label>
       

                <label htmlFor="selectDosition" className="block mt-2">
                  <span className="block  text-xs font-bold text-gray-500 p">Verify</span>
                  <Field name="verified" component="select" className="  text-xs font-bold text-gray-500 rounded-md border-gray-300  mt-1 pr-36 ">

                    <option value=""> </option>
                    <option className="block text-xs font-bold text-gray-500" value="0">Existing</option>
                    <option className="block text-xs font-bold text-gray-500" value="1">Verified</option>
                  </Field>
                </label>
              </div>

              <label htmlFor="requesID" className="">
                <span className="blockg hover:textColor-red  text-xs font-bold text-gray-500 mb-1" />
                <Field
                  className="form-text  text-xs  font-bold   text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="requestID"
                  type="text"
                  initialValue={booksIdtoVerify.requestID}
                />
              </label>
              <div className="block text-right mt-5">
                <button
                  type="submit"
                  className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Request

                </button>
              </div>

            </form>
          )}
        />
      </>
      )}

    </section>
  );
}
