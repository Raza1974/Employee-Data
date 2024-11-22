import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 text-white bg-blue-600">
      <nav className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold">
          EMS
        </Link>
        <ul className="flex flex-wrap space-x-4 gap-y-2 md:space-x-6 md:gap-y-0">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/employee-data" className="hover:underline">
              Employee Data
            </Link>
          </li>
          <li>
            <Link href="/employee-id" className="hover:underline">
              Employee ID
            </Link>
          </li>
          <li>
            <Link href="/department" className="hover:underline">
              Department
            </Link>
          </li>
          <li>
            <Link href="/info" className="hover:underline">
              Info
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:underline">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
