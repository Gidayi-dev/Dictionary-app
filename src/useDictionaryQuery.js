import { useQuery } from 'react-query';

const fetchDictionaryData = async (word) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (!response.ok) {
    throw new Error('Word not found');
  }
  return response.json();
};

export const useDictionaryQuery = (word) => {
  return useQuery(['dictionary', word], () => fetchDictionaryData(word), {
    enabled: !!word,
  });
};
