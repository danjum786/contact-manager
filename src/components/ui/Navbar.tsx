import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-lg font-bold">
        Contact Manager
      </Link>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-300">
          All Contacts
        </Link>
      </div>
    </nav>
  );
}
