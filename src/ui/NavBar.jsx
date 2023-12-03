import { FaChevronDown } from "react-icons/fa6";

import LogoIcon from "./LogoIcon";

export default function NavBar() {
  return (
    <div className="flex justify-between px-4 py-2 ">
      <div className=" gap-2 items-center hidden cursor-pointer lg:flex">
        <FaChevronDown className="w-6 h-6" />
        <h2 className="text-xl lowercase font-[500]">For you</h2>
      </div>
      <div className="flex items-center gap-2">
        <LogoIcon />
        <h2 className="text-md italic lowercase font-semibold sm:text-xl lg:text-3xl">
          TrackMyWallet
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/default-user.jpg"
          alt="User profile picture"
          className="rounded-[100%] w-8 h-8 cursor-pointer border-orange-100 border-[1.5px] sm:h-10 sm:w-10 lg:h-14 lg:w-14"
        />
      </div>
    </div>
  );
}
