<template>
  <f7-app :params="f7params">
    <!-- app bar which includes the search bar -->

    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom id="highlight" class="custom-theme">
        <f7-link
          tab-link="#view-search"
          icon-ios="f7:search"
          icon-aurora="f7:search"
          icon-md="f7:search"
          text="Search"
        ></f7-link>
        <f7-link
          tab-link="#view-random"
          tab-link-active
          icon-ios="f7:arrow_2_circlepath_circle_fill"
          icon-aurora="f7:arrow_2_circlepath_circle_fill"
          icon-md="f7:arrow_2_circlepath_circle_fill"

          text="Random"
        ></f7-link>
        <f7-link
          tab-link="#view-favourites"
          icon-ios="f7:star_fill"
        icon-aurora="f7:star_fill"
        icon-md="f7:star_fill"
          text="Favourites"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-search" main tab   url="/search"></f7-view>

      <!-- Random View -->
      <f7-view id="view-random" name="random"  tab-active tab url="/random/"></f7-view>

      <!-- Favourites View -->
      <f7-view id="view-favourites" name="favourites" tab url="/favourites/"></f7-view>
    </f7-views>
  </f7-app>
</template>
<script>
import { Device } from "framework7/framework7-lite.esm.bundle.js";
import cordovaApp from "../js/cordova-app.js";
import routes from "../js/routes.js";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        id: "io.framework7.myapp", // App bundle ID
        name: "ImHungry", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {};
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false

        }
      }
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.geoSuccess,
          this.geoError
        );
      } else {
      }
    },
    geoSuccess(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var location = lat + "," + lng
      console.log(location)
      this.$store.dispatch('getLocation', location)
    },
    geoError() {
      console.log("Geocoder failed.");
    }
  },
  created() {
    this.getLocation();

  },
  mounted() {
    this.$f7ready(f7 => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
};
</script>
<style>

#highlight {
  color: #c23838;
}



</style>
