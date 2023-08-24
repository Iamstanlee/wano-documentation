---
sidebar_position: 1
---

# Checkout

Learn how to seamlessly use the wano.finance checkout in your application.

### Step 1: Getting app Id

Before you can add Wano to your app you need to create an account. When you create an account you will get an appId connected to your wallet address. To copy your App Id, Log in to the [Wano Dashboard](https://dashboard.wano.finance) -> Go to Integrations page -> Copy App Id.

![Wano Integration Page](/img/integrations.png)

### Step 2: Configure checkout info

You need to pass information such as appId, amount, metadata, etc. The table below lists the parameters that you can pass when initialising a transaction.

| Param       | Required | Description                                                                                                                               |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| appId       | Yes      | app id from wano.                                                                                                                         |
| amount      | Yes      | Object containing the value and currency for the payment, typically the cost of a product or service                                      |
| metadata    | No       | Object containing any extra information you want recorded with the transaction. The email is required, any other information is optional. |
| onClose     | No       | Javascript function that is called if the customer closes the payment window instead of making a payment.                                 |
| onError     | No       | Javascript function that is called if an error occurs when making payment with error object as argument                                   |
| onSuccess   | No       | Javascript function that is called after a successful payment with transaction object as argument                                         |
| redirectUrl | No       | Url to redirect to after a successful payment                                                                                             |

You can use wano in your application like in the example below:


