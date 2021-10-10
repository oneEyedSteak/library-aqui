import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import api from '../../lib/api';

export const getServerSideProps = async (context) => {
  const { bookId } = context.query;
  const { data } = await api.get(`/api/books/${bookId}`);

  console.log(data);

  return {
    props: { book: data },

  };
};

export default function RequestForm({ book }) {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/bookUpdate', payload);

    alert(data.message); // eslint-disable-line no-alert
  };
  const [session] = useSession();

  return (

    <section className=" mx-auto  md:flex bg-base min-h-screen">

      <Head>
        <title>Library Acquisition | Entry of Books </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {!session && (
        <>
          <div className=" mx-auto p-10 md:flex   border-blue-900 border-1 rounded">
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

              <form onSubmit={handleSubmit} className=" px-14 pt-8 pb-8 bg-white rounded-md my-16 + mx-auto min-h-screen w-full">

                <div className="flex-shrink-0 flex content-around items-center">

                  <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                  <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                  <h1 className="text-xl mt 4 font-bold text-gray-600 ">Library Acquisition Entry of Books</h1>

                </div>
                <label htmlFor="requesID" className="">
                  <span className="blockg hover:textColor-red  text-xs font-bold text-gray-500 mb-1" />
                  <Field
                    className="form-text  text-xs  font-bold   text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="requestID"
                    type="hidden"
                    initialValue={book.requestID}
                  />
                </label>

                <div className="flex space-x-6 content-around items-center mt-10 justify-end">

                  <label htmlFor="date" className="block ">
                    <span className="text-xs text-gray-500">Entry Date</span>
                    <Field
                      className=" text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                      name="entryDate"
                      component="input"
                      type="date"
                      required
                    />
                  </label>

                </div>
                <br />

                <div className="grid grid-cols-3 space-x-6 shadow-sm border-1 mt-6">
                  <label htmlFor="author" className="">
                    <span className="text-xs text-gray-500 mb-1">Author</span>
                    <Field
                      className=" text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                      component="input"
                      name="Author"
                      type="text"
                      initialValue={book.authorName}
                      disabled
                    />
                  </label>
                  <label htmlFor="author" className="">
                    <span className="text-xs text-gray-500 mb-1">Title</span>
                    <Field
                      className=" text-gray-500 rounded-md border-gray-300  w-full
                  focus:border-gray-500 placeholder-gray-700 border-0 bg-gray-50"
                      component="input"
                      name="Title"
                      type="text"
                      initialValue={book.title}
                      disabled
                    />
                  </label>
                </div>
                <div />

                <div className="flex flex-row space-x-20">

                  <label htmlFor="edition" className="mt-6">
                    <span className="text-xs text-gray-500  ">Number of Copies</span>
                    <Field
                      className=" text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                      component="input"
                      name="NumberOfCopies"
                      type="text"
                      initialValue={book.copvol}
                      disabled
                    />
                  </label>

                  <label htmlFor="edition" className="mt-6 ml">
                    <span className="  text-xs text-gray-500 ">Edition</span>
                    <Field
                      className=" text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                      component="input"
                      name="Edition"
                      type="text"
                      initialValue={book.edition}
                      value={book.edition}
                      disabled
                    />
                  </label>

                </div>
                <br />

                <label htmlFor="notereqform" className="">
                  <span className="  text-xs text-gray-500 mb-1">Note:</span>
                  <Field
                    className=" text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                    component="textarea"
                    name="noteEntry"
                    type="input"
                    initialValue={book.notereqform}
                    disabled
                  />
                </label>

                <div className="flex space-x-6 content-around items-center mt-10 justify-start">

                  <label htmlFor="publicationDate" className="mt-6 ml">
                    <span className="  text-xs  text-gray-500 ">Publication Date</span>
                    <Field
                      className=" text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                      component="input"
                      name="publicationDate"
                      type="text"
                      initialValue={new Date(book.pubdate).toDateString()}
                      disabled
                    />
                  </label>

                </div>

                <div className="grid-cols-2 mt-4 space-y-1.5  justify-end">
                <label htmlFor="selectDosition" className=" ">
                  <span className="block  text-xs text-gray-500 p">For Approval</span>
                  <Field name="status" component="select" className="  text-gray-500 rounded-md border-gray-300  w-1/4
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50 ">

                    <option value=""> </option>
                    <option className="block text-xs font-bold text-gray-400" value="0">On Going</option>
                    <option className="block text-xs font-bold text-gray-400" value="1">Approved</option>
                  </Field>
                </label>
                <label htmlFor="edition" className="mt-16">
                  <span className="  block text-xs  text-gray-500 ">Price</span>
                  <Field
                    className=" text-gray-500 rounded-md border-gray-300  w-auto
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50  bg-gray-50"
                    component="input"
                    name="price"
                    type="text"
                    placeholder="Enter Price"
                  />
                </label>
          
                </div>
                <div className=" text-right mt-5">
                  <button
                    type="submit"
                    className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-indigo-700
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
