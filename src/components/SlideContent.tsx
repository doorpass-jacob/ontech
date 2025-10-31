import { Slide } from "../types";

interface SlideContentProps {
  slide: Slide;
}

export function SlideContent({ slide }: SlideContentProps) {
  if (slide.id === 6) {
    return (
      <div className="space-y-8 sm:space-y-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FFFFFF]/90 mb-3 sm:mb-4">
            Scope
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-[#FFFFFF]/80 text-base sm:text-lg">
            {slide.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FFFFFF]/90 mb-3 sm:mb-4">
            Objectives
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-[#FFFFFF]/80 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
              <span>Validate install workflows & timing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
              <span>Measure agent satisfaction and reliability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
              <span>Prepare for company-wide Compass adoption</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (slide.id === 8) {
    return (
      <div className="space-y-8 sm:space-y-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FFFFFF]/90 mb-3 sm:mb-4">
            OnTech Gains
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-[#FFFFFF]/80 text-base sm:text-lg">
            {slide.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FFFFFF]/90 mb-3 sm:mb-4">
            Doorpass Gains
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-[#FFFFFF]/80 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
              <span>National install partner with proven reliability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
              <span>Scalable rollout engine</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (slide.tableData) {
    return (
      <div className="w-full max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#FFFFFF]/20">
              {slide.tableData.headers.map((header, index) => (
                <th
                  key={index}
                  className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#FFFFFF]/90 font-semibold text-sm sm:text-base lg:text-lg"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-[#FFFFFF]/10">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="py-3 sm:py-4 px-3 sm:px-6 text-[#FFFFFF]/80 text-sm sm:text-base lg:text-lg"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      {slide.subtitle && (
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FFFFFF]/90 mb-6 sm:mb-8">
          {slide.subtitle}
        </h2>
      )}
      {slide.bullets.length > 0 && (
        <ul className="space-y-3 sm:space-y-4 text-[#FFFFFF]/80 text-base sm:text-lg">
          {slide.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#FFFFFF] mt-1.5 text-sm">●</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
