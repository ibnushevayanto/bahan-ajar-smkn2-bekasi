<template>
  <div>
    <form-nama
      ref="formNama"
      title="Form Nama"
      @tambahData="loadData"
    />
    <div>
      <h1>List Yang Absen Hari Ini</h1>
      <table>
        <div v-if="itemsNama.length === 0">Tidak Ada Data</div>
        <tr v-for="nama in itemsNama" :key="nama.index">
          <td>{{ nama.no }}.</td>
          <td>{{ nama.nama }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      itemsNama: "getItemsNama",
    }),
  },
  async mounted() {
    await this.loadData();
    this.$refs.formNama.modelText = "Default Text";
  },
  methods: {
    async loadData() {
      await this.$store.dispatch("getData");
    },
  },
};
</script>
