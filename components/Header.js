import Link from 'next/link';
import { Navbar, Heading3 } from '../styles/components';

export default function Header() {
  return (
    <Navbar>
      <Heading3>Knwnw.</Heading3>
      <ul>
        <li>
          <Link href="/dashboard"><a>Dashboard</a></Link>
        </li>
        <li>
          <Link href="/blog"><a>Blog</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/home"><a>Home</a></Link>
        </li>
      </ul>
    </Navbar>
  );
}