import BannerCard from "@/components/BannerCard";
import Advertisement from "@/components/Advertisement";
import PostCard from "@/components/PostCard";
import { postsData } from "@/data/data";

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
          {postsData.map((post) => (
            <PostCard
              key={post.postId}
              postId={post.postId}
              imageUrl={post.imageUrl}
              authorName={post.authorName}
              publishedDate={post.publishedDate}
              postName={post.title}
            />
          ))}
        </div>
      </section>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
    </main>
  );
}
