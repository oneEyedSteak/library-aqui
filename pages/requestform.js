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

    <section className=" mx-auto  md:flex bg-gray-400  min-h-screen ">

      <Head>
        <title>Library Acquisition | Request Form </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16 w-2/3 mx-auto h-auto  ">

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
              initialValue={account.fname + account.mname + account.lname}
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

            <div className="flex-shrink-0 flex content-around items-center">
              <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
              <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
              <h1 className="text-xl mt 4 font-bold text-gray-600 ">Library Acquisition Request Form</h1>

            </div>

            <div className="flex space-y-6 justify-end">

              <label htmlFor="date" className="block">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Requested Date</span>
                <Field
                  className="placeholder-gray-500 text-xs font-bold text-gray-500 w-min placeholder-opacity-50 rounded-md border-gray-300 shadow-sm
                                  leading-none focus:outline-none focus:shadow-outline  mr-4"
                  name="date"
                  component="input"
                  type="date"
                  Required
                />
              </label>

              <label htmlFor="rush" className="mr-2">
                <Field className="text-gray-500 font-bold  form-radio h-3 w-3 rounded-sm" name="rushornrush" component="input" type="radio" value="Rush" />
                <span className="  text-xs font-bold  text-gray-500 mb-1">Rush</span>
              </label>

              <label htmlFor="nrush">
                <Field className=" text-xs font-bold text-gray-500 form-radio h-3 w-3 rounded-sm " name="rushornrush" component="input" type="radio" value="Not Rush" />
                <span className="  text-xs font-bold  text-gray-500 mb-1">Not Rush</span>
              </label>
            </div>
            <label htmlFor="author" className="">
              <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1">Author</span>
              <Field
                className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                component="input"
                name="authorName"
                type="text"
                placeholder="Author"
              />
            </label>

            <label htmlFor="title" className=" ">
              <span className="block  text-xs font-bold text-gray-500 ">Title</span>
              <Field
                className="focus:placeholder-gray-500 text-xs font-bold text-gray-500 placeholder-gray-500 placeholder-opacity-50   pt-3 pb-2 block px-0 mt-0 bg-transparent
                            border-0 border-b-2 w-11/12 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                component="input"
                name="title"
                type="text"
                placeholder="Title"
              />
            </label>

            <div className="flex flex-row space-x-4">
              <label htmlFor="edition" className="mt-11">
                <span className="block  text-xs font-bold text-gray-500 underline">Edition</span>
                <Field
                  className=" focus:placeholder-gray-400  md:w-full text-xs font-bold text-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-36 px-0   mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="edition"
                  type="text"
                  placeholder="Edition"
                />
              </label>

              <label htmlFor="copvol" className="mt-9 ">
                <span className="  text-xs font-bold text-gray-500">Copies/Volumes</span>
                <Field
                  className="text-xs pt-3 pb-2 block md:w-full font-bold text-gray-500  w-36 px-0 mt-0 focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-50   bg-transparent border-0
                                    border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="copvol"
                  type="text"
                  placeholder="#"
                />
              </label>

              <label htmlFor="pdate" className="mt-9 relative z-0 w-36 mb-5 ">
                <span className="  text-xs font-bold text-gray-500">Publication Date</span>
                <Field
                  className="text-xs pt-3 pb-2 block  md:w-full  font-bold text-gray-500  w-full px-0 mt-0 bg-transparent border-0
                                     border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="pubdate"
                  type="date"
                  placeholder="#"
                />
              </label>
            </div>
            <div className="flex space-x-20 content-around items-center mx-auto  mt-3">

              <label htmlFor="chargedto" className="">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Publisher Name</span>
                <Field
                  className="text-xs mr-4  md:w-full  w-96 span-12 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="pubName"
                  type="text"
                  placeholder="Publisher Name"
                />
              </label>
              <label htmlFor="chargedto" className=" ">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Publisher Address</span>
                <Field
                  className="text-xs  md:w-full  mr-4 w-96 span-12 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="pubAddress"
                  type="text"
                  placeholder="Publisher Address"
                />
              </label>
            </div>

            <div className="mt-7">
              <label htmlFor="chargedto" className=" h-48">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Charge to</span>
                <Field
                  className="text-xs mr-4 w-5/12 span-12 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="chargeto"
                  type="text"
                  placeholder="Charge to"
                />
              </label>
            </div>

            <div className="flex  justify-end">
              <label htmlFor="subjectr" className="">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Subject</span>
                <Field
                  className=" mr-8 text-xs  justify-endform-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="subject"
                  type="text"
                  placeholder="Subject "
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
            </div>

            <div className="flex flex-row space-x-5 content-around items-center">
              <label htmlFor="notereqform" className="">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Note:</span>
                <Field
                  className="resize-x border text-xs  rounded-md focus:placeholder-gray-500
                                 placeholder-gray-500 placeholder-opacity-50  "
                  component="textarea"
                  name="notereqform"
                  type="input"
                  placeholder="Note here"
                />
              </label>
            </div>

            <div className="flex flex-row space-x-3 content-around justify-start">

              <label htmlFor="dealer" className="mt-4">
                <span className="  text-xs font-bold text-gray-500 mb-1">Dealer :</span>
                <Field
                  className="  text-xs w-1/10 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="dealer"
                  type="text"
                  placeholder="Dealer"
                />
              </label>

              <label htmlFor="dated" className="mt-4">
                <span className="  text-xs font-bold text-gray-500 mb-1">Dated: </span>
                <Field
                  className="  text-xs form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                             mb-2 bg-transparent border-0 px-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="dated"
                  type="text"
                  placeholder=" Date"
                />
              </label>
              <label htmlFor="SI#:" className="mt-4">
                <span className="  text-xs font-bold text-gray-500 mb-1">SI#:</span>
                <Field
                  className="  text-xs w-1/4 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                  component="input"
                  name="sinumb"
                  type="text"
                  placeholder=" SI# "
                />
              </label>
            </div>

            <div className="mt-4 flex flex-row space-x-4 content-around items-center justify-start">
              <label htmlFor="addedas" className="">
                <span className="  text-xs font-bold  text-gray-500 mb-1">Added as --</span>
              </label>

              <label htmlFor="nrush" className="ml-1">
                <Field
                  className=" text-xs text-gray-500
                                form-radio h-3 w-3 rounded-sm "
                  name="addedAs"
                  component="input"
                  type="radio"
                  value="New Copy"
                />
                <span className="  text-xs font-bold  text-gray-500 mb-1">New Copy</span>
              </label>

              <label htmlFor="nrush" className=" ml-1">
                <Field
                  className=" text-xs text-gray-500
                                form-radio h-3 w-3 rounded-sm "
                  name="addedAs"
                  component="input"
                  type="radio"
                  value="New Edition"
                />
                <span className="  text-xs font-bold  text-gray-500 mb-1 mr-1 ">New Edition</span>
              </label>

              <label htmlFor="nrush" className="mr-1">
                <Field
                  className="ml-6 text-xs text-gray-500
                                form-radio h-3 w-3 rounded-sm "
                  name="addedAs"
                  component="input"
                  type="radio"
                  value="Replacement"
                />
                <span className="  text-xs font-bold  text-gray-500 mb-1"> Replacement</span>
              </label>
            </div>

            <div className="block text-right mt-5">
              <button
                type="submit"
                className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
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
