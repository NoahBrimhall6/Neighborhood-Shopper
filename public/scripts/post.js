$("#post").click( async () => {
    let file1 = $("#file1");
    var file2 = $("#file2");
    var file3 = $("#file3");
    var productName = $("#productName").val();
    var productZipcode = $("#productZipcode").val();
    var productPrice = $("#productPrice").val();
    var productDesc = $("#productDesc").val();
    
    var file1Data = file1[0].files[0]
    var file2Data = file2[0].files[0]
    var file3Data = file3[0].files[0]
    console.log(JSON.stringify({ productName, productZipcode, productPrice, productDesc, file1Data, file2Data, file3Data }))
    const response = await fetch("/api/post/create", {
        method:'POST',
        body: JSON.stringify({ productName, productZipcode, productPrice, productDesc, file1Data, file2Data, file3Data }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/')
    }
    else {
        alert('post failed')
    }


    // if (file1Data) {
    // var formdata = new FormData()
    // formdata.append("image", file1Data)
    // await fetch("https://api.imgur.com/3/image", {
    //     method: "POST",
    //     headers: {
    //         Authorization: "Client-ID 4b896900311885a" 
    //     },
    //     body:formdata
    // }).then(data => data.json()).then(data=>{
    //     file1Url = data.data.link
    // })
    // }
    // if (file2Data) {
    //     var formdata2 = new FormData()
    //     formdata2.append("image", file2Data)
    //     await fetch("https://api.imgur.com/3/image", {
    //         method: "POST",
    //         headers: {
    //             Authorization: "Client-ID 4b896900311885a" 
    //         },
    //         body:formdata2
    //     }).then(data => data.json()).then(data=>{
    //         console.log(data.data.link)
    //         file2Url = data.data.link
    //     })
    // }
    // if (file3Data) {
    //     var formdata3 = new FormData()
    //     formdata3.append("image", file3Data)
    //     await fetch("https://api.imgur.com/3/image", {
    //         method: "POST",
    //         headers: {
    //             Authorization: "Client-ID 4b896900311885a" 
    //         },
    //         body:formdata3
    //     }).then(data => data.json()).then(data=>{
    //         file3Url = data.data.link
    //     })
    // }

    // postQuery(productName, productZipcode, productPrice, productDesc, file1Url, file2Url, file3Url)
});

    // const postQuery = (productName, productZipcode, productPrice, productDesc, file1Url, file2Url, file3Url) => {

        // }