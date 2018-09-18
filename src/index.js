module.exports = function getZerosCount(number, base) {
  // your implementation
  var result =0;
var k =2;
var mas =[];
    var circl =1;
while (base > 1)
  {
    while (base % k == 0)
    {
      mas.splice(mas.length, 0, k);
      base = base / k;
    }
    k++;
  }
for(var j=0; j<mas.length; j++){
    if(mas[j]==mas[j+1])
        circl++;
    else circl=1;
    
    for(var i=mas[j]; i<=number; i*=mas[j]){
      result += Math.floor(number/i);
    }
    mas.splice(j, 1, Math.floor(result/circl));
    result = 0;
}  
    return Math.min.apply(null, mas);
}