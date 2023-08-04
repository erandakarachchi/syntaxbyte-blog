import Image from "next/image";

const PostCard = () => {
  return (
    <div className="bg-slate-100 rounded flex flex-col items-center px-4 py-4">
      <Image
        src="https://placehold.it/380x240"
        alt="Banner"
        width={380}
        height={240}
        objectFit="cover"
        className="rounded"
      />
      <h3 className="text-xl font-semibold mt-4">
        Python vs. JavaScript: A Comprehensive Comparison for Beginners
      </h3>
    </div>
  );
};

export default PostCard;
