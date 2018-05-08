<template>
  <div class="carousel">
    <div class="left" @click="previous">
      <slot name="arrow-left">←</slot>
    </div>
    <div class="slider-wrapper">
      <transition-group tag="div" class="slider" name="slider" :move-class="direction" :style="sliderStyle">
        <div class="page" v-for="chunk in chunks" :key="chunk.id">
          <li class="item" :style="itemStyle" v-for="(item, index) in chunk.items" :key="item.id || index">
            <slot name="item" :item="item"/>
          </li>
        </div>
      </transition-group>
    </div>
    <div class="rigth" @click="next">
      <slot name="arrow-rigth">→</slot>
    </div>
  </div>
</template>

<script>
import { chunk } from '../toolbelt'

export default {
  data () {
    return {
      chunks: [],
      direction: ''
    }
  },
  computed: {
    sliderStyle () {
      const transform = this.chunks.length > 1 && `translate( calc( -100% / ${this.chunks.length} ) )`
      return {
        width: `calc( 100% * ${this.chunks.length} )`,
        transform
      }
    },
    itemStyle () {
      return {
        width: `calc( 100% / ${this.pageSize} )`
      }
    }
  },
  mounted () {
    this.chunks = chunk(this.items, this.pageSize).map((chunk, index) => ({
      items: chunk,
      id: index
    }))
    this.previous()
  },
  methods: {
    next () {
      this.direction = 'slider-next-move'
      const [first, ...rest] = this.chunks
      this.chunks = [...rest, first]
    },
    previous () {
      this.direction = 'slider-previuos-move'
      const last = this.chunks.pop()
      this.chunks = [last, ...this.chunks]
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      default: 3,
      validator: (number) => number > 0
    }
  }
}
</script>

<style lang="scss">
  .carousel {
    width: 100%;
    &> div {
        display: inline-block;
    }
  }

  .slider-wrapper {
    width: calc(100% - 45px);
    overflow: hidden;
  }

  .slider {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
  }
  .page {
    transition: transform .3s ease-in-out;
    justify-content: left;
    display: flex;
    flex-direction: row;
    flex-shrink: 1;
    flex-wrap: nowrap;
    width: 100%;

    .item {
      list-style: none;
    }
  }
  .slider-next-move:last-of-type, .slider-previuos-move:first-of-type {
    opacity: 0;
  }

  .left, .rigth {
    height: 100%;
    width: 100%
  }
</style>
