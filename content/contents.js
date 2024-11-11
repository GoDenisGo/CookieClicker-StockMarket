/*
Returns an array with a list of all the active stocks.
A stock is considered active if the player has unlocked the associated
building for that stock.
*/
function activeStocks() {
  const stocks = [];
  document.querySelectorAll('.bankGood').forEach(
    (element) => {
      if (element.style.display !== 'none') {
        const stock = stockSymbolAndPrice(element);
        stocks.push(stock);
      }
    },
  );

  sendStocks(stocks);
}

function stockSymbolAndPrice(s) {
  const symbol = s.querySelector('.bankSymbol').textContent.slice(0, 3);
  const price = s.querySelectorAll('span')[1].textContent;

  return { symbol, price };
}

// Sends a message containing stock data to the extension.
function sendStocks(sl) {
  chrome.runtime.sendMessage({ stockList: sl });
}

setTimeout(activeStocks, 1500);
