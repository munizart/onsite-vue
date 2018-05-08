<template>
  <div>
    <h1>{{title}}</h1>
    <Carousel :items="products" :page-size="1" :style="{ width: '400px' }">
      <div slot="item" slot-scope="{ item }" class="wrapper">
        <Product :name="item.name" :image="item.image" :price="item.price"/>
      </div>
    </Carousel>
  </div>
</template>

<script>
import Carousel from './Carousel'
import Product from './Product'

import products from '../catalog.json'

export default {
  data () {
    return {
      products
    }
  },
  components: {
    Carousel,
    Product
  },
  props: {
    title: {
      type: String,
      required: true
    },
    strategy: {
      type: String,
      validator: (strategyName) => strategyName && /(?:Similar)|(?:FrequentlyBoughtTogether)|(?:EndedUpBuying)|(?:BestSellers)|(?:MostVisited)|(?:Trending)/.test(strategyName),
      required: true
    },
    productFormat: {
      type: String,
      validator: (productFormatType) => /comp(?:act)|(?:lete)/.test(productFormatType),
      default: 'compact'
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 10px;
  }
  .card {
    width: 100%;
    height: 100px;
    background-color: lightgrey;
    border: 1px black solid;
    box-sizing: border-box;
  }
</style>
