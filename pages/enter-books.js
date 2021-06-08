import { Form, Field } from 'react-final-form'
import axios from 'axios';
import Head from 'next/head'


export default function RequestForm() {

    const handleOnSubmit = async (payload) => {

        const { data } = await axios.post('/api/enterBooks', payload)


        alert(data.message)
    }



    return (
        <section className=" mx-auto  md:flex bg-gradient-to-br from-blue-900 to-yellow-600 min-h-screen ">

            <Head>
                <title>Library Acquisition | Entry of Books </title>
                <meta name="keywords" content="someting" />
                <link rel="icon" href="/icon.ico" />
            </Head>

            <Form
                onSubmit={handleOnSubmit}
                render={({ handleSubmit }) => (

                    <form onSubmit={handleSubmit }  className=" px-8 pt-8 pb-8 bg-white rounded-md my-16  mx-auto min-h-screen " >

                        <div className="flex-shrink-0 flex content-around items-center">

                            <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                            <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                            <h1 className="text-xl mt 4 font-bold text-gray-600 ">Library Acquisition Entry of Books</h1>

                        </div>

                        <div className="flex space-x-6 content-around items-center mt-10 justify-end" >

                            <label htmlFor="date" className="block ">
                                <span className="block  text-xs font-bold  text-gray-500 mb-1">Entry Date</span>
                                <Field className="placeholder-gray-500 text-xs w-min placeholder-opacity-50 border-0  border-b-2  focus:outline-none focus:ring-0 focus:border-black  border-gray-300 shadow-sm 
                                  leading-none focus:shadow-outline text-gray-600 font-medium mr-4" name="EntryDate" component="input" type="date" required />
                            </label>

                        </div>

                        <br/>

                        <div className="flex space-x-6 content-around items-center mt-6" >

                            <label htmlFor="author" className="">
                                <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1">Book ID:</span>
                                <Field className="form-text text-xs focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                    component="input" name="BookID" type="text" placeholder="ID#" />
                            </label>

                        </div>

                        <label htmlFor="author" className="">
                            <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1">Author</span>
                            <Field className="form-text text-xs w-full focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="Author" type="text" placeholder="Author" />
                        </label>

                        <label htmlFor="author" className="">
                            <span className="blockg hover:textColor-red text-xs font-bold text-gray-500 mb-1">Title</span>
                            <Field className="form-text text-xs w-full focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-50  pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="Title" type="text" placeholder="Title" />
                        </label>

                        <div className="flex flex-row space-x-20">

                            <label htmlFor="edition" className="mt-6">
                                <span className="block  text-xs font-bold text-gray-500 ">Number of Copies</span>
                                <Field className="text-xs focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                                        block w-36 px-0  mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                    component="input" name="NumberOfCopies" type="text" placeholder="Number of Copies" />
                            </label>
                          
                            <label htmlFor="edition" className="mt-6 ml">
                                <span className="block  text-xs font-bold text-gray-500 ">Edition</span>
                                <Field className="text-xs focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                                        block w-36 px-0   mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                    component="input" name="Edition" type="text" placeholder="Edition" />
                            </label>
                           
                        </div>
                        <br/>
                        <label htmlFor="notereqform" className="">
                                <span className="block  text-xs font-bold text-gray-500 mb-1">Note:</span>
                                <Field className="resize-none w-56  text-xs  border-0 border-b-2  focus:outline-none  appearance-none  focus:ring-0 focus:border-black focus:placeholder-gray-500
                                 placeholder-gray-500 placeholder-opacity-50 " component="textarea" name="noteEntry" type="input" placeholder="Tell us something about this book" />
                            </label>
                           
                        <div className="flex space-x-6 content-around items-center mt-10 justify-start" >

                            <label htmlFor="date" className="block ">
                                <span className="block  text-xs font-bold  text-gray-500 mb-1">Publication Date</span>
                                <Field className="placeholder-gray-500 text-xs  w-min placeholder-opacity-50 border-0  border-b-2  focus:outline-none focus:ring-0 focus:border-black border-gray-300 shadow-sm 
                                 leading-none focus:shadow-outline text-gray-600 font-medium mr-4" name="PublicationDate" component="input" type="date" required />
                            </label>
                         
                        </div>

                        <div className="block text-right mt-5">

                            <button type="submit" className=" cursor-pointer  mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enter Book(s)</button>

                        </div>

                        
                   
                    </form>
                )}
            />
        </section>
    )

}