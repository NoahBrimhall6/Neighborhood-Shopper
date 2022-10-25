$(".search").click(function (event) {
    event.preventDefault()
    var element = event.target
    if (element.matches("button")) {
        var userInput = $(this).children("input").val()
        console.log("Hello")
        location.replace(`search/${userInput}`)
        
    }
})

