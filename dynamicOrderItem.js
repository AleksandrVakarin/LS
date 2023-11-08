const timestamp = Date.now();
const orderItemScript = document.createElement('script');
orderItemScript.src = `orderItem.js?v=${timestamp}`;
document.body.appendChild(orderItemScript);