<template>
  <div class="text-left">
    <v-chip class="ma-2" color="green" text-color="white">
      <v-avatar left class="green darken-4">{{postlike.countanswer}}</v-avatar>rating
    </v-chip>
    <span class="text-left mt-md-2" cols="10">{{postlike.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    postlike: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1 rem;
}
</style>