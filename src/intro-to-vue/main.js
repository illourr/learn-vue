const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    defaultImage: "./assets/vmSocks-green-onWhite.jpg",
    currentImage: null,
    inventory: 1,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      }
    ],
    sizes: ["S", "M", "L"],
    cart: 0
  },
  computed: {
    image() {
      return this.currentImage || this.defaultImage;
    },
    inStock() {
      return this.inventory > 0;
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart > 0 && this.cart--;
    },
    updateProduct(variantImage) {
      this.currentImage = variantImage;
    }
  }
});
