import BannerCard from "@/components/BannerCard";
import Advertisement from "@/components/Advertisement";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main className="container">
      <section>
        <BannerCard />
      </section>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
      <section className="mt-10 lg:mt-20">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          <PostCard imageUrl="https://unsplash.it/380/240?image=30"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=32"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=43"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=54"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=25"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=26"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=27"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=28"/>
          <PostCard imageUrl="https://unsplash.it/380/240?image=29"/>
        </div>
      </section>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
    </main>
  );
}
