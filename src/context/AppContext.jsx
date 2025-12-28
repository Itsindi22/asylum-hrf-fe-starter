import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const api = axios.create({
    baseURL: 'https://asylum-be.onrender.com',
    timeout: 60000, // helps with Render cold starts
  });

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    const fiscalDataRes = await api.get('/fiscalSummary');
    return fiscalDataRes.data;
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    const citizenshipRes = await api.get('/citizenshipSummary');
    return citizenshipRes.data;
  };

  // ✅ Helpers to keep your app working even if the API returns slightly different shapes
  const normalizeYearResults = (data) => {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.yearResults)) return data.yearResults;
    return [];
  };

  const normalizeCitizenshipResults = (data) => {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.citizenshipResults)) return data.citizenshipResults;
    return [];
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    try {
      const [yearRaw, citizenshipRaw] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults(),
      ]);

      const yearResults = normalizeYearResults(yearRaw);
      const citizenshipResults = normalizeCitizenshipResults(citizenshipRaw);

      // ✅ Store data in the same shape your graphs expect
      setGraphData({
        yearResults,
        citizenshipResults,
      });
    } catch (err) {
      console.error('Error fetching graph data:', err);

      // ✅ Keep the same shape so graphs don't crash
      setGraphData({
        yearResults: [],
        citizenshipResults: [],
      });
    } finally {
      setIsDataLoading(false);
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const clearQuery = () => {
    // ✅ Reset to empty shape (or you could set back to testData if you prefer)
    setGraphData({
      yearResults: [],
      citizenshipResults: [],
    });
  };

  const getYears =
    () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
