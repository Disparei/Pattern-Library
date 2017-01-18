<template>
  <h5 class="bold-header">Media queries</h5>
  <p>Spooky uses media queries to serve its scalable grid, but also has a list of queries for convenience of styling your site across devices. The queries are mobile-first, meaning they target <code>min-width</code>. Mobile-first queries are how Spooky's grid is built and is the preferrable method of organizing CSS. It means all styles outside of a query apply to all devices, then larger devices are targeted for enhancement. This prevents small devices from having to parse tons of unused CSS. The sizes for the queries are:</p>
  <div class="row">
    <div class="col-6">
      <ul>
        <li><strong>Desktop HD</strong>: 1200px</li>
        <li><strong>Desktop</strong>: 1000px</li>
      </ul>
    </div>
    <div class="col-6">
      <ul>
        <li><strong>Phablet</strong>: 850px</li>
        <li><strong>Mobile</strong>: 400px</li>
      </ul>
    </div>
  </div>


  <!-- CODE EXAMPLE ———————————————————————————————————————— -->
  <pre class="code-example">
    <code class="code-example-body prettyprint">
  /* Mobile first queries */

  /* Larger than mobile */
  @media (min-width: 400px) {}

  /* Larger than phablet */
  @media (min-width: 850px) {}

  /* Larger than desktop */
  @media (min-width: 1000px) {}

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {}
    </code>
  </pre>
</template>