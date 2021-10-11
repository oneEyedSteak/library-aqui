import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import validateSession from '../lib/session';

export const getServerSideProps = async (context) => {
  const { account } = await validateSession(context);

  return {
    props: { account },
  };
};

export default function RequestForm({ account }) {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/requestform', payload);

    alert(data.message);// eslint-disable-line no-alert
  };
  return (

    <section className=" mx-auto  md:flex bg-base  min-h-screen ">

      <Head>
        <title>Library Acquisition | Request Form </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16 w- mx-auto h-auto w-3/5 shadow-lg ">

            {/* //hidden stuff starts here */}
            <Field
              className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
              component="input"
              name="userID"
              type="hidden"
              initialValue={account.id}
            />
            <Field
              className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
              component="input"
              name="requestee"
              type="hidden"
              initialValue={account.fname + account.lname}
            />

            <Field
              className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
              component="input"
              name="selectDepartment"
              type="hidden"
              initialValue={account.selectDepartment}
            />
            <Field
              className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
              component="input"
              name="selectPosition"
              type="hidden"
              initialValue={account.selectPosition}
            />
            {/* Hidden stuff ends here */}

            <div className="flex-shrink-0 flex content-around items-center">
              <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
              <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
              <h1 className="text-xl mt-4  text-gray-600 ">Library Acquisition Request Form</h1>

            </div>

            <div className="flex space-y-8 justify-end">

              <label htmlFor="date" className="block mr-4">
                <span className="block  text-xs  text-gray-500 mb-1">Requested Date</span>
                <Field
                  className="text-gray-400 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-701 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50  "
                  name="date"
                  component="input"
                  type="date"
                  required
                />
              </label>

              <label htmlFor="rush" className="">
                <Field className="text-gray-500   form-radio h-3 w-3 rounded-sm" name="rushornrush" component="input" type="radio" value="Rush" required />
                <span className="  text-xs  text-gray-500 mb-1">Rush</span>
              </label>

              <label htmlFor="nrush">
                <Field className=" text-xs  text-gray-500 form-radio h-3 w-3 rounded-sm " name="rushornrush" component="input" type="radio" value="Not Rush" />
                <span className="  text-xs   text-gray-500 mb-">Not Rush</span>
              </label>
            </div>

            {/* Grid Starts here */}

            <div className=" grid grid-cols-3  w-full  gap-4 rows-2 ">

              <label htmlFor="author" className="">
                <span className="block hover:textColor-red text-sm mt-1  text-gray-500 mb-">Author</span>
                <Field
                  className="mt- rounded-md border-gray-300 shadow-sm w-full
                focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 text-gray-500 bg-gray-50"
                  component="input"
                  name="authorName"
                  type="text"
                />
              </label>

              <label htmlFor="title" className=" ">
                <span className="block  text-xs  text-gray-500 mt-2">Title</span>
                <Field
                  className="mt- rounded-md border-gray-300 shadow-sm w-full
                focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-500 placeholder-opacity-50  text-gray-500 bg-gray-50"
                  component="input"
                  name="title"
                  type="text"

                />
              </label>
              <div>
                <label htmlFor="chargedto" className="">
                  <span className="block  text-xs  text-gray-500 mt-2">Publisher Name</span>
                  <Field
                    className="mt- rounded-md border-gray-300 shadow-sm w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-500 placeholder-opacity-50 text-gray-500 bg-gray-50"
                    component="input"
                    name="pubName"
                    type="text"
                  />
                </label>
              </div>
              <div className=" col-start-1 col-span-2">
                <label htmlFor="pbadress" className="">
                  <span className="block hover:textColor-red text-xs  text-gray-500 mb-">Publisher Address</span>
                  <Field
                    className="mt- rounded-md border-gray-300 shadow-sm w-full
                focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 text-gray-500 bg-gray-50"
                    component="input"
                    name="pubAddress"
                    type="text"
                  />
                </label>
              </div>

              <label htmlFor="pdate" className="mt-">
                <span className=" block text-xs text-gray-500">Publication Date</span>
                <Field
                  className="  rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 text-gray-500 bg-gray-50"
                  component="input"
                  name="pubdate"
                  type="date"
                  required
                />
              </label>
            </div>

            {/* griid ends here */}

            <div className="grid grid-cols-3  gap-4 mt-8 ">
              <label htmlFor="edition" className="">
                <span className=" text-xs  text-gray-500 ">Edition</span>
                <Field
                  className=" text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                  component="input"
                  name="edition"
                  type="text"
                />
              </label>

              <div className="col-span-1">
                <label htmlFor="copvol" className="mt-3">
                  <span className=" block text-xs  text-gray-500">Copies/Volumes</span>
                  <Field
                    className="text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                    component="input"
                    name="copvol"
                    type="text"
                  />
                </label>
              </div>

              <div className="col-start-1 col-span-2">
                <label htmlFor="chargedto" className=" ">
                  <span className="  text-xs  text-gray-500 mb-">Charge to</span>
                  <Field
                    className="text-gray-500 w-full rounded-md border-gray-300
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                    component="input"
                    name="chargeto"
                    type="text"
                  />
                </label>
              </div>
              <div className="col-start-2">
                <label htmlFor="subjectr" className="">
                  <span className=" text-xs text-gray-500">Subject</span>
                  <Field
                    className=" text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                    component="input"
                    name="subject"
                    type="text"
                    placeholder="Subject "
                  />
                </label>

              </div>
            </div>
            <div className="flex justify-end space-x-5 content-end items-end">
              <label htmlFor="notereqform" className="">
                <span className="block  text-xs  text-gray-500 mb-1">Note:</span>
                <Field
                  className="h-auto w-60  text-sm text-gray-400 rounded-md border-gray-300
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50  "
                  component="textarea"
                  name="notereqform"
                  type="input"
                />
              </label>
            </div>
            <div className="block text-right mt-5">
              <button
                type="submit"
                className=" mx-auto text-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondary hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Request
              </button>
            </div>

          </form>
        )}
      />

    </section>
  );
}
