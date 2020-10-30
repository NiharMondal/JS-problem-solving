
function feetToMile(feet) {
    var mile = feet / 5280;   //We know that 5280 feet = 1 mile.
    return mile;
}
console.log("Mile =", feetToMile(50000));


function woodCalculator(chair, table, bed) {
    var myChair = chair * 1;
    var myTable = table * 3;
    var myBed = bed * 5;
    var totalwood = myChair + myTable + myBed;
    return totalwood;

}
var result = (woodCalculator(5, 3, 2));
console.log("I need" + " " + result, "cubic wood to make 'Five Chair, Three Table and Two Bed'.");

function brickCalculator(floor) {
    const height = [15, 12, 10]
    if (floor <= 10) {
        let firstTotalBrick = floor * height[0] * 1000;
        return firstTotalBrick;
    }
    else if (floor <= 20) {
        let top = floor - 10;
        let down = floor - 10;
        let totalBrick = top * height[0] + down * height[1]
        let secondTotalBrick = totalBrick * 1000;
        return secondTotalBrick;
    } else {
        let buildingTop = floor - 20;
        let buildingMiddle = 10;
        let buildingBottom = 10;
        let totalBrick = buildingBottom * height[0] + buildingMiddle * height[1] + buildingTop * height[2];
        let thirdTotalBrick = totalBrick * 1000;
        return thirdTotalBrick;
    }

}
console.log(brickCalculator(30))



function tinyFriend(name) {
    var minName = name[0];
    for (var i = 0; i <= name.length; i++) {
        var arrayName = name[i];
        if (arrayName < minName) {
            minName = arrayName;
        }
    }
    return minName;
}
var result = tinyFriend(['nihar', 'nishan','eva','sagor','paresh']);
console.log(result);


