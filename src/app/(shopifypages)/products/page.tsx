import AppWrapper from "@/app/shopify/AppWrapper"
import ProductListings from "@/app/components/ShopifyComponents/ProductListings/ProductListings"
import { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"

export const metadata: Metadata = {
    title: 'Products | GBMUSIQ | Gospel Music Artist | Simply Apostle',
    description: 'Site\'s Products | GBMUSIQ | Gospel Music Artist | Simply Apostle'
  }
  
export default function page() {
  return (
        <>
          <PageTitle title="Store" />
          <ProductListings />
        </>
  )
}
