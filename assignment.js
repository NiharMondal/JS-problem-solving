
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

function brickCalculator(height, stair) {
    
    var brick = 1000;
    var height = brick * height;
    var stair = height * stair;
    var totalBrick = stair;
         return totalBrick;
}
console.log(brickCalculator(15,10))


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


