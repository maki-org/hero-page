import React, { JSX } from "react";
import AsciiPlayer from "../components/AsciiPlayer";

export default function Page(): JSX.Element {
  const features = [
    { text: "Record.", top: "669px", left: "106px" },
    { text: "Remember.", top: "730px", left: "288px" },
    { text: "Recognize.", top: "769px", left: "106px" },
    { text: "Reorganize.", top: "830px", left: "288px" },
  ];

  return (
    <main className="bg-white w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        <div className="relative p-8 md:p-16 order-1 md:order-1">
          <header className="flex items-center gap-[9px]">
            <img
              className="w-[51px] h-[51px] aspect-[1.01] object-cover"
              alt="Maki logo"
              src="/assets/gemini-generated-image.png"
            />
            <h1 className="[font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[32.7px] whitespace-nowrap">
              maki
            </h1>
          </header>

          <section className="mt-16 w-full max-w-[388px] flex flex-col gap-[52px]">
            <h2 className="[font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-[56px] leading-[56px]">
              Your Personal <br /> Assistant
            </h2>

            <div className="flex flex-col items-start gap-9 w-full">
              <p className="opacity-90 [font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-xl leading-6">
                Meet your personal assistant - a comprehensive platform offering
                tools for tracking your actions, reminders, maintaining personal
                intelligence and remembering every conversation.
              </p>

              <button
                className="flex w-[140px] h-[54px] items-center justify-center gap-2.5 px-[15px] py-[11px] bg-black rounded-[100px] overflow-hidden hover:bg-gray-800 transition-colors"
                aria-label="Try for Free"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-sm leading-[19.2px] whitespace-nowrap">
                    Try for Free
                  </span>
                  <span className="relative w-[19.2px] h-[19.2px]">
                    <img
                      className="absolute w-1/2 h-1/3 top-[30.21%] left-[21.88%]"
                      alt=""
                      src="/assets/vector.svg"
                    />
                  </span>
                </span>
              </button>
            </div>
          </section>

          {/* Static feature labels retained for fidelity */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute opacity-80 [font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0.56px] leading-[22px]"
                  style={{
                    top: `calc(${feature.top} - 669px)`,
                    left: `calc(${feature.left} - 106px)`,
                  }}
                >
                  {feature.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[126px] items-start gap-[100px]">
              <div className="opacity-80 [font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0.56px] leading-[22px]">
                Record.
              </div>
              <div className="opacity-80 [font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0.56px] leading-[22px]">
                Recognize.
              </div>
            </div>

            <div className="flex flex-col w-[137px] items-start gap-[100px] mt-8">
              <div className="opacity-80 [font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0.56px] leading-[22px]">
                Remember.
              </div>
              <div className="opacity-80 [font-family:'Crimson_Text-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0.56px] leading-[22px]">
                Reorganize.
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATION - NO PADDING, FULL WIDTH AND HEIGHT */}
        <div
          className="order-2 md:order-2"
          style={{ width: "100%", height: "100vh" }}
        >
          <AsciiPlayer />
        </div>
      </div>
    </main>
  );
}
