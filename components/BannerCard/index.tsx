import { processImageUrl } from "@/lib/utils";
import Image from "next/image";

type Props = {
  imageUrl: string;
  postId: string;
  postName: string;
  authorName: string;
  publishedDate: string;
  slug: string;
};

const BannerCard = (props: Props) => {
  return (
    <div className="relative rounded overflow-hidden text-white">
      <div className="w-full aspect-video">
        <Image
          src={processImageUrl(props.imageUrl)}
          alt="Banner"
          fill={true}
          objectFit="cover"
        />
      </div>

      <div className="absolute bottom-0 bg-black w-full h-full bg-opacity-10 bg-gradient-to-t from-black via-black-opacity-5 to-transparent">
        <div className="absolute px-6 py-6 bottom-0">
          <h1 className="heading-1 md:text-2xl lg:w-3/4 lg:text-3xl line-clamp-2">
            {props.postName}
          </h1>
          <div className="flex items-center gap-2 mt-2 md:gap-4 md:mt-4">
            <Image
              src="https://placehold.it/100x100"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full hidden md:inline-block"
            ></Image>
            <Image
              src="https://placehold.it/100x100"
              alt="Author"
              width={25}
              height={25}
              className="rounded-full inline-block md:hidden"
            ></Image>
            <p className="inline text-sm md:text-lg">{props.authorName}</p>
            <p className="inline text-sm ml-2 md:text-lg md:ml-4">
              {props.publishedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
