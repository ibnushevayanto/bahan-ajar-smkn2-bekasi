export default {
  getItemsNama(state) {
    return state.itemsNama.map((res, index) => ({ ...res, no: index + 1 }));
  },
};
