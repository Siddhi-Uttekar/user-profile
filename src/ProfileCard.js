import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);


  return (
    <div className="flex items-center justify-center  p-6 w-5/12 h-80 mt-10 bg-white ">
     <div className=" flex border-width: 1px; w-11/12 h-64 border-4 border-black">
        <div className="p-10">
         <img
        src={user.picture.large}
        alt="Profile"
        className="w-44 h-40  border-4  border-width: 1px; border-black mr-3"
        />
        </div>
      <div className="p-8">
        <h2 className="text-xl font-bold p-2  ">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-xl font-bold p-2">{user.gender}</p>
        <p className="text-xl font-bold p-2"> {user.phone}</p>
      </div>
      </div>
    </div>
  );
};

export default ProfileCard;
