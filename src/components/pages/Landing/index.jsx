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
  };

  return (
    <div className='flex-c align-start w-[100vw] secondary-c '>
      <section className=' flex primary-c pt-4 pb-8'>
        <div className='flex-c mx-auto'>
          <h1 className='text-6xl mb-8 text-white'>Asylum Office Grant Rate Tracker</h1>
          <h3 className='text-white'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </h3>
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-center ">
          <div className="flex-c text-center w-[500px]">
            <img className="h-[400px] w-[500px]" src={barGraph} alt="" />
            <h2 className="text-3xl">Search Grant Rates By Office</h2>
          </div>

           <div className="flex-c text-center w-[500px]">
            <img className="h-[400px] w-[500px]" src={pieChart} alt="" />
            <h2 className="text-3xl">Search Grant Rates By Office</h2>
          </div>

           <div className="flex-c text-center w-[500px]">
            <img className="h-[400px] w-[500px]" src={lineGraph} alt="" />
            <h2 className="text-3xl">Search Grant Rates By Office</h2>
          </div>
        </div>
        <div></div>
      </section>
      
    </div>
  );
};
