import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../utils/firebase"

export default function login() {
    const googleProvider = new GoogleAuthProvider()
    const GoogleLoogin = async () => {
        try {
            const result = await signInWithPopup(auth,googleProvider)
        } catch {}
    }
    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-3xl font-medium">Join today</h2>
            <div className="py-4">
                <h3 className="py-4">Sign In with one of the providers</h3>
            </div>
            <div className="flex flex-col gap-4">
                <button className="text-white bg-gray-700 p-3 w-full font-medium rounded-lg flex align-meddle gap-2">
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
