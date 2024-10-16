const apiKey = '8QJ0UY8TW2N8QD3I';
let chart;

function fetchStockPrice() {
    const symbol = document.getElementById('stockSymbol').value;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const timeSeries = data['Time Series (5min)'];
            if (timeSeries) {
                const times = Object.keys(timeSeries).reverse(); // Reverse to show oldest first
                const prices = times.map(time => parseFloat(timeSeries[time]['4. close']));

                const latestPrice = prices[prices.length - 1]; // Latest price

                displayStockPrice(latestPrice);
                forecastAI(latestPrice);
                plotStockGraph(times, prices);
            } else {
                document.getElementById('stockPrice').textContent = 'Invalid stock symbol or no data available.';
            }
        })
        .catch(error => console.error('Error fetching stock data:', error));
}

function displayStockPrice(price) {
    const stockPriceDiv = document.getElementById('stockPrice');
    stockPriceDiv.textContent = `Stock Price: $${price}`;
    const isUp = Math.random() > 0.5; // Dummy logic to show price movement (replace with real logic)
    stockPriceDiv.classList.toggle('up', isUp);
    stockPriceDiv.classList.toggle('down', !isUp);
}

function forecastAI(price) {
    const forecast = Math.random() > 0.5 ? 'Price likely to go up!' : 'Price likely to go down!';
    document.getElementById('aiForecast').textContent = `AI Forecast: ${forecast}`;
}

// Function to plot the stock price graph
function plotStockGraph(times, prices) {
    const ctx = document.getElementById('priceChart').getContext('2d');
    
    if (chart) chart.destroy(); // Destroy the previous chart to avoid overlap
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times, // X-axis labels (timestamps)
            datasets: [{
                label: 'Stock Price',
                data: prices, // Y-axis data (prices)
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price (USD)'
                    }
                }
            }
        }
    });
}
