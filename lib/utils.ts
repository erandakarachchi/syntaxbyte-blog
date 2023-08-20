const processImageUrl = (url: string): string => {
  if (url.startsWith("https://")) return url;
  else if (url.startsWith("//images.ctfassets.net/")) return "https:" + url;
  return url;
};

export { processImageUrl };
