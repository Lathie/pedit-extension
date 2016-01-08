var url = document.location.href;
url = url.replace(/\./g,'/');

// Get a database reference to our posts
var ref = new Firebase("http://pedit.firebaseio.com/");
// Attach an asynchronous callback to read the data at our posts reference
ref.child(url).child("content").on("value", function(snapshot) {
//  console.log(snapshot.val());
    var data = snapshot.val()
    for(var key in data){
        $("[data-pedit='"+key+"']").html(data[key]);
    }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
