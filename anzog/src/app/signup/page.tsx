import Image from "next/image";
import SignUp from "@/components/sighup/create-user/SignUp";
import Login from "@/components/sighup/create-user/Login";

type User = {};

export default function Home() {
  return (
    <div>
      <Login />
      <SignUp />
    </div>
  );
}
