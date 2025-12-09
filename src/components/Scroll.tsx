"use client"
import { useState, useEffect } from "react"

import { Button } from "./ui/button"
import { ChevronUp } from "lucide-react"

const Scroll = () => {
    const [ showGoTop, setShowGoTop ] = useState( false )
    const handleVisibleButton = () => {
        setShowGoTop( window.pageYOffset > 50 )
    }       

    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }

    useEffect( () => {
        window.addEventListener( 'scroll', handleVisibleButton )
    }, [] )

    return (
        <div className={`fixed bottom-10 right-10 transition-opacity duration-300 ${showGoTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Button onClick={handleScrollUp}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-600 transition">
                <ChevronUp className="text-black drop-shadow w-8! h-8!" />
            </Button>
        </div>
    )
}

export default Scroll
