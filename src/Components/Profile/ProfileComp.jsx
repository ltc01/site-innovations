import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { useSelector } from 'react-redux';

const ProfileComp = ({ userInfo }) => {
    // console.log(userInfo);
    const user = useSelector((state) => {
        console.log(state);
        return state.user;
    });

    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150"
    );

    useEffect(() => {
        const storedImage = localStorage.getItem("profileImage");
        // dispatch(setProfile(userInfo));
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    const handleChangeProfile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                // Save the image in localStorage
                localStorage.setItem("profileImage", base64String);
                // Update the state to reflect the new image
                setProfileImage(base64String);
            };
            reader.readAsDataURL(file); // Convert the image file to a base64 string
        }
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, index) => (
                    <AiFillStar key={index} className="text-yellow-400" />
                ))}
                {halfStar && <AiFillStar className="text-yellow-400" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <AiFillStar key={index + fullStars} className="text-gray-400" />
                ))}
            </div>
        );
    };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-5 gap-8 p-4 w-full h-full overflow-auto lg:h-screen'>
            {/* Personal Details */}
            <div className='bg-white lg:col-span-2 lg:row-span-2 rounded-xl px-4 md:px-10 w-full h-52 lg:h-full flex items-center gap-8'>
                <div className='size-28 md:size-40 rounded-full overflow-hidden group relative'>
                    <img src={profileImage} className='w-full h-full object-cover' alt="" />
                    <label htmlFor="profileImageInput" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer text-white">
                        Edit
                    </label>
                    <input
                        id="profileImageInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleChangeProfile}
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className='text-indigo-600 font-semibold md:text-2xl mb-2'>{userInfo.first_name} {userInfo.last_name}</h1>
                    <div className='my-1 text-xs md:text-base'>
                        Email:
                        <span className='text-indigo-600'> {userInfo.email}</span>
                    </div>
                    <div className='my-1 text-xs md:text-base'>
                        Mobile:
                        <span className='text-indigo-600'> +91 1234567890</span>
                    </div>
                    <div className='my-1 text-xs md:text-base'>
                        College:
                        <span className='text-indigo-600'> College</span>
                    </div>

                    <div className='flex items-center gap-2 mt-4'>
                        <FaGithub className='bg-indigo-500 size-6 p-1 rounded-full text-white' />
                        <FaLinkedin className='bg-indigo-500 size-6 p-1 rounded-full text-white' />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className='bg-white lg:col-span-1 lg:row-span-2 p-4 rounded-xl flex flex-col justify-between'>
                <h2 className='text-2xl text-indigo-600 font-semibold'>Notifications</h2>
                <div className='flex flex-col gap-2'>
                    <div className="bg-amber-400 text-white p-2 rounded-lg">
                        <span>Assignment due in 2 days</span>
                    </div>
                    <div className="bg-indigo-400 text-white p-2 rounded-lg">
                        <span>New Course available: GraphQl Basics</span>
                    </div>
                    <div className="bg-indigo-400 text-white p-2 rounded-lg">
                        <span>New Course available: GraphQl Basics</span>
                    </div>
                </div>
            </div>

            {/* Courses */}
            <div className='bg-white overflow-auto lg:col-span-2 lg:row-span-3 p-4 rounded-xl'>
                <h2 className='text-3xl text-indigo-600 text-center font-semibold'>Courses</h2>

                <div className='flex flex-col gap-4 mt-4'>
                    <div className="flex items-center gap-2 p-2 rounded-xl border border-indigo-600">
                        <div className='size-20 rounded-full overflow-hidden'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png" className='w-full h-full object-cover' alt="" />
                        </div>

                        <div className="flex flex-col w-full px-2">
                            <h3 className="text-lg font-semibold">Ui/UX</h3>

                            <div className="h-3 border border-indigo-600 rounded-full mt-1">
                                <div
                                    className={`h-full rounded-3xl ${50 === 100 ? 'bg-gradient-to-r from-green-500 to-green-700' : 'bg-gradient-to-r from-indigo-500 to-indigo-700'}`}
                                    style={{ width: `${50}%` }}
                                ></div>
                            </div>
                            <p className="text-sm mt-2 font-medium">Progress: 50%</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl border border-indigo-600">
                        <div className='size-20 rounded-full overflow-hidden'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png" className='w-full h-full object-cover' alt="" />
                        </div>

                        <div className="flex flex-col w-full px-2">
                            <h3 className="text-lg font-semibold">Ui/UX</h3>

                            <div className="h-3 border border-indigo-600 rounded-full mt-1">
                                <div
                                    className={`h-full rounded-3xl ${50 === 100 ? 'bg-gradient-to-r from-green-500 to-green-700' : 'bg-gradient-to-r from-indigo-500 to-indigo-700'}`}
                                    style={{ width: `${50}%` }}
                                ></div>
                            </div>
                            <p className="text-sm mt-2 font-medium">Progress: 50%</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl border border-indigo-600">
                        <div className='size-20 rounded-full overflow-hidden'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png" className='w-full h-full object-cover' alt="" />
                        </div>

                        <div className="flex flex-col w-full px-2">
                            <h3 className="text-lg font-semibold">Ui/UX</h3>

                            <div className="h-3 border border-indigo-600 rounded-full mt-1">
                                <div
                                    className={`h-full rounded-3xl ${50 === 100 ? 'bg-gradient-to-r from-green-500 to-green-700' : 'bg-gradient-to-r from-indigo-500 to-indigo-700'}`}
                                    style={{ width: `${50}%` }}
                                ></div>
                            </div>
                            <p className="text-sm mt-2 font-medium">Progress: 50%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended */}
            <div className='bg-white lg:col-span-1 lg:row-span-3 p-4 rounded-xl overflow-auto'>
                <h2 className='text-2xl text-indigo-600 font-semibold'>Recommended Courses</h2>

                <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4 mt-4">
                    <div className="w-full p-2 bg-indigo-600 rounded-xl flex flex-col xl:flex-row gap-4 items-center">
                        <div className='w-full xl:size-20 rounded-md overflow-hidden'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png" className='w-full h-full object-cover' alt="" />
                        </div>

                        <div className="text-white">
                            <h3 className="font-medium">Ui/UX</h3>

                            <div className="my-1">
                                {renderStars(4)}
                            </div>

                            <div className='flex items-center justify-between gap-20'>
                                <span className='text-sm'>₹999</span>
                                <button className='text-sm bg-white px-2 py-1 text-black rounded-md font-medium'>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 bg-indigo-600 rounded-xl flex flex-col xl:flex-row gap-4 items-center">
                        <div className='w-full xl:size-20 rounded-md overflow-hidden'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png" className='w-full h-full object-cover' alt="" />
                        </div>

                        <div className="text-white">
                            <h3 className="font-medium">Ui/UX</h3>

                            <div className="my-1">
                                {renderStars(4)}
                            </div>

                            <div className='flex items-center justify-between gap-20'>
                                <span className='text-sm'>₹999</span>
                                <button className='text-sm bg-white px-2 py-1 text-black rounded-md font-medium'>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 bg-indigo-600 rounded-xl flex flex-col xl:flex-row gap-4 items-center">
                        <div className='w-full xl:size-20 rounded-md overflow-hidden'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png" className='w-full h-full object-cover' alt="" />
                        </div>

                        <div className="text-white">
                            <h3 className="font-medium">Ui/UX</h3>

                            <div className="my-1">
                                {renderStars(4)}
                            </div>

                            <div className='flex items-center justify-between gap-20'>
                                <span className='text-sm'>₹999</span>
                                <button className='text-sm bg-white px-2 py-1 text-black rounded-md font-medium'>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileComp