function Div2(num){
  if (num%2==0){
    return num/2;
  }else {
    if (num%2!=0){
      num=num+1;
      return num/2;
    }
  }
}
