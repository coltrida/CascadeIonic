<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div id="container">
        <ion-list style="margin-top: 20px">
          <ion-item v-for="album in getRecentlyAlbumsAdded.albums" :key="album.id">
            <ion-img slot="start" style="width: 80px"
                     :src="album.imageUri"
            ></ion-img>
            <ion-label>
              <h3>{{album.name}}</h3>
              <p>{{album.artistHeadline}}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>

  </ion-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonItem, IonLabel, IonList, IonImg} from '@ionic/vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  components: {IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
    IonItem, IonLabel, IonList,IonImg},

  mounted() {
    this.loadRecentlyAlbumsAdded();
  },

  methods:{
    ...mapActions({
      fetchRecentlyAlbumsAdded: 'fetchRecentlyAlbumsAdded'
    }),

    loadRecentlyAlbumsAdded(){
      this.fetchRecentlyAlbumsAdded();
    }
  },

  computed:{
    ...mapGetters({
      getRecentlyAlbumsAdded: 'getRecentlyAlbumsAdded'
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