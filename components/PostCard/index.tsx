import Image from "next/image";
import Link from "next/link";
import { processImageUrl } from "@/lib/utils";

type Props = {
  imageUrl: string;
  postId: string;
  postName: string;
  authorName: string;
  publishedDate: string;
  slug: string;
};

const PostCard = (props: Props) => {
  return (
    <Link href={`/posts/${props.slug}`} className="self-start" title={props.postName}>
      <div className="border-2 border-slate-100 rounded flex flex-col items-center px-4 py-4 cursor-pointer">
        <div className="relative overflow-hidden ">
          <Image
            src={processImageUrl(props.imageUrl)}
            alt="Banner"
            width={380}
            height={240}
            objectFit="cover"
            className="rounded transform hover:scale-125 transition duration-500 ease-in-out"
          />
        </div>

        <h3 className="heading-3 md:text-xl mt-4 line-clamp-2y">
          {props.postName}
        </h3>

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
    </Link>
  );
};

export default PostCard;
