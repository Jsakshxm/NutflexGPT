"use client"
import Header from "../components/Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/navigation";

const Page = () => {
    const router=useRouter()
    const handleclick=()=>{
        signOut(auth).then(() => {
            router.push("/")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  router.push("/error")
});
    }


  return (
    <div className="flex flex-col">
      <Header />
      <div className="z-30 flex items-center justify-end p-4 py-6 space-x-4">
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="Sign Out"
          className="w-12 h-12 rounded-sm"
        />
        <button className="px-2 py-2 font-semibold text-white bg-red-500 " onClick={handleclick}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Page;
