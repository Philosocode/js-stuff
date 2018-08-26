function goThroughList(list) {
  if (list.length === 0) {
    return;
  }

  console.log(list[0]);


  return goThroughList(list.splice(1, list.length));

}

goThroughList([1, 2, 3, 4]);
