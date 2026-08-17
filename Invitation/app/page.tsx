import AudioPlayer from "./components/AudioPlayer";
import AutoSlideSections from "./components/AutoSlideSections";
import DateLocationSection from "./components/DateLocationSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import RSVPSection from "./components/RSVPSection";

export async function generateMetadata() {
  const title = `Сэвлэг үргээх ёслол`;
  const description = "Сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.";

  const url = `https://tumee-invitation.vercel.app`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "mn_MN",
      url,
      siteName: "Сэвлэг үргээх ёслолын урилга",
      title,
      description,
      images: [
        {
          url: "https://tumee-invitation.vercel.app/inv2.jfif",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://tumee-invitation.vercel.app/inv2.jfif",
      ],
    },
  };
}


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
