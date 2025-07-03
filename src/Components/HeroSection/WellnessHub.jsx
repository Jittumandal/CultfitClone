const WellnessHub = () => {
  return (
    <section className="mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:mt-20 lg:flex-row">
          <div className="mobilewellnesshub w-full lg:w-1/2">
            <h2 className="font-manrope text-white-900 mb-7 text-center text-5xl font-bold leading-[4rem] text-white lg:text-left">
              Wellness Hub
            </h2>
            <p className="text-white-500 mb-16 pr-16 text-center text-lg text-white lg:text-left">
              One place for all your well-being needs One place for all your
              well-being needs One place for all your well-being needs One place
              for all your well-being needs
            </p>
            <div className="animate__animated animate__fadeInDown mt-10 flex justify-start gap-x-6">
              <button className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-indigo-100 px-6 py-3 font-medium transition-all hover:bg-white">
                <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-indigo-600 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-base font-semibold text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  WORKOUT GEAR
                </span>
              </button>
            </div>
          </div>
          <div className="mt-16 w-full max-lg:max-w-2xl md:mt-40 lg:mt-0 lg:w-1/2">
            <div className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 md:grid-cols-3">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_442,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg1.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:mr-0 md:mt-20"
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_535,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg2.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:ml-0 md:mx-auto"
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_597,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg4.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:mr-0 md:ml-0 md:mt-20"
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_597,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg3.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:ml-0 md:ml-auto md:mr-0"
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_458,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg5.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:mr-0 md:mx-auto md:-mt-20"
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:ml-0 md:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessHub;
