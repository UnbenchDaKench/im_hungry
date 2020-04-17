<template>
  <f7-page class="custom-theme" name="favorites">
  <f7-navbar>
    <f7-nav-left>
        <p class="navtitle">Favourites</p>
    </f7-nav-left>
    <f7-nav-right>
      <div class="buttonstyle">
        <f7-button round fill color="black" @click="refresh" align="right">Reset Favourites</f7-button>
      </div>
    </f7-nav-right>
    </f7-navbar>

    <span v-for="(items, index) in favourites" :key="index">
      <span v-if="items.name">
        <RestaurantCard
          :index="index"
          :showImage="false"
          :isLiked="items.isLiked"
          :title="items.name"
          :rating="items.rating"
          :priceRange="items.priceRange"
          :isOpen="items.isOpen"
          :address="items.address"
          :numberOfRating="items.numberOfRating"
          :types="items.types"
        />
      </span>
    </span>
  </f7-page>
</template>

<script>
import RestaurantCard from "./bigRestaurantCard";
export default {
  data(){
    return{
    }
  },
  components: {
    RestaurantCard
  },
  computed: {
    favourites() {
      return this.$store.state.fav;

    }
  },
  methods: {
    refresh(){
      this.$store.dispatch("refresh");
    }
  }
//  methods: {
//    favourites(){
//      this.favourite = this.$store.getters.favouritesArray
//    }
//  },
//   created(){
//     this.favourites()
//   }
};
</script>
<style>
.navtitle{
  font-size: 18pt;
  font-weight: bold;
  padding-left: 4px;

}
.buttonstyle{
   padding-right: 10px;
}
.container {
  display: table;
  width: 100%;
}
.container div {
  display: table-cell;
}
</style>
