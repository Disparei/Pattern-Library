<template>

  <div class="container">
    <div class="col-3 pattern-list">
      <h4><a href="#!/">Patterns</a></h4>
      <ul>
        <li v-for="pattern in patterns">
          <a href="#!/{{ pattern.link }}">{{ pattern.name }}</a>
        </li>
      </ul>
    </div>
    <section class="col-9">
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
