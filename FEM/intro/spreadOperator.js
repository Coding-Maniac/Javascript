const createTuple = (a, b, c, ...d) => {
  return [
    [a, c],
    [c, d],
  ];
};

createTuple("It", "be", "could", "anyone", "No one");

//[['It','Could'],['be',['anyone','No one']]]
