
import { getCsrfToken } from 'next-auth/client'
import Head from 'next/head'

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}

export default function SignIn({ csrfToken }) {
  return (
    <>
      <Head>
        <title>Library Acquisition | Sign In </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <section className="mx-auto from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen">

        <form method='post' action='/api/auth/callback/credentials' className="px-8 py-8 grid grid-cols-1 p-6 bg-white  rounded-md mx-auto  w-1/4 ">

          <div className="content-around justify-center mx-auto items-center">
            <img class="hidden lg:block h-20 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
            <img class="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
            <h1 className="text-xl mt-1 ml-2 font-bold text-gray-600 ">  Sign In</h1>
          </div>


          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

          <label className="block">
            <span className="block font-bold text-gray-500 pt-3">Username</span>
            <input placeholder="Username" name='username' type='text' className="mt-1 rounded-md border-gray-300 shadow-sm w-full
            focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-500 placeholder-opacity-50" />
          </label>
          <br />

          <label>
            <span className="block  font-bold text-gray-500 mb-">Password</span>
            <input placeholder="Password" className="mt-1 rounded-md border-gray-300 shadow-sm w-full  focus:placeholder-gray-700
            placeholder-gray-500 placeholder-opacity-50 " name='password' type='password' />
          </label>

          <div className=" text-right mt-5">
            <button type='submit' className="mx-auto text-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                 text-white bg-indigo-600 hover:bg-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
          </div>
        </form>

      </section>
    </>
  )
}
