import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-[1600px] h-[900px] bg-[#0F172A] relative overflow-hidden shadow-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Financial Cityscape"
            className="w-full h-full object-cover opacity-20 grayscale"
            src="https://page.gensparksite.com/slides_images/6722217b327d461901b4f6677362a773.webp"
          />
          <div className="absolute inset-0 bg-[#0F172A] opacity-80" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute w-[600px] h-[600px] -top-[100px] -right-[100px] rounded-full border border-[#C5A059]/20 z-0" />
        <div className="absolute w-[400px] h-[400px] top-[50px] -right-[50px] rounded-full border border-[#C5A059]/20 z-0" />

        {/* Gold geometric accent */}
        <div className="absolute top-0 left-0 w-2 h-full bg-[#C5A059] z-10" />
        <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#C5A059] z-10" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-24 py-16">
          <div className="mb-6 flex items-center">
            <div className="h-[1px] w-12 bg-[#C5A059] mr-4" />
            <p className="text-[#C5A059] uppercase tracking-widest text-sm font-semibold">Семинар 2</p>
          </div>

          <h1 className="text-white font-serif text-7xl font-bold leading-tight mb-8 max-w-4xl">
            Санхүүгийн <br />
            <span className="text-[#C5A059]">Шинжилгээний</span> <br />
            Аргууд
          </h1>

          <div className="mb-12 max-w-3xl">
            <p className="text-gray-300 text-xl font-light leading-relaxed border-l-4 border-[#C5A059] pl-6">
              Хэвтээ, Босоо, Хандлагын болон <br />
              Салбарын харьцуулсан шинжилгээ
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/slides"
              className="inline-flex items-center gap-3 bg-[#C5A059] text-[#0F172A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4B068] transition-colors"
            >
              Эхлэх
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700/50 p-3 rounded-full border border-gray-600">
                <svg className="h-6 w-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Илтгэгч</p>
                <p className="text-white text-lg font-medium">
                  Д.Бат-Очир 25B1NUM1657 <br />
                  Маркетинг
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}