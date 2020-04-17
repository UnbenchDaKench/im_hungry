<<<<<<< HEAD
<template>
  <f7-page class="custom-theme" name="Im Hungry">
    <f7-navbar color-theme-orange :sliding="false">
      <f7-nav-left>
        <!-- <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link> -->
      </f7-nav-left>
      <f7-nav-right>
        <f7-link
          icon-="f7:slider_horizontal_3"
          icon-aurora="f7:menu"
          icon-md="material:tune"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>
      <div class>
        <img
          data-src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/89260379_482286959323660_881356284463415296_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_oc=AQkrfjWojYeVeXowiy9BXAKC6H0HO6yPv8TPPYq9U_AYsuAF-IPM5SvdtDHpayef128&_nc_ht=scontent-lga3-1.xx&oh=ec7f66bedd8fe359ac0afabe1ef2fc69&oe=5E92B02C"
          align="middle"
          class="lazy logo-lazy"/>
      </div>
    </f7-block>

    <f7-block align="middle">
      <div v-if="random" class="loadingio-spinner-wedges-cq9io0l9d1w">
        <div class="ldio-0mpcmwxpqf6n">
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="loadingio-spinner-wedges-frjxjngf7rn">
        <div class="ldio-8t4lac7l5q8">
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </f7-block>

    <f7-block inset>
      <f7-block-title class=".f7-block"></f7-block-title>
      <f7-button round fill color="black" @click="randomize">Can't Decide? Press Me! </f7-button>
    </f7-block>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Your restaurant is ...">
            <f7-nav-right>
              <f7-link popup-close @click="random = false">Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <!-- <transition name="router-anim" enter-active-class="animated bounceInDown"> -->
            <RestaurantCard
              :title="name"
              :rating="ratings"
              :isOpen="isOpen"
              :numberOfRating="noOfRatings"
              :address="address"
              :priceRange="priceRange"
              :isLiked="isLiked"
              :types="types"
            />
            <!-- </transition> -->
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-panel right reveal class="custom-theme">
      <f7-view>
        <f7-page>
          <f7-navbar class="custom-theme" title="Filters"></f7-navbar>
          <f7-block>
            <f7-list>
              <f7-block-title>
                Distance:
                <span>{{distance}}</span>
                km
              </f7-block-title>
              <f7-list simple-list>
                <f7-list-item>
                  <f7-list-item-cell class="flex-shrink-3">
                    <f7-range
                      :min="0"
                      :max="50"
                      :step="1"
                      :scale="true"
                      :scaleSteps="5"
                      :scaleSubSteps="4"
                      :value="distance"
                      @range:change="onDistanceChange"
                    ></f7-range>
                  </f7-list-item-cell>
                  <f7-list-item-cell class="width-auto flex-shrink-0">
                    <!--<f7-icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up"></f7-icon>-->
                  </f7-list-item-cell>
                </f7-list-item>
              </f7-list>

              <f7-block-title>Location:</f7-block-title>
              <f7-list-item
                title="Selected"
                smart-select
                :smart-select-params="{openIn: 'popover'}"
              >
                <select name="Provinces" id="provinces" @change="checkProvinces">
                  <option value="Nova Scotia" selected>Nova Scotia</option>
                  <option value="Alberta">Alberta</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Quebec">Quebec</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="PEI">Prince Edward Island</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Newfoundland">Newfoundland</option>
                </select>
              </f7-list-item>

              <!--Open Now-->
              <f7-list>
                <f7-list-item @change="openNow" checked checkbox title="Open now" name="Open now"></f7-list-item>
              </f7-list>

              <!--Show me:-->
              <f7-block-title>Show me:</f7-block-title>
              <f7-list id="genreSelect">
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="food"
                  title="All"
                  name="genre"
                  checked>
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Breakfast"
                  title="Breakfast"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Canadian"
                  title="Canadian"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio value="Chinese"
                  title="Chinese"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio value="Coffee"
                  title="Coffee"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Desserts"
                  title="Desserts"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="European"
                  title="European"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Fast Food"
                  title="Fast Food"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="French"
                  title="French"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Grill"
                  title="Grill"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="International"
                  title="International"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Italian"
                  title="Italian"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Japanese"
                  title="Japanese"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Lebanese"
                  title="Lebanese"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Nigerian"
                  title="Nigerian"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Pizza"
                  title="Pizza"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Sandwich"
                  title="Sandwich"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Steak"
                  title="Steak"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Thai"
                  title="Thai"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio value="Vegetarian"
                  title="Vegetarian"
                  name="genre">
                </f7-list-item>
              </f7-list>
            </f7-list>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-page>
