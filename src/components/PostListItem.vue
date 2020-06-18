<template>
  <div>
    <v-card class="d-block ma-md-2">
      <v-row justify="space-between">
        <v-col cols="2">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <img :src="post.avatar" v-bind="attrs" v-on="on" />
            </template>
            <span>{{post.user}}</span>
          </v-tooltip>
        </v-col>
        <v-col class="text-left">
          <div class="frame" v-show="post.posthref!=''">
            <!--iframe scrolling="no" :src="'http://'+post.posthref" width='800px' height='600px'-->
            <iframe scrolling="no" :src="'http://'+post.posthref" width="95%;" height="95%;"></iframe>
          </div>
          <p>
            <a id="text" :href="'http://'+post.posthref" target="_blank">{{post.posthref}}</a>
          </p>
          {{post.title}}
        </v-col>
      </v-row>
    </v-card>

    <v-row justify="space-between">
      <v-col cols="2">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <img :src="post.avatar1" v-bind="attrs" v-on="on" />
          </template>
          <span>{{post.user1}}</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-left">{{post.answer1}}</v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="2">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <img :src="post.avatar2" v-bind="attrs" v-on="on" />
          </template>
          <span>{{post.user2}}</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-left">{{post.answer2}}</v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="2">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <img :src="post.avatar3" v-bind="attrs" v-on="on" />
          </template>
          <span>{{post.user3}}</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-left">{{post.answer3}}</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    post: {
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
.frame {
  transform-origin: 0 0;
  transform: scale(0.3);
  max-height: 100px;
  max-width: 240px;
  bottom: 20px;
}
</style>