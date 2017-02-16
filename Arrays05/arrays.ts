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

