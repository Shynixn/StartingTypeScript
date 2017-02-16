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
