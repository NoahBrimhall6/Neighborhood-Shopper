$("#post").click( async () => {

    // Verifys input not null
    const productName = $("#productName").val().trim();
    if (!productName) {
        $('.alert').text('Please enter a name.').css('display', 'flex');
        return;
    }

    const productZipcode = $("#productZipcode").val().trim();
    if (!productZipcode) {
        $('.alert').text('Please enter a zipcode.').css('display', 'flex');
        return;
    }
    
    const productPrice = $("#productPrice").val().trim();
    if (!productPrice) {
        $('.alert').text('Please enter a price.').css('display', 'flex');
        return;
    }

    const productDesc = $("#productDesc").val().trim();
    if (!productDesc) {
        $('.alert').text('Please enter a description.').css('display', 'flex');
        return;
    }

    // Image upload
    const file1 = $("#file1");
    const file2 = $("#file2");
    const file3 = $("#file3");
    
    const file1Data = file1[0].files[0];
    const file2Data = file2[0].files[0];
    const file3Data = file3[0].files[0];
    
    var main_image = "https://i.imgur.com/AEsHv43.jpg"
    var second_image = "https://i.imgur.com/s49h80v.jpg"
    var third_image = "https://i.imgur.com/DJn6vmJ.jpg"

    const bodyData = JSON.stringify({ productName, productZipcode, productPrice, productDesc, main_image, second_image, third_image });
    console.log(bodyData);

    const response = await fetch("/api/post/create", {
        method:'POST',
        body: bodyData,
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    }
    else {
        alert('post failed');
    }     
});
