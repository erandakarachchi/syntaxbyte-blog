const processImageUrl = (url: string): string => {
  if (url.startsWith("https://")) return url;
  else if (url.startsWith("//images.ctfassets.net/")) return "https:" + url;
  return url;
};

const getTrendingPost = (posts: any[]) => {
  return posts.filter((post) => post.fields.isTrending === true);
};

export { processImageUrl, getTrendingPost };
