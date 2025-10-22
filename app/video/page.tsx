"use client";

export default function VideoPage() {
  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: '#F4F1EE' }}>
      {/* Top Banner */}
      <div className="w-full py-3 md:py-3 h-[59.5px] md:h-[59.5px] sticky top-0 z-50" style={{ backgroundColor: '#211F1F' }}>
        <div className="flex items-center justify-center gap-2 h-full">
          <span className="text-sm font-medium tracking-wide uppercase" style={{ color: 'white', fontFamily: 'var(--font-aeonik-mono)', fontSize: '21px' }}>
            LAUNCHING SOON ON
          </span>
          <img
            src="/Assets/landingpagenew/kickstarterlogogreen.png"
            alt="Kickstarter"
            width={126}
            height={16.1}
            className="h-[16.1px] w-[126px] md:h-[15.4px] md:w-[128.8px]"
          />
        </div>
      </div>

      {/* Mobile Video Section - Centered vertically */}
      <div className="w-full h-full flex items-center justify-center block md:hidden px-4">
        <div className="w-full max-w-sm">
          <iframe 
            src="https://drive.google.com/file/d/1FYEssaYIqsC7MZjqd2iGionSz330qIis/preview" 
            width="100%" 
            height="100%"
            allow="autoplay"
            className="w-full rounded-lg shadow-lg"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>

      {/* Desktop Video Section - Centered */}
      <div className="w-full min-h-screen hidden md:flex items-center justify-center py-8">
        <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4">
          <iframe 
            src="https://drive.google.com/file/d/1FYEssaYIqsC7MZjqd2iGionSz330qIis/preview" 
            width="100%" 
            height="100%"
            allow="autoplay"
            className="w-full rounded-lg shadow-2xl scale-105 sm:scale-110 md:scale-115 lg:scale-120 xl:scale-125 2xl:scale-130"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>
    </div>
  );
}
