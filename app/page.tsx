import BannerCard from "@/components/BannerCard";
import Advertisement from "@/components/Advertisement";
import PostCard from "@/components/PostCard";
import { getPostsByType } from "@/data/config";
import { IPost } from "@/@types/generated/contentful";
import { getTrendingPost } from "@/lib/utils";

async function getAllPosts() {
  const posts = await getPostsByType<IPost[]>("post");
  return posts;
}

const Home: React.FC = async () => {
  const allPosts = await getAllPosts();

  const trendingPost: any = getTrendingPost(allPosts)[0];

  return (
    <main className="container">
      <section>
        <BannerCard
          key={trendingPost.fields.postId}
          postId={trendingPost.fields.postId}
          imageUrl={trendingPost.fields.imageUrl.fields.file.url}
          authorName={trendingPost.fields.authorName.fields.authorName}
          publishedDate={trendingPost.fields.publishedDate}
          postName={trendingPost.fields.title}
          slug={trendingPost.fields.slug}
        />
      </section>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
      <section className="mt-10 lg:mt-20">
        <h2 className="heading-2">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {allPosts.map((post: any) => (
            <PostCard
              key={post.fields.postId}
              postId={post.fields.postId}
              imageUrl={post.fields.imageUrl.fields.file.url}
              authorName={post.fields.authorName.fields.authorName}
              publishedDate={post.fields.publishedDate}
              postName={post.fields.title}
              slug={post.fields.slug}
            />
          ))}
        </div>
      </section>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
    </main>
  );
};

export default Home;
