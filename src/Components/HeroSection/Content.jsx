const Content = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div
          className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center text-center shadow-lg"
          style={{
            backgroundImage:
              "url(https://themewagon.github.io/zacson/assets/img/gallery/cat2.png)",
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
            <a
              href="courses.html"
              className="inline-block rounded border border-white px-5 py-4 uppercase transition hover:bg-white hover:text-black lg:text-3xl"
            >
              View Courses
            </a>
          </div>
        </div>

        <div
          className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center text-center shadow-lg"
          style={{
            backgroundImage:
              "url(https://themewagon.github.io/zacson/assets/img/gallery/cat1.png)",
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
            <a
              href="courses.html"
              className="inline-block rounded border border-white bg-indigo-600 px-5 py-4 uppercase transition hover:bg-white hover:text-black lg:text-3xl"
            >
              View Courses
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 text-center text-white">
        <h2 className="offer mb-4 text-4xl">What I Offer</h2>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="animate-fade-up text-center shadow-md transition-all delay-100 duration-300 hover:shadow-xl">
            <div className="mb-4">
              <img
                src="https://themewagon.github.io/zacson/assets/img/gallery/team1.png"
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
                src="https://themewagon.github.io/zacson/assets/img/gallery/team2.png"
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
                src="https://themewagon.github.io/zacson/assets/img/gallery/team3.png"
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
    </section>
  );
};

export default Content;
