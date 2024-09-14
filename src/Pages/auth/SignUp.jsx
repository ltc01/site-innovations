import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;

const SignUp = () => {
document.title = 'Baoiam - Sign Up'
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        re_password: '',
        first_name: '',
        last_name: '',
    });
    const [error, setError] = useState(null);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const onSubmit = async (e) => {

        e.preventDefault();
        const toastId = toast.loading("Processing your login...");
        try {
            const response = await fetch(`${apiUrl}/api/auth/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.log("response recieved")
                const errorData = await response.json();
                console.log(errorData)
                // setError(errorData);
                toast.update(toastId, {
                    render: `kindly try again with correct information!`,
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                });
                return;
            }

            console.log('Form submitted successfully');
            toast.update(toastId, {
                render: "registration successful!",
                type: "success",
                isLoading: false,
                autoClose: 2000,
            });

            setTimeout(() => {
                navigate('/'); 
            }, 2000); 

        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Something went wrong, please try again.');
        }
    };

    return (
        <div>
            <ToastContainer />
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className="lg:mb-0 mb-10">
                            <div className="group w-full h-[30rem]">
                                <div className="relative h-full">
                                    <img src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl" />
                                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div className="bg-white rounded-lg p-6 block">
                                            <h1>Lorem</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis, culpa molestiae quia voluptate ad alias reprehenderit accusantium eius tempora esse ratione doloribus, assumenda sint?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                            <h2 className="text-indigo-600 font-manrope text-4xl text-center font-semibold leading-10 mb-8">Sign Up</h2>

                            <div className="w-full mb-2 lg:mb-0">
                                <button type="button" className="group w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                                    <FaGoogle size={20} className="group-hover:text-blue-600" onClick={()=>{}}/> Sign Up with Google
                                </button>
                            </div>

                            <div className="my-4 text-sm text-gray-600 text-center">
                                <p>or with email</p>
                            </div>

                            <form onSubmit={onSubmit} className="mx-auto grid grid-cols-2 gap-x-4">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="first_name" id="first_name" value={formData.first_name} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Last name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="email" id="email" value={formData.email} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Email address</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="password" name="password" id="password" value={formData.password} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Password</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="password" name="re_password" id="re_password" value={formData.re_password} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="re_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Confirm password</label>
                                </div>

                                <div className="flex items-start mb-5 col-span-2">
                                    <div className="flex items-center h-5">
                                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center col-span-2">Submit</button>
                            </form>

                            {error && <div className="mt-4 text-sm text-red-600 text-center">{error}</div>}

                            <div className="mt-4 text-sm text-gray-600 text-center">
                                <p>Already have an account? <Link to="/login" className="text-black hover:underline">Login here</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
