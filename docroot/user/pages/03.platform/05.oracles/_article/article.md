---
title: Oracles
class: oracles-wrap
---

# Oracles

<div class="sub-block">
    Oracles are providers of data on the ledger. This data can be referenced from <a href="/platform/smart-contracts">smart contracts</a> or 
    <a href="/platform/autonomous-agents">autonomous agents</a> and the resolution of smart contracts or behavior of AAs can depend on the data.
</div>
<div class="flex-block one">
    <div class="info-block">
        <p>
            For example, in conditional payments, the release of payment can be conditioned by confirmation of some event having been posted by an oracle. In a sports betting contract, an oracle posts the result of a game and the party who correctly predicted the outcome wins the money locked on the contract. In a flight delay insurance contract, an oracle posts the delay of a particular flight and if it is above some threshold, the insured gets the money locked on the contract by the insurer.
        </p>
        <p>
            In stablecoins and other synthetic assets that are created using Autonomous Agents, oracles are very important for providing accurate price data.
        </p>
        <p>
            Oracles need to be trusted by both (or more) parties of a smart contract or by all users of an Autonomous Agent to provide true data because the performance of smart contracts and AAs depends on that data. That's why oracles are usually run by well known and reputable individuals or organizations. Where especially high level of assurance is required, smart contracts or AAs can reference several oracles.
        </p>
    </div>
    <div class="img-block">
        <img src="/user/themes/obyte/assets/oracles/img1.png?v1" alt="oracle data feed">
    </div>
</div>
<div class="flex-block two">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/oracles/img2.png" alt="manually posted data feed">
        <img class="mobile" src="/user/themes/obyte/assets/oracles/img2-mob.png" alt="manually posted data feed">
    </div>
    <div class="info-block">
        <h2 class="title">How oracles work</h2>
        <p>
            Oracles are bridges between the real world and the distributed ledger. They bring real-world data to the ledger, usually by reading some publicly accessible API and posting that data into the Obyte DAG. Data is posted as a data feed transaction. In Obyte, several types of transactions are possible, payment being the most popular one, and data feed is another type of transaction. The data feed is posted from the oracle address and can be easily found by this address and data feed name.
            <br><br>
            Oracles are usually automated and operate in one of three modes:
        </p>
        <ul>
            <li>
                <b>Continuous posting of data</b>. Such oracles post new data points periodically and do so on their own, 
                without any requests for this data. This mode is suitable for data that is realtively small, easy to 
                obtain, and frequently used, for example, price data. <a href="https://explorer.obyte.org/#JPQKPRI5FMTQRJF4ZZMYZYDQVRD55OTC" target="_blank" rel="noopener">Price oracle</a> works in this mode.
            </li>
            <li>
                <b>Continuous posting of Merkle roots of large data sets</b>. Like above, but the data set is so large and 
                each data point used so infrequently that posting the whole data set would be impractical. Merkle 
                path proving any particular data point can be provided by the oracle on demand or reconstructed 
                independently. This Merkle path can later be used in smart contracts or AAs. <a href="https://explorer.obyte.org/#FOPUBEUPBC6YLIQDLKL6EW775BMV7YOH" target="_blank" rel="noopener">Bitcoin oracle</a> works 
                in this mode and it allows to prove that a particular transaction has occured on Bitcoin blockchain 
                to enable safe peer-to-peer exchange. <a href="https://blog.obyte.org/making-p2p-great-again-episode-ii-bitcoin-exchange-d98adfbde2a5" target="_blank" rel="noopener">Learn more about Bitcoin oracle</a>.
            </li>
            <li>
                <b>Posting data on demand</b>. This type of oracle posts data only when requested to do so and this mode 
                makes sense when the data is paid, too large, or infrequently used. Such oracle can also charge a fee 
                for its service. Flight delays oracle and sports oracle work in this mode. 
                <a href="https://blog.obyte.org/making-p2p-great-again-episode-iv-p2p-insurance-cbbd1e59d527" target="_blank" rel="noopener">Learn more about flight delays oracle</a>.
            </li>
        </ul>
        <p>Data can also be posted manually, Obyte wallet allows to easily do so. This makes sense for rare or one-off events.</p>
    </div>
</div>

## How to use oracle data
Once a data point is posted by an oracle, it is stored on the DAG indefinitely and can be freely read by smart contracts and Autonomous Agents using oracle address and data feed name.
Smart contracts that depend on oracle data can reference it like this:
```js
['in data feed', [ ['ORACLE_ADDRESS'], 'data feed name', '=', 'expected value'] ]
```
Autonomous Agents can read the latest data feed value like this:
```js
data_feed[[oracles=$oracle_address, feed_name=$data_feed_name]]
```
<br>
<div class="dev-blog">
    <div class="dev-img-block">
        <img src="/user/themes/obyte/assets/chatbots/doc.svg" alt="documentation">
    </div>
    <div class="info-block">
        <div class="cat">Developers</div>
        <div class="title">Using Oracles in your apps</div>
        <p>
            Developers, see the developer docs to learn more about <a href="https://developer.obyte.org/payments/data#key-value-data-feed" target="_blank">posting data feeds</a>, 
            <a href="https://developer.obyte.org/contracts/reference#in-data-feed" target="_blank" rel="noopener">using oracle data in smart contracts</a>, and <a href="https://developer.obyte.org/autonomous-agents/oscript-language-reference#data_feed" target="_blank" rel="noopener">using oracle data in AAs</a>.
        </p>
    </div>
</div>
