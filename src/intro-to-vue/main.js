Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="product" />
    </div>
    <div class="product-info">
      <h1 :style="{color: onSale && 'palevioletred'}">{{title}}</h1>
      <p v-show="onSale">On Sale</p>
      <span>
        <p v-if="inStock">In Stock</p>
        <p v-else class="product-out-of-stock">Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
      </span>
      <ul>
        <li v-for="detail in details" :key="detail">{{detail}}</li>
      </ul>
      <div v-for="(variant, index) in variants" :key="variant.variantId">
        <div
          @mouseover="updateProduct(index)"
          class="color-box"
          :style="{
        backgroundColor: variant.variantColor}"
        ></div>
      </div>
      <div>
        <span v-for="size in sizes" :key="size">
          {{size}}
        </span>
      </div>
      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock}"
      >
        Add to Cart
      </button>

      <div class="cart">
        <p>Cart({{cart}})</p>
      </div>
      <button @click="removeFromCart" v-show="cart > 0">
        Remove from Cart
      </button>
    </div>
  </div>
  `,
  data() {
    return {
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
    };
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
    },
    shipping() {
      return this.premium ? "Free" : 2.99;
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

const app = new Vue({
  el: "#app",
  data: {
    premium: false
  }
});
