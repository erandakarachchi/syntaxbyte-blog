import Image from "next/image";
import { getPostsByType, getPostBySlug } from "@/data/config";
import RichTextView from "@/components/RichTextView";
import { processImageUrl } from "@/lib/utils";
import Advertisement from "@/components/Advertisement";

type Props = {
  params: {
    slug: string;
  };
};

const SingleBlogPost = async ({ params }: Props) => {
  const results: any = await getPostBySlug(params.slug);
  const article = results.items[0];

  return (
    <>
      <article className="blog-container px-6 mt-4">
        <h1 className="heading-1-title mt-6">{article.fields.title}</h1>
        <Image
          src={processImageUrl(article.fields.imageUrl.fields.file.url)}
          alt="Banner"
          width={1200}
          height={675}
          objectFit="cover"
          className="rounded my-6"
        />
        <RichTextView content={article.fields.content as any} />
      </article>
      <section className="container mt-10 lg:mt-20">
        <Advertisement />
      </section>
    </>
  );
};

export default SingleBlogPost;
