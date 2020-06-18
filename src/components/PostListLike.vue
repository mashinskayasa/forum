<template>
  <div>
      <PostListLikeItem
        v-for="(postlike, i) of postslike"
        v-bind:postlike="postlike"
        v-bind:index="i"
        v-bind:key="postlike.id"
      />
  </div>
</template>

<script>
import PostListLikeItem from "@/components/PostListLikeItem";

export default {
  props: ["postslike"],
  components: {
    PostListLikeItem
  }
};
</script>