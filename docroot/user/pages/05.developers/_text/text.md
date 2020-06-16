and write to, for a fee equal to the size of data being written
```js
let unit = await sendData({ payload: { event: "Let there be light!", year: 0 } });
```

Imagine a global, ownerless, shared payment medium that apps use to sell their APIs to each other
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
and the currency is also global, ownerless.

Imagine ownerless, shared, unstoppable apps that send/receive payments and read/write data strictly according to code
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

This is the space Obyte developers work in. And there are lots of tools to navigate this space and lots of building blocks to build on it.

## Building blocks
* [Autonomous Agents](/platform/autonomous-agents)
* [Identity](/platform/identity)
* [Payment channels](/platform/payment-channels)
* [Textcoins](/platform/textcoins)
* [Chatbots](/platform/chatbots)
* [Smart contracts](/platform/smart-contracts)
* [Oracles](/platform/oracles)
* Plain old payments

## Tools and libraries
* [core library](https://github.com/byteball/ocore?target=_blank)
* [headless wallet and chat library](https://github.com/byteball/headless-obyte?target=_blank)
* [obyte.js](https://obytejs.com/?target=_blank): a pure and powerful JavaScript Obyte library
* [Pay-Per-Call API Library](https://github.com/byteball/pay-per-call-API?target=_blank): a library for pay-as-you-go payment for API use
* [Oscript Editor](https://oscript.org/?target=_blank): an browser based editor for writing Autonomous Agents
* [Oscript extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=obyte.oscript-vscode-plugin&target=_blank)
* [AA Testkit](https://github.com/valyakin/aa-testkit?target=_blank): a test framework for testing Autonomous Agents
* [owallet.js](https://github.com/olabs-org/owallet.js?target=_blank): a very lightweight Obyte wallet
* [A Multisig HD OByte Light Wallet Client](https://github.com/guantau/ocore-wallet-client?target=_blank)
* [Byteduino](https://github.com/Papabyte/byteduino?target=_blank): a very light C/C++ implementation of Obyte for Arduino ESP8266 and ESP32

## Documentation
See [Obyte developer website](https://developer.obyte.org/?target=_blank) for documentation about the core and headless wallet libraries. Other tools have their own documentation.

## Grants
There are [grants](/grants) for open source contributions to Obyte ecosystem.
