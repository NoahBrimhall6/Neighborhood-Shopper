$('#loginSubmit').click(event => {
  event.preventDefault();

  var loginEmail = $('#loginEmail').val().trim();
  if (!loginEmail) {
    $('.alert').text('Please enter an email address').css('display', 'flex');
    return;
  }

  var loginPassword = $('#loginPassword').val().trim();
  if (!loginPassword) {
    $('.alert').text('Please enter a password').css('display', 'flex');  
    return;
  }


});

$('#signUpSubmit').click(event => {
  event.preventDefault();

  var username = $('#userName').val().trim();
  if (!username) {
    $('.alert').text('Please enter a username').css('display', 'flex');
    return;
  }

  var userEmail = $('#userEmail').val().trim();
  if (!userEmail) {
    $('.alert').text('Please enter an email address').css('display', 'flex');
    return;
  }
  
  var userPhone = $('#userPhone').val().trim();
  if (!userPhone) {
    $('.alert').text('Please enter a phone number').css('display', 'flex');
    return;
  }

  var userPassword = $('#userPassword').val().trim();
  if (!userPassword) {
    $('.alert').text('Please enter a password').css('display', 'flex');
    return;
  }

  var userVerify = $('#userVerify').val().trim();
  if (!userVerify) {
    $('.alert').text('Please verify your password').css('display', 'flex');
    return;
  }

  if (userPassword !== userVerify) {
    $('.alert').text('Your passwords do not match').css('display', 'flex');
    return;
  }

});
