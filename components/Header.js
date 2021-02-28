import Link from 'next/link';
import { Navbar, Heading3 } from '../styles/components';

export default function Header() {
  return (
    <Navbar>
      <Heading3>Brannd</Heading3>
      <ul>
        <li>
          <Link href="/showcase"><a>Showcase</a></Link>
        </li>
        <li>
          <Link href="/blog"><a>Blog</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/analytics"><a>Analytics</a></Link>
        </li>
      </ul>
    </Navbar>
  );
}