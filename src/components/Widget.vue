<template>
  <div>
    <h1>{{title}}</h1>
    <Carousel>
      <div slot-scope="{ prop1 }">
        {{ prop1 }}
      </div>
    </Carousel>
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  components: {
    Carousel
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

<style>

</style>
