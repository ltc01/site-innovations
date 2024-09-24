import React from 'react'

const Loader = () => {
    return (
        <>
            {/* <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
                <div className="h-28 w-28 border-t-8 border-b-8 border-indigo-700 rounded-full animate-spin"></div>
            </div> */}

            {/* <div className="flex justify-center items-center h-screen">
                <div className="relative inline-flex">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
            </div> */}

            <div className="w-[100vw] h-[100vh] flex items-center justify-center">
                <div className="p-1 md:p-2 bg-gradient-to-tr animate-spin from-indigo-400 to-blue-700 rounded-full">
                    <div className="bg-white rounded-full">
                        <div className="size-8 md:w-16 md:h-16 rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader