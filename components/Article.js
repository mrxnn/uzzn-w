export default function Article({
  title,
  description,
  imageURL,
  avatar,
  author,
  publishedAt,
}) {
  return (
    <div className="mx-auto max-w-sm mb-8">
      <img
        src={imageURL}
        alt="article image - a realistic room rendered in 3d softwares"
        className="h-48 w-full object-cover rounded-tr-md rounded-tl-md"
      />
      <div className="bg-white p-8 rounded-bl-md rounded-br-md">
        <h2 className="font-semibold text-gray-700">{title}</h2>
        <p className="text-sm text-gray-600 mt-4">{description}</p>
        <div className="flex items-center mt-8">
          <img
            src={avatar}
            alt={author}
            className="rounded-full h-10 w-10 object-cover"
          />
          <div className="flex flex-col justify-center ml-4">
            <h3 className="text-sm font-semibold text-gray-700">{author}</h3>
            <p className="text-sm text-gray-500">{publishedAt}</p>
          </div>
          <div className="bg-gray-200 rounded-full w-8 h-8 flex align-center justify-center ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
