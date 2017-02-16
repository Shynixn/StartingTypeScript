function buyThings(item: string) {
    let result: string = "That's ok.";
    console.log("Item:" + item);
    if (item == "bread") {
        result = "Yummy :)";
        for (let i = 0; i < 10; i++) {
            result += i;
        }
    }
    else if (item == "potato") {
        result = "Woah.";

        while (result == "Woah.") {
            result = "Finished.";
        }
    }
    else if (item == "coffee") {
        result = "Coffemaker";
        do
        {
            result = "7";
        } while (result == "Coffemaker");
    }
    document.getElementById("result").innerHTML = result;
}

