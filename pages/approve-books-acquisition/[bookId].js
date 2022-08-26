import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import api from '../../lib/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


export const getServerSideProps = async (context) => {
  const { bookId } = context.query;
  const { data } = await api.get(`/api/books/${bookId}`);

  console.log(data);

  return {
    props: { book: data },

  };
};

export default function RequestForm({ book }) {
  const router = useRouter();


  const handleOnSubmit = async (payload) => {

    try {
      const { data } = await axios.post('/api/bookUpdate', payload);

      toast.success('Update Successfully!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }, data);
      router.push('/see-all-books');

      
    } catch (error) {
      console.log(error);
    }
 

  };
  const [session] = useSession();
  Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
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
         text-black-600 px-3 py-2 rounded-md text-sm font-medium"
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

              <form onSubmit={handleSubmit} className=" p-8 bg-blue-200 rounded-md my-16 shadow-md mx-auto min-h-screen w-full">

                <div className="flex-shrink-0 flex content-around items-center p-8">

                  <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                  <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                  <h1 className="text-3xl mt 4 font-bold text-black-600 ">Enter Price </h1>
                </div>
                <label htmlFor="requesID" className="">
                  <span className=" hover:textColor-red  text-xs font-bold text-black-500" />
                  <Field
                    className="form-text  text-xs  font-bold  text-black-500 focus:placeholder-black-500 placeholder-black-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-black-400"
                    component="input"
                    name="requestID"
                    type="hidden"
                    initialValue={book.requestID}
                  />
                </label>

                <div className="flex space-x-6 content-around items-center  justify-end p-8">
  {/* {/* entryDate is ApprovalDateAcquisition */ }
                  <label htmlFor="date" className="block ">
                    <span className="text-sm font-bold text-black-500">Approval Date</span>
                    <Field
                      className=" text-black-500 rounded-md  border-black-300  w-full
                    focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 bg-black-50"
                      name="entryDate"
                      component="input"
                      
                      type="date"
                      required
                      initialValue={new Date().toDateInputValue()}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-3 gap-x-4 gap-y-6 p-8 border-1 mt-1">

                  <div className="row-start-1">
                    <label htmlFor="author" className="">
                      <span className=" hover:textColor-red  text-sm font-bold text-black-500 ">User ID</span>
                      <Field
                        className="block text-black-500 rounded-md  w-full
                    focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 border-0 placeholder-opacity-50 bg-black-50"
                        component="input"
                        name="userID"
                        type="text"
                        initialValue={book.userID}
                        disabled
                      />
                    </label>
                    <label htmlFor="author" className="">
                      <span className=" hover:textColor-red  text-sm font-bold text-black-500 ">Name</span>
                      <Field
                        className="block text-black-500 rounded-md border-black-300  w-full
                    focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 border-0 bg-black-50"
                        component="input"
                        name="requestee"
                        type="text"
                        initialValue={book.requestee}
                        disabled
                      />
                    </label>
                  </div>

                  <div className="row-start-1 col-span-2">
                    <label htmlFor="author" className="">
                      <span className="text-sm font-bold text-black-500  ">Author</span>
                      <Field
                        className="block text-black-500 rounded-md border-black-300  w-full
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 border-0 bg-black-50"
                        component="input"
                        name="Author"
                        type="text"
                        initialValue={book.authorName}
                        disabled
                      />
                    </label>

                    <label htmlFor="author" className="">
                      <span className="text-sm font-bold text-black-500 ">Title</span>
                      <Field
                        className=" block text-black-500 rounded-md border-black-300  w-full
                  focus:border-black-500 placeholder-black-700 border-0 bg-black-50"
                        component="input"
                        name="Title"
                        type="text"
                        initialValue={book.title}
                        disabled
                      />
                    </label>
                  </div>

                  <div className="row-start-2 ">
                    <label htmlFor="edition" className="">
                      <span className="text-sm font-bold text-black-500  ">Number of Copies</span>
                      <Field
                        className=" text-black-500 rounded-md border-black-300  w-full
                    focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 border-0 bg-black-50"
                        component="input"
                        name="NumberOfCopies"
                        type="text"
                        initialValue={book.copvol}
                        disabled
                      />
                    </label>
                    <label htmlFor="edition" className="">
                      <span className="  text-sm font-bold text-black-500 ">Edition</span>
                      <Field
                        className=" text-black-500 rounded-md border-black-300  w-full
                    focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 border-0 bg-black-50"
                        component="input"
                        name="Edition"
                        type="text"
                        initialValue={book.edition}
                        value={book.edition}
                        disabled
                      />
                    </label>
              
                  </div>

                  <div className="row-start-2 col-span-2">

                    <label htmlFor="publicationDate" className="">
                      <span className="  text-sm font-bold text-black-500 ">Publication Date</span>
                      <Field
                        className=" block text-black-500 rounded-md border-black-300  w-auto
                      focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 border-0 bg-black-50"
                        component="input"
                        name="publicationDate"
                        type="text"
                        initialValue={new Date(book.pubdate).toDateString()}
                        disabled
                      />
                    </label>
                    <label htmlFor="notereqform" className="">
                      <span className="  text-sm font-bold text-black-500 mb-1">Note:</span>
                      <Field
                        className="resize-none text-black-500 rounded-md border-black-300  w-full
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 border-0 bg-black-50"
                        component="textarea"
                        name="noteEntry"
                        type="input"
                        initialValue={book.notereqform}
                        disabled
                      />
                    </label>
                  </div>
                  <label htmlFor="requesID" className="">
                      <span className="  text-sm font-bold text-black-500 p">Dean Signature</span>
                      <img
                        src={book.signatureDean}
                        alt="College Dean Signature"
                        width="100"
                        height="100"
                        className=" mt-2 border-solid border-4 border-black-blue-900"
                      />  
                      <div className="text-xs mt-2 text-black-500 underline">
                        {book.deanName}
                        </div>

                    </label>
                  <div className="row-start-3 gap">
      
                    <label htmlFor="edition" className="mt-18">
                      <span className="  block text-sm font-bold text-black-500 ">Price</span>
                      <Field
                        required
                        className=" mb-2 text-black-500 rounded-md border-black-300  w-auto
                    focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50  bg-black-50"
                        component="input"
                        name="price"
                        type="text"
                        placeholder="Enter Price"
                      />
                    </label>
                    <label htmlFor="selectDosition" className=" ">
                      <span className="block  text-sm font-bold text-black-500 p">For Approval</span>
                      <Field
                        required
                        name="status"
                        component="select"
                        className=" mb-2 text-black-500 rounded-md border-black-300  w-2/4
                      focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 bg-black-50 " 
                      required
                      >

                        <option value="">Enter Status </option>
                        <option className="block text-sm font-bold text-black-400" value="0">On Going</option>
                        <option className="block text-sm font-bold text-black-400" value="1">Approved</option>
                      </Field>
                    </label>
                  </div>

                </div>

                <div className=" text-right mt-5 p-8">
                  <button
                    type="submit"
                    className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm
                    font-medium rounded-md text-white bg-secondary hover:bg-indigo-700
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
