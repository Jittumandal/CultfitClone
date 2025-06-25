import Offer from "../Offer/Offer";

const Training = () => {
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
      <Offer />
    </section>
  );
};

export default Training;
