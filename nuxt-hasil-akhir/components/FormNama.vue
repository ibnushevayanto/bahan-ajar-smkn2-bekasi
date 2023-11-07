<template>
  <div style="padding: 8px; border: 1px solid black; border-radius: 8px">
    <h1>{{ title }}</h1>
    <input
      style="border: 1px solid black; padding: 4px 8px"
      v-model="modelText"
    />
    <button @click="tambahkanNama(modelText)">Tambahkan</button>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
  },
  data() {
    return {
      modelText: "Ibnu Shevayanto",
    };
  },
  methods: {
    async tambahkanNama(nama) {
      const { status } = await this.$store.dispatch("simpanData", { nama });
      if (status) {
        this.$emit('tambahData')
        this.modelText = "";
      }
    },
  },
};
</script>