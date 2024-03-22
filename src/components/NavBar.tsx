import { socials } from "@/utils/social";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function NavBar() {

    return (
        <nav className="py-14 flex justify-between items-center ">
            <h1 className="text-6xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">H</h1>
            <div className="flex items-center gap-4">
                <ModeToggle />
                {socials.map((social, index) => {
                const Icon = social.icon
                    return (
                        <Link href={social.link} key={index} aria-label={social.label}> 
                            <Icon className="w-6 h-6 hover:scale-x-110 hover:scale-y-110 transition-all"/> 
                        </Link>  
                    )
                })}
            </div>
        </nav>    
    );
}