import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurant: [],
        location: localStorage.getItem('location') || "45.0900293,-64.3738434",
        radius: localStorage.getItem('radius') || 1,
        fav: JSON.parse(localStorage.getItem('favourites')),
        photo: [],
        reference: "",
        open: true,
        currentRestaurant: {
            name: "",
            isOpen: null,
            rating: "",
            image: "",
            numberOfRating: "",
            address: "",
            priceRange: "",
            isLiked: false,
            types: ""
        },
    },
    getters: {
        favouritesArray: () => {
            return JSON.parse(localStorage.getItem('favourites'))
        }
    },
    mutations: {
        GET_RESTAURANT(state, keyword) {
            state.keyword = keyword
            state.restaurant = []
            var key = 'AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0'
            var radius = state.radius * 1000;
            var sensor = false;
            var types = "restaurant";
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            var url2 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + state.location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;

            axios.get(proxyurl + url2).then(res => {
                if (state.open) {
                    var rest = []
                    rest = res.data.results
                    for (var i = 0; i < rest.length; i++) {
                        if (rest[i].opening_hours.length === 0) {
                            console.log("empty")
                        }
                        else if (rest[i].opening_hours.open_now === true) {
                            state.restaurant.push(rest[i])
                        }
                    }
                }
                else {

                    state.restaurant = res.data.results
                }

            })

        },
        GET_PHOTO(state, keyword) {
            // var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400" + "&photoreference=" + reference + "=&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0"
            var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?" + "input=" + keyword + "&inputtype=textquery&fields=photos,formatted_address,name,rating,price_level,opening_hours,geometry,types&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0"
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.get(proxyurl + url).then(res => {
                console.log(res.data.candidates)
                state.photo = res.data.candidates
                state.reference = state.photo[0].photos[0].photo_reference

            })
        },
        CURRENT_CARD(state, info) {
            var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + state.reference + "&key=AIzaSyCcZ-5hQ41xZ3SyZYBeZWERrGVHKgvkzS0"
            state.currentRestaurant.name = info.title
            state.currentRestaurant.isOpen = info.isOpen
            state.currentRestaurant.image = info.image
            state.currentRestaurant.rating = info.rating
            state.currentRestaurant.numberOfRating = info.numberOfRating
            state.currentRestaurant.address = info.address
            state.currentRestaurant.image = url
            state.currentRestaurant.isLiked = info.isLiked
            state.currentRestaurant.priceRange = info.priceRange
            state.currentRestaurant.types = info.types
        },
        GET_LOCATION(state, location) {
            state.location = location
            localStorage.setItem('location', location)
        },
        CHANGE_RADIUS(state, distance) {
            state.radius = distance
            localStorage.setItem('radius', distance)
        },
        CHANGE_PROVINCE(state, province) {
            state.location = province
            if (state.location === "Alberta") {
                state.location = "51.0478,	-114.0593"
            }
            else if (state.location === "Nova Scotia") {
                state.location = "45.0900293,-64.3738434"

            }
            else if (state.location === "British Columbia") {
                state.location = "49.2827	-123.1171"
            }
            else if (state.location === "Ontario") {
                state.location = "43.6548,-79.3883"
            }
            else if (state.location === "Quebec") {
                state.location = "46.8139, -71.2080"
            }
            else if (state.location === "Manitoba") {
                state.location = "49.8943,	-97.1388"
            }
            else if (state.location === "Saskatchewan") {
                state.location = "50.4499, -104.6112"
            }
            else if (state.location === "Newfoundland") {
                state.location = "47.5641, -52.7087"
            }
            else if (state.location === "PEI") {
                state.location = "46.250000, -63.000000"
            }
            else if (state.location === "New Brunswick") {
                state.location = "	40.4964,	-74.4457"
            }
        },
        LIKE(state) {
            var favourites = []
            state.currentRestaurant.isLiked = !state.currentRestaurant.isLiked
            favourites = JSON.parse(localStorage.getItem('favourites')) || []
            if (state.currentRestaurant.name === "") {
                console.log("")
            }
            else {
                favourites.push(state.currentRestaurant)
                localStorage.setItem('favourites', JSON.stringify(favourites))
                state.fav = favourites


            }
        },
        DISLIKE(state, index) {
            var favourites = []
            favourites = JSON.parse(localStorage.getItem('favourites')) || []
            favourites.splice(index, 1)
            localStorage.setItem('favourites', JSON.stringify(favourites))
            state.fav = favourites
        },
        CHANGE_OPEN(state) {
            state.restaurant = []
            state.open = !state.open
            localStorage.setItem('open', state.open)
        },
        REFRESH(state){
            localStorage.removeItem('favourites')
            state.fav = []
        }
    },
    actions: {
        getRestaurant({ commit }, keyword) {
            commit('GET_RESTAURANT', keyword)
        },
        getPhoto({ commit }, reference) {
            commit('GET_PHOTO', reference)
        },
        currentCard({ commit }, info) {
            commit('CURRENT_CARD', info)
        },
        getLocation({ commit }, location) {
            commit('GET_LOCATION', location)
        },
        changeRadius({ commit }, distance) {
            commit('CHANGE_RADIUS', distance)
        },
        changeProvince({ commit }, province) {
            commit('CHANGE_PROVINCE', province)
        },
        like({ commit }) {
            commit("LIKE")
        },
        dislike({ commit }, index) {
            commit("DISLIKE", index)
        },
        changeOpen({ commit }) {
            commit("CHANGE_OPEN")
        },
        refresh({commit}){
            commit("REFRESH")
        }

    },
})
