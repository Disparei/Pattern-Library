<template>
  <h5 class="bold-header">Buttons</h5>
  <p>Buttons on Spooky are presented in some different colors and sizes. Button styles are applied to a number of appropriate form elements, but can also be arbitrarily attached to anchors with a <code>.button</code> class. Support for icons (from ionicons) are also provided on the buttons side.</p>
  <div class="center-text">
    <div>
      <a class="button" href="#">Anchor button</a>
      <button>Button element</button>
      <input type="submit" value="submit input">
      <input type="button" value="button input">
    </div>
    <div>
      <a class="button button-primary" href="#">Anchor button</a>
      <button class="button-primary">Button element</button>
      <input class="button-primary" type="submit" value="submit input">
      <input class="button-primary" type="button" value="button input">
    </div>
    <div>
      <a class="button button-red" href="#">Anchor button</a>
      <button class="button-red">Button element</button>
      <input class="button-red" type="submit" value="submit input">
      <input class="button-red" type="button" value="button input">
    </div>
    <div>
      <a class="button button-green" href="#">Anchor button</a>
      <button class="button-green">Button element</button>
      <input class="button-green" type="submit" value="submit input">
      <input class="button-green" type="button" value="button input">
    </div>
    <div>
      <a class="button button-dark" href="#">Anchor button</a>
      <button class="button-dark">Button element</button>
      <input class="button-dark" type="submit" value="submit input">
      <input class="button-dark" type="button" value="button input">
    </div>
    <div>
      <button class="button ion-checkmark-round">Button element</button>
      <button class="button-dark ion-shuffle">Button element</button>
    </div>
    <div>
      <button class="button-primary tag ion-android-close">Button Tag</button>
      <button class="button-primary sm ion-shuffle">Button Small</button>
      <button class="button-primary ion-android-send">Button Regular</button>
      <button class="button-primary lg ion-checkmark-round">Button Large</button>
    </div>
  </div>


  <!-- CODE EXAMPLE ———————————————————————————————————————— -->
  <pre class="code-example">
    <code class="code-example-body prettyprint">
      &lt;!-- Standard buttons --&gt;
      &lt;a class="button" href="#"&gt;Anchor button&lt;/a&gt;
      &lt;button&gt;Button element&lt;/button&gt;
      &lt;input type="submit" value="submit input"&gt;
      &lt;input type="button" value="button input"&gt;

      &lt;!-- Primary buttons --&gt;
      &lt;a class="button button-primary" href="#"&gt;Anchor button&lt;/a&gt;
      &lt;button class="button-primary"&gt;Button element&lt;/button&gt;
      &lt;input class="button-primary" type="submit" value="submit input"&gt;
      &lt;input class="button-primary" type="button" value="button input"&gt;

      &lt;!-- Red buttons --&gt;
      &lt;a class="button button-red" href="#"&gt;Anchor button&lt;/a&gt;
      &lt;button class="button-red"&gt;Button element&lt;/button&gt;
      &lt;input class="button-red" type="submit" value="submit input"&gt;
      &lt;input class="button-red" type="button" value="button input"&gt;

      &lt;!-- Green buttons --&gt;
      &lt;a class="button button-green" href="#"&gt;Anchor button&lt;/a&gt;
      &lt;button class="button-green"&gt;Button element&lt;/button&gt;
      &lt;input class="button-green" type="submit" value="submit input"&gt;
      &lt;input class="button-green" type="button" value="button input"&gt;

      &lt;!-- Icon buttons --&gt;
      &lt;button class="button ion-checkmark-round"&gt;Button element&lt;/button&gt;
      &lt;button class="button-dark ion-shuffle"&gt;Button element&lt;/button&gt;

      &lt;!-- Sized buttons --&gt;
      &lt;button class="button-primary tag ion-android-close"&gt;Button Tag&lt;/button&gt;
      &lt;button class="button-primary sm ion-shuffle"&gt;Button Small&lt;/button&gt;
      &lt;button class="button-primary ion-android-send"&gt;Button Regular&lt;/button&gt;
      &lt;button class="button-primary lg ion-checkmark-round"&gt;Button Large&lt;/button&gt;
    </code>
  </pre>
</template>