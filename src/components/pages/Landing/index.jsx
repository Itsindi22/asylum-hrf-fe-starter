import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage

  };
return (
  <div className="w-full min-h-screen bg-white">
    {/* HERO BANNER UNDER GLOBAL HEADER */}
<section className="w-full primary-c text-white px-14">
  <div className="flex flex-col items-center justify-center h-48">
    <h1 className="text-6xl font-serif font-bold">
      Asylum Office Grant Rate 
              Tracker
    </h1>
    <p className="mt-3 text-sm max-w-[900px] mx-auto text-center">
      The Asylum Office Grant Rate Tracker provides asylum seekers, researchers,
      policymakers, and the public an interactive tool to explore USCIS data on
      Asylum Office decisions.
    </p>
  </div>
</section>

{/* MAIN CONTENT – this is where charts, image, stats will go */}
    <main className="max-w-6xl mx-auto px- py-16">
    <div className='flex justify cennter gap 20 py-12'>

  <div class name= "text-center">
  <img src = {barGraph} alt="barGraph" className="w[300px]" />
  <p class name = "mt-4 text - lg font-serif"> 
    search grant  Rates by office
    </p>
  </div>

  <div className= "text-center">
  <img src={pieChart} alt="pie Chart" className="w-[300]"/>
  <p className="mt -4  text lg font -serif"> 
    search Grant Rates  by Nationality
    </p>
</div>


<div className = "text-center">
  <img src={lineGraph} alt="line Graph" className="w-[300px]"/>
  <p className="mt-4 text lg font-serif"> 
    Search Grant Rates Over  time
    </p>
</div>

    </div>

 
      {/* charts section */}
      {/* paperStack section */}
      {/* stats section */}
      {/* read more + back to top */}

     
    </main>
  </div>
);




};
