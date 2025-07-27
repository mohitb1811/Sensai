import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-6">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.2] text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-white to-gray-700">
        Industry Insights
        </h1>


      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
