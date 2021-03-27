export default function Article(props) {
  const { variant } = props;
  return (
    <>
      {variant === "lg" && <LargeArticle {...props} />}
      {variant !== "lg" && <BasicArticle {...props} />}
    </>
  );
}

//image hover animation
const ANIMATION =
  "transform hover:scale-105 transition-transform duration-300 cursor-pointer";

//basic
const BasicArticle = ({ category, title, imageURL }) => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 rounded-md overflow-hidden">
        <img
          src={imageURL}
          alt={title}
          className={"h-full w-full object-cover " + ANIMATION}
        />
      </div>
      <h3 className="text-xs font-semibold tracking-widest text-gray-500 mt-4 mb-1">
        {category}
      </h3>
      <h2 className="text-lg font-medium leading-6 cursor-pointer">{title}</h2>
    </div>
  );
};

//large
const LargeArticle = ({ category, title, subtitle, imageURL }) => {
  return (
    <div className="relative rounded-md overflow-hidden shadow-2xl col-span-2 row-span-2 cursor-pointer">
      <img
        src={imageURL}
        alt={title}
        className={"absolute inset-0 w-full h-full object-cover " + ANIMATION}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.8)] to-transparent pointer-events-none">
        &nbsp;
      </div>
      <div className="absolute bottom-0 text-white p-8 space-y-3 pointer-events-none">
        <h4 className="text-xs font-semibold tracking-widest">{category}</h4>
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="">{subtitle}</p>}
      </div>
    </div>
  );
};
