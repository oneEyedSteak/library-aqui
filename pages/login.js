import { Form, Field } from 'react-final-form'
import axios from 'axios';

export default function LoginForn() {
  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/login', payload)

    alert(data.message)
  }

  return (
    <section className=" mx-auto  from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen">

      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 p-6 bg-white  rounded-md mx-auto  w-1/4 ">
      <h3 className="text-xl mb-5 font-bold text-gray-700">Sign In</h3>
           
            <div className="grid p-3">
              <label htmlFor="uname" className="block ">
                <span className="block text-xs font-bold text-gray-700 mb-">Username</span>
                <Field className="rounded-md border-gray-300 shadow-sm w-full" component="input" name="uname" type="text" placeholder="Username"  required />
              </label>
<br/>
              <label htmlFor="password" className="block">
                <span className="block text-xs  font-bold text-gray-700 mb-">Password</span>
                <Field className="rounded-md border-gray-300 shadow-sm w-full" component="input" name="fname" type="password" placeholder="Password"   />
              </label>
            <div className="block text-right mt-5">
              <button type="submit" className="mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
               text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
            </div>
            </div>
          </form>
        )}
      />
    </section>
  )

}


