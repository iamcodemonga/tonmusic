import Bottombar from "@/components/Bottombar";
import LatestSongs from "@/components/lists/LatestSongs";
import TopAlbums from "@/components/lists/TopAlbums";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 pt-16">
      <h1  className="font-semibold text-2xl mb-4 mt-5 ml-1">Top Albums</h1>
      <TopAlbums />
      <h2 className="font-semibold text-2xl mb-2 mt-10 ml-1">Latest music</h2>
      <LatestSongs />
      <Bottombar />
    </main>
  );
}
