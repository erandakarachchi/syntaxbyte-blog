import BannerCard from "@/components/BannerCard";
import Advertisement from "@/components/Advertisement";
import PostCard from "@/components/PostCard";
import { postsData } from "@/data/data";
import { getPostsByType, getPostById } from "@/data/config";
import { IPost } from "@/@types/generated/contentful";
import RichTextView from "@/components/RichTextView";

async function getAllPosts() {
  const posts = await getPostsByType<IPost[]>("post");
  return posts;
}

export default async function Home() {
  const posts = await getAllPosts();

  const data = await getPostById("28368f0f-6e03-4d62-8b54-742242d64a4f");

  console.log(posts[0]);

  console.log("-----------------------------");

  console.log("Post", JSON.stringify(data));

  return (
    <main className="container">
      <section>
        <BannerCard />
      </section>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
      <section className="mt-10 lg:mt-20">
        <RichTextView content={posts[0].fields.content as any} />
      </section>
      <section className="mt-10 lg:mt-20">
        <h2 className="heading-2">Latest Posts</h2>\{" "}
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
