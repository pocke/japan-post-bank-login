const numbers = ['xxxx', 'yyyy', 'zzzzz'];
numbers.forEach((n, idx) => {
  const node = document.querySelector(`[name=okyakusamaBangou${idx+1}]`);
  node.value = n;
});
