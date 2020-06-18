<template>
  <div>
    <table>
      <PostListItem
        v-for="(post, i) of posts"
        v-bind:post="post"
        v-bind:index="i"
        v-bind:key="post.id"
      />
    </table>
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem";

export default {
  props: ["posts"],
  components: {
    PostListItem
  }
};
</script>