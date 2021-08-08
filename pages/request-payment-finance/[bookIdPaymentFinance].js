import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import Popup from 'reactjs-popup';
import { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import api from '../../lib/api';
import dataURItoBlob from '../../lib/date-uri-to-blob';

export const getServerSideProps = async (context) => {
  const { bookIdPaymentFinance } = context.query;
  const { data } = await api.get(`/api/bookrequestpaymentvpaa/${bookIdPaymentFinance}`);
  console.log(data);

  return {
    props: { bookIdPaymentFinance: data },

  };
};
export default function RequestForm({ bookIdPaymentFinance }) {
  const [imageURL, setImageURL] = useState(null);

  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/bookPaymentFinance', {
      ...payload,
      imageURL,
    });

    alert(data.message); // eslint-disable-line no-alert
  };

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();

  const save = async () => {
    try {
      const blob = dataURItoBlob(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
      const img = new File([blob], 'fileName.jpg', { type: 'image/jpeg', lastModified: new Date() });

      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      };

      const formData = new FormData();
      formData.append('file', img);

      const { data } = await api.post('/api/upload', formData, config);

      setImageURL(data.filePath);
    } catch (error) {
      alert('Error');// eslint-disable-line no-alert
    }
  };
  const [session] = useSession();
  return (

    <section className=" mx-auto  md:flex bg-gradient-to-br from-blue-900 to-yellow-600 min-h-screen ">

      <Head>
        <title>Library Acquisition | Request Payment </title>
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
                  <h1 className="text-xl mt 4 font-bold text-gray-600 ">Approve Payment</h1>
                </div>
                <div className="flex space-x-6 content-around items-center mt-10 justify-end">

                  <label htmlFor="date" className="block ">
                    <span className="block  text-xs font-bold underline text-gray-500 mb-1">Aprrove Date</span>
                    <Field
                      className="text-xs font-bold text-gray-500 placeholder-gray-500  w-min placeholder-opacity-50 border-0  border-b-1 focus:outline-none focus:ring-0 focus:border-black  border-gray-300 shadow-sm
                                  leading-none focus:shadow-outline  mr-4"
                      name="approvalFinanceDatePayment"
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
                    initialValue={bookIdPaymentFinance.userID}
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
                      initialValue={bookIdPaymentFinance.requestee}
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
                    initialValue={bookIdPaymentFinance.authorName}
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
                    initialValue={bookIdPaymentFinance.title}
                    disabled
                  />
                </label>
                <div className="flex flex-row space-x-20">
                  <label htmlFor="edition" className="mt-6">
                    <span className="block  text-xs font-bold text-gray-500 ">Number of Copies</span>
                    <Field
                      className="  text-xs font-bold text-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-auto pl-16  mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                      component="input"
                      name="NumberOfCopies"
                      type="text"
                      initialValue={bookIdPaymentFinance.copvol}
                      disabled
                    />
                  </label>
                  <label htmlFor="edition" className="mt-6 ml">
                    <span className="block  text-xs font-bold text-gray-500 ">Edition</span>
                    <Field
                      className="focus:placeholder-gray-400 text-xs font-bold mb-4 text-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-auto mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                      component="input"
                      name="Edition"
                      type="text"
                      initialValue={bookIdPaymentFinance.edition}
                      disabled
                    />
                  </label>
                </div>
                <label htmlFor="edition" className="mt-6 ">
                  <span className="block  text-xs font-bold text-gray-500 ">Price</span>
                  <Field
                    className="focus:placeholder-gray-400 text-xs font-bold text-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-auto mt-0 bg-transparent border-0 border-b-0
                                         underline appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="price"
                    type="text"
                    initialValue={bookIdPaymentFinance.price}
                    disabled
                  />
                </label>
                <small className="font-bold  block  text-xs text-gray-600 mt-4 mr-2 ">Approved By:</small>
                <span className="font-thin block mt-2">
                  President:
                  {' '}
                  {bookIdPaymentFinance.approvalPresident}
                </span>
                <span className="font-thin block mt-1">
                  Finance:
                  {' '}
                  {bookIdPaymentFinance.approvalPresident}
                </span>
                <br />
                <label htmlFor="notereqform" className="">
                  <span className="block  text-xs font-bold text-gray-500 mb-1">Note:</span>
                  <Field
                    className="resize-none w-auto   border-0 block  text-xs font-bold text-gray-500  focus:outline-none
                                 appearance-none  focus:ring-0 focus:border-black focus:placeholder-gray-500
                                 placeholder-gray-500 placeholder-opacity-50 "
                    component="textarea"
                    name="noteDeanbook"
                    type="input"
                    initialValue={bookIdPaymentFinance.notereqform}
                    disabled
                  />
                </label>
                <label htmlFor="requesID" className="">
                  <span className="  text-xs font-bold text-gray-500 p">Dean Signature</span>
                  <img src={bookIdPaymentFinance.signatureDean} alt="College Dean Signature" width="100" height="100" className=" mt-2 border-double border-4 border-gray-blue-900" />
                </label>
                <label htmlFor="requesID" className="">
                  <span className="  text-xs font-bold text-gray-500 p">Acquisition Signature</span>
                  <img src={bookIdPaymentFinance.signatureAcquisition} alt="College Dean Signature" width="100" height="100" className=" mt-2 border-double border-4 border-gray-blue-900" />
                </label>
                <label htmlFor="requesID" className="">
                  <span className="  text-xs font-bold text-gray-500 p">Director Signature</span>
                  <img src={bookIdPaymentFinance.signtureDirector} alt="College Dean Signature" width="100" height="100" className=" mt-2 border-double border-4 border-gray-blue-900" />
                </label>
                <label htmlFor="requesID" className="">
                  <span className="  text-xs font-bold text-gray-500 p">VPAA Signature</span>
                  <img src={bookIdPaymentFinance.signatureVPAA} alt="College Dean Signature" width="100" height="100" className=" mt-2 border-double border-4 border-gray-blue-900" />
                </label>
                <div className="flex space-x-6 content-around items-center mt-5 justify-start">
                  <label htmlFor="publicationDate" className="mt- ml">
                    <span className="block  text-xs font-bold text-gray-500 underline ">Publication Date</span>
                    <Popup
                      modal
                      trigger={(
                        <button
                          className=" mx-auto mt-3  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-indigo-600 hover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          a
                          type="button"
                        >
                          {' '}
                          Sign Here
                        </button>
          )}
                      closeOnDocumentClick={false}
                    >
                      {(close) => (
                        <>
                          <SignaturePad ref={sigCanvas} canvasProps={{ className: 'signatureCanvas' }} />
                          <div className="space-x-2  justify-items-center ">
                            <button
                              className="mx-auto mt-3 pr-4 text-center py-2 px-4 bg border border-transparent shadow-sm text-sm font-medium rounded-md
               text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              type="button"
                              onClick={clear}
                            >
                              clear
                            </button>
                            <button
                              className=" mx-auto mt-3 pr-2  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-indigo-600 hover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              type="button"
                              onClick={close}
                            >
                              Close
                            </button>
                            <button
                              className=" mx-auto mt-3  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-indigo-600 hover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              type="button"
                              onClick={save}
                            >
                              Save
                            </button>
                          </div>
                        </>
                      )}
                    </Popup>
                    {imageURL ? (
                      <img
                        name="signatureImage"
                        src={imageURL}
                        alt="signature"
                        style={{
                          display: 'block',
                          margin: '0 auto',
                          border: '1px solid black',
                          width: '150px',
                          backgroundColor: 'white',
                        }}
                      />
                    ) : save}
                    <Field
                      className="text-s focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-36 px-0 font-bold text-gray-500  mt-0 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                      component="input"
                      name="publicationDate"
                      type="text"
                      initialValue={new Date(bookIdPaymentFinance.pubdate).toDateString()}
                      disabled
                    />
                  </label>
                </div>
                <label htmlFor="requesID" className="">
                  <span className="blockg hover:textColor-red  text-xs font-bold text-gray-500 mb-1" />
                  <Field
                    className="form-text  text-xs  font-bold   text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="requestID"
                    type="hidden"
                    initialValue={bookIdPaymentFinance.requestID}
                  />
                </label>
                <div className="block text-right mt-5">
                  <button
                    type="submit"
                    className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Approve Book
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
