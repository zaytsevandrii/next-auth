import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,updateProfile } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

export default function login() {
      const [user,loading] =useAuthState(auth)
    const route = useRouter()
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            route.push("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

//Fascebook
const fbProvider=new FacebookAuthProvider()
const FacebookProvider=async()=>{
      try{
            const result = await signInWithPopup(auth,fbProvider)
            console.log(result)
            route.push("/dashboard")
      }catch(error){
            console.log(error)
      }
}

    useEffect(() => {
        if (user) {
            route.push("/dashboard")
        } else {
            console.log("login")
        }
    }, [user])
    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-3xl font-medium">Join today</h2>
            <div className="py-4">
                <h3 className="py-4">Sign In with one of the providers</h3>
            </div>
            <div className="flex flex-col gap-4">
                <button
                    onClick={GoogleLogin}
                    className="text-white bg-gray-700 p-3 w-full font-medium rounded-lg flex align-meddle gap-2"
                >
                    <FcGoogle className="text-2xl" />
                    Google Sign in
                </button>
                <button className="text-white bg-gray-700 p-3 w-full font-medium rounded-lg flex align-meddle gap-2">
                    <AiFillFacebook className="text-2xl" />
                    Facebook Sign In
                </button>
            </div>
        </div>
    )
}
