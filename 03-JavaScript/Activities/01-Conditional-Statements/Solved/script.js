var meatEater = window.prompt("Do you eat meat?")

var response = function() {
    if (meatEater.toLowerCase() === "yes") {
        window.alert("Here is a Cheeseburger!");
    } else if (meatEater.toLowerCase() === "no") {
        window.alert("Here is an Impossible Burger!");
    } else {
        window.alert("Invalid Entry")
    }
}

response();