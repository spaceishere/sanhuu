"use client"
// pages/slides.tsx
import { useState } from "react";
import Link from "next/link";

const slides = [
  { id: 0, title: "Танилцуулга", subtitle: "Introduction", content: "intro" },
  { id: 1, title: "Хэвтээ шинжилгээ", subtitle: "Horizontal Analysis", content: "horizontal" },
  { id: 2, title: "Босоо шинжилгээ", subtitle: "Vertical Analysis", content: "vertical" },
  { id: 3, title: "Хандлагын шинжилгээ", subtitle: "Trend Analysis", content: "trend" },
  { id: 4, title: "Салбарын харьцуулсан шинжилгээ", subtitle: "Cross-sectional Analysis", content: "crosssectional" },
  { id: 5, title: "Ерөнхий дүгнэлт", subtitle: "Summary", content: "summary" },
];

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    switch (slide.content) {
      case "intro":
        return <IntroSlide />;
      case "horizontal":
        return <HorizontalAnalysis />;
      case "vertical":
        return <VerticalAnalysis />;
      case "trend":
        return <TrendAnalysis />;
      case "crosssectional":
        return <CrossSectionalAnalysis />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-[1600px] h-[900px] bg-[#0F172A] relative overflow-hidden shadow-2xl">
        {renderSlideContent()}

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#C5A059]" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Home Button */}
        <Link
          href="/"
          className="absolute top-8 left-8 z-50 bg-gray-700/50 hover:bg-gray-600/50 text-white p-3 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ======================
// Intro Slide
// ======================
function IntroSlide() {
  return (
    <div className="relative w-full h-full">
      <img 
        src="/slide-intro.jpg" 
        alt="Санхүүгийн шинжилгээний аргууд" 
        className="w-full h-full object-contain bg-[#0F172A]"
      />
    </div>
  );
}

// ======================
// Horizontal Analysis
// ======================
function HorizontalAnalysis() {
  return (
    <>
      <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full border border-[#C5A059]/10 z-0"></div>
      <div className="absolute top-0 left-12 w-[1px] h-full bg-gray-800 z-0"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-gray-800 z-0"></div>

      <header className="relative z-10 px-16 pt-12 pb-6 flex justify-between items-end border-b border-gray-800">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#C5A059] h-1 w-8"></span>
            <p className="text-[#C5A059] uppercase tracking-widest text-base font-semibold">Санхүүгийн шинжилгээ</p>
          </div>
          <h1 className="font-serif text-5xl font-bold text-white">
            Хэвтээ шинжилгээ{" "}
            <span className="text-gray-500 font-light text-4xl ml-2">(Horizontal Analysis)</span>
          </h1>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-base">Слайд 02</div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-16 py-8 flex flex-col gap-6 overflow-auto">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border-l-4 border-[#C5A059]">
          <div className="bg-gray-700/50 p-3 rounded-full mt-1">
            <svg className="w-6 h-6 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[#C5A059] font-semibold text-sm uppercase tracking-wide mb-1">Зорилго</h3>
            <p className="text-gray-200 text-lg">Үзүүлэлтүүдийн цаг хугацааны өөрчлөлтийг тодорхойлох.</p>
          </div>
        </div>

        <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#C5A059] bg-[#0F172A]/80">
                <th className="text-left p-5 text-[#C5A059] font-semibold text-base uppercase tracking-wide">
                  Үзүүлэлт
                </th>
                <th className="text-left p-5 text-[#C5A059] font-semibold text-base uppercase tracking-wide">
                  2022 он
                </th>
                <th className="text-left p-5 text-[#C5A059] font-semibold text-base uppercase tracking-wide">
                  2023 он
                </th>
                <th className="text-left p-5 text-[#C5A059] font-semibold text-base uppercase tracking-wide">
                  Өөрчлөлт (Дүн)
                </th>
                <th className="text-left p-5 text-[#C5A059] font-semibold text-base uppercase tracking-wide">
                  Өөрчлөлт (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-5 text-white font-medium text-lg">Борлуулалтын орлого</td>
                <td className="p-5 text-gray-300 text-lg">500 сая ₮</td>
                <td className="p-5 text-gray-300 text-lg">600 сая ₮</td>
                <td className="p-5 text-green-400 font-semibold text-lg">+100 сая ₮</td>
                <td className="p-5 text-green-400 font-semibold text-lg bg-green-900/20">+20%</td>
              </tr>

              <tr className="border-b border-white/10 hover:bg-white/5 bg-[#C5A059]/5">
                <td className="p-5 text-white font-bold text-lg">Цэвэр ашиг</td>
                <td className="p-5 text-white font-bold text-lg">50 сая ₮</td>
                <td className="p-5 text-white font-bold text-lg">80 сая ₮</td>
                <td className="p-5 text-green-400 font-bold text-lg">+30 сая ₮</td>
                <td className="p-5 text-green-400 font-bold text-lg bg-green-900/30">+60%</td>
              </tr>

              <tr className="hover:bg-white/5">
                <td className="p-5 text-white font-medium text-lg">Нийт хөрөнгө</td>
                <td className="p-5 text-gray-300 text-lg">1 тэрбум ₮</td>
                <td className="p-5 text-gray-300 text-lg">1.2 тэрбум ₮</td>
                <td className="p-5 text-green-400 font-semibold text-lg">+0.2 тэрбум ₮</td>
                <td className="p-5 text-green-400 font-semibold text-lg bg-green-900/20">+20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-auto bg-gradient-to-r from-gray-800 to-slate-900 p-6 rounded-xl border border-[#C5A059]/30 shadow-lg">
          <div className="flex items-start gap-5">
            <div className="bg-[#C5A059]/20 p-4 rounded-full border border-[#C5A059]/50 flex-shrink-0">
              <svg className="w-8 h-8 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#C5A059] font-serif text-2xl font-bold mb-3">Гүнзгий дүн шинжилгээ</h3>
              <div className="space-y-2 text-base">
                <p className="text-gray-300 leading-relaxed">
                  • Цэвэр ашиг <span className="text-green-400 font-bold">60%</span> өссөн нь борлуулалтын{" "}
                  <span className="text-green-400 font-bold">20%</span> өсөлтөөс{" "}
                  <span className="text-white font-bold">3 дахин хурдан</span>
                </p>

                <p className="text-gray-300 leading-relaxed">
                  • Үр дүн: <span className="text-white font-semibold">үйл ажиллагааны үр ашиг өссөн</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A059] via-slate-700 to-slate-900"></div>
    </>
  );
}

// ======================
// Vertical Analysis
// ======================
function VerticalAnalysis() {
  return (
    <>
      <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full border border-[#C5A059]/10 z-0"></div>

      <header className="relative z-10 px-12 pt-8 pb-4 flex justify-between items-end border-b border-gray-800">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#C5A059] h-1 w-8"></span>
            <p className="text-[#C5A059] uppercase tracking-widest text-sm font-semibold">Санхүүгийн шинжилгээ</p>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white">
            Босоо шинжилгээ{" "}
            <span className="text-gray-500 font-light text-2xl ml-2">(Vertical Analysis)</span>
          </h1>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm">Слайд 03</div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-12 py-4 flex flex-col gap-4">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border-l-4 border-[#C5A059]">
          <div className="bg-gray-700/50 p-2 rounded-full mt-1">
            <svg className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[#C5A059] font-semibold text-xs uppercase tracking-wide mb-1">Зорилго</h3>
            <p className="text-gray-200 text-sm">
              Санхүүгийн тайлангийн бүтцийг суурь үзүүлэлтэд эзлэх хувиар шинжлэх.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Assets Structure */}
          <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="bg-[#C5A059]/20 p-2 border-b border-[#C5A059]/30">
              <h3 className="text-[#C5A059] font-bold text-sm text-center">Хөрөнгийн бүтэц</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#C5A059] bg-[#0F172A]/80">
                  <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase">Үзүүлэлт</th>
                  <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase">Дүн</th>
                  <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase">
                    Нийт хөрөнгөд эзлэх хувь %
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="p-2 text-white font-medium text-sm">Эргэлтийн хөрөнгө</td>
                  <td className="p-2 text-gray-300 text-sm">400</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold text-sm">33.3%</span>
                      <div className="bg-white/10 h-1.5 rounded-full w-16 overflow-hidden">
                        <div className="bg-[#C5A059] h-full rounded-full" style={{ width: "33.3%" }}></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="p-2 text-white font-medium text-sm">Үндсэн хөрөнгө</td>
                  <td className="p-2 text-gray-300 text-sm">800</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold text-sm">66.7%</span>
                      <div className="bg-white/10 h-1.5 rounded-full w-16 overflow-hidden">
                        <div className="bg-[#C5A059] h-full rounded-full" style={{ width: "66.7%" }}></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-700/30">
                  <td className="p-2 text-white font-bold text-sm">Нийт хөрөнгө</td>
                  <td className="p-2 text-white font-bold text-sm">1,200</td>
                  <td className="p-2 text-[#C5A059] font-bold text-sm">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-slate-800/60 p-3 rounded-lg border border-[#C5A059]/30">
          <h4 className="text-[#C5A059] font-semibold text-xs uppercase mb-2">Томъёо:</h4>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-gray-900/50 p-2 rounded">
              <p className="text-gray-400 text-xs mb-1">Хөрөнгийн бүтэц</p>
              <p className="text-white font-mono text-xs">= (Тухайн хөрөнгө / Нийт хөрөнгө) × 100</p>
            </div>
          </div>
        </div>

        <div className="mt-auto bg-gray-800 p-4 rounded-xl border border-[#C5A059]/30 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-[#C5A059]/20 p-3 rounded-full border border-[#C5A059]/50 flex-shrink-0">
              <svg className="w-6 h-6 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#C5A059] font-serif text-lg font-bold mb-2">Гүнзгий дүн шинжилгээ</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-sm">
                  <p className="text-white font-semibold mb-1">Хөрөнгийн бүтэц:</p>
                  <p className="text-gray-300 leading-relaxed">
                    • Үндсэн хөрөнгө <span className="text-white font-bold">66.7%</span> → Үйлдвэрлэлийн чиглэлтэй компани
                  </p>
                  <p className="text-gray-300 leading-relaxed">• Их capital шаардсан</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
        <div className="h-full bg-[#C5A059]" style={{ width: "40%" }}></div>
      </div>
    </>
  );
}

// ======================
// Trend Analysis
// ======================
function TrendAnalysis() {
  return (
    <>
      <div className="absolute w-[700px] h-[700px] -bottom-[200px] -left-[200px] rounded-full border border-[#C5A059]/10 z-0"></div>

      <header className="relative z-10 px-12 pt-8 pb-4 flex justify-between items-end border-b border-gray-800">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#C5A059] h-1 w-8"></span>
            <p className="text-[#C5A059] uppercase tracking-widest text-sm font-semibold">Санхүүгийн шинжилгээ</p>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white">
            Хандлагын шинжилгээ <span className="text-gray-500 font-light text-2xl ml-2">(Trend Analysis)</span>
          </h1>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm">Слайд 04</div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-12 py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-700/50 p-2 rounded-full">
              <svg className="w-4 h-4 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-gray-300 text-sm">
              Суурь он: <span className="text-white font-bold">2019 он = 100%</span>
            </p>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-slate-800/60 p-2 rounded-lg border border-[#C5A059]/30">
          <h4 className="text-[#C5A059] font-semibold text-xs uppercase mb-2">Томъёо:</h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-gray-900/50 p-2 rounded">
              <p className="text-gray-400 text-xs mb-1">Хувь тооцоолох</p>
              <p className="text-white font-mono">(Тухайн он / Өмнөхы он) × 100</p>
            </div>
            <div className="bg-gray-900/50 p-2 rounded">
              <p className="text-gray-400 text-xs mb-1">Жилийн дундаж өсөлт</p>
              <p className="text-white font-mono">CAGR = (Эцсийн дүн / Эхний дүн)^(1/n) - 1</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 h-[320px]">
          <div className="w-2/5 flex flex-col h-full">
            <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 shadow-xl h-full">
              <table className="w-full h-full">
                <thead>
                  <tr className="border-b-2 border-[#C5A059] bg-[#0F172A]/80">
                    <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase">Он</th>
                    <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase">Борлуулалт</th>
                    <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase">Индекс</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-2 text-white font-medium text-sm">2019</td>
                    <td className="p-2 text-gray-300 text-sm">400</td>
                    <td className="p-2 text-gray-300 text-sm">100%</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-2 text-white font-medium text-sm">2020</td>
                    <td className="p-2 text-gray-300 text-sm">450</td>
                    <td className="p-2 text-green-400 font-semibold text-sm">112.5%</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-2 text-white font-medium text-sm">2021</td>
                    <td className="p-2 text-gray-300 text-sm">500</td>
                    <td className="p-2 text-green-400 font-semibold text-sm">125%</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-2 text-white font-medium text-sm">2022</td>
                    <td className="p-2 text-gray-300 text-sm">550</td>
                    <td className="p-2 text-green-400 font-semibold text-sm">137.5%</td>
                  </tr>
                  <tr className="bg-[#C5A059]/10">
                    <td className="p-2 text-[#C5A059] font-bold text-sm">2023</td>
                    <td className="p-2 text-[#C5A059] font-bold text-sm">600</td>
                    <td className="p-2 text-[#C5A059] font-bold text-sm">150%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-3/5 h-full">
            <div className="h-full p-3 bg-slate-800/40 rounded-xl border border-[#C5A059]/20">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line
                    key={i}
                    x1="50"
                    y1={50 + i * 40}
                    x2="380"
                    y2={50 + i * 40}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Y-axis labels */}
                <text x="30" y="55" fill="#94a3b8" fontSize="12">
                  160%
                </text>
                <text x="30" y="95" fill="#94a3b8" fontSize="12">
                  140%
                </text>
                <text x="30" y="135" fill="#94a3b8" fontSize="12">
                  120%
                </text>
                <text x="30" y="175" fill="#94a3b8" fontSize="12">
                  100%
                </text>
                <text x="35" y="215" fill="#94a3b8" fontSize="12">
                  80%
                </text>

                {/* X-axis labels */}
                <text x="70" y="280" fill="#94a3b8" fontSize="14">
                  2019
                </text>
                <text x="135" y="280" fill="#94a3b8" fontSize="14">
                  2020
                </text>
                <text x="200" y="280" fill="#94a3b8" fontSize="14">
                  2021
                </text>
                <text x="265" y="280" fill="#94a3b8" fontSize="14">
                  2022
                </text>
                <text x="330" y="280" fill="#94a3b8" fontSize="14">
                  2023
                </text>

                {/* Area under line */}
                <path
                  d="M 80 170 L 145 150 L 210 130 L 275 110 L 340 90 L 340 250 L 80 250 Z"
                  fill="url(#lineGradient)"
                />

                {/* Line */}
                <path d="M 80 170 L 145 150 L 210 130 L 275 110 L 340 90" stroke="#C5A059" strokeWidth="3" fill="none" />

                {/* Points */}
                {[
                  { x: 80, y: 170 },
                  { x: 145, y: 150 },
                  { x: 210, y: 130 },
                  { x: 275, y: 110 },
                  { x: 340, y: 90 },
                ].map((point, i) => (
                  <g key={i}>
                    <circle cx={point.x} cy={point.y} r="6" fill="#0F172A" stroke="#C5A059" strokeWidth="2" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-auto bg-slate-800/60 p-3 rounded-lg border border-[#C5A059]/30 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="bg-[#C5A059]/20 p-2 rounded-full border border-[#C5A059]/50 flex-shrink-0">
              <svg className="w-5 h-5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#C5A059] font-bold text-xs uppercase tracking-wide mb-1">Гүнзгий дүн шинжилгээ</h3>
              <div className="space-y-1 text-xs">
                <p className="text-gray-300 leading-relaxed">
                  • 5 жилийн нийт өсөлт: <span className="text-green-400 font-bold">50%</span> (400 → 600 сая ₮)
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • <span className="text-white font-bold">10.67%</span> → Жилд дунджаар ~10.7% өссөн
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Өсөлтийн тогтвортой байдал: Жил бүр <span className="text-green-400 font-semibold">50 сая ₮</span>{" "}
                  тогтмол өсөлттэй → <span className="text-white font-semibold">Маш тогтвортой</span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Хэлбэлзэл: <span className="text-white font-semibold">Байхгүй</span> → Урьдчилан таамаглах боломжтой,
                  эрсдэл бага
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Үр дүн:{" "}
                  <span className="text-white font-semibold">
                    Тогтвортой өсөлттэй, урт хугацааны хөгжлийн стратеги амжилттай
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-[#C5A059] to-slate-900 opacity-50"></div>
    </>
  );
}

// ======================
// Cross-Sectional Analysis
// ======================
function CrossSectionalAnalysis() {
  // Raw data
  const A = { sales: 800, profit: 100, assets: 2000, debtRatio: 0.4 };
  const B = { sales: 1000, profit: 120, assets: 2500, debtRatio: 0.5 };
  const IND = { sales: 900, profit: 110, assets: 2250, debtRatio: 0.45 };

  // Helpers
  const pct = (x: number, d = 1) => `${(x * 100).toFixed(d)}%`;
  const fmt = (n: number) => n.toLocaleString("en-US");

  const calc = (c: { sales: number; profit: number; assets: number; debtRatio: number }) => {
    const margin = c.profit / c.sales;
    const debt = c.assets * c.debtRatio;
    const equity = c.assets - debt;
    const roe = c.profit / equity;
    return { ...c, margin, debt, equity, roe };
  };

  const a = calc(A);
  const b = calc(B);
  const ind = calc(IND);

  const diffPp = (x: number, y: number) => ((x - y) * 100).toFixed(1); // percentage points

  return (
    <>
      {/* Decorative ring background */}
      <div className="absolute left-[-120px] top-[-120px] w-[800px] h-[800px] rounded-full border border-[#C5A059]/10 z-0" />

      <header className="relative z-10 px-12 pt-6 pb-3 flex justify-between items-end border-b border-gray-800">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-[#C5A059] h-1 w-8"></span>
            <p className="text-[#C5A059] uppercase tracking-widest text-xs font-semibold">Санхүүгийн шинжилгээ</p>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white">
            Салбарын харьцуулсан шинжилгээ{" "}
            <span className="text-gray-500 font-light text-xl ml-2">(Cross-sectional Analysis)</span>
          </h1>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm">Слайд 05</div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-12 py-3 flex flex-col gap-3">
        <div className="flex items-start gap-3 p-2 rounded-lg bg-gray-800/50 border-l-4 border-[#C5A059]">
          <div className="bg-gray-700/50 p-2 rounded-full mt-1">
            <svg className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[#C5A059] font-semibold text-xs uppercase tracking-wide mb-1">Зорилго</h3>
            <p className="text-gray-200 text-sm">
              Өрсөлдөгч болон салбарын дундажтай харьцуулж давуу, сул талыг тодорхойлох.
            </p>
          </div>
        </div>

        {/* Formula Box */}
        <div className="bg-slate-800/60 p-2 rounded-lg border border-[#C5A059]/30">
          <h4 className="text-[#C5A059] font-semibold text-xs uppercase mb-1">Томъёо:</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-gray-900/50 p-1.5 rounded">
              <p className="text-gray-400 text-xs mb-1">Ашгийн маржин</p>
              <p className="text-white font-mono text-xs">= (Цэвэр ашиг / Борлуулалт) × 100</p>
            </div>
            <div className="bg-gray-900/50 p-1.5 rounded">
              <p className="text-gray-400 text-xs mb-1">Өрийн харьцаа</p>
              <p className="text-white font-mono text-xs">= (Өр төлбөр / Нийт хөрөнгө) × 100</p>
            </div>
            <div className="bg-gray-900/50 p-1.5 rounded">
              <p className="text-gray-400 text-xs mb-1">ROE</p>
              <p className="text-white font-mono text-xs">= (Цэвэр ашиг / Өөрийн хөрөнгө) × 100</p>
              <p className="text-gray-500 text-xs mt-0.5">Өөрийн хөрөнгө = Нийт хөрөнгө - Өр</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#C5A059] bg-[#0F172A]/80">
                <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase tracking-wide">Үзүүлэлт</th>
                <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase tracking-wide">А компани</th>
                <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase tracking-wide">В компани</th>
                <th className="text-left p-2 text-[#C5A059] font-semibold text-xs uppercase tracking-wide">
                  Салбарын дундаж
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-2 text-white font-medium text-sm">Борлуулалтын орлого (сая ₮)</td>
                <td className="p-2 text-gray-300 text-sm">{fmt(a.sales)}</td>
                <td className="p-2 text-gray-300 text-sm">{fmt(b.sales)}</td>
                <td className="p-2 text-gray-400 text-sm">{fmt(ind.sales)}</td>
              </tr>

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-2 text-white font-medium text-sm">Цэвэр ашиг (сая ₮)</td>
                <td className="p-2 text-gray-300 text-sm">{fmt(a.profit)}</td>
                <td className="p-2 text-gray-300 text-sm">{fmt(b.profit)}</td>
                <td className="p-2 text-gray-400 text-sm">{fmt(ind.profit)}</td>
              </tr>

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-2 text-white font-medium text-sm">Цэвэр ашиг / Борлуулалт (%)</td>
                <td className="p-2 bg-[#C5A059]/10 text-green-400 font-semibold text-sm">{pct(a.margin, 1)}</td>
                <td className="p-2 text-gray-300 text-sm">{pct(b.margin, 1)}</td>
                <td className="p-2 text-gray-400 text-sm">{pct(ind.margin, 1)}</td>
              </tr>

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-2 text-white font-medium text-sm">Нийт хөрөнгө (сая ₮)</td>
                <td className="p-2 text-gray-300 text-sm">{fmt(a.assets)}</td>
                <td className="p-2 text-gray-300 text-sm">{fmt(b.assets)}</td>
                <td className="p-2 text-gray-400 text-sm">{fmt(ind.assets)}</td>
              </tr>

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-2 text-white font-medium text-sm">Өр төлбөр / Нийт хөрөнгө (%)</td>
                <td className="p-2 text-green-400 font-semibold text-sm">{pct(a.debtRatio, 0)}</td>
                <td className="p-2 text-red-400 text-sm">{pct(b.debtRatio, 0)}</td>
                <td className="p-2 text-gray-400 text-sm">{pct(ind.debtRatio, 0)}</td>
              </tr>

              <tr className="hover:bg-white/5">
                <td className="p-2 text-white font-medium text-sm">Өөрийн хөрөнгийн өгөөж (ROE, %)</td>
                <td className="p-2 bg-[#C5A059]/10 text-green-400 font-semibold text-sm">{pct(a.roe, 1)}</td>
                <td className="p-2 text-green-400 text-sm">{pct(b.roe, 1)}</td>
                <td className="p-2 text-gray-400 text-sm">{pct(ind.roe, 1)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cards */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          {/* A */}
          <div className="bg-gradient-to-r from-gray-800 to-slate-900 p-3 rounded-xl border border-[#C5A059]/30 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="bg-[#C5A059]/20 p-2 rounded-full border border-[#C5A059]/50 flex-shrink-0 mt-1">
                <span className="text-[#C5A059] font-bold text-base">A</span>
              </div>

              <div>
                <h3 className="text-[#C5A059] font-serif text-base font-bold mb-1">А компани</h3>

                <div className="space-y-0.5 text-xs">
                  <p className="text-gray-300 leading-snug">
                    • Борлуулалт <span className="text-white font-semibold">{fmt(a.sales)} сая ₮</span>, Ашиг{" "}
                    <span className="text-white font-semibold">{fmt(a.profit)} сая ₮</span>
                  </p>

                  <p className="text-gray-300 leading-snug">
                    • Ашгийн маржин <span className="text-green-400 font-semibold">{pct(a.margin, 1)}</span> (дундажаас{" "}
                    {diffPp(a.margin, ind.margin)} нэгж%)
                  </p>

                  <p className="text-gray-300 leading-snug">
                    • Өр {pct(a.debtRatio, 0)} → Өр = {fmt(a.debt)} сая ₮, Өөрийн хөрөнгө = {fmt(a.equity)} сая ₮
                  </p>

                  <p className="text-gray-300 leading-snug">
                    • ROE = {fmt(a.profit)} / {fmt(a.equity)} ={" "}
                    <span className="text-green-400 font-semibold">{pct(a.roe, 1)}</span>
                  </p>

                  <p className="text-gray-300 leading-snug">
                    • <span className="text-white font-semibold">Үр дүн:</span> Өр бага → эрсдэл бага, тогтвортой бүтэц
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* B */}
          <div className="bg-gradient-to-r from-gray-800 to-slate-900 p-3 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="bg-gray-700/50 p-2 rounded-full border border-gray-600 flex-shrink-0 mt-1">
                <span className="text-gray-400 font-bold text-base">B</span>
              </div>

              <div>
                <h3 className="text-gray-200 font-serif text-base font-bold mb-1">В компани</h3>

                <div className="space-y-0.5 text-xs">
                  <p className="text-gray-400 leading-snug">
                    • Борлуулалт <span className="text-white font-semibold">{fmt(b.sales)} сая ₮</span>, Ашиг{" "}
                    <span className="text-white font-semibold">{fmt(b.profit)} сая ₮</span>
                  </p>

                  <p className="text-gray-400 leading-snug">
                    • Ашгийн маржин <span className="text-amber-400 font-semibold">{pct(b.margin, 1)}</span> (дундажаас{" "}
                    {diffPp(b.margin, ind.margin)} нэгж%)
                  </p>

                  <p className="text-gray-400 leading-snug">
                    • Өр {pct(b.debtRatio, 0)} → Өр = {fmt(b.debt)} сая ₮, Өөрийн хөрөнгө = {fmt(b.equity)} сая ₮
                  </p>

                  <p className="text-gray-400 leading-snug">
                    • ROE = {fmt(b.profit)} / {fmt(b.equity)} ={" "}
                    <span className="text-green-400 font-semibold">{pct(b.roe, 1)}</span>
                  </p>

                  <p className="text-gray-400 leading-snug">
                    • <span className="text-white font-semibold">Үр дүн:</span> Өр өндөр ч ROE өндөр
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A059] via-slate-700 to-slate-900" />
    </>
  );
}