</template>

<script>
import RestaurantCard from "./bigRestaurantCard";
export default {
  data() {
    return {
      keyword: "food",
      randomNum: "",
      name: "",
      ratings: "",
      isOpen: null,
      noOfRatings: "",
      address: "",
      distance: this.$store.state.radius,
      selected: "",
      selectedGenre: "",
      open: this.$store.state.open,
      priceRange: "",
      random: false,
      isLiked: this.$store.state.currentRestaurant.isLiked,
      types: ""
    };
  },
  components: {
    RestaurantCard
  },
  methods: {
    selectGenre(e) {
      if (e.target.checked) {
        this.keyword = e.target.value;
        this.$store.dispatch("getRestaurant", this.keyword);
      }
    },
    openNow(e) {
      if (e.target.checked) {
        this.$store.dispatch("changeOpen").then(() => {
          this.$store.dispatch("getRestaurant", this.keyword);
        });
      } else {
        this.$store.dispatch("changeOpen").then(() => {
          this.$store.dispatch("getRestaurant", this.keyword);
        });
      }
    },
    checkProvinces() {
      var id = document.getElementById("provinces");
      this.selected = id.options[id.selectedIndex].value;
      this.$store.dispatch("changeProvince", this.selected);
      this.$store.dispatch("getRestaurant", this.keyword);
    },
    randomize() {
      this.random = true;
      setTimeout(() => {
        this.$f7.popup.open("#my-popup");
      }, 1500);

      var length;
      length = this.restaurant.length;
      length++;
      this.randomNum = Math.floor(Math.random() * length);
      this.name = this.restaurant[this.randomNum].name;
      this.ratings = this.restaurant[this.randomNum].rating;
      this.isOpen = this.restaurant[this.randomNum].opening_hours;
      this.noOfRatings = this.restaurant[this.randomNum].user_ratings_total;
      this.address = this.restaurant[this.randomNum].vicinity;
      this.priceRange = this.restaurant[this.randomNum].price_level;
      this.types = this.restaurant[this.randomNum].types[0];
      this.$store.dispatch("currentCard", {
        title: this.name,
        rating: this.ratings,
        image: this.image,
        isOpen: this.isOpen,
        numberOfRating: this.noOfRatings,
        priceRange: this.priceRange,
        address: this.address,
        types: this.types,
      });
    },
    onDistanceChange(value) {
      this.distance = value;
      this.$store.dispatch("changeRadius", this.distance);
    }
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurant;
    }
  },
  created() {
    this.$store.dispatch("getRestaurant", this.keyword);
  }
};
</script>



