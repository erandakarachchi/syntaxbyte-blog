import Image from "next/image";
import BannerCard from "@/components/BannerCard";
import Advertisement from "@/components/Advertisement";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main className="container">
      <section>
        <BannerCard />
      </section>
      <section className="container mt-20">
        <Advertisement />
      </section>
      <section className="mt-20">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
      <section className="container mt-20">
        <Advertisement />
      </section>
    </main>
  );
}
