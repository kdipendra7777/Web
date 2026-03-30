export default function HeroSection() {
  return (
    <section className="w-full h-screen bg-[#f4f4f4] relative overflow-hidden flex items-center justify-center">
      
      {/* Gradient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Center Content */}
      <div className="text-center z-10 px-6">
        
        {/* Main Title */}
        <h1 className="text-[80px] md:text-[140px] lg:text-[180px] font-bold tracking-tight leading-none text-black animate-[fadeIn_1s_ease-in-out]">
          Melood
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-[bounce_2s_infinite]">
          Unique Product
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-xl mx-auto text-sm md:text-base animate-[fadeIn_2s_ease-in-out]">
          Single sell experience crafted with clean aesthetics and smooth interactions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 animate-[fadeIn_3s_ease-in-out]">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 ">
            Single Sell
          </button>

          
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-6 w-full px-6 md:px-16 flex justify-between text-sm text-gray-500">
        <p>© 2026 Melood</p>
        <p>Stay Creative ✨</p>
      </div>

      {/* Tailwind Keyframes for fadeIn + bounce */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-in-out forwards; }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>

    </section>
  );
}