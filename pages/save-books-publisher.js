import { Form, Field } from 'react-final-form';
import axios from 'axios';
import Head from 'next/head';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validateSession from '../lib/session';

export const getServerSideProps = async (context) => {
  const { account } = await validateSession(context);

  return {
    props: { account },
  };
};

export default function RequestForm({ account }) {
  Date.prototype.toDateInputValue = (function () {
    const local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  });

  const handleOnSubmit = async (payload) => {
    
    const { data } = await axios.post('/api/saveBooksPublisher', payload);

    toast.success('Save Success!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    }, data);
  };

  return (

    <section className=" mx-auto  md:flex bg-base  min-h-screen ">

      <Head>
        <title>Library Acquisition | Saving Books </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-4 bg-blue-200 rounded-md my-16 w- mx-auto h-auto w-2/6 shadow-md ">

            {/* //hidden stuff starts here */}

            <Field
              className="form-text text-xs font-bold text-black-500 focus:placeholder-black-500 placeholder-black-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-black-400"
              component="input"
              name="pubID"
              type="hidden"
              initialValue={account.id}
            />
            <Field
              className="form-text text-xs font-bold text-black-500 focus:placeholder-black-500 placeholder-black-500 placeholder-opacity-50  pt-3 pb-2
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-black-400"
              component="input"
              name="selectPosition"
              type="hidden"
              initialValue={account.selectPosition}
            />
            {/* Hidden stuff ends here */}

            <div className=" flex content-around items-center p-4">
              <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
              <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
              <h1 className="text-3xl font-bold text-black-500 ">Save Books</h1>

            </div>

            <div className="flex space-y-8 justify-end p-4 ">

              <label htmlFor="date" className="block mr-4">
                <span className="  text-sm font-bold text-black-500 mb-1 ">Date</span>
                <Field
                  className="block text-black-400 rounded-md border-black-300  w-full
                  focus:placeholder-black-701 focus:border-black-500 placeholder-black-700 placeholder-opacity-50  cursor-pointer"
                  name="saveDate"
                  component="input"
                  type="date"
                  required
                  initialValue={new Date().toDateInputValue()}

                />
              </label>
     
            </div>
       
            <div className="grid grid-cols-2 gap-2">
            <div className="row-start-1 ">
                <label htmlFor="author" className="">
                  <span className=" hover:textColor-red text-sm font-bold  text-black-500 mb-">Author</span>
                  <Field
                    className="block rounded-md border-black-300 shadow-sm full w-full
                focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 text-black-500 bg-black-50"
                    component="input"
                    name="authorName"
                    type="text"
                    placeholder="Authors Name"
                  />
                </label>
              </div>
            <div className="row-start-2  col-span-2">
            <label htmlFor="title" className=" ">
                  <span className="  text-sm font-bold text-black-500 ">Title</span>
                  <Field
                    className=" rounded-md border-black-300 shadow-sm w-full
                focus:placeholder-black-700 focus:border-black-500 placeholder-black-500 placeholder-opacity-50  text-black-500 bg-black-50"
                    component="input"
                    name="title"
                    type="text"
                    placeholder="Books' Title"
                  />
                </label>
            </div>
            <div className="row-start-3 ">
            <label htmlFor="chargedto" className="">
                  <span className="  text-sm font-bold text-black-500 ">Publisher Name</span>
                  <Field
                    className="block rounded-md border-black-300 shadow-sm w-full border-0
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-500 placeholder-opacity-50 text-black-500 bg-black-50"
                    component="input"
                    name="pubName"
                    type="text"
                    disabled
                    initialValue = {account.pubName}
                  />
                </label>
            </div>
            <div className="row-start-3 ">
            <label htmlFor="pdate" className="">
                  <span className="  text-sm font-bold text-black-500">Publish Date</span>
                  <Field
                    className=" block rounded-md border-black-300  w-full
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 text-black-500 bg-black-50"
                    component="input"
                    name="pubdate"
                    type="date"
                    required
                  />
                </label>
       
            </div>
            <div className="row-start-4  col-span-2">
            <label htmlFor="pbadress" className="">
                  <span className=" hover:textColor-red text-sm font-bold text-black-500 mb-">Publisher Address</span>
                  <Field
                    className="block rounded-md  border-0 shadow-sm w-full
                  text-black-500 bg-black-50"
                    component="input"
                    name="pubAddress"
                    type="text"
                    disabled
                    initialValue = {account.pubAddress}
                  />
                </label>
        
            </div>
            <div className="row-start-6 ">
            
            
                <label htmlFor="edition" className="">
                  <span className=" text-sm font-bold text-black-500 ">Edition</span>
                  <Field
                    className="block text-black-500 rounded-md border-black-300  w-full
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 bg-black-50"
                    component="input"
                    name="edition"
                    type="text"
                    placeholder="Book's Edition"
                  />
                </label>
            </div>
            <div className="row-start-6 ">
                <label htmlFor="copvol" className="">
                  <span className="  text-sm font-bold text-black-500">Copies/Volumes</span>
                  <Field
                    className="block text-black-500 rounded-md border-black-300  w-full
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 bg-black-50"
                    component="input"
                    name="copvol"
                    type="number"
                    placeholder="Number of Copies"
                  />
                </label>
                </div>
            </div>
            {/* hidden */}
                  <Field
                    className="block text-black-500 rounded-md border-black-300  w-full
                  focus:placeholder-black-700 focus:border-black-500 placeholder-black-700 placeholder-opacity-50 bg-black-50"
                    component="input"
                    name="savePub"
                    type="hidden"
                    initialValue = "1"
                  />
            {/* hidden */}
              
            <div className="block text-right mt-4 p-4">
              <button
                type="submit"
                className=" mx-auto text-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondary hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Book
              </button>
            </div>

          </form>
        )}
      />

    </section>
  );
}
