var orderBox = new Array(5);
function buyThings(item) {
    for (var i = 0; i < orderBox.length; i++) {
        if (orderBox[i] == null) {
            orderBox[i] = item;
            break;
        }
    }
    var result = "Following stuff was purchased: \n";
    orderBox.forEach(function (element) {
        result += element + "\n";
    });
    document.getElementById("result").innerHTML = result;
}
function removeThings(item) {
    var result;
    var resultRemove = removeFromBasket(item);
    if (resultRemove == true) {
        result = "Item was removed";
    }
    else {
        result = "Item cannot be removed.";
    }
    document.getElementById("result").innerHTML = result;
}
function removeFromBasket(item) {
    for (var i = 0; i < orderBox.length; i++) {
        if (item != null && orderBox[i] != null && orderBox[i].toUpperCase() == item.toUpperCase()) {
            orderBox[i] = null;
            return true;
        }
    }
    return false;
}
