import { UnsplashImage } from "@/models/UnsplashImage";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Incremental Static Regeneration - NextJS-Image Gallery",
};

export const revalidate = 15;

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashImage = await response.json();
  const width = Math.min(500, image.width);
  const height = Math.min(400, (width / image.width) * image.height);
  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page{" "}
        <strong>fetches data only after a certain time gap has elapsed</strong>
      </Alert>
      <Image
        src={image.urls.raw}
        alt={image.description}
        width={width}
        height={height}
        className="rounded shadow mw-100"
      />
      by{" "}
      <Link href={`/user/${image.user.username}`}>{image.user.username}</Link>
    </div>
  );
}
