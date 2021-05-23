
import { getCsrfToken } from 'next-auth/client'

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}

export default function SignIn({ csrfToken }) {
  return (
    <section className=" mx-auto  from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen">

      <form method='post' action='/api/auth/callback/credentials' className="grid grid-cols-1 p-6 bg-white  rounded-md mx-auto  w-1/4 ">

        <div className="content-around justify-center mx-auto items-center">
          <img class="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
          <img class="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
          <h1 className="text-xl mt 4 font-bold text-gray-700 ">Sign In</h1>
        </div>

<br/>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
        <label className="block">
        <span className="block text-xs font-bold text-gray-700 mb-">Username</span>
        <input name='username' type='text' className="rounded-md border-gray-300 shadow-sm w-full" />
        </label>
        <label>
        <span className="block text-xs  font-bold text-gray-700 mb-">Password</span>
        <input className="rounded-md border-gray-300 shadow-sm w-full" name='password' type='password' />
        </label>
        <button type='submit'>Sign in</button>
      </form>
      
    </section>
  )
}
