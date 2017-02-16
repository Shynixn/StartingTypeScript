function buyThings(item) {
    var result = "That's OK.";
    console.log("Item:" + item);
    if (item == "bread") {
        result = "Yummy :)";
    }
    document.getElementById("result").innerHTML = result;
}
