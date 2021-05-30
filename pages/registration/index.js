import { Form, Field } from 'react-final-form'
import Head from 'next/head'

import axios from 'axios';

export default function RegistrationForm() {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/register', payload)

    alert(data.message)
  }

  return (
<>
    <Head>
    <title>Library Acquisition | Sign Up </title>
    <meta name="keywords" content="someting" />
</Head>

    <section className="mx-auto p-6 bg-gradient-to-br from-blue-900 to-yellow-600 min-h-screen">

      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className=" p-6 bg-white rounded-md mx-auto w-8/12">
      <h3 className="text-xl mb-4 font-bold text-gray-700 ">Sign Up</h3>
           
            <div className="grid grid-cols-3 gap-4">
              <label htmlFor="uname" className="block">
                <span className="block text-xs font-bold text-gray-700 mb-1">Username</span>
                <Field className="rounded-md border-gray-300 shadow-sm w-100" component="input" name="uname" type="text" placeholder="Username" autoComplete required />
              </label>

              <label htmlFor="fname" className="block">
                <span className="block  text-xs font-bold text-gray-700 mb-1">Firstname</span>
                <Field className="rounded-md border-gray-300 shadow-sm w-full" component="input" name="fname" type="text" placeholder="Firstname" autoComplete  />
              </label>

              <label htmlFor="mname" className="block">
                <span className="block text-xs font-bold text-gray-700  mb-1">Middlename</span>
                <Field className="rounded-md border-gray-300 shadow-sm w-full" name="mname" component="input" type="text" placeholder="Middlename" autoComplete  />
              </label>

              <label htmlFor="lname" className="block">
                <span className="block text-xs font-bold text-gray-700  mb-1">Lastname</span>
                <Field className="rounded-md border-gray-300 shadow-sm" name="lname" component="input" type="text" placeholder="Lastname" autoComplete  />
              </label>

              <label htmlFor="password" className="block">
                <span className="block  text-xs font-bold  text-gray-700 mb-1">Password</span>
                <Field className="rounded-md border-gray-300 shadow-sm" name="password" component="input" type="password" placeholder="Password" autoComplete  />
              </label>


              <label htmlFor="cpassword" className="block">
                <span className="block  text-xs font-bold text-gray-700 mb-1">Confirm Password</span>
                <Field className="rounded-md border-gray-300 shadow-sm" name="cpassword" component="input" type="password" placeholder="Confirm Password" autoComplete  />
              </label>

              <label htmlFor="email">
                <span className="block  text-xs font-bold text-gray-500 mb-1">Email</span>
                <Field className="rounded-md border-gray-300 shadow-sm" name="email" component="input" type="email" placeholder="Email" autoComplete="email"  />
              </label>


              <label htmlFor="pnumber" className="block">
                <span className="block  text-xs font-bold text-gray-700 mb-1">Contact Number</span>
                <Field className="rounded-md border-gray-300 shadow-sm" name="pnumber" component="input" type="text" autoComplete placeholder="Contact" />
              </label>
            </div>

            <div className="block text-right mt-5">
              <button type="submit" className="mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>

            </div>
          </form>
        )}
      />
    </section>
    </>
  )

}