import { useState } from "react";
import LogoIcon from "../ui/LogoIcon";
import LoginForm from "../features/auth/LoginForm";
import SignUpForm from "../features/auth/SignUpForm";

export default function Auth() {
  const [login, setLogin] = useState(true);

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-[100%] min-h-[20vh] bg-mantis-500 rounded-b-3xl p-5">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="font-bold text-stone-50 text-xl">Track my wallet</h1>
        </div>
        <h5 className=" text-stone-100  italic">
          start tracking, empower your finances <span className="text-lime-800 font-bold">NOW</span>
        </h5>
        <img
          alt="Man being visibly confused about his finances"
          src="/auth-poster.png"
          className="h-[5rem] w-[5rem] absolute left-[85%] translate-x-[-60%] top-[12%]"
        />
      </div>
      <div className="min-w-[95vw] min-h-[75vh] bg-stone-100 pt-5 p-3  flex flex-col gap-2">
        <h2 className="text-xl lowercase font-semibold italic">{login ? "Log in" : "Sign up"}</h2>
        <div>{login ? <LoginForm /> : <SignUpForm />}</div>
        <span
          role="button"
          onClick={() => setLogin((prev) => !prev)}
          className="border-b-1 border-b-sky-700 text-sky-700 font-small lowercase cursor-pointer"
        >
          {login ? "Click here to sign up!" : "Click here to sign up!"}
        </span>
      </div>
    </div>
  );
}
