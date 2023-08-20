import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_KEY!,
});

const getPostsByType = async <T>(type: string) => {
  try {
    const entries = await client.getEntries({
      content_type: type,
      select: [
        "fields.postId",
        "fields.slug",
        "fields.title",
        "fields.imageUrl",
        "fields.authorName",
        "fields.publishedDate",
      ],
    });
    return entries.items;
  } catch (error) {
    console.error("error occurred while fetching entries");
    throw error;
  }
};

const getPostById = async <T>(id: string) => {
  try {
    const entry = await client.getEntries({
      content_type: "post",
      "fields.postId": id,
    });
    return entry;
  } catch (error) {
    console.error("error occurred while fetching entry");
    throw error;
  }
};

const getPostBySlug = async <T>(slug: string) => {
  try {
    const entry = await client.getEntries({
      content_type: "post",
      "fields.slug": slug,
    });
    return entry;
  } catch (error) {
    console.error("error occurred while fetching entry");
    throw error;
  }
};

export { getPostsByType, getPostById, getPostBySlug };
