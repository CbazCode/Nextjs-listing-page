import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={77}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/people"><a>People Listing</a></Link>
        </nav>
        
    )
}
