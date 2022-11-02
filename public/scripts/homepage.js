$(".main-search").click(function (event) {
  event.preventDefault();
  var element = event.target;
  if (element.matches("button")) {
    var userInput = $(this).children("input").val();
    console.log(userInput);
    location.replace(`/search/${userInput}`);    
  }
});



$('.cardBtn').click(event => {
  var element = event.target;
  var id = element.dataset.id;
  location.replace(`/product/${id}`);
});