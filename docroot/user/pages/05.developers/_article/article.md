---
title: Developers
class: developers-wrap
---

#Obyte for developers
<p class="bullet">Imagine a global, ownerless, shared database any app can freely read from</p>
```js
const objUnit = await storage.readUnit('Xrs9FcyJ6F/54BM2D4HCT1RQOoiXHCs/AlNRd/dNXoo=');
const data = objUnit.messages.find(1m => m.app === 'data').payload;
```
<p class="bullet-padding">and write to, for a fee equal to the size of data being written</p>
<br>
```js
let unit = await sendData({ payload: { event: "Let there be light!", year: 0 } });
```
<p class="bullet">Imagine a global, ownerless, shared payment medium that apps use to sell their APIs to each other</p>
```js
const objPaymentPackage = await payPerCallClient.createPaymentPackage(amount);
const body = JSON.stringify({
	param1: param1,
	param2: param2,
	paymentPackage: objPaymentPackage
});
const response = await fetch('https://domain.com/some/paid/service', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: body
});
```
<p class="bullet-padding">and the currency is also global, ownerless.</p>
<br>
<p class="bullet">Imagine ownerless, shared, unstoppable apps that send/receive payments and read/write data strictly according to code</p>
```json
{
	app: 'payment',
	payload: {
		asset: 'base',
		outputs: [
			{address: "{trigger.address}", amount: "{ var[$id || '_collateral'] }"}
		]
	}
},
```
<p class="bullet-padding">This is the space Obyte developers work in. And there are lots of tools to navigate this space and lots of building blocks to build on it.</p>
<br>
<br>
