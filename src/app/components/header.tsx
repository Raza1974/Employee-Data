import Link from 'next/link';
import Image from 'next/image';
import '@/app/globals.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" className="logo">
            <Image 
              src="/image/programmer.jpg" 
              alt="Logo" 
              width={120} 
              height={120} 
              className="logo-image" 
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/employee-data">Employee-Data</Link>
          <Link href="/employee-id">Employee ID</Link>
          <Link href="/department">Department</Link>
          <Link href="/info">Info</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}