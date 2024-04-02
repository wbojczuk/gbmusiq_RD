import AppWrapper from "@/app/shopify/AppWrapper"
import ProductListings from "@/app/components/ShopifyComponents/ProductListings/ProductListings"
import { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"

export const metadata: Metadata = {
    title: 'Products',
    description: 'Site\'s Products'
  }
  
export default function page() {
  return (
        <>
          <PageTitle title="Store" />
          <ProductListings />
        </>
  )
}
