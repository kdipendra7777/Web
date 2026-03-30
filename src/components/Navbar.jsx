export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 flex items-center justify-between px-6 md:px-16 py-4 ">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black">Melood</h1>

      {/* User Icon */}
      <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M12 12a5 5 0 100-10 5 5 0 000 10z" />
        </svg>
      </button>

    </header>
  );
}