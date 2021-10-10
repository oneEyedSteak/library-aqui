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
  const { bookIdDean } = context.query;
  const { data } = await api.get(`/api/deanbooks/${bookIdDean}`);

  console.log(data);

  return {
    props: { bookDean: data },

  };
};

export default function RequestForm({ bookDean }) {
  const [imageURL, setImageURL] = useState(null);

  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/bookUpdateDean', {
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

    <section className=" mx-auto  md:flex bg-base to-yellow-600 min-h-screen ">

      <Head>
        <title>Library Acquisition | Entry of Books </title>
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

              <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16  shadow-sm mx-auto w-3/5 min-h-screen ">

                <div className="flex-shrink-0 flex content-around items-center">

                  <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                  <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                  <h1 className="text-xl mt-4 text-gray-600 ">Library Acquisition Entry of Books</h1>

                </div>

                <div className="flex space-x-6 content-around items-center mt-10 justify-end">

                  <label htmlFor="date" className="block ">
                    <span className="block  text-xs  text-gray-500 mb-1">Approved Date</span>
                    <Field
                      className="text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 text-xs bg-gray-50 mr-4"
                      name="approvalDateDean"
                      component="input"
                      type="date"
                      required
                    />
                  </label>

                </div>
                <br />
                <div className="flex space-x-6 content-around items-center mt-6">

                  <label htmlFor="author" className="">
                    <span className="blockg hover:textColor-red  text-xs  text-gray-500 mb-1">Name</span>
                    <Field
                      className="text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                      component="input"
                      name="requestee"
                      type="text"
                      initialValue={bookDean.requestee}
                      disabled
                    />
                  </label>
                  <label htmlFor="author" className="">
                    <Field
                      className="text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                      component="input"
                      name="userID"
                      type="Hidden"
                      initialValue={bookDean.userID}
                      disabled
                    />
                  </label>
                </div>

                <div className="grid grid-cols-4 space-y-3">

                  <div  className="  col-span-3">
                    <label htmlFor="author" className="">
                      <span className="block hover:textColor-red text-xs  text-gray-500 mb-1">Author</span>
                      <Field
                        className=" text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50  border-0 bg-gray-50"
                        component="input"
                        name="Author"
                        type="text"
                        initialValue={bookDean.authorName}
                        disabled
                      />
                    </label>
                  </div>

                  <div className="col-start-1  col-span-2">
                    <label htmlFor="author" className="">
                      <span className="block hover:textColor-red text-xs text-gray-500 mx-1 mt-2">Title</span>
                      <Field
                        className="text-gray-500 rounded-md border-gray-300  w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50  border-0 bg-gray-50"
                        component="input"
                        name="Title"
                        type="text"
                        initialValue={bookDean.title}
                        disabled
                      />
                    </label>
                    <label htmlFor="edition" className="">
                      <span className="block  text-xs text-gray-500 ">Number of Copies</span>
                      <Field
                        className=" text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                        component="input"
                        name="NumberOfCopies"
                        type="text"
                        initialValue={bookDean.copvol}
                        disabled
                      />
                    </label>
                  </div>

                  <div className="col-start-1 col-span-1 ">

                    <label htmlFor="edition" className="mt-6 ml">
                      <span className="block  text-xs text-gray-500 ">Edition</span>
                      <Field
                        className="text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50"
                        component="input"
                        name="Edition"
                        type="text"
                        initialValue={bookDean.edition}
                        disabled
                      />
                    </label>

                  </div>
                </div>

                <br />
                <div className="grid-cols-2">
                  
                <label htmlFor="notereqform" className="">
                  <span className="block  text-xs text-gray-500 mb-">Note:</span>
                  <Field
                    className="resize-none  text-gray-500 rounded-md border-gray-300 w-full
                  focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 border-0 bg-gray-50 "
                    component="textarea"
                    name="noteEntry"
                    type="input"
                    initialValue={bookDean.notereqform}
                    disabled
                  />
                </label>
                {imageURL ? (
                  <img
                    name="signatureImage"
                    src={imageURL}
                    alt="signature"
                    style={{
                      display: 'block',
                      margin: '0 right',
                      border: '1px solid black',
                      width: '150px',
                      backgroundColor: 'white',
                      height: '100px',
                    }}
                  />
                ) : save}
                </div>

                <Popup
                  modal
                  trigger={(
                    <button
                      className=" mx-auto mt-3  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondary hover:bg-indigo-700
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
                          className="mx-auto mt-3 pr-4 text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
               text-white bg-secondary hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          type="button"
                          onClick={clear}
                        >
                          clear
                        </button>
                        <button
                          className=" mx-auto mt-3   bg-secondary text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondaryhover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          type="button"
                          onClick={close}
                        >
                          Close
                        </button>
                        <button
                          className=" mx-auto mt-3  text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondary hover:bg-indigo-700
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

           

     
          

                <div className="flex space-x-6 content-around items-center mt-10 justify-end">

                  <label htmlFor="publicationDate" className="mt-6 ml">
                    <span className="block  text-xs  text-gray-500 ">Publication Date</span>
                    <Field
                      className="text-s focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2
                                        block w-36 px-0 font-bold text-gray-500  mt-0 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                      component="input"
                      name="publicationDate"
                      type="text"
                      initialValue={new Date(bookDean.pubdate).toDateString()}
                      disabled
                    />
                  </label>

                  <label htmlFor="selectDosition" className="block mt-2">
                    <span className="block  text-xs text-gray-500 p">Select Status</span>
                    <Field name="approvalDean" component="select" className="  text-gray-500 rounded-md border-gray-300  w-full
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50  ">

                      <option value=""> </option>
                      <option className="block text-xs font-bold text-gray-500" value="0">On Going</option>
                      <option className="block text-xs font-bold text-gray-500" value="1">Approved</option>

                    </Field>
                  </label>
                </div>

                <label htmlFor="requesID" className="">
                  <span className="blockg hover:textColor-red  text-xs  text-gray-500 mb-1" />
                  <Field
                    className="form-text  text-xs  font-bold   text-gray-500 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                    component="input"
                    name="requestID"
                    type="hidden"
                    initialValue={bookDean.requestID}
                  />
                </label>

                <div className="block text-right mt-5">
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
