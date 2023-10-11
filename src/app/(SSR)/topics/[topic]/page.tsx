import { UnsplashImage } from "@/models/UnsplashImage";
import { Metadata } from "next";
import Image from "next/image";

type pageParams = {
  params: { topic: string };
};

export function generateMetadata({ params: { topic } }: pageParams): Metadata {
  return {
    title: `${topic} - NextJS-Image Gallery`,
  };
}

export default async function Page({ params: { topic } }: pageParams) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <h1>{topic}</h1>
      <div>
        {images?.map((image) => (
          <Image
            src={image.urls.raw}
            alt={image.description}
            height={250}
            width={250}
            style={{
              margin: "0.25rem",
              borderRadius: "4px",
              objectFit: "cover",
            }}
            key={image.urls.raw}
          />
        ))}
      </div>
    </div>
  );
}
