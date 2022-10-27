$(".search").click(function (event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")) {
        var userInput = $(this).children("input").val();
        console.log(userInput);
        location.replace(`search/${userInput}`);    
    }
});


$(".home").click(event => location.replace("/"));

$(".login").click(event => location.replace("/login"));

$(".post").click(event => location.replace("/post"));



$("#post").click(function (event) {
    var file1 = $("#file1").value;
    var file2 = $("#file2").value;
    var file3 = $("#file3").value;
    var productName = $("#productName").val();
    var productZipcode = $("#productZipcode").val();
    var productPrice = $("#productPrice").val();
    var productDesc = $("#productDesc").val();

    event.preventDefault();
    var element = event.target;
    if (element.matches("button")) {
        console.log(productName, productZipcode, productPrice, productDesc);
    }
});

