---
title: 'Smart Contracts'
class: smart-contracts-wrap
---

# Smart Contracts
<div class="sub-block">
    Smart contracts on Obyte are contracts whose conditions are enforced by code rather than law.
</div>
<div class="sub-text-block">
    <p>
        The simplest form of a Smart Contract is a conditional payment from one user to another. The contract 
        specifies the condition when a payment can be released to the seller and locks the payment amount until the 
        condition is met. What the condition is, is defined by the two parties of the contract. It can be for example 
        delivery of some shipment confirmed by an independent shipping company or a reverse payment in some other token.
    </p>
    <p>
        Smart contracts enable safe transactions between parties who don't trust each other. Thanks to automatic 
        enforcement, no party is able to refuse to honor its obligations in the contract, and no dispute can arise. 
        Barriers to trade such as uncertainty about the other party's trustworthiness, lack of reputation, 
        or high costs of dispute resolution, are removed.</p>
    <p>
        Smart contracts on Obyte should not be confused with smart contracts on Ethereum whose role in trade is more 
        like that of <i>agents</i> &mdash; parties of trade. Such agents exist on Obyte too and they are called 
        <a href="/platform/autonomous-agents">Autonomous Agents</a>.
    </p>
</div>

## How do Smart Contracts work?
<div class="flex-block one">
    <div class="info-block">
        <p>Generally, Smart Contracts are often created by <a href="/platform/chatbots">chatbots</a>, but the Obyte Wallet has built-in features making it rather easy to define Smart Contracts directly between users, without having to write a single line of code or know anything about how the Obyte protocol works.</p>
        <p>In order to create a Smart Contract, the parties must first pair their wallets. This is done by either sending a pairing invitation link to the counterparty or accepting a pairing invitation from the counterparty. Once the two users' wallets are paired, they can send chat messages to each other.</p>
        <p>The Obyte Wallet's chat has built-in features to make it easier to create Smart Contracts. The user wanting to create the Smart Contract first asks the counterparty to insert his wallet address in the chat. This is done by clicking the (···) icon and selecting <b>Insert my wallet address</b>. The wallet address will appear in the user's chat as a clickable link. When clicking the link the user selects one of two options:</p>
        <ul>
            <li><b>Pay to this address</b>: to make a payment and while creating the payment click <b>Bind the payment to a condition</b> to specify a condition that must be met before the recipient is able to receive the money;</li>
            <li><b>Offer a contract</b>: choose this option when both parties need to make an initial payment to the contract, e.g. to create an insurance contract or a betting contract.</li>
        </ul>
    </div>
    <div class="img-block">
        <img src="/user/themes/obyte/assets/smart-contracts/img1.png?v1" alt="smart-contracts">
    </div>
</div>

<div class="flex-block two">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/smart-contracts/img2.png?v1" alt="conditions">
        <img class="mobile" src="/user/themes/obyte/assets/smart-contracts/img2-mob.png?v1" alt="conditions">
    </div>
    <div class="info-block">
        <h2>Conditions</h2>
        <p>
            A Smart Contract can have a single condition but sometimes multiple conditions define who and when can spend funds from it. The conditions can either be defined using the built-in template in the Obyte Wallet or the more complex conditions can be defined by headless wallets that can have beautiful and easy-to-use web interfaces.
        </p>
        <p>
            The built-in template makes simple conditions fast and easy to create in human readable language. The template defines the conditions for when two parties in the Smart Contract can spend funds. Once conditions are defined, the user sends the Smart Contract to the counterparty who can review all conditions and decide whether or not to accept them. Conditions can be either on-chain events like transactions to/from a given address, dates, times or it can be off-chain events that are introduced to the Obyte DAG through <a href="/platform/oracles">Oracles</a>.
        </p>
    </div>
</div>

<div class="flex-block three">
    <div class="info-block">
        <h2>Smart contracts as shared wallets</h2>
        <p>
            A Smart Contract is actually a shared wallet between the involved parties. Shared Wallets appear as sub-wallets and the user can select it to review conditions or send funds from it. 
        </p>
        <p>
            In more advanced cases, it is possible for a third party to create a Shared Wallet between two parties eliminating the need for the parties to pair their wallets as long as they both pair with the third party. This is commonly done through chatbots, making the process easy. Just like a tailor that made a leather wallet cannot spend the funds you put in it after you bought it, the creator of a Shared Wallet cannot spend from that either, unless the creating entity is defined as a party of the Smart Contract.
        </p>
    </div>
    <div class="img-block">
        <img src="/user/themes/obyte/assets/smart-contracts/img3.png?v1" alt="shared wallets">
        <img class="mobile" src="/user/themes/obyte/assets/smart-contracts/img3-mob.png?v1" alt="shared wallets">
    </div>
</div>

## Common use cases
The most common use cases for Smart Contracts on Obyte are conditional payments, insurance, sports betting, atomic swaps, but anywhere where conditioning a payment makes sense, Smart Contracts can be used to effectively eliminate the need for trust between parties.
<br>
<br>

## Oracles
Obyte allows external events to be used as conditions in Smart Contracts. This is achieved through [oracles](/platform/oracles). An oracle is most often a headless wallet that is connected to an external API, a flight delays website or a sports data feed for example. Once an event happens, the node picks it up from the API and creates a data transaction on the Obyte DAG. Most often, these transactions are simple key-value pairs that describe a unique identifier and the resulting outcome. For sports betting, this can be a unique match-id and the match's end result. 

While Smart Contracts enable fully trustless conditional payments, it is worth mentioning, that if an oracle is to provide the result, both users will need to trust this oracle to provide an authentic result. It is also possible to create conditions that require the results from multiple oracles.

<div class="dev-blog">
    <div class="dev-img-block">
        <img src="/user/themes/obyte/assets/chatbots/doc.svg" alt="documentation">
    </div>
    <div class="info-block">
        <div class="cat">Developers</div>
        <div class="title">Using Smart Contracts in your apps</div>
        <p>
            Developers, see the <a href="https://developer.obyte.org/contracts/smart-contracts" target="_blank" rel="noopener">documentation about creating and offering smart contracts to your users</a>.
        </p>
    </div>
</div>


