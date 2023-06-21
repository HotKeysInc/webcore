import { FeaturesData } from "../constants/Featuresdata";
export default function FeatureSection() {
  return (
    <div id="">
      <div className="mx-auto max-w-screen-xl px-8 py-16 sm:px-6 ">
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {FeaturesData.map((feature, index) => {
            if (feature.color === "darker") {
              return (
                <div
                  key={index}
                  className="mb-8 bg-[#070707] bg-opacity-60 backdrop-blur-lg drop-shadow-lg sm:break-inside-avoid rounded-2xl border-solid border border-[#1D1C20] border-opacity-80 pt-4"
                >
                  <h2 className="text-white px-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-poppins text-left pb-10">
                  {feature.title}
                    <span style={{ color: "#42FFC9", fontWeight: "bold" }}>
                    
                    </span>
                  </h2>
                  <h4 className="text-md md:text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                    {feature.description}
                  </h4>
                </div>
              );
            } else if (feature.color === "lighter") {
              return (
                <div
                  key={index}
                  className="mb-8 bg-[#070707] bg-opacity-60 backdrop-blur-lg drop-shadow-lg sm:break-inside-avoid rounded-2xl border-solid border border-[#257C60] border-opacity-50 pt-4"
                >
                  <h2 className="text-white px-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-poppins text-left pb-10">
                  {feature.title}
                    <span style={{ color: "#42FFC9", fontWeight: "bold" }}>
                    
                    </span>
                  </h2>
                  <h4 className="text-md md:text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                    {feature.description}
                  </h4>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
