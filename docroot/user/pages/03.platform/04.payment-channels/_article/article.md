---
title: 'Payment Channels'
class: payment-channels-wrap
---

# Payment channels
<div class="sub-block">
    Payment channels allow to organize a stream of micropayments between two parties.
</div>
<div class="sub-text-block">
    <p>
        With streaming payments, the buyer device continuously sends small payments to the seller in exchange for small units of service, such as energy (e.g. charging an electric vehicle) or rent.
    </p>
    <p>
        This way of payment significantly reduces the risks of payments between two parties who don't trust each other since the maximum amout they risk is the small unit of payment or service they exchange in each step.
    </p>
</div>

The two parties (endpoints) of a payment channel can be:
* two IoT devices, e.g. for charging an electric vehicle;
* a user wallet and a IoT device, e.g. for renting a room, a parking place, a drill;
* a user wallet and a server node, e.g. for video streaming paid per minute;
* two server nodes for access to paid APIs;
* a IoT device and a server, again for access to paid APIs, e.g. real time voice recognition or image recognition.

Payment channels are based on [Autonomous Agents](/platform/autonomous-agents) that temporarily lock user funds while the channel is open. All micro payments happen off-chain, and they are therefore **free, instant, and private**. These micropayments gradually move the locked balance within the channel from buyer to seller. When the provision of service is finished, the parties close the channel and the aggregated payment is settled in a single on-chain transaction.
<img class="content-img" src="/user/themes/obyte/assets/payments-channels/img1.svg" alt="BIoT wallet">
[BIoT Wallet](https://play.google.com/store/apps/details?id=ws.biot.wallet2) is a PoC wallet that supports payment channels for applications where a user is one of the endpoints.

<div class="dev-blog">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/payments-channels/dev-img.svg" alt="payment channels library">
    </div>
    <div class="info-block">
        <div class="cat">Developers</div>
        <div class="title">Using Payment channels in your apps</div>
        <p>
            Developers, see <a href="https://github.com/Papabyte/aa-channels-lib" target="_blank" rel="noopener">payment channels library</a> and <a href="https://github.com/byteball/pay-per-call-API" target="_blank" rel="noopener">a library for pay-as-you-go API access</a>.
        </p>
    </div>
</div>
