const el = {
  templ: document.querySelector('#stockData'),
};

chrome.runtime.onMessage.addListener(
  function (req) {
    req.stockList.forEach(
      (element) => populateTable(element),
    );

    return true;
  },
);

// Inserts rows of stock data into the table.
function populateTable(req) {
  const tbody = document.querySelector('tbody');
  const templ = document.querySelector('#stockRow');

  // Clone the new row and insert it into the table
  const clone = templ.content.cloneNode(true);
  const td = clone.querySelectorAll('td');
  td[0].textContent = req.symbol;
  td[1].textContent = req.price;
  td[2].textContent = req.price;

  tbody.appendChild(clone);
}
