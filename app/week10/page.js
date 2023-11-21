"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user);

    return(
        <main>
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.displayName} | {user.email}</p>
                        <img src={user.photoURL} width="50"/>
                        <p>Your user ID is: {user.uid}</p>
                        <button className="font-bold 
                            px-7 py-2 
                            text-black 
                            bg-green-400 
                            border-2 border-black m-4 rounded 
                            hover:bg-green-700">
                        <Link href="/week10/shopping-list">shopping list page</Link></button>

                        <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>
                            sign out
                        </button>
                    </div>
                ) : (
                    <div>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignIn}>
                            sign in
                        </button>
                    </div>
                ) }
            </section>
        </main>
    )
}