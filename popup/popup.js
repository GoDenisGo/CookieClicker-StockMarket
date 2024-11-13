chrome.runtime.onMessage.addListener(
  function (req) {
    req.stockList.forEach(
      (element, index) => populateTable(element, index, req.level),
    );
  },
);

// Inserts rows of stock data into the table.
function populateTable(req, i, bankLevel) {
  const tbody = document.querySelector('tbody');
  const templ = document.querySelector('#stockRow');

  // Clone the new row and insert it into the table
  const clone = templ.content.cloneNode(true);
  const td = clone.querySelectorAll('td');

  td[0].textContent = req.symbol; // ticker symbol
  td[1].textContent = req.price; // current price
  td[2].textContent = '$' + String(10 * (i + 1) + (parseInt(bankLevel) - 1)); // Soft Minimum

  tbody.appendChild(clone);
}
