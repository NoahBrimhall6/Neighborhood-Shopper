$('.cardBtn').click(event => {
  var element = event.target;
  var id = element.dataset.id;
  location.replace(`/product/${id}`);
});