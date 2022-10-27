$("#post").click(function (event) {
    let file1 = $("#file1").val();
    var file2 = $("#file2").val();
    var file3 = $("#file3").val();
    var productName = $("#productName").val();
    var productZipcode = $("#productZipcode").val();
    var productPrice = $("#productPrice").val();
    var productDesc = $("#productDesc").val();
    event.preventDefault();

    console.log(file1.files[0])
    const formdata = new FormData()
    formdata.append("image", event.file1.files[0])
    fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
            Authorization: "Client-ID 4b896900311885a" 
        },
        body:formdata
    }).then(data => data.json()).then(data=>{
        console.log(data.data.link)
    })

});