import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_KEY!,
});

const getPosts = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "post",
    });
    return entries.items;
  } catch (error) {
    console.log(error);
  }
};

export { getPosts };
