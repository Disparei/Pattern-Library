<template>
  <h5 class="bold-header">Typography</h5>
  <p>Type is all set with the <code>rems</code>, so font-sizes and spacial relationships can be responsively sized based on a single <code>&lt;html&gt;</code> font-size property. Out of the box, Spooky never changes the <code>&lt;html&gt;</code> font-size, but it's there in case you need it for your project. All measurements are still base 10 though so, an <code>&lt;h1&gt;</code> with <code>5.0rem</code>font-size just means <code>50px</code>.</p>
  <div class="row">
    <div class="col-12">
      <h1>Heading<span class="heading-font-size"> <code>&lt;h1&gt;</code> 5.0rem</span></h1>
      <h2>Heading<span class="heading-font-size"> <code>&lt;h2&gt;</code> 4.2rem</span></h2>
      <h3>Heading<span class="heading-font-size"> <code>&lt;h3&gt;</code> 3.6rem</span></h3>
      <h4>Heading<span class="heading-font-size"> <code>&lt;h4&gt;</code> 3.0rem</span></h4>
      <h5>Heading<span class="heading-font-size"> <code>&lt;h5&gt;</code> 2.4rem</span></h5>
    </div>
    <div class="col-12 pd-20 pd-cl-h">
      <p><strong>The typography base</strong> is <a href="http://www.google.com/fonts/specimen/Raleway">Raleway</a> served by Google, set at 15rem (15px) over a 1.6 line height (24px). Other type basics like <a href="#">anchors</a>, <strong>strong</strong>, <em>emphasis</em>, and <u>underline</u> are all obviously included.</p>
      <p><strong>Headings</strong> create a family of distinct sizes each with specific <code>letter-spacing</code>, <code>line-height</code>, and <code>margins</code>.</p>
    </div>
  </div>


  <!-- CODE EXAMPLE ———————————————————————————————————————— -->
  <pre class="code-example">
    <code class="code-example-body prettyprint">
  &lt;!-- Standard Headings --&gt;
  &lt;h1&gt;Heading&lt;/h1&gt;
  &lt;h2&gt;Heading&lt;/h2&gt;
  &lt;h3&gt;Heading&lt;/h3&gt;
  &lt;h4&gt;Heading&lt;/h4&gt;
  &lt;h5&gt;Heading&lt;/h5&gt;

  &lt;!-- Base type size --&gt;
  &lt;p&gt;The base type is 15px over 1.6 line height (24px)&lt;/p&gt;

  &lt;!-- Other styled text tags --&gt;
  &lt;strong&gt;Bolded&lt;/strong&gt;
  &lt;em&gt;Italicized&lt;/em&gt;
  &lt;a&gt;Colored&lt;/a&gt;
  &lt;u&gt;Underlined&lt;/u&gt;
    </code>
  </pre>
</template>