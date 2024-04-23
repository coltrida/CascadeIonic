<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Album: {{getAlbumWithSongs.name}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div id="container">
        <ion-list style="margin-top: 20px">
          <ion-item v-for="song in getAlbumWithSongs.songs" :key="song.id">
            <ion-icon size="large" style="margin-right: 10px" ios="ios-person" md="md-person"></ion-icon>
            <ion-label>{{song.name}}</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>

  </ion-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton,
    IonItem, IonLabel, IonList, IonIcon} from '@ionic/vue';
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'UsersPage',
    components: {IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
      IonItem, IonLabel, IonList, IonIcon},

    mounted() {
      this.loadAlbumWithSongs();
    },

    methods:{
      ...mapActions({
        fetchAlbumWithSongs: 'fetchAlbumWithSongs'
      }),

      loadAlbumWithSongs(){
        this.fetchAlbumWithSongs(this.$route.params.idAlbum);
      }
    },

    computed:{
      ...mapGetters({
        getAlbumWithSongs: 'getAlbumWithSongs'
      })
    }
  });
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 5%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>