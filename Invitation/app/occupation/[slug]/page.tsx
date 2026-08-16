import type { Metadata } from "next";
import AudioPlayer from "../../components/AudioPlayer";
import DateLocationSection from "../../components/DateLocationSection";
import GallerySection from "../../components/GallerySection";
import HeroSection from "../../components/HeroSection";
import RSVPSection from "../../components/RSVPSection";
import AutoSlideSections from "../../components/AutoSlideSections";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const normalizeName = (slug: string) => {
  const safeSlug = slug ?? "";
  const decoded = decodeURIComponent(safeSlug.replace(/\+/g, " "));
  return decoded
    .split(/[-_ ]+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
};


export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;
  const name = normalizeName(slug);

  const title = `${name}  хамт олноороо`;
  const description =
    "Сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.";

  const url = `https://invitation-beryl-three.vercel.app/family/${encodeURIComponent(
    slug
  )}`;

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
          url: "https://invitation-beryl-three.vercel.app/inv.jfif",
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
        "https://invitation-beryl-three.vercel.app/inv.jfif",
      ],
    },
  };
}

export default async function DynamicInvitationPage({ params }: PageProps) {
  const { slug } = await params;
  const rawName = normalizeName(slug);
  return (
       <AutoSlideSections>
          <HeroSection Category="OCCUPATION" name={rawName} />
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
