import Image from "next/image";

export default function Thumbnail(props) {
  const { variant } = props;
  return (
    <>
      {variant === "extended" && <ExtendedThumbnail {...props} />}
      {variant !== "extended" && <BasicThumbnail {...props} />}
    </>
  );
}

const ExtendedThumbnail = ({ category, title, imageURL }) => {
  return (
    <div className="relative col-span-2 row-span-2 rounded-md overflow-hidden max-h-[640px] shadow-2xl cursor-pointer">
      <Image src={imageURL} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.8)] to-transparent">
        &nbsp;
      </div>
      <div className="absolute bottom-0 left-0 text-white p-8 space-y-3">
        <h4 className="text-xs font-semibold tracking-widest">{category}</h4>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

const BasicThumbnail = ({ category, title, imageURL }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 rounded-md overflow-hidden">
        <Image src={imageURL} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xs font-semibold tracking-widest text-gray-500 mt-4 mb-1">
        {category}
      </h3>
      <h2 className="text-lg font-medium leading-6 cursor-pointer">{title}</h2>
    </div>
  );
};
