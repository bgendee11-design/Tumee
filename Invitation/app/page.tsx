import AudioPlayer from "./components/AudioPlayer";
import AutoSlideSections from "./components/AutoSlideSections";
import DateLocationSection from "./components/DateLocationSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import RSVPSection from "./components/RSVPSection";


export default function Home() {
  return (
       <AutoSlideSections>
          <HeroSection Category="PUBLIC"  />
                <section className="relative z-10 w-full snap-start">
                  <DateLocationSection />
                </section>
                  <GallerySection />
                 <section className="relative z-10 w-full snap-start">
                  <RSVPSection />
                </section>
                <AudioPlayer />
        </AutoSlideSections>
  );
}
