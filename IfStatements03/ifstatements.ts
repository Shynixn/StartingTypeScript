function buyThings(item: string) {
    let result: string = "That's OK.";
    console.log("Item:" + item);
    if (item == "bread") {
        result = "Yummy :)"
    }
    document.getElementById("result").innerHTML = result;
}

