import Offer from "../Offer/Offer";

const Training = () => {
  return (
    <section className="bg-black" id="target-section">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div
          className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center text-center shadow-lg"
          style={{
            backgroundImage: "url(./img/cat2.png)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-lx relative z-10 px-6 text-white">
            <h3 className="mb-4 font-semibold uppercase lg:text-5xl">
              Personal Training
            </h3>
            <p className="text-lx mb-6 py-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </p>

            <button className="group relative inline-flex animate-bounce items-center justify-start overflow-hidden rounded bg-indigo-100 px-6 py-3 font-medium transition-all hover:bg-white">
              <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-indigo-600 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-base font-semibold uppercase text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View Courses
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center text-center shadow-lg"
          style={{
            backgroundImage: "url(./img/cat1.png)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-lx relative z-10 px-6 text-white">
            <h3 className="mb-4 font-semibold uppercase lg:text-5xl">
              Group Training
            </h3>
            <p className="text-lx mb-6 py-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </p>
            <button className="group relative inline-flex animate-bounce items-center justify-start overflow-hidden rounded bg-indigo-100 px-6 py-3 font-medium transition-all hover:bg-white">
              <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-indigo-600 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-base font-semibold uppercase text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View Courses
              </span>
            </button>
          </div>
        </div>
      </div>
      <Offer />
    </section>
  );
};

export default Training;
