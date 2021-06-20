import Head from 'next/head'

export default function Home() {


    return (
        <>
            <Head>
                <title>Library Acquisition | Home </title>
                <meta name="keywords" content="someting" />
                <link rel="icon" href="/icon.ico" />

            </Head>

            <div className=" w-full mx-auto lg:max-w-full lg:flex">

                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-0 text-center " title="Mountain">
               
                </div>

                <div className="mx-auto border-r border-b border-l border-t mt-2  border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col ">

                    <div className="flex items-center mx-auto">
                        <img className="w-10 h-10  mr-4" src="/cpulogo.png" />


                        <div className="text-sm mr-4 content-around">
                            <p className="text-gray-900 leading-none">Title</p>
                            <p className="text-gray-600">Author</p>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails </div>
                            <p className="text-gray-700 text-base">About this Book</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
