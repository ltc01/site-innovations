import React, { useEffect, useState } from "react";

const ProfileManage = ({ userInfo, setUserInfo }) => {
  const [email, setEmail] = useState({
    newEmail: "",
    confirmEmail: "",
  });
  const [formData, setFormData] = useState(() => {
    return {
      first: userInfo.name?.split(" ")[0],
      last: userInfo.name?.split(" ")[1],
      email: userInfo.email,
      mobile: userInfo.mobile,
      dob: userInfo.dob,
      college: userInfo.college,
      location: userInfo.location,
      socialLinks: {
        linkedIn: userInfo.socialLinks?.linkedIn,
        gitHub: userInfo.socialLinks?.gitHub,
        leetCode: userInfo.socialLinks?.leetCode,
      },
    };
  });

  const [isEditable, setIsEditable] = useState({
    personalInfo: false,
    socialLinks: false,
    email: false,
    password: false,
  });

  const handleEditToggle = (section) => {
    if (section === "email" && isEditable.email) {
      console.log("email", isEditable.email, validateEmail());
      if (validateEmail()) {
        setFormData((old) => {
          return {
            ...old,
            email: email.newEmail,
          };
        });
        setIsEditable((prevState) => ({
          ...prevState,
          [section]: !prevState[section],
        }));
      }
      return;
    }
    setIsEditable((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const validateEmail = () => {
    return (
      email.newEmail !== "" &&
      email.confirmEmail !== "" &&
      email.newEmail === email.confirmEmail
    );
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((old) => {
      return type === "url"
        ? {
            ...old,
            socialLinks: { ...old.socialLinks, [name]: value },
          }
        : {
            ...old,
            [name]: [value],
          };
    });
  };

  useEffect(() => {
    setUserInfo((old) => {
      console.log(formData.first, formData.last);
      return {
        name: `${formData.first} ${formData.last}`,
        ...formData,
      };
    });
  }, [formData]);
  useEffect(() => {
    console.log("userInfo - ", userInfo);
  }, [userInfo]);

  return (
    <section className="max-w-4xl dark:bg-black dark:text-white mx-auto p-6">
      <form className="space-y-8">
        {/* Personal Information Section */}
        <div className="dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <button
            type="button"
            onClick={() => handleEditToggle("personalInfo")}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.personalInfo ? "Save" : "Edit"}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2">{formData.first}</label> :
                <input
                  type="text"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="First Name"
                  onChange={handleInputChange}
                  name="first"
                />
              }
            </div>

            {/* Last Name */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2">{formData.last}</label> :
                <input
                  type="text"
                  className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  name="last"
                />
              }
            </div>
            {/* Mobile Number */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2">{userInfo.mobile || "Enter Mobile Number"}</label> : <input
                type="tel"
                className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Mobile Number"
                onChange={handleInputChange}
                name="mobile"
              />
              }
            </div>
            {/* Date of Birth */}
            <div>
              {!isEditable.personalInfo ?
                <label className="block py-1 px-2">{userInfo.dob}</label> : <input
                  type="date"
                  className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  name="dob"
                  onChange={handleInputChange}
                />
              }
            </div>
            {/* College/School */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2">{userInfo.college}</label> : <input
                type="text"
                className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="College or School Name"
                onChange={handleInputChange}
                name="college"

              />
              }
            </div>
            {/* Location */}
            <div>
              {!isEditable.personalInfo ? <label className="block py-1 px-2">{userInfo.location}</label> : <input
                type="text"
                className=" py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Location"
                onChange={handleInputChange}
                name="location"
              />
              }
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl py-1 px-2 font-bold mb-4">Email</h3>
          <button
            type="button"
            onClick={() => handleEditToggle("email")}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.email ? "Save" : "Edit"}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Email */}
            {!isEditable.email ? 
            <div className="col-span-1 sm:col-span-2">
              <label className="block">{userInfo.email || "Email not provided"}</label>
            </div>
              : <div className='space-y-5'>
                {/* New Email */}
                <div>
                  
                    <input
                      type="newEmail"
                      className="mt-1 block px-2 py-1 w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="New Email Address"
                      onChange={(e)=>{
                        setEmail(old=>{
                          return {
                            ...old,
                            newEmail:e.target.value,
                          }
                        })
                      }}
                      name='newEmail'
                    />
                </div>
                {/* Confirm Email */}
                <div>
                  
                    <input
                      type="confirmEmail"
                      className="mt-1 block w-full px-2 py-1 border-gray-300 rounded-md shadow-sm"
                      placeholder="Confirm New Email"
                      onChange={(e)=>{
                        setEmail(old=>{
                          return {
                            ...old,
                            confirmEmail:e.target.value,
                          }
                        })
                      }}
                      name='confirmEmail'
                    />
                </div>
              </div>
            }
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl py-1 px-2 font-bold mb-4">Password</h3>
          <button
            type="button"
            onClick={() => handleEditToggle("password")}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.password ? "Save" : "Edit"}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Password */}
            <div>
              {!isEditable.password ? (
                <label className="block py-1 px-2 ">Current Password</label>
              ) : (
                <input
                  type="password"
                  className="py-1 px-2 block  w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Current Password"
                />
              )}
            </div>
            {/* New Password */}
            <div>
              {!isEditable.password ? (
                <label className="block py-1 px-2 ">New Password</label>
              ) : (
                <input
                  type="password"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="New Password"
                />
              )}
            </div>
            {/* Confirm New Password */}
            <div>
              {!isEditable.password ? (
                <label className="block py-1 px-2">Confirm New Password</label>
              ) : (
                <input
                  type="password"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Confirm New Password"
                />
              )}
            </div>
          </div>
        </div>
        {/* Social Links Section */}
        <div className="bg-white dark:bg-black dark:text-white dark:border dark:border-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <button
            type="button"
            onClick={() => handleEditToggle("socialLinks")}
            className="absolute top-6 right-6 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            {isEditable.socialLinks ? "Save" : "Edit"}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* LinkedIn */}
            <div>
              {!isEditable.socialLinks ? <label className="block py-1 px-4">{userInfo.socialLinks?.linkedIn}</label> :
                <input
                  type="url"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="LinkedIn Profile URL"
                  onChange={handleInputChange}
                  name="linkedIn"
                />
              }
            </div>
            {/* GitHub */}
            <div>
              {!isEditable.socialLinks ? <label className="block py-1 px-4">{userInfo.socialLinks?.gitHub}</label> :
                <input
                  type="url"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="GitHub Profile URL"
                  onChange={handleInputChange}
                  name="gitHub"
                />
              }
            </div>
            {/* LeetCode */}
            <div>
              {!isEditable.socialLinks ? <label className="block py-1 px-4">{userInfo.socialLinks?.leetCode}</label> :
                <input
                  type="url"
                  className="py-1 px-2 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="LeetCode Profile URL"
                  onChange={handleInputChange}
                  name="leetCode"
                />
              }
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileManage;
