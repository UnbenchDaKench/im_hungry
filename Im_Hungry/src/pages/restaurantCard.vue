<template>
  <div>
   <f7-card class="header">
  <f7-card-header
    class="title"
    align="right"
  >{{title}}</f7-card-header>
  <f7-card-content>
  <div class="container">
    <div>
    <p><b> {{address}}</b></p>
    <p class="rating">Rating: {{rating}}</p>
    <p class="priceRange">Price Level ($ - $$): {{priceRange}}</p>
    </div>
    <div>
    <p v-if="isOpen.open_now" class="isOpen" align="right">Open now</p>
    <p v-else class="isNotOpen" align="right">Closed now</p>
    </div>
    </div>
  </f7-card-content>
  <f7-card-footer class="footer">
    <f7-link @click="getPhoto" popup-open="#infoCard">View more info</f7-link>
  </f7-card-footer>
</f7-card>

  </div>

</template>

<script>
export default {
    computed: {
      sourceImage(){
        this.$store.state.photo
      }
    },
    methods: {
      getPhoto(){
      this.$store.dispatch('getPhoto', "food")

      this.$store.dispatch('currentCard', {
        title: this.title,
        rating: this.rating,
        priceRange: this.priceRange,
        image: this.image,
        isOpen: this.isOpen,
        numberOfRating: this.numberOfRating,
        address: this.address,
        isLiked: this.isLiked,
        types: this.types
      })
      }
    },
    props: {
        title: {
            type: String,
            default: ''
        },

        rating: {
          type: String,
          default: ''
        },
        image: {
          type: String,
          default: ''
        },
        isOpen: {
          type: Boolean,
          default: false
        },
        numberOfRating: {
          type: String,
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
  width:100%;
  display:inline-block;
  color: #009900;
}
.isNotOpen {
  color: #cc0000;
}
.rating {
  color: #000000;
}
.title {
  font-size: 16pt;
  font-weight: bold;
  background: #f1f1f1;
}

.container {
  display: table;
  width: 100%;
}
.container div {
  display: table-cell;
}
.header {
  border-style: solid;
  border-color: rgba(194, 56, 56, 0.3);
  border-width: 2px;
}
.footer {
  background: #f1f1f1;
}
</style>