<style type="text/css">
@keyframes ldio-0mpcmwxpqf6n {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-0mpcmwxpqf6n > div > div {
  transform-origin: 150.5px 150.5px;
  animation: ldio-0mpcmwxpqf6n 2.380952380952381s linear infinite;
  opacity: 0.78;
}
.logo-lazy {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.ldio-0mpcmwxpqf6n > div > div > div {
  position: absolute;
  left: 48.16px;
  top: 48.16px;
  width: 102.33999999999999px;
  height: 102.33999999999999px;
  border-radius: 102.33999999999999px 0 0 0;
  transform-origin: 150.5px 150.5px;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(1) {
  animation-duration: 0.5952380952380952s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(1) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-0mpcmwxpqf6n > div div:nth-child(2) {
  animation-duration: 0.7936507936507936s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(2) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.ldio-0mpcmwxpqf6n > div div:nth-child(3) {
  animation-duration: 1.1904761904761905s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(3) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-0mpcmwxpqf6n > div div:nth-child(4) {
  animation-duration: 2.380952380952381s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(4) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-cq9io0l9d1w {
  width: 301px;
  height: 301px;
  display: inline-block;
  overflow: hidden;
}
.ldio-0mpcmwxpqf6n {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-0mpcmwxpqf6n div {
  box-sizing: content-box;
}
@keyframes ldio-8t4lac7l5q8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-8t4lac7l5q8 > div > div {
  transform-origin: 150.5px 150.5px;
  animation: ldio-8t4lac7l5q8 16.666666666666664s linear infinite;
  opacity: 0.78;
}
.ldio-8t4lac7l5q8 > div > div > div {
  position: absolute;
  left: 48.16px;
  top: 48.16px;
  width: 102.33999999999999px;
  height: 102.33999999999999px;
  border-radius: 102.33999999999999px 0 0 0;
  transform-origin: 150.5px 150.5px;
}
.ldio-8t4lac7l5q8 > div div:nth-child(1) {
  animation-duration: 4.166666666666666s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(1) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-8t4lac7l5q8 > div div:nth-child(2) {
  animation-duration: 5.5555555555555545s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(2) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.ldio-8t4lac7l5q8 > div div:nth-child(3) {
  animation-duration: 8.333333333333332s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(3) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-8t4lac7l5q8 > div div:nth-child(4) {
  animation-duration: 16.666666666666664s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(4) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-frjxjngf7rn {
  width: 301px;
  height: 301px;
  display: inline-block;
  overflow: hidden;
}
.ldio-8t4lac7l5q8 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-8t4lac7l5q8 div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
/* generated by https://loading.io/ */
</style>
=======
<template>
  <f7-page class="custom-theme" name="Im Hungry">
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <!-- <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link> -->
      </f7-nav-left>
      <f7-nav-right>
        <f7-link
          icon-="f7:slider_horizontal_3"
          icon-aurora="f7:menu"
          icon-md="material:tune"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>
      <div class>
        <img
          data-src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/89159912_209148447132268_566488607041257472_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_oc=AQkr8uiqf_YN36c0f0ljqrNuMzfbBVubMcWYM5Z-cIkVEL6Rfz8F-IrFZab6St-FK_Q&_nc_ht=scontent-lga3-1.xx&oh=48132ff164b2c377ebd9287a6c11cb1a&oe=5E8AB671"
          align="middle"
          class="lazy logo-lazy"/>
      </div>
    </f7-block>

    <f7-block align="middle">
      <div v-if="random" class="loadingio-spinner-wedges-cq9io0l9d1w">
        <div class="ldio-0mpcmwxpqf6n">
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="loadingio-spinner-wedges-frjxjngf7rn">
        <div class="ldio-8t4lac7l5q8">
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </f7-block>

    <f7-block inset>
      <f7-block-title class=".f7-block"></f7-block-title>
      <f7-button round fill @click="randomize">Can't Decide? Press Me! </f7-button>
    </f7-block>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar :title="name">
            <f7-nav-right>
              <f7-link popup-close @click="random = false">Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <!-- <transition name="router-anim" enter-active-class="animated bounceInDown"> -->
            <RestaurantCard
              :title="name"
              :rating="ratings"
              :isOpen="isOpen"
              :numberOfRating="noOfRatings"
              :address="address"
              :priceRange="priceRange"
              :isLiked="isLiked"
              :types="types"
            />
            <!-- </transition> -->
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-panel right reveal custom-theme>
      <f7-view>
        <f7-page>
          <f7-navbar title="Filters"></f7-navbar>
          <f7-block>
            <f7-list>
              <f7-block-title>
                Distance:
                <span>{{distance}}</span>
                km
              </f7-block-title>
              <f7-list simple-list>
                <f7-list-item>
                  <f7-list-item-cell class="flex-shrink-3">
                    <f7-range
                      :min="0"
                      :max="50"
                      :step="1"
                      :scale="true"
                      :scaleSteps="5"
                      :scaleSubSteps="4"
                      :value="distance"
                      @range:change="onDistanceChange"
                    ></f7-range>
                  </f7-list-item-cell>
                  <f7-list-item-cell class="width-auto flex-shrink-0">
                    <!--<f7-icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up"></f7-icon>-->
                  </f7-list-item-cell>
                </f7-list-item>
              </f7-list>

              <f7-block-title>Location:</f7-block-title>
              <f7-list-item
                title="Selected"
                smart-select
                :smart-select-params="{openIn: 'popover'}"
              >
                <select name="Provinces" id="provinces" @change="checkProvinces">
                  <option value="Nova Scotia" selected>Nova Scotia</option>
                  <option value="Alberta">Alberta</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Quebec">Quebec</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="PEI">Prince Edward Island</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Newfoundland">Newfoundland</option>
                </select>
              </f7-list-item>

              <!--Open Now-->
              <f7-list>
                <f7-list-item @change="openNow" checked checkbox title="Open now" name="Open now"></f7-list-item>
              </f7-list>

              <!--Show me:-->
              <f7-list id="genreSelect">
                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="food"
                  title="All"
                  name="genre"
                  checked>
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Bar Food"
                  title="Bar Food"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Breakfast"
                  title="Breakfast"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Canadian"
                  title="Canadian"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio value="Chinese"
                  title="Chinese"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio value="Coffee"
                  title="Coffee"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Desserts"
                  title="Desserts"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="European"
                  title="European"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Fast Food"
                  title="Fast Food"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="French"
                  title="French"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Grill"
                  title="Grill"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="International"
                  title="International"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Italian"
                  title="Italian"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Japanese"
                  title="Japanese"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Lebanese"
                  title="Lebanese"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Nigerian"
                  title="Nigerian"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Sandwich"
                  title="Sandwich"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Steak"
                  title="Steak"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio
                  value="Thai"
                  title="Thai"
                  name="genre">
                </f7-list-item>

                <f7-list-item
                  @change="selectGenre"
                  radio value="Vegetarian"
                  title="Vegetarian"
                  name="genre">
                </f7-list-item>
              </f7-list>
            </f7-list>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-page>
</template>

<script>
import RestaurantCard from "./bigRestaurantCard";
export default {
  data() {
    return {
      keyword: "food",
      randomNum: "",
      name: "",
      ratings: "",
      isOpen: null,
      noOfRatings: "",
      address: "",
      distance: this.$store.state.radius,
      selected: "",
      selectedGenre: "",
      open: this.$store.state.open,
      priceRange: "",
      random: false,
      isLiked: this.$store.state.currentRestaurant.isLiked,
      types: ""
    };
  },
  components: {
    RestaurantCard
  },
  methods: {
    selectGenre(e) {
      if (e.target.checked) {
        this.keyword = e.target.value;
        this.$store.dispatch("getRestaurant", this.keyword);
      }
    },
    openNow(e) {
      if (e.target.checked) {
        this.$store.dispatch("changeOpen").then(() => {
          this.$store.dispatch("getRestaurant", this.keyword);
        });
      } else {
        this.$store.dispatch("changeOpen").then(() => {
          this.$store.dispatch("getRestaurant", this.keyword);
        });
      }
    },
    checkProvinces() {
      var id = document.getElementById("provinces");
      this.selected = id.options[id.selectedIndex].value;
      this.$store.dispatch("changeProvince", this.selected);
      this.$store.dispatch("getRestaurant", this.keyword);
    },
    randomize() {
      this.random = true;
      setTimeout(() => {
        this.$f7.popup.open("#my-popup");
      }, 1500);

      var length;
      length = this.restaurant.length;
      length++;
      this.randomNum = Math.floor(Math.random() * length);
      this.name = this.restaurant[this.randomNum].name;
      this.ratings = this.restaurant[this.randomNum].rating;
      this.isOpen = this.restaurant[this.randomNum].opening_hours;
      this.noOfRatings = this.restaurant[this.randomNum].user_ratings_total;
      this.address = this.restaurant[this.randomNum].vicinity;
      this.priceRange = this.restaurant[this.randomNum].price_level;
      this.types = this.restaurant[this.randomNum].types[0];
      this.$store.dispatch("currentCard", {
        title: this.name,
        rating: this.ratings,
        image: this.image,
        isOpen: this.isOpen,
        numberOfRating: this.noOfRatings,
        priceRange: this.priceRange,
        address: this.address,
        types: this.types,
      });
    },
    onDistanceChange(value) {
      this.distance = value;
      this.$store.dispatch("changeRadius", this.distance);
    }
  },
  computed: {
    restaurant() {
      return this.$store.state.restaurant;
    }
  },
  created() {
    this.$store.dispatch("getRestaurant", this.keyword);
  }
};
</script>



<style type="text/css">
@keyframes ldio-0mpcmwxpqf6n {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-0mpcmwxpqf6n > div > div {
  transform-origin: 150.5px 150.5px;
  animation: ldio-0mpcmwxpqf6n 2.380952380952381s linear infinite;
  opacity: 0.78;
}
.logo-lazy {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.ldio-0mpcmwxpqf6n > div > div > div {
  position: absolute;
  left: 48.16px;
  top: 48.16px;
  width: 102.33999999999999px;
  height: 102.33999999999999px;
  border-radius: 102.33999999999999px 0 0 0;
  transform-origin: 150.5px 150.5px;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(1) {
  animation-duration: 0.5952380952380952s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(1) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-0mpcmwxpqf6n > div div:nth-child(2) {
  animation-duration: 0.7936507936507936s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(2) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.ldio-0mpcmwxpqf6n > div div:nth-child(3) {
  animation-duration: 1.1904761904761905s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(3) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-0mpcmwxpqf6n > div div:nth-child(4) {
  animation-duration: 2.380952380952381s;
}
.ldio-0mpcmwxpqf6n > div div:nth-child(4) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-cq9io0l9d1w {
  width: 301px;
  height: 301px;
  display: inline-block;
  overflow: hidden;
}
.ldio-0mpcmwxpqf6n {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-0mpcmwxpqf6n div {
  box-sizing: content-box;
}
@keyframes ldio-8t4lac7l5q8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-8t4lac7l5q8 > div > div {
  transform-origin: 150.5px 150.5px;
  animation: ldio-8t4lac7l5q8 16.666666666666664s linear infinite;
  opacity: 0.78;
}
.ldio-8t4lac7l5q8 > div > div > div {
  position: absolute;
  left: 48.16px;
  top: 48.16px;
  width: 102.33999999999999px;
  height: 102.33999999999999px;
  border-radius: 102.33999999999999px 0 0 0;
  transform-origin: 150.5px 150.5px;
}
.ldio-8t4lac7l5q8 > div div:nth-child(1) {
  animation-duration: 4.166666666666666s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(1) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-8t4lac7l5q8 > div div:nth-child(2) {
  animation-duration: 5.5555555555555545s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(2) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.ldio-8t4lac7l5q8 > div div:nth-child(3) {
  animation-duration: 8.333333333333332s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(3) > div {
  background: #c23838;
  transform: rotate(0deg);
}
.ldio-8t4lac7l5q8 > div div:nth-child(4) {
  animation-duration: 16.666666666666664s;
}
.ldio-8t4lac7l5q8 > div div:nth-child(4) > div {
  background: #ce6260;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-frjxjngf7rn {
  width: 301px;
  height: 301px;
  display: inline-block;
  overflow: hidden;
}
.ldio-8t4lac7l5q8 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-8t4lac7l5q8 div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
/* generated by https://loading.io/ */
</style>
>>>>>>> 2cef80f2b8b878779f6d87976fa60f8c7b44857c
