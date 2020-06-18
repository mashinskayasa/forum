<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark>
      <h3>Часто обсуждаемые посты</h3>
    </v-app-bar>
    <div class="text-center mt-md-3">
      <v-btn class="ma-2" tile color="grey lighten-4" v-on:click="toggleTheme(flase)" light>Light theme</v-btn>
      <v-btn class="ma-2" tile color="grey darken-3" v-on:click="toggleTheme(true)" dark>Dark theme</v-btn>
    </div>
    <PostListLike v-bind:postslike="postslike" />
    
    <AddPost @add-post="addPost" />
    <v-divider />
    <PostList v-bind:posts="posts" />
  </v-app>
</template>

<script>
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
import PostList from "@/components/PostList";
import PostListLike from "@/components/PostListLike";
import AddPost from "@/components/AddPost";

export default {
  name: "App",
  data() {
    return {
      answers: [],
      postsget: [],
      newarr: [],
      users: [],
      counposts: 0,
      counpostslike: 0
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=100")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.answers = json;
          //this.loading=false
        }, 100);
      });
    fetch("https://randomuser.me/api/?results=100")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.users = json;
          //this.loading=false
        }, 100);
      });
  },
  computed: {    
    postslike: {
      get: function() {
        this.counpostslike++;
        var newarrpostlike = this.posts.slice();
        newarrpostlike.sort((a, b) => {
          let compare = 0;
          if (a.countanswer > b.countanswer) {
            compare = -1;
          } else if (b.countanswer > a.countanswer) {
            compare = 1;
          }
          return compare;
        });

        if (this.counpostslike===0)
          {
            if (localStorage.getItem('postslike')) {
            try {
              var postsgetl = JSON.parse(localStorage.getItem('postslike')); //взять из хранилища                             
               if (postsgetl.length>0) {
                 this.newarrpostlike = postsgetl.slice();   //из хранилища
               }                                      
               } catch(e) {
                
                 localStorage.removeItem('postslike');
               }
            }
          }
          else{
            const parsed = JSON.stringify(newarrpostlike
            .filter(newarrpostlike => newarrpostlike.countanswer > 0).slice(-3));
            localStorage.setItem('postslike', parsed);   //забросить в хранилище
          }

         this.counpostslike++;
        //return newarrpostlike.filter(newarrpostlike => newarrpostlike.countanswer > 0)
        return newarrpostlike
          .filter(newarrpostlike => newarrpostlike.countanswer > 0)
          .slice(-3); //последник 3
      }
    },
    posts: {
      get: function() {        
         if (this.counposts===0)
          {
            
            if (localStorage.getItem('posts')) {
            try {
              var postsgetl = JSON.parse(localStorage.getItem('posts')); //взять из хранилища 
                if (postsgetl.length>0)
                {                  
                  this.postsget = postsgetl.slice();   //из хранилища                  
                }                                                   
               } catch(e) {                
                 localStorage.removeItem('posts');
               }
            }
          }
        
        
        var newarr3 = this.postsget.slice();
        var newarr2 = [];

        for (var nn in newarr3) {
          if (this.newarr[0] != undefined) {
            if (this.newarr[0].id == newarr3[nn].id) {
              // из this.newarr
              newarr2.push({
                id: this.newarr[0].id,
                title: this.newarr[0].title,
                answer1: this.newarr[0].answer1,
                answer2: this.newarr[0].answer2,
                answer3: this.newarr[0].answer3,
                user1: newarr[0].user1,
                avatar1: newarr[0].avatar1,
                user2: newarr[0].user2,
                avatar2: newarr[0].avatar2,
                user3: newarr[0].user3,
                avatar3: newarr[0].avatar3,
                user: newarr[0].user,
                avatar: newarr[0].avatar,
                countanswer: newarr[0].countanswer,
                posthref: newarr[0].posthref
              });
            } else {
              newarr2.push({
                id: newarr3[nn].id,
                title: newarr3[nn].title,
                answer1: newarr3[nn].answer1,
                answer2: newarr3[nn].answer2,
                answer3: newarr3[nn].answer3,
                user1: newarr3[nn].user1,
                avatar1: newarr3[nn].avatar1,
                user2: newarr3[nn].user2,
                avatar2: newarr3[nn].avatar2,
                user3: newarr3[nn].user3,
                avatar3: newarr3[nn].avatar3,
                user: newarr3[nn].user,
                avatar: newarr3[nn].avatar,
                countanswer: newarr3[nn].countanswer,
                posthref: newarr3[nn].posthref
              });
            }
          } else {
            newarr2.push({
              id: newarr3[nn].id,
              title: newarr3[nn].title,
              answer1: newarr3[nn].answer1,
              answer2: newarr3[nn].answer2,
              answer3: newarr3[nn].answer3,
              user1: newarr3[nn].user1,
              avatar1: newarr3[nn].avatar1,
              user2: newarr3[nn].user2,
              avatar2: newarr3[nn].avatar2,
              user3: newarr3[nn].user3,
              avatar3: newarr3[nn].avatar3,
              user: newarr3[nn].user,
              avatar: newarr3[nn].avatar,
              countanswer: newarr3[nn].countanswer,
              posthref: newarr3[nn].posthref
            });
          }
        }
        
        if ((this.counposts>0)&&(newarr2.length>0))
        {           
          const parsed = JSON.stringify(newarr2);
          localStorage.setItem('posts', parsed);   //забросить в хранилище
        }
        this.counposts++;
        return newarr2;
      },
      // сеттер:
      set: function(newValue) {
        this.newarr = newValue.slice();
      }
    }
  },
  methods: {
    addPost(post) {
      this.postsget.push(post);

      let newarr = [];
      let coutime = 1000;

      let current = 1;
      let curanswer = 1;

      //alert(newarr);
      let answerq = this.answers;
      let users = this.users;
      newarr.push(post);
      newarr[0].user =
        users.results[1].name.last + " " + users.results[1].name.ferst;
      newarr[0].avatar = users.results[1].picture.thumbnail;
      coutime = randomInteger(1, 30) * 1000;
      let i = 1;
      setTimeout(function go() {
        var num = randomInteger(2, 100); //1- резерв ведущего
        if ((users.results[num] != undefined) & (answerq[num] != undefined)) {
          switch (curanswer) {
            case 1:
              newarr[0].answer1 = answerq[num].body;
              newarr[0].user1 =
                users.results[num].name.last +
                " " +
                users.results[num].name.ferst;
              newarr[0].avatar1 = users.results[num].picture.thumbnail;

              break;

            case 2:
              newarr[0].answer2 = answerq[num].body;
              newarr[0].user2 =
                users.results[num].name.last +
                " " +
                users.results[num].name.ferst;
              newarr[0].avatar2 = users.results[num].picture.thumbnail;
              break;
            case 3:
              newarr[0].answer3 = answerq[num].body;
              newarr[0].user3 =
                users.results[num].name.last +
                " " +
                users.results[num].name.ferst;
              newarr[0].avatar3 = users.results[num].picture.thumbnail;
              break;
            default:
              newarr[0].answer1 = newarr[0].answer2;
              newarr[0].user1 = newarr[0].user2;
              newarr[0].avatar1 = newarr[0].avatar2;
              newarr[0].answer2 = newarr[0].answer3;
              newarr[0].user2 = newarr[0].user3;
              newarr[0].avatar2 = newarr[0].avatar3;
              newarr[0].answer3 = answerq[num].body;
              newarr[0].user3 =
                users.results[num].name.last +
                " " +
                users.results[num].name.ferst;
              newarr[0].avatar3 = users.results[num].picture.thumbnail;

              break;
          }
          newarr[0].countanswer++;
        }

        coutime = randomInteger(1, 30) * 1000;
        if (i < 100000) {
          //ограничение по кол-ву вызова
          setTimeout(go, coutime);
        }
        i++;
        curanswer++;
        if (curanswer > 3) {
          //curanswer=1;
        }
      }, coutime);
    },
    toggleTheme(to) {
      this.$vuetify.theme.dark = Boolean(to);
      // save localStorage
    },
  },
  components: {
    PostList,
    PostListLike,
    AddPost
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
