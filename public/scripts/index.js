$(".search").click(function (event) {
    event.preventDefault()
    var element = event.target
    if (element.matches("button")) {
        var userInput = $(this).children("input").val()
        console.log("Hello")
        location.replace(`search/${userInput}`)
        
    }
})



$("#post").click(function (event) {
    var file1 = $("#file1").value
    var file2 = $("#file2").value
    var file3 = $("#file3").value
    var productName = $("#productName").val()
    var productZipcode = $("#productZipcode").val()
    var productPrice = $("#productPrice").val()
    var productDesc = $("#productDesc").val()

    event.preventDefault
    var element = event.target
    if (element.matches("button")) {
        console.log(productName, productZipcode, productPrice, productDesc)
    }
})