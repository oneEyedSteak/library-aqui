import { Form, Field } from 'react-final-form'
import axios from 'axios';

export default function RequestForm() {
    const handleOnSubmit = async (payload) => {
        const { data } = await axios.post('/api/register', payload)

        alert(data.message)
    }

    return (
        <section className=" mx-auto p-10 md:flex bg-gradient-to-br from-blue-900 to-yellow-600 min-h-screen ">

            <Form
                onSubmit={handleOnSubmit}
                render={({ handleSubmit }) => (

                    <form onSubmit={handleSubmit} className=" p-4 bg-white rounded-md my-16 w-full min-h-screen ">
                      
                      
                      <div className= "flex-shrink-0 flex content-around">
                       <img class="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                       <img class="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                       <h1 className="text-xl mt 4 font-bold text-gray-700 ">Library Acquisition Request Form</h1>
                       </div>


                        <div className="flex space-y-6  justify-end">
                   
                            <label htmlFor="date" className="block ">
                                <span className="block  text-xs font-bold  text-gray-700 mb-1">Select Date</span>
                                <Field  className="placeholder-gray-500 w-min placeholder-opacity-50 rounded-md border-gray-300 shadow-sm 
                                  leading-none focus:outline-none focus:shadow-outline text-gray-600 font-medium mr-4" name="date" component="input" type="date" />
                            </label>
                            <label htmlFor="rush" className=" mr-2 ">
                                <Field  className="text-gray-500 form-radio h-3 w-3 rounded-sm" name="rushornrush" component="input" type="radio" value="rush"  />
                                <span className="  text-xs font-bold  text-gray-700 mb-1">Rush</span>
                            </label>
                            <label htmlFor="nrush" className="">
                                <Field className=" text-gray-500 form-radio h-3 w-3 rounded-sm " name="rushornrush" component="input" type="radio" value="nrush" />
                                <span className="  text-xs font-bold  text-gray-700 mb-1">No Rush</span>
                            </label>
                        </ div>

                        <label htmlFor="author" className="">
                            <span className="block  text-xs font-bold text-gray-700 mb-1">Author</span>
                            <Field className="form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="authorName" type="text" placeholder="Author"  />
                        </label>

                        <label htmlFor="title" className=" ">
                            <span className="block  text-xs font-bold text-gray-700 ">Tile</span>
                            <Field className="focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25  pt-3 pb-2 block px-0 mt-0 bg-transparent 
                            border-0 border-b-2 w-11/12 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="title" type="text" placeholder="Title"  />
                        </label>

                            <div className="flex flex-row space-x-4">
                                    <label htmlFor="edition" className="mt-11">
                                        <span className="block  text-xs font-bold text-gray-700 underline">Edition</span>
                                        <Field className=" focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                                        block w-36 px-0   mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                            component="input" name="edition" type="text" placeholder="Edition"  />
                                    </label>

                                <label htmlFor="copvol" className="mt-9 ">
                                    <span className="  text-xs font-bold text-gray-700">Copies/Volumes</span>
                                    <Field className="pt-3 pb-2 block  w-36 px-0 mt-0 bg-transparent border-0 
                                    border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                        component="input" name="copvol" type="text" placeholder="#"  />
                                </label>

                                <label htmlFor="pdate" className="mt-9 relative z-0 w-36 mb-5 ">
                                    <span className="  text-xs font-bold text-gray-700">Publication Date</span>
                                    <Field className=" pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0
                                     border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                        component="input" name="pubdate" type="date" placeholder="#"  />
                                </label>
                            </div>
                        
                        <label htmlFor="pubAndAdd" className=" mt- ">
                            <span className="block  text-xs font-bold text-gray-700 ">Publisher and Address</span>
                            <Field className="  focus:placeholder-gray-400 placeholder-gray-600 placeholder-opacity-25 pt-3
                             pb-2 block px-0 mt-0 bg-transparent border-0 border-b-2 w-11/12 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="pubAndAdd" type="text" placeholder="Publisher and Address"  />
                        </label>
             <br/>
                        <label htmlFor="recom" className=" mt-4 border-t-">
                            <span className="  text-xs font-bold text-gray-700 ">Recommended By</span>
                            <Field className=" focus:placeholder-gray-400  placeholder-gray-500 placeholder-opacity-25 placeholder- pt-3 pb-2
                             block px-0 mt-0 bg-transparent border-0 border-b-2 w-11/12 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="recby" type="text" placeholder="Recommended By"  />
                        </label>

                        <div className=" flex    content-center ">

                        <label htmlFor="faculty" className=" mr-2 mt-2 ">
                                <Field className=" text-gray-500 form-radio h-3 w-3 rounded-sm" name="recomby" component="input" type="radio" value="faculty" />
                                <span className="  text-xs font-bold  text-gray-700  ml-1 ">Faculty</span>
                            </label>

                            <label htmlFor="librarian" className=" mr-2 mt-2">
                                <Field className="  text-gray-500  form-radio h-3 w-3 rounded-sm" name="recomby" component="input" type="radio" value="librarian" />
                                <span className="  text-xs font-bold  text-gray-700  ml-1 ">Librarian</span>
                            </label>
                            
                            <label htmlFor="administrator" className="mr-3 mt-2">
                                <Field className=" text-gray-500 form-radio h-3 w-3 rounded-sm" name="recomby" component="input" type="radio" value="administrator" />
                                <span className="  text-xs font-bold  text-gray-700   ml-1">Administrator</span>
                            </label>

                            <label htmlFor="staff" className="mr-2 mt-2 block">
                                <Field className="text-gray-500 form-radio h-3 w-3 rounded-sm" name="recomby" component="input" type="radio" value="staff" />
                                <span className="  text-xs font-bold  text-gray-700 ml-1">Staff</span>
                            </label>
                        </div> 
                         <div className="mt-7">
                        <label htmlFor="chargedto" className=" h-48">
                            <span className="block  text-xs font-bold text-gray-700 mb-1">Charge to</span>
                            <Field className="mr-4 w-5/12 span-12 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="chargeto" type="text" placeholder="Charge to"  />
                        </label>
                        </div>
                
                    <div className =  "flex  justify-end">
                        
                        <label htmlFor="subjectr" className="">
                            <span className="block  text-xs font-bold text-gray-700 mb-1">Subject</span>
                            <Field className=" mr-8 justify-endform-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="subjectr" type="text" placeholder="Subject "  />
                        </label>
                        <label htmlFor="enumtitle" className="">
                            <span className="block  text-xs font-bold text-gray-700 mb-1">Existing Number of titles</span>
                            <Field className="  form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                            block px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="enumtitle" type="text" placeholder="Existing Number of titles"  />
                        </label>
                        
                    </div>

                  <div className="flex flex-row space-x-2 items-baseline">  
                    <label htmlFor="notereqform" className="">
                            <span className="block  text-xs font-bold text-gray-700 mb-1">Note:</span>
                            <Field className="resize border rounded-md max-height-50 focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-25 "  component="textarea" name="notereqform" type="input" placeholder="Note here" />
                        </label>
                        <div className="">
                        <label htmlFor="enumtitle" className="mt-4">
                            <span className="  text-xs font-bold text-gray-700 mb-1">Existing Number of titles:</span>
                            <Field className=" w-1/4 form-text focus:placeholder-gray-500 placeholder-gray-500 placeholder-opacity-25 pt-3 pb-2 
                             px-0 mb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-400"
                                component="input" name="enumtitle" type="text" placeholder="Existing Number of titles"  />
                        </label>
                            </div>
                    </div>

                    </form>
                )}
            />
        </section>
    )

}