import AboutContent from "@/app/(mainsite)/components/aboutpage/AboutContent/AboutContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Page",
    description: ""
}

export default function AboutPage(){
    return(
        <>
            <AboutContent />
        </>
    )
}