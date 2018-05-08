<template>
  <div id="app">
    <Widget title="Teste" strategy="EndedUpBuying"/>
  </div>
</template>

<script>
import catalog from './catalog.json'
import Widget from './components/Widget'

export default {
  data () {
    return {
      catalog
    }
  },
  name: 'App',
  components: {
    Widget
  }
}
</script>

<style>

</style>
