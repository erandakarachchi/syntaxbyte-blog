import Image from "next/image";
import BannerCard from "@/app/components/BannerCard";
import Advertisement from "@/app/components/Advertisement";
import PostCard from "@/app/components/PostCard";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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