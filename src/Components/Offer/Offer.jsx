const Offer = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 text-center text-white">
        <div className="w-max">
          <h1 className="animate-typing offer pr-5 text-5xl font-bold text-white">
            What I Offer
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="animate-fade-up text-center shadow-md transition-all delay-100 duration-300 hover:shadow-xl">
            <div className="mb-4">
              <img
                src="./img/team1.png"
                alt="Body Building"
                className="mx-auto h-auto"
              />
            </div>
            <h3 className="py-2 font-semibold lg:text-3xl">
              <a
                href="services.html"
                className="text-white hover:text-blue-600 hover:underline"
              >
                Body Building
              </a>
            </h3>

            <p className="text-lx mb-6 py-3 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula
            </p>
          </div>

          <div className="animate-fade-up text-center shadow-md transition-all delay-200 duration-300 hover:shadow-xl">
            <div className="mb-4">
              <img
                src="./img/team2.png"
                alt="Muscle Gain"
                className="mx-auto h-auto"
              />
            </div>

            <h3 className="py-2 font-semibold lg:text-3xl">
              <a
                href="services.html"
                className="text-white hover:text-blue-600 hover:underline"
              >
                Muscle Gain
              </a>
            </h3>

            <p className="text-lx mb-6 py-3 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula
            </p>
          </div>

          <div className="animate-fade-up text-center shadow-md transition-all delay-300 duration-300 hover:shadow-xl">
            <div className="mb-4">
              <img
                src="./img/team3.png"
                alt="Weight Loss"
                className="mx-auto h-auto"
              />
            </div>

            <h3 className="py-2 font-semibold lg:text-3xl">
              <a
                href="services.html"
                className="text-white hover:text-blue-600 hover:underline"
              >
                Weight Loss
              </a>
            </h3>

            <p className="text-lx mb-6 py-3 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
