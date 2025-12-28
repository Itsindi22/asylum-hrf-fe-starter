import { useState } from 'react';
import { getMapView, mapTypes } from './getMapView.jsx';
import { GraphButtons } from '../../common/GraphButtons.jsx';
import { Loading } from '../../common/Loading.jsx';
import { getGraphsHeader } from './getGraphsHeader.js';

export const GraphsPage = () => {
  const [mapView, setMapView] = useState(mapTypes.ScatterPlot);

  return (
    <div className='secondary-c'>
      <div className='plot-main flex w-[70%] gap-10 mx-auto justify-center'>
        <div className='plot-main flex-c w-full'>
          <h1 className='py-5 flex items-center justify-center'>
            {getGraphsHeader(mapView)}
          </h1>

          <section className='maps flex justify-center items-center w-full'>
            {getMapView(mapView)}
          </section>
        </div>

        <GraphButtons mapView={mapView} setMapView={setMapView} />
      </div>

      <Loading />
    </div>
  );
};
