import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export function SwiperNavigation({ prevRef, nextRef }) {
  return (
    <>
      <button
        ref={prevRef}
        className="custom-prev absolute top-1/2 left-1.5 z-20 -translate-y-1/2 rounded"
      >
        <HiChevronLeft className="h-6 w-6 cursor-pointer rounded text-gray-800/60 transition-all hover:h-12 hover:w-7 hover:bg-gray-950/5 hover:text-gray-900" />
      </button>
      <button
        ref={nextRef}
        className="custom-next absolute top-1/2 right-1.5 z-20 -translate-y-1/2 rounded"
      >
        <HiChevronRight className="h-6 w-6 cursor-pointer rounded text-gray-800/60 transition-all hover:h-12 hover:w-7 hover:bg-gray-950/5 hover:text-gray-900" />
      </button>
    </>
  );
}
