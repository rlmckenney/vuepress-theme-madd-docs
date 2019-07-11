<template>
  <div class="page-header">
    <div class="module-heading">
      <span class="module-label">{{getModuleLabel()}}</span>
      <span class="module-title">{{$page.frontmatter.moduleTitle || ''}}</span>
    </div>
    <h1>{{$page.frontmatter.pageTitle || $page.title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    getModuleLabel () {
      const {moduleLabel, moduleNumber} = this.$page.frontmatter
      return moduleNumber ? `${moduleLabel || 'Week'} ${moduleNumber}: ` : ''
    }
  }
}
</script>

<style lang="stylus">
.page-header
  .module-heading
    font-size 18px
    // font-family 'Noto Sans HK', sans-serif
    margin-bottom 0
    color $acCharcoal60
    font-weight 400

  .module-label
    text-transform uppercase
    // letter-spacing 0.75px
    font-weight 700
</style>
