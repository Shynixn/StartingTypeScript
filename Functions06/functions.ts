var orderBox: string[] = new Array(5);

function buyThings(item: string) {
    for (let i: number = 0; i < orderBox.length; i++) {
        if (orderBox[i] == null) {
            orderBox[i] = item;
            break;
        }
    }
    let result: string = "Following stuff was purchased: \n";

    orderBox.forEach(function (element) {
        result += element + "\n";
    });

    document.getElementById("result").innerHTML = result;
}

function removeThings(item: string) {
    let result: string;
    var resultRemove: boolean = removeFromBasket(item);
    if (resultRemove == true) {
        result = "Item was removed";
    }
    else {
        result = "Item cannot be removed.";
    }
    document.getElementById("result").innerHTML = result;
}

function removeFromBasket(item: string) {
    for (let i: number = 0; i < orderBox.length; i++) {
        if (item != null && orderBox[i] != null && orderBox[i].toUpperCase() == item.toUpperCase()) {
            orderBox[i] = null;
            return true;
        }
    }
    return false;
}

