import pieChart from "../../../assets/pie-chart.png";
import lineGraph from "../../../assets/line-graph.png";
import barGraph from "../../../assets/bar-graph.png";
import paperStack from "../../../assets/paper-stack.jpg";
import { useDownloadData } from "../../../hooks/useDownloadData.js";

export const LandingPage = () => {
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20;
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) clearInterval(scrollInterval);
      else window.scrollBy(0, scrollStep);
    }, 10);
  };

  return (
    <div className="font-serif w-full min-h-screen text-center bg-white">
      {/* HEADER / HERO (olive) */}
      <header className="w-full bg-[#666555] text-white">
        {/* top nav row */}
        <div className="mx-auto max-w-6xl px-8 py-4 flex items-start justify-between">
          {/* logo (text version to match screenshot) */}
          <div className="leading-[1.05] text-left text-[12px] opacity-95">

          </div>

         
        </div>

        {/* title + subtitle */}
        <section className="pb-9 pt-1">
          <h1 className="text-6xl leading-tight">
            Asylum Office Grant Rate Tracker
          </h1>

          <p className="mx-auto mt-6 max-w-5xl text-[px] leading-5 opacity-95">
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policy makers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </p>
        </section>
      </header>

      {/* CHARTS */}
      <section id="graphs" className="w-full bg-white pt-16 pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
            {/* left */}
            <div className="flex flex-col items-center">
              <img
                className="w-[360px] h-[260px] object-contain"
                src={barGraph}
                alt="Bar Graph"
              />
              <h2 className="mt-3 text-[14px] leading-5">
                Search Grant Rates By Office
              </h2>
            </div>

            {/* middle */}
            <div className="flex flex-col items-center">
              <img
                className="w-[300px] h-[260px] object-contain"
                src={pieChart}
                alt="Pie Chart"
              />
              <h2 className="mt-3 text-[14px] leading-5">
                Search Grant Rates By Nationality
              </h2>

              <div className="mt-4 flex gap-3">
                <button className="bg-[#aaa] px-4 py-1 text-white text-1xl shadow-sm">
                  View the Data
                </button>

                <button
                  onClick={downloadCSV}
                  className="bg-[#aaa] px-4 py-1 text-white text-1xl shadow-sm"
                >
                  Download the Data
                </button>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col items-center">
              <img
                className="w-[360px] h-[260px] object-contain"
                src={lineGraph}
                alt="Line Graph"
              />
              <h2 className="mt-3 text-[14px] leading-5">
                Search Grant Rates Over Time
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* PAPER IMAGE + PARAGRAPH */}
      <section className="w-full bg-white pt-20 pb-20">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <img
            src={paperStack}
            alt="Paper stack"
            className="rounded-2xl w-full h-[280px] object-cover"
          />

          <p className="mx-auto max-w-md text-[18px] leading-5 text-gray-800 text-center">
            Human Rights First has created a search tool to give you a user-friendly
            way to explore a data set of asylum decisions between FY 2016 and May
            2021 by the USCIS Asylum Office, which we received through a Freedom of
            Information Act request. You can search for information on asylum grant
            rates by year, nationality, and asylum office, visualize the data with
            charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="w-full bg-white pt-12 pb-10">
        <h3 className="text-5xl text-gray-800 mb-12">
          Systemic Disparity Insights
        </h3>

        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-gray-900 mb-4">36%</div>
            <p className="text-[11px] leading-5 max-w-[260px] text-gray-800">
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36% from an average of 44 percent in fiscal
              year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl text-gray-900 mb-4">5%</div>
            <p className="text-[11px] leading-5 max-w-[260px] text-gray-800">
              The New York asylum office grant rate dropped to 5 percent in fiscal
              year 2020.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl text-gray-900 mb-4">6x Lower</div>
            <p className="text-lg leading-5 max-w-[280px] text-gray-800">
              Between fiscal year 2017 and 2020, the New York asylum office&apos;s
              average grant rate was 6 times lower than the San Francisco asylum
              office.
            </p>
          </div>
        </div>
      </section>

      {/* READ MORE */}
      <section className="w-full flex justify-center py-6 bg-white">
        <a
          href="https://www.humanrightsfirst.org/reports/asylum-grant-rates"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#666555] text-white px-5 py-1 text-1xl shadow-sm">
            Read More
          </button>
        </a>
      </section>

      {/* BACK TO TOP */}
      <section className="w-full flex justify-center pb-12 bg-white">
        <button onClick={scrollToTop} className="text-1xl text-gray-700">
          Back To Top ^
        </button>
      </section>

      

           


          
      
     
    </div>
  );
};
