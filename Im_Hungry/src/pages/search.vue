<template>
  <f7-page name="search">
    <f7-searchbar
      custom-search
      :disable-button="!$theme.aurora"
      placeholder="Search"
      @input="keyword = $event.target.value"
      @keyup.native.enter="search()"
    ></f7-searchbar>
    <span v-for="(items, index) in restaurant" :key="index">
      <RestaurantCard
        :title="items.name"
        :rating="items.rating"
        :isOpen="items.opening_hours"
        :address="items.vicinity"
        :priceRange="items.price_level"
        :numberOfRating="items.user_ratings_total"
        :types="items.types[0]"
      />
    </span>
    <f7-popup id="infoCard">
      <f7-view>
        <f7-page>
          <f7-navbar :title="currentRestaurant.name">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <bigRestaurantCard
            :isLiked="currentRestaurant.isLiked"
            :isOpen="currentRestaurant.isOpen"
            :rating="currentRestaurant.rating"
            :priceRange="currentRestaurant.priceRange"
            :address="currentRestaurant.address"
            :numberOfRating="currentRestaurant.numberOfRating"
            :types="currentRestaurant.types"
          />
          <f7-block></f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
  </f7-page>
</template>

<script>
import RestaurantCard from "./restaurantCard";
import bigRestaurantCard from "./bigRestaurantCard";
export default {
  components: {
    RestaurantCard,
    bigRestaurantCard
  },
  data() {
    return {
      keyword: "",
      title: ""
    };
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurant;
    },
    currentRestaurant() {
      return this.$store.state.currentRestaurant;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("getRestaurant", this.keyword);
      this.$store.dispatch('getPhoto', this.keyword)

    }
  },
  created() {}
};
</script>
