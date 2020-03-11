const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    selectedVariant: 0,
    inventory: 10,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0
      }
    ],
    sizes: ["S", "M", "L"],
    cart: 0
  },
  computed: {
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0;
    },
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart > 0 && this.cart--;
    },
    updateProduct(variantIndex) {
      this.selectedVariant = variantIndex;
    }
  }
});
