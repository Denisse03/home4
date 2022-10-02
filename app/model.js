var homeContent = ` <div class="logos">
<div class="logo">
  <a href="#contact">
    <div class="log">LOG IN</div>
  </a>
</div>
</div>`;
var aboutContent = ` <div class="photo">
<div class="image1"></div>
<div class="image2"></div>
</div>

<div class="texts">
<div class="text1">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
  asperiores eos eum, quae magni maiores similique itaque reiciendis
  adipisci? Sed id error doloremque dolore voluptate perferendis culpa
  voluptatum temporibus debitis?
</div>
<div class="text2">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut ipsam
  iure repellendus, ex eligendi quidem? Iure voluptatem iste doloribus
  quae facere porro nisi explicabo libero, officia temporibus, vel
  inventore.
</div>
</div>`;
var contactContent = ` <div class="banner">
<div class="text3">Sign in</div>
</div>

<div class="form">
<label for="fn">First Name</label>
<input type="text" id="fName" />

<label for="ln">Last Name</label>
<input type="text" id="lName" />

<label for="em">Email</label>
<input type="text" id="eName" />

<label for="pn">Phone Number</label>
<input type="text" id="pName" />

<input type="submit" value="Submit" id="submite" />
</div>`;

export function changePage(pageId, callback) {
  let page = pageId + "Content";
  $("#app").html(eval(page));
  if (pageId == "contact") {
    callback();
  }
}
