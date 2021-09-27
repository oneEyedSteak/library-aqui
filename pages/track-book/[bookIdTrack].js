import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import api from '../../lib/api';

export const getServerSideProps = async (context) => {
  const { bookIdTrack } = context.query;
  const { data } = await api.get(`/api/booktrack/${bookIdTrack}`);

  console.log(data);

  return {
    props: { bookIdTrack: data },

  };
};

export default function RequestForm({ bookIdTrack }) {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/bookUpdatePresident', payload);

    alert(data.message);
  };

  const [session] = useSession();
  return (

    <section className=" mx-auto bg-gray-500   md:flex min-h-screen ">

      <Head>
        <title>Library Acquisition | Entry of Books </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {!session && (
        <>
          <div className=" mx-auto p-10 md:flex bg-gray-500  border-blue-900 border-1 rounded">
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

              <section className=" mx-auto  md:flex bg-gray-500  min-h-screen ">

                <Head>
                  <title>Library Acquisition | Request Form </title>
                  <meta name="keywords" content="someting" />
                  <link rel="icon" href="/icon.ico" />
                </Head>
                <Form
                  onSubmit={handleOnSubmit}
                  render={({ handleSubmit }) => (

                    <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16 w-auto mx-auto h-auto  ">

                      <div className="flex space-y-6 justify-start">

                        <label htmlFor="date" className="block mt-6 mr-3">
                          <span className="block  text-xs font-bold text-gray-500 mb-1">Requested Date</span>
                          <Field
                            className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none
                            focus:ring-0 focus:border-black border-gray-400"
                            name="date"
                            component="input"
                            type="text"
                            Required
                            initialValue={new Date(bookIdTrack.date).toDateString()}
                            disabled
                          />
                        </label>
                        <label htmlFor="date" className="block">
                          <span className="block  text-xs font-bold text-gray-500 mb-1">Rush or Not Rush</span>
                          <Field
                            className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none
                            focus:ring-0 focus:border-black border-gray-400"
                            name="rushornrush"
                            component="input"
                            type="text"
                            Required
                            initialValue={bookIdTrack.rushornrush}
                            disabled
                          />
                        </label>

                      </div>

                      <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1"> Requested By</span>

                      <label htmlFor="title" className="mt-2 ">
                        <span className="block mt-2 text-xs font-bold text-gray-500 ">ID#</span>
                        <Field
                          className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                          block px-0 mb-2 bg-transparent border-0 border-b-2
                          appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="userID"
                          type="text"
                          placeholder="Title"
                          initialValue={bookIdTrack.userID}
                          disabled
                        />
                      </label>

                      <Field
                        className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
      block px-0 mb-2 bg-transparent border-0 border-b-2
      appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                        component="input"
                        name="requestee"
                        type="text"
                        initialValue={bookIdTrack.requestee}
                        disabled
                      />

                      <Field
                        className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
      block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                        component="input"
                        name="selectDepartment"
                        type="hidden"
                        initialValue={bookIdTrack.selectDepartment}
                        disabled
                      />
                      <Field
                        className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
      block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                        component="input"
                        name="selectPosition"
                        type="text"
                        initialValue={bookIdTrack.selectPosition}
                        disabled
                      />
                      <br />
                      <label htmlFor="author" className="">
                        <span className="block hover:textColor-red text-xs font-bold text-gray-500 mb-1">Author</span>
                        <Field
                          className="form-text text-xs font-bold text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="authorName"
                          type="text"
                          placeholder="Author"
                          initialValue={bookIdTrack.authorName}
                          disabled
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
                          initialValue={bookIdTrack.title}
                          disabled
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
                            initialValue={bookIdTrack.edition}
                            disabled
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
                            initialValue={bookIdTrack.copvol}
                            disabled
                          />
                        </label>

                        <label htmlFor="pdate" className="mt-9 relative z-0 w-36 mb-5 ">
                          <span className="  text-xs font-bold text-gray-500">Publication Date</span>
                          <Field
                            className="text-xs pt-3 pb-2 block  md:w-full  font-bold text-gray-500  w-full px-0 mt-0 bg-transparent border-0
                                     border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                            component="input"
                            name="pubdate"
                            type="text"
                            placeholder="#"
                            initialValue={new Date(bookIdTrack.pubdate).toDateString()}
                            disabled
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
                            initialValue={bookIdTrack.pubName}
                            disabled
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
                            initialValue={bookIdTrack.pubAddress}
                            disabled
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
                            initialValue={bookIdTrack.chargeto}
                            disabled
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
                            initialValue={bookIdTrack.notereqform}
                            disabled
                          />
                        </label>
                      </div>

                      <div className="flex pl-2 justify-start">
                        <label htmlFor="subjectr" className="">
                          <span className="block  text-xs font-bold text-gray-500 mb-1">Subject</span>
                          <Field
                            className=" mr-8 text-xs  justify-endform-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                            component="input"
                            name="subject"
                            type="text"
                            placeholder="Subject "
                            initialValue={bookIdTrack.subject}
                            disabled
                          />
                        </label>
                        <label htmlFor="dated" className="mb-1">
                          <span className="  text-xs font-bold text-gray-500 mb-">Price </span>
                          <Field
                            className=" mr-8 text-xs  justify-endform-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3
                                                        block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                            component="input"
                            name="price"
                            type="text"
                            placeholder=" Date"
                            initialValue={bookIdTrack.price}
                            disabled
                          />
                        </label>
                        <label htmlFor="subjectr" className="">
                          <span className="block  text-xs font-bold text-gray-500 mb-1">Copies/Number of Volume</span>
                          <Field
                            className=" mr-8 text-xs  justify-endform-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                            component="input"
                            name="copvol "
                            type="text"
                            placeholder="Subject "
                            initialValue={bookIdTrack.copvol}
                            disabled
                          />
                        </label>

                      </div>
                      <div className="flex space-y-6 justify-start">

                        {bookIdTrack.signatureDean && (
                        <label htmlFor="requesID" className="mt-6">
                          <span className="  text-xs font-bold text-gray-500 p">Dean Signature</span>
                          <img
                            src={bookIdTrack.signatureDean}
                            alt="College Dean Signature"
                            width="100"
                            height="100"
                            className=" border-solid border-4 border-gray-blue-900"
                          />
                        </label>
                        )}
                        <label htmlFor="requesID" className="">
                          <span className="  text-xs font-bold text-gray-500 p">Acquisition Signature</span>
                          <img
                            src={bookIdTrack.signatureAcquisition}
                            alt="College Dean Signature"
                            width="100"
                            height="100"
                            className=" mt-2 border-solid border-4 border-gray-blue-900"
                          />
                        </label>
                        <label htmlFor="requesID" className="">
                          <span className="  text-xs font-bold text-gray-500 p">VPAA Signature</span>
                          <img
                            src={bookIdTrack.signatureVPAA}
                            alt="College Dean Signature"
                            width="100"
                            height="100"
                            className=" mt-2 border-solid border-4 border-gray-blue-900"
                          />
                        </label>
                        <label htmlFor="requesID" className="">
                          <span className="  text-xs font-bold text-gray-500 p">Finance Signature</span>
                          <img
                            src={bookIdTrack.signatureFinance}
                            alt="College Dean Signature"
                            width="100"
                            height="100"
                            className=" mt-2 border-solid border-4 border-gray-blue-900"
                          />
                        </label>

                        <label htmlFor="requesID" className="">
                          <span className="  text-xs font-bold text-gray-500 p">Director Signature</span>
                          <img
                            src={bookIdTrack.signtureDirector}
                            alt="College Dean Signature"
                            width="100"
                            height="100"
                            className=" mt-2 border-solid border-4 border-gray-blue-900"
                          />
                        </label>
                      </div>

                      <label htmlFor="dated" className="mt-4">
                        <span className="block  text-xs font-bold text-gray-500 mb-1">Approved by: </span>
                      </label>
                      <label htmlFor="dealer" className="mt-4">
                        <span className="block  text-xs font-bold text-gray-500 mb-1">Finance :</span>
                        <Field
                          className="  text-xs w-1/10 form-text focus:placeholder-gray-500 placeholder-gray-500
                                                        placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="approvalFinance  "
                          type="text"
                          placeholder="Dealer"
                          initialValue={bookIdTrack.approvalFinance}
                          disabled
                        />
                      </label>
                      <label htmlFor="dealer" className="mt-4">
                        <span className=" block text-xs font-bold text-gray-500 mb-1">Dean :</span>
                        <Field
                          className="  text-xs w-1/10 form-text focus:placeholder-gray-500 placeholder-gray-500
                                                        placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="approvalDean"
                          type="text"
                          placeholder="Dealer"
                          initialValue={bookIdTrack.approvalDean}
                          disabled
                        />
                      </label>
                      <label htmlFor="dealer" className="mt-4">
                        <span className=" block text-xs font-bold text-gray-500 mb-1">President :</span>
                        <Field
                          className="  text-xs w-1/10 form-text focus:placeholder-gray-500
                                                         placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="approvalPresident   "
                          type="text"
                          placeholder="Dealer"
                          initialValue={bookIdTrack.approvalPresident}
                          disabled
                        />
                      </label>

                      <label htmlFor="SI#:" className="mt-4">
                        <span className=" block text-xs font-bold text-gray-500 mb-1">VPAA:</span>
                        <Field
                          className="  text-xs w-auto form-text focus:placeholder-gray-500 placeholder-gray-500
                                                        placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="approvalVpaa "
                          type="text"
                          placeholder=" SI# "
                          initialValue={bookIdTrack.approvalVpaa}
                          disabled
                        />
                      </label>
                      <label htmlFor="dealer" className="mt-4">
                        <span className="block  text-xs font-bold text-gray-500 mb-1">Director  :</span>
                        <Field
                          className="  text-xs w-1/10 form-text focus:placeholder-gray-500 placeholder-gray-500
                                                        placeholder-opacity-50  pt-3 pb-2
                             px-0 mb-2 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                          component="input"
                          name="approvalDirector "
                          type="text"
                          placeholder="Dealer"
                          initialValue={bookIdTrack.approvalDirector}
                          disabled
                        />
                      </label>
                      {/*
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
            </div> */}

                      {/* <div className="block text-right mt-5">
                                                <button type="button" className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => window.print()} >Print this page</button>

                                            </div> */}

                    </form>
                  )}
                />

              </section>
            )}
          />
        </>
      )}

    </section>
  );
}
