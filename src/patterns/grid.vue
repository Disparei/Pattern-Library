<template>
  <h5 class="bold-header">The grid</h5>
  <p>The grid is a <u>12-column fluid grid with a max width of 960px</u>, that shrinks with the browser/device at smaller sizes. The max width can be changed with one line of CSS and all columns will resize accordingly. The syntax is simple and it makes coding responsive much easier. Go ahead, resize the browser. </p>

  <div class="example-grid container full-width ma-40 ma-cl-h">
    <div class="row">
      <div class="col-1">.col-1</div>
      <div class="col-11">.col-11</div>
    </div>
    <div class="row">
      <div class="col-2">.col-2</div>
      <div class="col-10">.col-10</div>
    </div>
    <div class="row">
      <div class="col-3">.col-3</div>
      <div class="col-9">.col-9</div>
    </div>
    <div class="row">
      <div class="col-4">.col-4</div>
      <div class="col-8">.col-8</div>
    </div>
    <div class="row">
      <div class="col-5">.col-5</div>
      <div class="col-7">.col-7</div>
    </div>
    <div class="row">
      <div class="col-6">.col-6</div>
      <div class="col-6">.col-6</div>
    </div>
    <div class="row">
      <div class="col-7">.col-7</div>
      <div class="col-5">.col-5</div>
    </div>
    <div class="row">
      <div class="col-8">.col-8</div>
      <div class="col-4">.col-4</div>
    </div>
    <div class="row">
      <div class="col-9">.col-9</div>
      <div class="col-3">.col-3</div>
    </div>
    <div class="row">
      <div class="col-10">.col-10</div>
      <div class="col-2">.col-2</div>
    </div>
    <div class="row">
      <div class="col-11">.col-11</div>
      <div class="col-1">.col-1</div>
    </div>
    <div class="row">
      <div class="col-12">.col-12</div>
    </div>
    <div class="row">
      <div class="col-4 col-offset-4">.col-4 .col-offset-4</div>
    </div>
  </div>


  <!-- CODE EXAMPLE ———————————————————————————————————————— -->
  <pre class="ma-20 ma-cl-h">
    <code>
    &lt;!-- .container is main centered wrapper --&gt;
    &lt;div class="container full-width"&gt;

      &lt;!-- columns should be the immediate child of a .row --&gt;
      &lt;div class="row"&gt;
        &lt;div class="col-1"&gt;One&lt;/div&gt;
        &lt;div class="col-11"&gt;Eleven&lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- just use a col- and class the column number --&gt;
      &lt;div class="row"&gt;
        &lt;div class="col-2"&gt;Two&lt;/div&gt;
        &lt;div class="col-10"&gt;Ten&lt;/div&gt;
      &lt;/div&gt;

    &lt;/div&gt;

    &lt;!-- Note: columns can be nested, but it's not recommended since Spooky's
    grid has %-based gutters, meaning a nested grid results in variable with gutters (which can end up being *really* 
    small on certain browser/device sizes) --&gt;
    </code>
  </pre>
</template>