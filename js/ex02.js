
function imply(a,b) {
    var case1= a && b;
    var case2= !a;
    return case1 || case2;
  }
