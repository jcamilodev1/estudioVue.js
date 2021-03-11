<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assets-table :assets="assets" v-if="!isLoading" />
  </div>
</template>
<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  components: { PxAssetsTable },
  name: "Homa",

  data() {
    return {
      isLoading: false,
      assets: []
    };
  },
  methods: {
    async getData() {
      this.assets = await api.getAssets();
      this.isLoading = await false;
    }
  },
  created() {
    this.isLoading = true;
    this.getData();
  }
};
</script>
