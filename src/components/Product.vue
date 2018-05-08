<template>
  <div class="product">
    <div class="product-image">
      <img :src="image">
    </div>
    <div class="product-content">
      <span class="product-title">{{name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: Boolean
    },
    image: {
      type: String,
      required: true,
      validator: (image) => /^(?:https?)?\/\//.test(image)
    },
    price: {
      type: Number,
      required: true
    },
    oldPrice: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {
    width: 300px;
    height: 300px;
  }
</style>
