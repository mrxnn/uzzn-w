export default function Article({
  variant,
  category,
  title,
  subtitle,
  imageURL,
}) {
  const lg = variant === "lg";

  return (
    <>
      {lg && (
        <div className="h-full relative rounded-md overflow-hidden shadow-2xl col-span-2 row-span-2">
          <img
            src={imageURL}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.8)] to-transparent">
            &nbsp;
          </div>
          <div className="absolute bottom-0 text-white p-8 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest">
              {category}
            </h4>
            <h2 className="text-3xl font-bold cursor-pointer">{title}</h2>
            <p className="">{subtitle}</p>
          </div>
        </div>
      )}

      {!lg && (
        <div>
          <img
            src={imageURL}
            alt={title}
            className="h-52 w-full object-cover rounded-md"
          />
          <h3 className="text-xs font-semibold tracking-widest text-gray-500 mt-4 mb-1">
            {category}
          </h3>
          <h2 className="text-lg font-medium leading-6 cursor-pointer">
            {title}
          </h2>
        </div>
      )}
    </>
  );
}
