import Header from './Header';
import Link from 'next/link'; // Ensure Link is used if necessary, or remove this import if not.
import { FormDataValidate } from '../utils/validate';
import { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useRouter } from 'next/navigation'; // Corrected from 'next/Navigation' to 'next/router'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'; // Removed unused 'UseDispatch'
import { adduser, removeuser } from '../utils/userslice';
import { bg } from './Constant';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({
          uid,
          email,
          displayName,
        }));
        router.push("/browse");
      } else {
        dispatch(removeuser());
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    const message = FormDataValidate(email, password);
    if (message) {
      setError(message);
      return;
    }

    try {
      if (!isSignIn) {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, {
          displayName: name, 
          photoURL: "https://example.com/profile.jpg",
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/browse");
    } catch (error) {
      setError(error.code + "-" + error.message);
    }
  };

  return (
    <div>
      <Header /><img src={bg} alt="" />
      <form onSubmit={handleSubmit} className='absolute left-0 right-0 w-3/12 p-12 m-2 mx-auto text-white bg-black top-32 bg-opacity-80'>
        <h1 className='px-2 pb-4 mx-2 text-4xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input type="text" placeholder='Full Name' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600'
                 value={name} onChange={(e) => setName(e.target.value)} />
        )}
        <input
          type="text"
          placeholder="Email"
          className="h-10 p-4 m-4 w-[15rem] bg-zinc-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          className='h-10 p-4 m-4 w-[15rem] bg-zinc-600'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-[15rem] h-12 p-4 m-4 bg-red-600 rounded-sm">Submit</button>
        <p className='px-2 m-2 font-semibold text-red-600'>{error}</p>
        <p className='pt-3 m-4 cursor-pointer text-zinc-400' onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
