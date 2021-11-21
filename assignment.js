// 1. seerToMon convert function

function seerToMon(seer) {

    // Used for unexpected input error returns
    if (typeof seer != "number") {
        return "Please give a number of positive value";
    } else if (seer < 0) {
        return "Please input a number of positive value";
    } else {

        let mon = seer / 40;
        return mon;
    }
}
var totalMon = seerToMon(120);
console.log(totalMon);


// 2. totalSales function declare 
function totalSales(Shirts, pants, shoes) {
    const shirt = 100;
    const totalShirt = shirt * Shirts;

    const pant = 200;
    const totalPants = pant * pants;

    const shoe = 500;
    const totalShoes = shoe * shoes;

    const totalSalesProducts = totalShirt + totalPants + totalShoes;
    return totalSalesProducts;
}
const productSales = totalSales(15, 10, 5)
console.log(productSales);


// 3. deliveryCost function declare

function deliveryCost(tShirts) {
    var tShirtDelivery1To100 = 100;
    var tShirtDelivery101To200 = 80;
    var tShirtDeliveryMoreThan200 = 50;

    // Used for unexpected input error returns
    if (typeof tShirts != "number") {
        return "Please input a number of positive value";
    } else if (tShirts < 0) {
        return "Please input a number of positive value";
    } else if (tShirts <= 100) {
        const tShirtCount = tShirts * tShirtDelivery1To100;
        return tShirtCount;

    } else if (tShirts <= 200) {
        const tShirtDelivery = 100 * tShirtDelivery1To100;
        const tShirt = tShirts - 100;
        const deliveryTShirt = tShirt * tShirtDelivery101To200;
        const totalDelivery = tShirtDelivery + deliveryTShirt;
        return totalDelivery;
    } else {
        const tShirtDeliveryCount100 = 100 * tShirtDelivery1To100;
        const tShirtDeliveryCount200 = 100 * tShirtDelivery101To200;
        const tShirt = tShirts - 200;
        const endTShirt = tShirt * tShirtDeliveryMoreThan200;
        const totalTShirtDelivery = tShirtDeliveryCount100 + tShirtDeliveryCount200 + endTShirt;
        return totalTShirtDelivery;
    }

}
const ts = deliveryCost(150);
console.log(ts);


// 4. perfectFriend function declare
const friendsName = ['Ariful', 'Hridoy', 'AlAmin', 'Moriom', 'Foysal', 'Hasan', 'Abdullah', 'Emam'];

function perfectFriend() {
    var friends = [0];
    for (const friends of friendsName) {
        if (friends.length == 5) {
            console.log(friends);
        }
    }
    return friends;
}
perfectFriend();