---
title: 'Order Providers'
class: order-providers-wrap
---

# Order Providers
<div class="sub-text">
    Order providers are users whose transactions are used to establish order on the DAG. They were formerly called witnesses.
</div>
<p class="sub-paragraph">
    Each order provider regularly posts transactions and does so strictly in order, i.e. their next transaction 
    includes (directly or indirectly, through parent-child links on the DAG) their previous transaction. 
    These transactions serve as <b>waypoints</b> that allow to build a <a href="/technology">Main Chain</a> and to order all other 
    transactions around the Main Chain.
</p>
<div class="flex-block left">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/order-providers/img1.png" alt="example order providers">
    </div>
    <div class="info-block">
        <p>
            Order providers earn part of the fees paid by users but the fees are not supposed to be the main factor 
            that motivates someone to regularly post waypoints to the DAG and want to be chosen as an Order Provider. 
            Rather, an Order Provider is supposed to have skin in the game and be interested in normal operation of 
            the network.
        </p>
        <p>
            Who is to be an Order Provider is decided by users. They can <a href="https://governance.obyte.org/sys/op_list" target="_blank" rel="noopener">vote for Order Providers on the governance website</a>. Everyone can vote and the weight of the vote is equal to the user's balance in Bytes.
        </p>
    </div>
</div>

One has to be very careful about selection of Order Providers because normal operation of the network depends on their continued posting of transactions and doing so in order. Although Order Providers cannot by any means steal money, double spend, or censor transactions &mdash; even if they all collude, they can still temporarily stop the network from moving forward, e.g. if 6 out of 12 Order Providers just stop posting. In this case, users will have to vote for new Order Providers but they'll be able to take over only after 3 days of downtime.

For this reason, Order Providers are expected to be reputable individuals or organizations, with real names, with something to lose in case they misbehave, and with proven commitment to Obyte. Order Providers should also have sufficient skills to properly secure their Order Provider node and make sure their private keys are not lost or stolen.

Having 12 positions in the Order Provider list allows to tolerate random failures of a minority of Order Providers and, if necessary, replace the misbehaving ones one by one. At the same time, the number 12 is not too large and allows everyone concerned to track all 12 and make informed decisions.

<div class="flex-block right">
    <div class="info-block">
        <p>
            The network was started in December 2016 with all 12 Order Providers controlled by the founder Tony Churyumoff but they were decentralized over time and currently 7 out of 12 Order Provider nodes are independent. The most recent replacements were chosen by voting among the Obyte community. We are looking for more candidates to be selected as Order Providers and further decentralize order provision.
        </p>
        <p>
            Note that even when order provision is centralized (it is not), admission of new transactions into the network is still completely decentralized and disintermediated as Order Providers do not stand between users and the ledger and can't control access. Their role is vastly different from that of block producers in blockchains (such as miners). 
        </p>
    </div>
    <div class="img-block providers">
        <img src="/user/themes/obyte/assets/order-providers/img3.png?v2" alt="current order providers">
    </div>
</div>
<br><br>

## What Order Providers can do if they collude
* They can temporarily stop the network. While the network is stopped, transactions can still be added but there is no way to establish order among them, hence they are not finalized. After 3 days of downtime, the network can be resumed by emergency voting for new Order Providers according to <a href="https://github.com/byteball/OIPs/blob/master/oip-0004.md" target="_blank" rel="noopener">Obyte improvement proposal 4: Emergency replacement of Order Providers</a>.

## What Order Providers can't do even if they collude
* They can't rewrite history. What is added to the DAG, cannot be removed.
* They can't steal money. They can't move funds without access to users' private keys and they can't rewrite history to insert a double-spend.
* They can't censor transactions. To censor a single transaction, they would need to also censor all its children, grandchildren, etc added by non-colluding users. Since their number grows like a snowball, the colluding Order Providers would have to censor the whole network, i.e. sabotage it, in order to block just one transaction.

To avoid the possibility of Order Provider collusion and misbehavior, users need to be always vigilant and replace the Order Providers that are likely to misbehave as soon as this becomes apparent, seek to introduce a better candidate into the list whenever such opportunity arises, and maintain a diverse set of Order Providers from various jurisdictions.
