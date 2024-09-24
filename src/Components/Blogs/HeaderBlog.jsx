import bhead from "../../assets/Blogs/bhead.jpg";
import { toast } from "react-toastify";

export const HeaderBlog = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = () => {
    if (searchQuery == "") {
      toast.error("Please write something in input feild");
    }
  };

  return (
    <>
      <div className='relative font-[sans-serif]  before:absolute before:w-full before:h-full before:inset-0 before:bg-black/70 before:z-10'>
        <img
          src={bhead}
          alt='Banner Image'
          className='absolute inset-0 w-full h-full object-cover object-center '
        />
        <div className='min-h-[400px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12'>
          <div className='max-w-3xl mx-auto text-center'>
            <h3 className='text-white md:text-5xl text-4xl font-bold'>
              Latest Insights and Updates on BAOIAM Blog
            </h3>
            <p className='text-gray-300 text-sm mt-6'>
              Explore our articles, news, and tips to stay informed and inspired
            </p>

            <div className='max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700'>
              <input
                type='text'
                placeholder='Search for articles...'
                className='w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                type='button'
                onClick={handleSearch}
                className='bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white tracking-wide text-sm rounded-full px-6 py-3'
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
