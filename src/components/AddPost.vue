<template>
  <v-form @submit.prevent="onSubmit">
    <v-container>      
      <v-row class="pa-md-0">
        <v-col cols="12" md="10">
          <v-text-field class="pa-md-0" v-model="title" label="Message" required></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn type="submit">Create</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    findAndLink(str) {
      //var str = "бла бла бла http://yandex.ru/test.php бла бла бла http://mail.ru/";
      //var links = str.match(/http:\/\/[^\s\Z]+/i);
      var pattern = /([-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-zA-Zа-яА-ЯёЁ]{2,4}\b(\/?[-a-zA-Z0-9а-яА-ЯёЁ@:%_\+.~#?&\/\/=]*)?)/gi;
      var links = str.match(pattern);
      if (links == null) {
        return "";
      }
      //alert(links);
      var firstlink = links[0];

      return firstlink;
    },
    findStr(str) {
      var pattern = /([-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-zA-Zа-яА-ЯёЁ]{2,4}\b(\/?[-a-zA-Z0-9а-яА-ЯёЁ@:%_\+.~#?&\/\/=]*)?)/gi;
      var links = str.match(pattern);
      if (links == null) {
        return str;
      }
      //alert(links);
      var firstlink = links[0];
      return str.replace(firstlink, " ");
    },

    onSubmit() {
      console.log("submit", this.title);
      if (this.title.trim()) {
        const NewPost = {
          id: Date.now(),
          title: this.findStr(this.title),
          answer1: "",
          answer2: "",
          answer2: "",
          user1: "",
          avatar1: "",
          user2: "",
          avatar2: "",
          user3: "",
          avatar3: "",
          user: "",
          avatar: "",
          countanswer: 0,
          posthref: this.findAndLink(this.title)
        };
        this.$emit("add-post", NewPost);
        this.title = "";
        this.posthref = "";
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  width: 400px;
}
</style>
