import { IoMdArrowDown } from "react-icons/io";
import { SlArrowDownCircle } from "react-icons/sl";
import "animate.css";

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 transition-opacity duration-500 ease-in-out"
      >
        <source
          src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 text-center sm:py-48 lg:py-56">
          <h1 className="animate__animated animate__zoomIn text-5xl font-semibold tracking-tight text-white lg:text-8xl">
            Lorem,
            <span className="text-blue-600">ipsum dolor</span> <br />
            amet Lorem
          </h1>
          <p className="animate__animated animate__fadeInRight mt-8 text-lg text-gray-300 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. <br /> Aenean massa. Cum sociis natoque
          </p>
          <div className="animate__animated animate__fadeInDown mt-10 flex justify-center gap-x-6">
            <button className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-indigo-100 px-6 py-3 font-medium transition-all hover:bg-white">
              <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-indigo-600 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-base font-semibold text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                EXPLORE CULTPASS
              </span>
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("target-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <SlArrowDownCircle
                size={32}
                className="boraderrounded animate-bounce rounded-full border"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
