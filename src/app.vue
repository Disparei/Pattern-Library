<template>

  <div class="container pd-20 pd-cl-h">
    <div class="col-2 pattern-list">
      <h3>Patterns</h3>
      <ol>
        <li v-for="pattern in patterns">
          <a href="/#!/{{ pattern.link }}">{{ pattern.name }}</a>
        </li>
      </ol>
    </div>
    <section class="col-10">
      <router-view></router-view>
    </section>
  </div>

</template>

<script>
  let patterns = [
    {name: 'Grids', link: 'grid'},
    {name: 'Typography', link: 'typography'},
    {name: 'Buttons', link: 'buttons'},
    {name: 'Forms', link: 'forms'}
  ];
  export default {
    replace: false,
  	data() {
      return {
        patterns: patterns
      }
    }
  }
</script>
