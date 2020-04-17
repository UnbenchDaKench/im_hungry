<template>
  <div>
   <f7-card class="header">
  <f7-card-header
    class="title"
    valign="bottom"
  >{{title}}</f7-card-header>
  <f7-card-content>
    <div v-if="showImage" class=""><img :src="imageUrl" width="100%" height="100"/></div>
    <div class="container">
    <div>
    <p><b> {{address}}</b></p>
    <p class="rating">Rating: {{rating}}</p>
    <p class="numberRating">Number of Ratings: {{numberOfRating}}</p>
    <p class="priceRange">Price Level ($ - $$): {{priceRange}}</p>
    <p class="types">Atmosphere: {{types}}</p>
    </div>
    <div>
    <p v-if="isOpen.open_now" class="isOpen" align="right">Open now</p>
    <p v-else class="isNotOpen">Closed now</p>
    </div>
    </div>
  </f7-card-content>
  <f7-card-footer class="footer">
    <f7-link v-if="isLiked" @click="removeFromFavourites" id="favStar"
        icon-ios="f7:star_fill"
        icon-aurora="f7:star_fill"
        icon-md="f7:star_fill"
      ></f7-link>
      <f7-link v-else @click="addToFavourites" id="favStarFilled"
        icon-ios="f7:star"
        icon-aurora="f7:star"
        icon-md="f7:star"
      ></f7-link>
  </f7-card-footer>
</f7-card>
  </div>

</template>

<script>
export default {
  data(){
    return{
    }
  },
    computed: {
      sourceImage(){
        this.$store.state.photo
      }
    },
    methods: {
      getPhoto(){
      this.$store.dispatch('getPhoto', this.title)
      },
      addToFavourites(){
      this.$store.dispatch('like')
      },
      removeFromFavourites(){
        this.isLiked = false
      this.$store.dispatch('dislike', this.index)
       this.$f7.views.main.router.back();

      }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        rating: {
          type: Number,
          default: ''
        },
        isLiked: {
          type: Boolean,
          default: ''
        },
        imageUrl: {
          type: String,
          default: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/89256656_485829695419061_4604469232124559360_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_oc=AQmfn7TUhLJcaQU55zX-VH3UJ9m7UbgZizZI7sC7_8hrTJo277Wof-2qk4xnFuoeQB0&_nc_ht=scontent-lga3-1.xx&oh=121f86689b2cbea2361c22597b89de79&oe=5E94DAE7'
        },
        isLiked: {
          type: Boolean,
          default: false
        },
        index: {
          type: Number,
        },
         showImage: {
          type: Boolean,
          default: true
        },
        isOpen: {
          type: Boolean,
          default: false
        },
        numberOfRating: {
          type: Number,
          default: ''
        },
        address: {
          type: String,
          default: ''
        },
        priceRange: {
          type: String,
          default: 'Data not available'
        },
        types: {
          type: [],
          default: ''
        }

    }
}
</script>
<style>
.isOpen {
  color: #009900;
}
.isNotOpen {
  color: #cc0000;
}
.rating {
  color: #ff9933
}
.title {
  font-size: 16pt;
  font-weight: bold
}
#favStar{
  color: #FCDD0A
}
#favStarFilled{
  color: #FCDD0A
}
.container {
  display: table;
  width: 100%;
}
.container div {
  display: table-cell;
}
.footer{
  background: #f1f1f1;
}


</style>
