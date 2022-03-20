import router from "next/router";

export default function Custom500() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-[#186E7A] to-[#50878f]">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[#186E7A] text-9xl">500</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-[#186E7A] md:text-3xl">
            <span className="text-[#C05E37]">Oops!</span> Page not found
          </h6>
          <p className="mb-8 text-center text-[#C05E37] md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>
          <div
            onClick={() => router.push("/")}
            className="cursor-pointer px-6 py-2 text-sm font-semibold text-white bg-[#C05E37]"
          >
            Go to Homepage
          </div>
        </div>
      </div>
    </div>
  );
}
