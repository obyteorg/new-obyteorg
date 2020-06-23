---
title: Order Providers
class: order-providers-wrap
---

# Order Providers
<div class="sub-text">
    Order providers are users whose transactions are used to establish order on the DAG. They were formerly called witnesses.
</div>
<p class="sub-paragraph">
    Each order provider regularly posts transactions and does so strictly in order, i.e. their next transaction 
    includes (directly or indirectly, through parent-child links on the DAG) their previous transaction. 
    These transactions serve as waypoints that allow to build a <a href="/technology">Main Chain</a> and order all other 
    transactions around the Main Chain.
</p>
<div class="flex-block left">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/order-providers/img1.png" alt="">
    </div>
    <div class="info-block">
        <p>
            Order providers earn part of the fees paid by users but the fees are not supposed to be the main factor 
            that motivates someone to regularly post waypoints to the DAG and want to be chosen as an Order Provider. 
            Rather, an Order Provider is supposed to have skin in the game and be interested in normal operation of 
            the network.
        </p>
        <p>
            Who is to be an Order Provider is ultimately decided by users. Every transaction posted by every user 
            includes a list of 12 Order Providers the user trusts to serve this role. The list can diverge by at 
            most one position between parent and child, so it is supposed to be fairly uniform among recent transactions.
        </p>
    </div>
</div>
<div class="flex-block right">
    <div class="info-block">
        <p>
            When a new user joins the network, she adopts the list of Order Providers that is suggested by the first node she connects to. This node is usually the hub indicated in the default settings of the wallet.
        </p>
        <p>
            Then, after adopting the default list, any user can change it by one position, i.e. replace one old Order Provider with some new one, use this list in her transactions, and campaign for her change to be adopted by others. When and if this change is adopted, the next mutation of the Order Provider list becomes possible.
        </p>
    </div>
    <div class="img-block">
        <img src="/user/themes/obyte/assets/order-providers/img2.png" alt="">
    </div>
</div>

One has to be very careful about selection of Order Providers because normal operation of the network depends on their continued posting of transactions and doing so in order. Although Order Providers cannot by any means steal money, double spend, or censor transactions &mdash; even if they all collude, they can still stop the network from moving forward, e.g. if 6 out of 12 Order Providers just stop posting.

For this reason, Order Providers are expected to be reputable individuals or organizations, with real names, with something to lose in case they misbehave, and with proven commitment to Obyte. Order Providers should also have sufficient skills to properly secure their Order Provider node and make sure their private keys are not lost or stolen. Last but not least, Order Providers should be prepared to update their own Order Provider lists if the community so demands, including removing themselves from the list.

Having 12 positions in the Order Provider list allows to tolerate random failures of the minority of Order Providers and, if necessary, replace the misbehaving ones one by one. At the same time, the number 12 is not too large and allows everyone concerned to track all 12 and make informed decisions.

<div class="flex-block right">
    <div class="info-block">
        <p>
            The network was started in December 2016 with all 12 Order Providers controlled by the founder Tony Churyumoff but they were decentralized over time and currently 6 out of 12 Order Provider nodes are independent. The most recent replacements were chosen during polls among the Obyte community. We are looking for more candidates to be selected as Order Providers and further decentralize order provision.
        </p>
        <p>
            Note that even when order provision is centralized, admission of new transactions into the network is still completely decentralized and disintermediated as Order Providers do not stand between users and the ledger and can't control access. Their role is vastly different from that of miners. 
        </p>
    </div>
    <div class="img-block">
        <img src="/user/themes/obyte/assets/order-providers/img3.png" alt="">
    </div>
</div>
<br><br>

## What Order Providers can do if they collude
* They can stop the network. Transactions can still be added but there is no way to establish order among them, hence they can never be finalized. The old data and balances are safe, the network needs to be restarted from this point through a manual process.
* They can block further updates of the Order Provider list. The network continues to operate but there is a danger of being stopped by a coordinated action of the colluding Order Providers.

## What Order Providers can't do even if they collude
* They can't rewrite history. What is added to the DAG, cannot be removed.
* They can't steal money. They can't move funds without access to users' private keys and they can't rewrite history to insert a doublespend.
* They can't censor transactions. To censor a single transaction, they would need to also censor all its children, grandchildren, etc added by non-colluding users. Since their number grows like snowball, the colluding Order Providers would have to censor the whole network, i.e. sabotage it, in order to block just one transaction.

To avoid the possibility of Order Provider collusion, users and major stakeholders of the network in the first place, need to be always vigilant and replace the Order Providers that are likely to misbehave as soon as this becomes apparent, and also seek to introduce a better candidate into the list whenever such opportunity arises.
