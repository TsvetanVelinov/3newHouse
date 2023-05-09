function newHouse(input) {

    let typeFlower = input[0];
    let flowerNum = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

    switch (typeFlower) {

        case "Roses":
            totalPrice = flowerNum * 5.00;
            break;
        case "Dahlias":
            totalPrice = flowerNum * 3.80;
            break;
        case "Tulips":
            totalPrice = flowerNum * 2.80;
            break;
        case "Narcissus":
            totalPrice = flowerNum * 3;
            break;
        case "Gladiolus":
            totalPrice = flowerNum * 2.50;
            break;
    }

    if (typeFlower === "Roses" && flowerNum > 80) {
        totalPrice = totalPrice * 0.9;
        // може и така(за по кратко)- totalPrice *= 0.9 ;
        // или totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (typeFlower === "Dahlias" && flowerNum > 90) {
        totalPrice = totalPrice * 0.85;
    } else if (typeFlower === "Tulips" && flowerNum > 80) {
        totalPrice = totalPrice * 0.85;
    } else if (typeFlower === "Narcissus" && flowerNum < 120) {
        totalPrice = totalPrice * 1.15;
    } else if (typeFlower === "Gladiolus" && flowerNum < 80) {
        totalPrice = totalPrice * 1.20;
    }


    if (budget >= totalPrice) {

        let restMoney = budget - totalPrice;

        console.log(`Hey, you have a great garden with ${flowerNum} ${typeFlower} and ${restMoney.toFixed(2)} leva left.`);
    } else {

        let neededMoney = totalPrice - budget;

        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }


}


newHouse(["Roses", "55", "250"])
newHouse(["Tulips", "88", "260"])
newHouse(["Narcissus", "119", "360"])



