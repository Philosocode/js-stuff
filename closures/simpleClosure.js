function addTogether(num1, num2 = 0) {

  if (num2) {
    return num1 + num2;
  }

  function innerAdd(x) {
    return num1 + x;
  }

  return innerAdd;

}

addTogether(2)([3]);
