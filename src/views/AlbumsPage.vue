<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>List Of Albums</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">List Of Albums</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">List Of Albums</strong>
        <ion-list>
          <ion-item v-for="album in getAlbums" :key="album.id" style="margin-bottom: 15px">
            <ion-img slot="start" style="width: 80px"
                     :src="'https://www.ca-scade.com/'+album.cover"
            ></ion-img>
            <ion-label>
              <h3>{{album.name}}</h3>
              <p>{{album.artist}}</p>
            </ion-label>
             {{album.price}}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>

  </ion-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton,
    IonItem, IonLabel, IonList, IonImg } from '@ionic/vue';
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AlbumsPage',
    components: {IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
      IonItem, IonLabel, IonList, IonImg },

    mounted() {
      this.loadAlbums();
    },

    methods:{
      ...mapActions({
        fetchAlbums: 'fetchAlbums'
      }),

      loadAlbums(){
        this.fetchAlbums();
      }
    },

    computed:{
      ...mapGetters({
        getAlbums: 'getAlbums'
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