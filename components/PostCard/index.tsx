import Image from "next/image";

type Props = {
  imageUrl: string;
};

const PostCard = (props:Props) => {
  return (
    <div className="border-2 border-slate-100 rounded flex flex-col items-center px-4 py-4 cursor-pointer">
      <Image
        // src="https://placehold.it/380x240"
        // src="https://unsplash.it/380/240?random"
        src={props.imageUrl || "https://unsplash.it/380/240?random"}
        alt="Banner"
        width={380}
        height={240}
        objectFit="cover"
        className="rounded"
      />
      <h3 className="text-md md:text-xl font-semibold mt-4">
        Python vs. JavaScript: A Comprehensive Comparison for Beginners
      </h3>
      <div className="flex items-center self-start gap-2 mt-2 md:gap-2 md:mt-4">
        <Image
          src="https://placehold.it/100x100"
          alt="Author"
          width={25}
          height={25}
          className="rounded-full md:inline-block"
        ></Image>
        <p className="inline text-sm md:text-md">John Doe</p>
        <p className="inline text-sm ml-2 md:text-md md:ml-2">10 July, 2023</p>
      </div>
    </div>
  );
};

export default PostCard;
