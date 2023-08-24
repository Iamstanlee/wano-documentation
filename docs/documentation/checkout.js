document.getElementById("pay-btn").addEventListener("click", function () {
  const config = {
    appId: "appId",
    amount: {
      value: 64.35,
      currency: "USD",
    },
    metadata: {
      email: "customer@domain.com",
      // additional info
    },
    onClose: () => {},
    onError: (data) => {},
    onSuccess: (data) => {
      document.getElementById("btn-text").innerText = "Payment collected";
      document.getElementById("hash").innerText =
        "Transaction hash: " + data.transaction_data.hash;
    },
  };
  window.wanoCheckout.open(config);
});
