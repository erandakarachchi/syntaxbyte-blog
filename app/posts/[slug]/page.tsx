import Image from "next/image";
import { getPostsByType, getPostBySlug } from "@/data/config";
import RichTextView from "@/components/RichTextView";
import { processImageUrl } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};

const SingleBlogPost = async ({ params }: Props) => {
  
  const results: any = await getPostBySlug(params.slug);
  const article = results.items[0];

  return (
    <article className="blog-container mt-4">
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
  );
};

export default SingleBlogPost;
