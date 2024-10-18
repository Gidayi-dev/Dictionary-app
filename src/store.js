import { create } from 'zustand';

const useStore = create((set) => ({
  word: '',
  definitions: [],
  setWord: (word) => set({ word }),
  setDefinitions: (definitions) => set({ definitions }),
}));

export default useStore;
