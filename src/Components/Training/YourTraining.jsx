import { useEffect } from "react";

const YourTraining = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("[data-speed]").forEach((el, idx) => {
        const speed = parseFloat(el.getAttribute("data-speed"));
        const y = window.scrollY * speed;
        const x = Math.sin((window.scrollY + idx * 150) * 0.01) * 100; // gentle side-to-side motion
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about_page"
      className="relative overflow-hidden bg-gray-900 py-20 text-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-4xl font-bold">
              Your <span className="text-pink-500">training</span>
            </h2>
            <h3 className="mb-4 text-lg font-semibold text-gray-300">
              Professional coaches
            </h3>
            <h4 className="mb-4 text-xl font-medium">
              My name is <span className="text-pink-500">albert</span>, I will
              introduce you to our{" "}
              <span className="text-pink-500">Fitness club</span> with a free{" "}
              <span className="text-pink-500">training</span>
            </h4>
            <p className="text-gray-400">
              I am a text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet...
            </p>
          </div>

          <div className="relative text-center md:text-right">
            <img
              src="https://html.codexse.com/perfect-gym/images/about-image.png"
              alt="About Photo"
              className="inline-block max-w-full"
            />
            <ul className="parallax pointer-events-none inset-0 z-0">
              {[0.3, 0.5, 0.2, 0.2, -0.6, -0.4, -0.7, -0.3].map(
                (speed, index) => (
                  <li
                    key={index}
                    data-speed={speed}
                    className="absolute h-10 w-[200px] rounded-full opacity-50 transition-transform duration-200 ease-in-out"
                    style={{
                      top: `${index * 90 + 20}px`, // 20px vertical margin
                      left: `50px`, // align to left edge with margin
                    }}
                  >
                    <span className=""></span>
                  </li>
                ),
              )}
            </ul>
          </div>
          {/* Parallax List Items */}
        </div>
      </div>
    </section>
  );
};

export default YourTraining;
