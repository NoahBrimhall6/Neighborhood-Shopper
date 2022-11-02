$('#commentSubmit').click(async event => {
  event.preventDefault();
  const comment = $('#addComment').val().trim();
  const product_id = event.target.dataset.product;
  const user_id = event.target.dataset.userid;

  console.log(event.target.dataset);
  console.log(comment);
  console.log(product_id);
  console.log(user_id);

  if (comment && user_id && product_id) {
    const response = await fetch('/api/comment/create', {
      method: 'POST',
      body: JSON.stringify({ comment, user_id, product_id }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      location.replace(`/product/${product_id}`);
    } else {
      alert('Failed to add comment.');
    }
  } else {
    console.log('Failed to add comment');
  }
});