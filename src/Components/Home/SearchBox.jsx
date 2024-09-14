import React, { useState, useRef, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { School } from '../../Data'
import { Link } from 'react-router-dom'

const SearchBox = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const scourse = School[0].subCate;
    const inputRef = useRef()

    const filteredCourses = scourse.filter(course =>
        course.course.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Detect window resize and toggle between mobile/desktop behavior
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // Change behavior for screens smaller than 768px
        }
        window.addEventListener('resize', handleResize)
        handleResize() // Initial check on component mount

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='relative'>
             {isExpanded && <div className="overlay fixed top-0 right-0 w-full h-full opacity-40 z-20" onClick={()=>setIsExpanded(false)}></div>}
            {/* Desktop and larger screen behavior: Expand inline search */}
            {!isMobile && (
                <div className=''>
                    <div className={`absolute right-0 -top-3 flex items-center justify-center  rounded-full transition-all duration-500 ease-in-out ${isExpanded ? '-top-5 w-60 border border-gray-400' : 'w-10'} bg-transparent `}>
                        <RiSearch2Line 
                            onClick={() => setIsExpanded(true)} 
                            size={22} 
                            className={`cursor-pointer mx-auto transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} 
                        />

                        {/* Input Field: Expands when the search icon is clicked */}
                        {isExpanded && (
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder='Search courses'
                                className='bg-transparent z-30 py-2 pl-2 pr-8 focus:outline-none w-full transition-all duration-500'
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        )}

                        {/* Close Icon: Appears when the search box is expanded */}
                        {isExpanded && (
                            <RxCross2 
                                onClick={() => { 
                                    setIsExpanded(false);
                                    setSearchQuery('');
                                }} 
                                className='absolute right-2 cursor-pointer' 
                                size={20} 
                            />
                        )}
                    </div>

                    {/* Results Box for desktop */}
                    {isExpanded && searchQuery && (
                        <div className='absolute top-7 -right-2 bg-white text-black w-80 z-30 max-h-80 overflow-auto shadow-lg rounded-md mt-2'>
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((c, i) => (
                                    <Link
                                        to={`/course/school/${c.id}`}
                                        onClick={() => setIsExpanded(false)} // Collapse search box when a result is clicked
                                        className='py-2 px-4 block hover:bg-gray-200'
                                        key={i}
                                    >
                                        {c.course}
                                    </Link>
                                ))
                            ) : (
                                <div className='py-2 px-4 text-gray-500'>No courses found</div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Mobile and smaller screen behavior: Pop-up modal */}
            {isMobile && (
                <>
                    {/* Clicking the Search Icon on mobile opens the full-screen pop-up */}
                    <RiSearch2Line 
                        onClick={() => setIsMobilePopupOpen(true)} 
                        size={20} 
                        className='cursor-pointer'
                    />

                    {/* Full-screen pop-up modal for small screens */}
                    {isMobilePopupOpen && (
                        <div className='fixed inset-0 z-50 bg-slate-200/50 backdrop-blur-sm p-4'>
                            <div className='relative flex flex-col items-start justify-start w-full h-full'>
                                {/* Close Button */}
                                <RxCross2 
                                    onClick={() => setIsMobilePopupOpen(false)} 
                                    className='text-black absolute top-2 right-2 cursor-pointer' 
                                    size={25} 
                                />

                                {/* Search Input Field */}
                                <div className='bg-white relative  text-black flex items-center w-full px-6 py-1 border border-black rounded-3xl mt-16'>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder='Search courses'
                                        className='py-2 focus:outline-none w-full'
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <RiSearch2Line size={20} />
                                </div>

                                {/* Results Box */}
                                {searchQuery && (
                                    <div className='bg-white text-black w-full max-h-80 overflow-auto rounded-md py-4 mt-4'>
                                        {filteredCourses.length > 0 ? (
                                            filteredCourses.map((c, i) => (
                                                <Link
                                                    to={`/course/school/${c.id}`}
                                                    onClick={() => setIsMobilePopupOpen(false)} // Close the pop-up when a result is clicked
                                                    className='py-2 px-6 block hover:bg-gray-200'
                                                    key={i}
                                                >
                                                    {c.course}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className='py-2 px-6 text-gray-500'>No courses found</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default SearchBox
