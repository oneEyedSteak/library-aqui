import Head from 'next/head';
import { Form, Field } from 'react-final-form';
import Link from 'next/dist/client/link';



export default function SignIn() {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/requestform', payload);

    alert(data.message);// eslint-disable-line no-alert
  };
  return (

    <>
      <Head>
        <title>Library Acquisition | Input Budget </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <section className=" mx-auto  md:flex bg-base  min-h-screen ">

        <Form
          onSubmit={handleOnSubmit}
          render={({ handleSubmit }) => (

            <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16 w- mx-auto h-auto w-4/5 shadow-lg ">


              <div className="flex-shrink-0 flex content-around items-center">

                <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                <h1 className="text-xl mt-4  text-gray-600 ">Budget From Departments</h1>

              </div>


              <div class="grid grid-cols-3 gap-4">

                <div class="">     
                  <label htmlFor="selectDosition" className="block pb-2">
                  <span className="block  text-xs  text-gray-500 p">Department Name</span>
                  <Field name="selectDepartment" component="select" className="rounded-md  text-xs  text-gray-500 border-gray-300  w-full mt-1">
                    <option value="">Select Department</option>
                    <option className="text-xs  text-gray-500" value="COLLEGE OF AGRICULTURE, RESOURCES AND ENVIRONMENTAL SCIENCES">College of Agriculture</option>
                    <option className="text-xs  text-gray-500" value="College of Arts & Sciences">College of Arts & Sciences</option>
                    <option className="text-xs  text-gray-500" value="College of Business & Accountancy">College of Business & Accountancy</option>
                    <option className="text-xs  text-gray-500" value="College of Computer Studies">College of Computer Studies</option>
                    <option className="text-xs  text-gray-500" value="College of Education">College of Education</option>
                    <option className="text-xs  text-gray-500" value="College of Engineering">College of Engineering</option>
                    <option className="text-x text-gray-500" value="College of Hospitality Management">College of Hospitality Management</option>
                    <option className="text-xs  text-gray-500" value="College of Medical Laboratory Science">College of Medical Laboratory Science</option>
                    <option className="text-xs text-gray-500" value="College of Nursing">College of Nursing</option>
                    <option className="text-xs  text-gray-500" value="College of Pharmacy">College of Pharmacy</option>
                    <option className="text-xs  text-gray-500" value="College of Law">College of Law</option>
                    <option className="text-xs text-gray-500" value="College of Medicine">College of Medicine</option>
                    <option className="text-xs text-gray-500" value="College of Theology">College of Theology</option>
                  </Field>
                </label>

                  <label htmlFor="selectDosition" className="block pb-2  ">
                    <span className="block  text-xs  text-gray-500 p">Department Name</span>
                    <Field name="selectDepartment" component="select" className="rounded-md  text-xs  text-gray-500 border-gray-300  w-full  ">
                      <option value="">Select Department</option>
                      <option className="text-xs  text-gray-500" value="COLLEGE OF AGRICULTURE, RESOURCES AND ENVIRONMENTAL SCIENCES">College of Agriculture</option>
                      <option className="text-xs  text-gray-500" value="College of Arts & Sciences">College of Arts & Sciences</option>
                      <option className="text-xs  text-gray-500" value="College of Business & Accountancy">College of Business & Accountancy</option>
                      <option className="text-xs  text-gray-500" value="College of Computer Studies">College of Computer Studies</option>
                      <option className="text-xs  text-gray-500" value="College of Education">College of Education</option>
                      <option className="text-xs  text-gray-500" value="College of Engineering">College of Engineering</option>
                      <option className="text-x text-gray-500" value="College of Hospitality Management">College of Hospitality Management</option>
                      <option className="text-xs  text-gray-500" value="College of Medical Laboratory Science">College of Medical Laboratory Science</option>
                      <option className="text-xs text-gray-500" value="College of Nursing">College of Nursing</option>
                      <option className="text-xs  text-gray-500" value="College of Pharmacy">College of Pharmacy</option>
                      <option className="text-xs  text-gray-500" value="College of Law">College of Law</option>
                      <option className="text-xs text-gray-500" value="College of Medicine">College of Medicine</option>
                      <option className="text-xs text-gray-500" value="College of Theology">College of Theology</option>
                    </Field>
                  </label>
                  <label htmlFor="budget" className="block pb-2">
                    <span className="block text-xs   text-gray-500 ">Budget</span>
                    <Field className="text-xs  text-gray-500  placeholder-gray-400 focus:placeholder-gray-500 
                  placeholder-opacity-100 rounded-md border-gray-300 w-full shadow-sm  " name="budget" component="input" type="number" placeholder="₱" />
                  </label>
                  <button
                    type="submit"
                    className="  mx-auto text-center  cursor-pointer py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondary hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>

                <div class="col-span-2">      
                <table>
                  <tr>
                    <td>
                      Type
                    </td>
                    <td>
                      Department
                    </td>
                    <td>
                      Budget
                    </td>
                    <td>
                      Action
                    </td>
                  </tr>
                </table>
                </div>
              </div>

            </form>
          )}
        />

      </section>
    </>
  );
}
