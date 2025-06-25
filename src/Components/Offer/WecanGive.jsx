import { RiAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next === end) {
          clearInterval(timer);
        }
        return next;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <div className="text-4xl font-bold text-black">{count}</div>;
};

const WecanGive = () => {
  return (
    <section className="relative bg-white px-16 py-16">
      <div className="container mx-auto flex flex-col items-center px-4 lg:flex-row">
        <div className="relative mb-10 w-full lg:mb-0 lg:w-1/2">
          <img
            src="./img/running.png"
            alt="gym-back"
            className="running absolute left-0 top-0 z-0"
          />
          <img
            src="./img/about-3-1.png"
            alt="shape"
            className="relative z-10"
          />
        </div>

        <div className="px-15 w-full text-center lg:w-1/2 lg:text-left">
          <p className="subtitle mb-2 text-sm uppercase text-gray-500">
            About Gymat
          </p>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            We Can Give A Shape Of Your
            <br /> Body Here!
          </h2>
          <p className="relative z-10 mb-6 pr-16 text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula Lorem
          </p>

          <div className="mr-16 grid grid-cols-2 gap-6 pr-16">
            {/* Content Block 1 */}
            <div className="z-10 text-center">
              <span className="inline-block flex items-center justify-center py-4 py-5">
                <img
                  src="./img/people.png"
                  alt="people"
                  style={{ paddingRight: "5px" }}
                />
              </span>
              <div className="flex items-center justify-center text-4xl font-bold text-black text-indigo-600">
                <span className="text-5xl font-bold text-black">
                  <Counter start={0} end={1600} duration={3000} />
                </span>
                <RiAddLine className="bg-icons" />
              </div>
              <p className="mt-2 font-bold uppercase text-gray-500">
                Trained People
              </p>
            </div>

            {/* Content Block 2 */}
            <div className="z-10 text-center">
              <span className="inline-block flex items-center justify-center py-4 py-5">
                <img
                  src="./img/equipment.png"
                  alt="equipment"
                  style={{ paddingRight: "40px" }}
                />
              </span>
              <div className="flex items-center justify-center text-4xl font-bold text-black text-indigo-600">
                <span className="text-5xl font-bold text-black">
                  <Counter start={0} end={1200} duration={3000} />
                </span>
                <RiAddLine className="bg-icons" />
              </div>
              <p className="mt-2 font-bold uppercase text-gray-500">
                Modern Equipment
              </p>
            </div>
          </div>

          <p className="relative z-10 mb-6 py-10 pr-16 text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula Lorem
          </p>
        </div>
      </div>

      <img
        src="./img/about-1.png"
        alt="shape"
        className="right-img absolute right-0 top-0 -z-0 object-cover"
      />
    </section>
  );
};

export default WecanGive;
