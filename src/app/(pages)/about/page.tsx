import AboutContent from "@/app/(mainsite)/components/aboutpage/AboutContent/AboutContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | GBMUSIQ | Gospel Music Artist | Simply Apostle",
    description: "About | GBMUSIQ | Gospel Music Artist | Simply Apostle"
}

export default function AboutPage(){
    return(
        <>
            <AboutContent />
        </>
    )
}