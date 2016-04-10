chrome.storage.sync.get({
  JapanPostLoginNumbers: [9999, 9999, 99999],
}, (items) => {
  items.JapanPostLoginNumbers.forEach((n, idx) => {
    const node = document.querySelector(`[name=okyakusamaBangou${idx+1}]`);
    node.value = n;
  });
});
