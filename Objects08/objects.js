function printTruck() {
    var truck = {
        speed: 5.0,
        brand: "Epic Truck",
        calculateSpeedLimit: function () {
            return this.speed * 100;
        }
    };
    document.getElementById("result").innerHTML = truck.brand + ":" + truck.speed + " " + truck.calculateSpeedLimit();
}
