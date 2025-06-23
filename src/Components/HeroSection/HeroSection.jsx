import { IoMdArrowDown } from "react-icons/io";
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
          <h1 className="text-5xl font-semibold tracking-tight text-white lg:text-8xl">
            Lorem,
            <span className="text-blue-600">ipsum dolor</span> <br />
            amet Lorem
          </h1>
          <p className="mt-8 text-lg text-gray-300 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. <br /> Aenean massa. Cum sociis natoque
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="text-md rounded-md bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow hover:bg-indigo-500"
            >
              EXPLORE CULTPASS
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-x-6">
            <IoMdArrowDown size={45} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
