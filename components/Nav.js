import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../utils/firebase"

export default function Nav() {
    const [user, loading] = useAuthState(auth)
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">Logo</Link>
            <ul>
                {!user && (
                    <Link href={"/auth/login"}>
                        {" "}
                        <button className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">Join now</button>
                    </Link>
                )}
                {user&&(
                  <div>
                        <Link href={'/dashboard'}>
                              <h2>{user.displayName}</h2>
                              <img src={user.photoURL} alt="avatars" referrerPolicy="no-referrer" className="w-12 rounded-full" />
                        </Link>
                  </div>
                )}
            </ul>
        </nav>
    )
}
