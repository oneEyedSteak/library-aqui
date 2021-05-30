import Link from 'next/link'
import { useSession } from 'next-auth/client';
import Head from 'next/head'
export default function Landing() {
    const [session] = useSession();

    return (
        <section className=" mx-auto md:flex bg-gradient-to-br from-blue-900 to-yellow-600 min-h-screen ">

        <div class=" md:w-auto bg-black md:bg-gray-600 px-2  fixed   h-16 md:h-screen md:border-r-4 md:border-grey-dark">
          
        {JSON.stringify(session)}

        <Head>
                <title>Library Acquisition | Welcome! </title>
                <meta name="keywords" content="someting" />
                <link rel="icon" href="/icon.ico" />
            </Head>

            <div class="md:relaive mx-8 lg:float-right lg:px-6">

                <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                {JSON.stringify(session)}
                    <li class="mr-3 flex-1">
                        <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink">
                            <i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-grey-dark md:text-grey-light block md:inline-block">Link</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                                      <Link href="/requestform"><span className=" hover:bg-gray-900 hover:text-white text-gray-300 px-3 py-2 border-0 border-b-2 text-sm font-medium">About Us</span></Link>

                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-dark">
                            <i class="fas fa-link pr-0 md:pr-3 text-pink"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Active Link</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink">
                            <i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-grey-dark md:text-grey-light block md:inline-block">Link</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </section>
    )
}
