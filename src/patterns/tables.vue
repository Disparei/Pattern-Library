<template>
	<h5 class="bold-header">Tables</h5>
  <p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.</p>
  <div class="docs-example">
    <table class="full-width">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dave Gamache</td>
          <td>26</td>
          <td>Male</td>
          <td>San Francisco</td>
        </tr>
        <tr>
          <td>Dwayne Johnson</td>
          <td>42</td>
          <td>Male</td>
          <td>Hayward</td>
        </tr>
      </tbody>
    </table>
  </div>


  <!-- CODE EXAMPLE ———————————————————————————————————————— -->
  <pre class="code-example"><code class="code-example-body prettyprint">
  &lt;table class="full-width"&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
        &lt;th&gt;Sex&lt;/th&gt;
        &lt;th&gt;Location&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Dave Gamache&lt;/td&gt;
        &lt;td&gt;26&lt;/td&gt;
        &lt;td&gt;Male&lt;/td&gt;
        &lt;td&gt;San Francisco&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Dwayne Johnson&lt;/td&gt;
        &lt;td&gt;42&lt;/td&gt;
        &lt;td&gt;Male&lt;/td&gt;
        &lt;td&gt;Hayward&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
  </code>
  </pre>
</template>