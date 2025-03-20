import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import CartIcon from "./CartIcon";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function HeaderTop() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const userId = Cookies.get("customerId"); 

  useEffect(() => {
    if (userId) {
      axios.get(`https://dhkptsocial.onrender.com/users/${userId}`)
        .then((response) => {
          const avatarId = response.data.avatar; 
          if (avatarId) {
            setAvatarUrl(`https://dhkptsocial.onrender.com/files/download/${avatarId}`);
          } else {
            setAvatarUrl("https://cdn.builder.io/api/v1/image/assets/TEMP/default-avatar.png"); 
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin user:", error);
          setAvatarUrl("https://cdn.builder.io/api/v1/image/assets/TEMP/default-avatar.png"); 
        });
    }
  }, [userId]); 

  return (
    <header className="flex justify-center items-center px-10 py-5 bg-white max-md:px-5 max-md:py-4 max-sm:flex-col max-sm:gap-4">
      <div className="flex gap-3.5 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2032fd40796519a4886960ff20baefdcfcd0e3"
          className="h-[50px] w-[50px]"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold text-black">DHKPTShop</h1>
      </div>

      <SearchInput />

      <div className="flex gap-11 items-center max-sm:justify-between max-sm:w-full">
        {/* Hiển thị avatar từ API */}
        <img
          src={avatarUrl}
          className="border border-solid border-zinc-400 h-[50px] rounded-[99px] w-[50px] object-cover"
          alt="User Avatar"
        />
        <CartIcon />
      </div>
    </header>
  );
}

export default HeaderTop;
