// Write your cade below:
function caclRemaindar(a,b) {

var c = a % b;
return c;

};

function caclSum(numArray1) {
var result = 0;
var num;
for (var i=0; i < numArray1.length; i++){
result += numArray1[i];


}
return result;

};


function caclSumInConditon(numArray, a) {

var result = 0;
var num;
for (var i=0; i < numArray.length; i++){
if (numArray[i]<a)
{
result += numArray[i];
}
else{
result += 0;
}
}
return result;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}