<template>
	<h5 class="bold-header">Forms</h5>
  <p>Forms are a huge pain, but hopefully these styles make it a bit easier. All inputs, select, and buttons are normalized for a common height cross-browser so inputs can be stacked or placed alongside each other. The're some utilities classes to be applied on forms to, like the <code>.clear</code>, that keeps only the bottom bar of the element, and <code>.lg</code> and <code>.sm</code> that changes the size of the element.</p>
  <div class="docs-example docs-example-forms">
    <form>
      <div class="row">
        <div class="col-12 pd-5 pd-cl-v">
          <input class="full-width lg clear center-text" type="text" placeholder="Project Name" id="exampleProjectNameInput">
        </div>
      </div>
      <div class="row">
        <div class="col-6 pd-5 pd-cl-v">
          <label for="exampleEmailInput">First name</label>
          <input class="full-width clear" type="text" placeholder="John" id="exampleNameFirstInput">
        </div>
        <div class="col-6 pd-5 pd-cl-v">
          <label for="exampleEmailInput">Last name</label>
          <input class="full-width clear" type="text" placeholder="Snow" id="exampleNameLastInput">
        </div>
      </div>
      <div class="row">
        <div class="col-6 pd-5 pd-cl-v">
          <label for="exampleEmailInput">Your email</label>
          <input class="full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
        </div>
        <div class="col-6 pd-5 pd-cl-v">
          <label for="exampleRecipientInput">Reason for contacting</label>
          <select class="full-width" id="exampleRecipientInput">
            <option value="Option 1">Questions</option>
            <option value="Option 2">Admiration</option>
            <option value="Option 3">Can I get your number?</option>
          </select>
        </div>
      </div>
      <div class="col-12 pd-5 pd-cl-v">
        <label for="exampleMessage">Message</label>
        <textarea class="full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
        <label class="example-send-yourself-copy">
          <input type="checkbox">
          <span class="label-body">Send a copy to yourself</span>
        </label>
        <input class="button-primary" type="submit" value="Submit">
      </div>
    </form>
  </div>


  <!-- CODE EXAMPLE ———————————————————————————————————————— -->
  <pre class="code-example"><code class="code-example-body prettyprint">
  &lt;!-- The above form looks like this --&gt;
  &lt;form&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-12 pd-5 pd-cl-v"&gt;
        &lt;input class="full-width lg clear center-text" type="text" placeholder="Project Name" id="exampleProjectNameInput"&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-6 pd-5 pd-cl-v"&gt;
        &lt;label for="exampleEmailInput"&gt;First name&lt;/label&gt;
        &lt;input class="full-width clear" type="text" placeholder="John" id="exampleNameFirstInput"&gt;
      &lt;/div&gt;
      &lt;div class="col-6 pd-5 pd-cl-v"&gt;
        &lt;label for="exampleEmailInput"&gt;Last name&lt;/label&gt;
        &lt;input class="full-width clear" type="text" placeholder="Snow" id="exampleNameLastInput"&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-6"&gt;
        &lt;label for="exampleEmailInput"&gt;Your email&lt;/label&gt;
        &lt;input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"&gt;
      &lt;/div&gt;
      &lt;div class="col-6"&gt;
        &lt;label for="exampleRecipientInput"&gt;Reason for contacting&lt;/label&gt;
        &lt;select class="u-full-width" id="exampleRecipientInput"&gt;
          &lt;option value="Option 1"&gt;Questions&lt;/option&gt;
          &lt;option value="Option 2"&gt;Admiration&lt;/option&gt;
          &lt;option value="Option 3"&gt;Can I get your number?&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row col-12"&gt;
      &lt;label for="exampleMessage"&gt;Message&lt;/label&gt;
      &lt;textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"&gt;&lt;/textarea&gt;
      &lt;label class="example-send-yourself-copy"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span class="label-body"&gt;Send a copy to yourself&lt;/span&gt;
      &lt;/label&gt;
      &lt;input class="button-primary" type="submit" value="Submit"&gt;
    &lt;/div&gt;
  &lt;/form&gt;

  &lt;!-- Always wrap checkbox and radio inputs in a label and use a &lt;span class="label-body"&gt; inside of it --&gt;

  </code>
  </pre>
</template>