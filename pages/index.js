import Head from "next/head";

export default function Home() {
  return (
    <div className="my-4 px-4">
      <Head>
        <title>Windphace - Creativity, Inspiration, Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-sm">
        <img
          src="/images/6.png"
          alt="article image - a realistic room rendered in 3d softwares"
          className="h-48 w-full object-cover rounded-tr-md rounded-tl-md"
        />
        <div className="bg-white p-8 rounded-bl-md rounded-br-md">
          <h2 className="font-semibold text-gray-700">
            Shift overall look and fell by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            React components outside of main will not be initialized by the
            browser. Do not add application logic here or custom CSS. If you
            need base components in your pages (like a menu or a toolbar), take
            a look at the App component instead.
          </p>
          <div className="flex items-center mt-8">
            <img
              src="/images/maria.jpg"
              alt="Maria Yusefnova Image"
              className="rounded-full h-10 w-10 object-cover"
            />
            <div className="flex flex-col justify-center ml-4">
              <h3 className="text-sm font-semibold text-gray-700">
                Maria Yusefnova
              </h3>
              <p className="text-sm text-gray-500">28 June 2020</p>
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
    </div>
  );
}
