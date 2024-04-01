import About from "@/app/(mainsite)/components/homepage/About/About";
import Events from "@/app/(mainsite)/components/homepage/Events/Events";
import FeaturedSong from "@/app/(mainsite)/components/homepage/FeaturedSong/FeaturedSong";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Listen from "@/app/(mainsite)/components/homepage/Listen/Listen";
import Merch from "@/app/(mainsite)/components/homepage/Merch/Merch";
import PopularReleases from "@/app/(mainsite)/components/homepage/PopularReleases/PopularReleases";


export default function Home() {
  return (
    <>
      <Header />
      <Events />
      <Listen />
      <PopularReleases />
      <Merch />
      <About />
      <FeaturedSong />
    </>
  )
}
