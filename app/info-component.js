import Link from "next/link";

export default function Geninfo(){
    return(
        <main>
            <p>Name: Gabreal Kalaf</p>
            <p>Course: CPRG 306-E</p>
            <div>
                <button className="font-bold 
                        px-7 py-2 
                        text-black 
                        bg-blue-700 
                        border-2 border-black m-4 rounded 
                        hover:bg-blue-500">
                <p><Link href="https://github.com/Gabrealk">My GitHub</Link></p>
                </button>
            </div>

            <div>
                <button className="font-bold 
                        px-7 py-2 
                        text-black 
                        bg-blue-700 
                        border-2 border-black m-4 rounded 
                        hover:bg-blue-500">
                <p><Link href="https://www.linkedin.com/in/gabreal-kalaf-ba8433265/">My LinkedIn</Link></p>
                </button>
            </div>
        </main>
    )
}