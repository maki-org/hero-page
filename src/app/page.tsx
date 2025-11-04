import React, { JSX } from "react";
import AsciiPlayer from "../components/AsciiPlayer";

export default function Page(): JSX.Element {
  return (
    <main className="bg-white w-full h-screen overflow-hidden relative">
      {/* Logo - Top left corner for all screen sizes */}
      <header className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 z-20 flex items-center gap-2">
        <img
          className="w-10 h-10 md:w-[51px] md:h-[51px] aspect-[1.01] object-cover"
          alt="Maki logo"
          src="/assets/icon.png"
        />
        <h1 className="crimson font-normal text-black text-xl tracking-[0] leading-[32.7px] whitespace-nowrap">
          maki
        </h1>
      </header>

      {/* Desktop: Grid layout, Mobile: Stack layout */}
      <div className="flex flex-col md:grid md:grid-cols-2 h-full w-full">
        {/* ASCII ANIMATION - Top on mobile, Right on desktop */}
        <div className="order-1 md:order-2 relative h-[50vh] md:h-full w-full overflow-hidden">
          {/* Full-width animation container */}
          <div className="w-full h-full">
            <AsciiPlayer />
          </div>
        </div>

        {/* LEFT COLUMN - Text content - Bottom on mobile, Left on desktop */}
        <div className="order-2 md:order-1 relative p-6 sm:p-8 md:pl-20 md:pr-12 lg:pl-24 lg:pr-16 flex flex-col justify-center h-[50vh] md:h-full pt-20 md:pt-24 overflow-hidden">
          {/* Main Content */}
          <section className="w-full max-w-[500px] flex flex-col gap-8 sm:gap-10 md:gap-12">
            {/* Headline - Responsive sizing */}
            <h2 className="crimson font-normal text-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[56px]">
              Your Personal <br /> Assistant
            </h2>

            <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 w-full">
              {/* Description - Responsive text */}
              <p className="crimson font-normal text-black opacity-90 text-base sm:text-lg md:text-xl leading-relaxed md:leading-6 max-w-prose">
                Meet your personal assistant — a comprehensive platform offering
                tools for tracking your actions, reminders, maintaining personal
                intelligence and remembering every conversation.
              </p>

              {/* CTA Button with Icon */}
              <a
                href="https://app.heymaki.ai"
                className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-black rounded-full hover:bg-gray-800 transition-all duration-200 group"
              >
                <span className="poppins-semibold text-white text-sm sm:text-base leading-tight whitespace-nowrap">
                  Try for Free
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Feature Grid - Responsive layout */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-12 md:gap-y-14 max-w-[500px]">
            {/* Recollect */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="crimson font-normal text-black text-xl sm:text-2xl md:text-[28px] tracking-[0.56px] leading-tight opacity-80">
                  Recollect
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Your events
              </p>
            </div>

            {/* Record */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="crimson font-normal text-black text-xl sm:text-2xl md:text-[28px] tracking-[0.56px] leading-tight opacity-80">
                  Record
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Your conversations
              </p>
            </div>

            {/* Rebuild */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="crimson font-normal text-black text-xl sm:text-2xl md:text-[28px] tracking-[0.56px] leading-tight opacity-80">
                  Rebuild
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Your relationships
              </p>
            </div>

            {/* Reorganise */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="crimson font-normal text-black text-xl sm:text-2xl md:text-[28px] tracking-[0.56px] leading-tight opacity-80">
                  Reorganise
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
