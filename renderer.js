// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let $ = require('jquery')
function validateEmail(email) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    return re.test(email);
}
$(".button").click(function(){
  $(".button").addClass("is-loading");
  if(validateEmail($(".button").val)) {

  }
  else {
    $(".button").removeClass("is-loading");
    $(".tag").text("Enter Valid Mail");
  }
})
