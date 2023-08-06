import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  postId: string;
  postName: string;
  authorName: string;
  publishedDate: string;
};

const PostCard = (props: Props) => {
  return (
    <div className="border-2 border-slate-100 rounded flex flex-col items-center px-4 py-4 cursor-pointer">
      <Image
        src={props.imageUrl}
        alt="Banner"
        width={380}
        height={240}
        objectFit="cover"
        className="rounded"
      />
      <Link href={`/posts/${props.postId}`} className="self-start">
        <h3 className="text-md md:text-xl font-semibold mt-4">
          {props.postName}
        </h3>
      </Link>

      <div className="flex items-center self-start gap-2 mt-2 md:gap-2 md:mt-4">
        <Image
          src="https://placehold.it/100x100"
          alt="Author"
          width={25}
          height={25}
          className="rounded-full md:inline-block"
        ></Image>
        <p className="inline text-sm md:text-md">{props.authorName}</p>
        <p className="inline text-sm ml-2 md:text-md md:ml-2">
          {props.publishedDate}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
