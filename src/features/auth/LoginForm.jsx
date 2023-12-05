import { useState } from "react";
import Input from "../../ui/Input";
import PasswordInput from "../../ui/PasswordInput";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-2 py-4">
      <Input value={email} setValue={setEmail} id="email" label="email" type="text" />
      <PasswordInput value={password} setValue={setPassword} id="password" label="Password" />
      <button className="primary-button">log in</button>
      <h3 className="text-center pt-5 lowercase text-xl">Or</h3>
      <button className="flex flex-row items-center justify-center gap-1 bg-lime-800 px-2 py-3 text-stone-50 cursor-pointer">
        <FcGoogle /> Log in
      </button>
    </div>
  );
}
