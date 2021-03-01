import Link from 'next/link';
import { Navbar, Logo, Button } from '../styles/components';

export default function Header() {
  return (
    <Navbar>
      <Logo>Brand</Logo>
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
        <li>
          <Button>Sign Up</Button>
        </li>
      </ul>
    </Navbar>
  );
}