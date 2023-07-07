// console.log('in index.ts:',window);
export const useCounterStore = defineStore("counter", {
  persist: {
    storage:window.localStorage
  },
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => {
      console.log("state.count:", state.count);
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      console.log("window:", window);
      this.count++;
    },
  },
});
