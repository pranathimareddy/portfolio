import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              <h1 className="text-2xl font-bold text-gray-800">Personal Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900">Home</Link>
              <Link href="/academics" className="py-4 px-2 text-gray-500 hover:text-gray-900">Academics</Link>
              <Link href="/skills" className="py-4 px-2 text-gray-500 hover:text-gray-900">Skills</Link>
              <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-gray-900">About</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
