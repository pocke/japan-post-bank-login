(function () {
  "use strict";

  function save() {
    const numbers = [];
    for (let i = 1; i <= 3; ++i) {
      const node = document.getElementById(`login-number${i}`);
      numbers.push(node.value);
    }
    chrome.storage.sync.set({
      JapanPostLoginNumbers: numbers,
    }, () => {
      alert("options is saved successfully.");
    });
  }

  function restore() {
    chrome.storage.sync.get({
      JapanPostLoginNumbers: [9999, 9999, 99999],
    }, (items) => {
      items.JapanPostLoginNumbers.forEach((n, idx) => {
        const node = document.getElementById(`login-number${idx+1}`);
        node.value = n;
      });
    });
  }

  document.querySelector('#login-number-save-button').addEventListener('click', save);
  restore();
})();
