import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import FormAndMap from "@/app/(mainsite)/components/contactpage/FormAndMap/FormAndMap"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Page",
    description: ""
}

export default function ContactPage(){
    return(
        <>
            <PageTitle title="Contact" />
            <FormAndMap />
        </>
    )
}