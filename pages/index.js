import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {

  return (
    <>
    <Head>
      <title>Library Acquisition | Home </title>
      <meta name="keywords" content="someting" />
    </Head>
    <div className="  from-blue-900 to-yellow-600 bg-gradient-to-br min-h-screen mx-auto mt2">
      <div className='"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>

        <img src='/homeimage.jpg' className="w-10/12 h-10/12 mx-auto " />

      </div>
    </div>
    <Link href="../login">
      <a>Log in here</a>
    </Link>
</>
  )
}
