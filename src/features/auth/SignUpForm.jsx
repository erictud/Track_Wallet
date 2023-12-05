import { useState } from "react";
import Input from "../../ui/Input";
import PasswordInput from "../../ui/PasswordInput";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="flex flex-col gap-2 py-4">
      <Input value={username} setValue={setUsername} id="username" label="Username" type="text" />
      <Input value={email} setValue={setEmail} id="email" label="email" type="text" />
      <PasswordInput value={password} setValue={setPassword} id="password" label="Password" />
      <PasswordInput
        value={confirmPassword}
        setValue={setConfirmPassword}
        id="confirm_password"
        label="Confirm Password"
      />
      <button className="primary-button">sign up</button>
      <h3 className="text-center pt-5 lowercase text-xl">Or</h3>
      <button className="flex flex-row items-center justify-center gap-1 bg-lime-800 px-2 py-3 text-stone-50 cursor-pointer">
        <FcGoogle /> Sign up
      </button>
    </form>
  );
}
