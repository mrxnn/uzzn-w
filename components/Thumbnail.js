import Image from "next/image";
import Link from "next/link";

export default function Thumbnail(props) {
  const { variant } = props;
  return (
    <>
      {variant === "extended" && <ExtendedThumbnail {...props} />}
      {variant !== "extended" && <BasicThumbnail {...props} />}
    </>
  );
}

//hover animation - common
const HOVER_TRANSITION =
  "cursor-pointer transform hover:scale-105 duration-300";

const ExtendedThumbnail = ({ id, category, title, description, imageURL }) => {
  return (
    <div className="relative col-span-2 row-span-2 rounded-md overflow-hidden shadow-2xl">
      <Link href={`/blog/${id}`}>
        <a>
          <Image
            src={imageURL}
            alt={title}
            width="600"
            height="800"
            objectFit="cover"
            className={HOVER_TRANSITION}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.8)] to-transparent pointer-events-none">
            &nbsp;
          </div>
          <div className="absolute bottom-0 left-0 text-white p-8 space-y-3">
            <h2 className="text-xs font-semibold tracking-widest">
              {category}
            </h2>
            <h2 className="text-2xl font-bold">{title}</h2>
            {description && <p>{description}</p>}
          </div>
        </a>
      </Link>
    </div>
  );
};

const BasicThumbnail = ({ id, category, title, imageURL }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 rounded-md overflow-hidden">
        <Link href={`/blog/${id}`}>
          <a>
            <Image
              src={imageURL}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={HOVER_TRANSITION}
            />
          </a>
        </Link>
      </div>
      <h3 className="text-[12px] font-semibold tracking-widest text-gray-500 dark:text-gray-400 mt-4 mb-1">
        {category}
      </h3>
      <h2 className="leading-6 font-medium  cursor-pointer">{title}</h2>
    </div>
  );
};
