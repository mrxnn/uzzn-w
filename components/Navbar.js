import Link from "next/link";
import { useRouter } from "next/router";
import Badge from "./Badge";

// Navigation
export default function Navbar() {
  return (
    <div className="flex justify-between items-center border-b h-24">
      <div className="flex-1 pl-8">
        <Logo />
      </div>
      <ul className="flex items-center h-full">
        <ListItem LinkText="Share your work" LinkURL="/" />
        <ListItem LinkText="Resources" BadgeText="36" />
        <ListItem LinkText="About us" LinkURL="/about" />
        <ListItem LinkText="FAQ" />
        <ListItem LinkText="Icons" BadgeText="NEW" BadgeColor="bg-brown" />
      </ul>
      <div className="flex-1 flex justify-end pr-5">
        <CTA />
      </div>
    </div>
  );
}

// Logo Link
export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <p className="text-xl font-extrabold tracking-widest">DSSX</p>
        <p className="text-gray-400 text-xxx tracking-xwidest mt-1">ACADEMY</p>
      </a>
    </Link>
  );
};

// Navigation Item
export const ListItem = ({ LinkText, LinkURL, BadgeText, BadgeColor }) => {
  const router = useRouter();
  LinkURL = !LinkURL ? `/${LinkText.toLowerCase().replace(" ", "-")}` : LinkURL;
  let linkState = router.pathname === LinkURL ? "text-black" : "text-gray-500";
  let classList = `${linkState} flex items-center  h-full cursor-pointer hover:text-black hover:bg-gray-100 transition-colors duration-500`;

  return (
    <li className={classList}>
      {!BadgeText && (
        <Link href={LinkURL}>
          <a className="h-full px-5 flex items-center">
            <p>{LinkText}</p>
          </a>
        </Link>
      )}

      {BadgeText && (
        <Link href={LinkURL}>
          <a className="h-full px-5 flex items-center">
            <p>{LinkText}</p>
            <Badge text={BadgeText} classNames={BadgeColor} />
          </a>
        </Link>
      )}
    </li>
  );
};

// Navbar CTA
export const CTA = () => {
  return (
    <button className="flex justify-center items-center hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200">
      <p className="mr-2 text-brand-blue font-medium">Submit</p>
      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24">
        <g fill="none" className="nc-icon-wrapper">
          <path
            d="M16.667 2H7.333C3.93 2 2 3.929 2 7.333v9.334C2 20.062 3.92 22 7.333 22h9.334C20.07 22 22 20.062 22 16.667V7.333C22 3.93 20.071 2 16.667 2z"
            fill="#0071FF"
          />
          <path
            d="M15.32 12.708h-2.57v2.549c0 .41-.336.743-.75.743a.746.746 0 0 1-.75-.743v-2.549H8.68a.753.753 0 0 1-.68-.747c0-.385.293-.707.68-.747h2.562v-2.54A.755.755 0 0 1 11.996 8c.388 0 .713.29.753.674v2.54h2.571c.387.04.68.362.68.747a.753.753 0 0 1-.68.747z"
            fill="#ffffff"
          />
        </g>
      </svg>
    </button>
  );
};
