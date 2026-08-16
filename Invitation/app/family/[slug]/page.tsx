import HeroSection from "../../components/HeroSection";
import DateLocationSection from "../../components/DateLocationSection";
import GallerySection from "../../components/GallerySection";
import RSVPSection from "../../components/RSVPSection";
import AudioPlayer from "../../components/AudioPlayer";
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
  const title = `${name} болон гэр бүлийн хамт`;
  const description =
    "Сэвлэг үргээх ёслолд хүрэлцэн ирэхийг урьж байна.";

  const url = `https://tumee-invitation.vercel.app/family/${encodeURIComponent(
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

export default async function DynamicInvitationPage({ params }: PageProps) {
  const { slug } = await params;
  const rawName = normalizeName(slug);
  
  return (

   <AutoSlideSections>
      <HeroSection Category="FAMILY" name={rawName} />
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
