const FIREBASE_DOMAIN = `https://belajar-b4492-default-rtdb.firebaseio.com/nama.json`;
export default {
  async getData({ commit }) {
    try {
      const response = await fetch(FIREBASE_DOMAIN);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch quotes.");
      }

      const responseData = Object.keys(data).map((res) => ({
        ...data[res],
        id: res,
      }));

      commit("SET_ITEMS_NAMA", responseData);
      return { status: true };
    } catch (error) {
      return { status: false };
    }
  },
};
