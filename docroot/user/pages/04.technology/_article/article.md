---
title: Article
class: technology-wrap
---
#A DAG based ledger
<div class="sub-block">
    Unlike most other crypto networks, Obyte is based on DAG (<a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Directed_acyclic_graph">directed acyclic graph</a>), not blockchain. By using a block-free, DAG based ledger, Obyte fully delivers on the promise of crypto &mdash; <strong>getting rid of middlemen</strong>. There are no miners (block producers) in Obyte, all users have equal rights and can freely add their transactions to the ledger. And they do so directly, without intermediaries, without gatekeepers who could block or delay the transactions they don't like.
</div>
<div class="sub-text-block">
    In Obyte DAG, each transaction references one or more previous (parent) transactions. Every transaction is identified by its hash, and by referencing parent transactions, a child transaction also includes their hashes. This is similar to the way the next block in a blockchain includes a hash of the previous block but the links are between transactions, not blocks, and there can be more than one parent.
</div>
<div class="text-block">
    <br><br>
    <img src="/user/themes/obyte/assets/technology/svg1.svg" alt="new transaction in dag">
    <br><br>
    <p>After a new transaction is added to the DAG, it quickly gets children transactions that include its hash, then grandchildren, and the number of future transactions that include it directly or indirectly grows like a snowball.</p>
    <img src="/user/themes/obyte/assets/technology/svg2.svg" alt="stable dag grows like snowball">
    <div class="d-flex">
        <div class="img-block">
            <img src="/user/themes/obyte/assets/technology/flex1.svg" alt="1 byte equals 1 byte">
        </div>
        <div class="info-block">
            <p>Users can attach their transactions at any point on the DAG and when doing so, they must pay a fee that is equal to the size of their transaction in bytes. The native currency of Obyte is Byte, and 1 Byte of currency allows you to add 1 byte of storage to the global immutable database, to be stored forever.</p>
        </div>
    </div>
    <br><br><br>
    <div class="d-flex">
        <div class="img-block">
            <img src="/user/themes/obyte/assets/technology/flex2.svg" alt="narrow dag">
        </div>
        <div class="info-block">
            <p>Although users can add their transactions at any point on the DAG, the protocol incentivizes them to attach new transactions to the end of the DAG, i.e. select most recent previous transactions as parents, because by doing so, the user has a chance to earn part of the fees paid by the parent transactions.</p>
        </div>
    </div>
    <br><br><br><br>
    <p>Like in other crypto networks, transactions are signed by user private keys and it is possible for a user to try to send two conflicting transactions that try to spend the same money twice &mdash; a double spend. In blockchains, double spends are resolved by block producers (such as miners). In Obyte, there are <i>rules</i> that determine the order of transactions, all nodes follow these rules to arrive at the same order of transactions, and out of two double-spends, the one that comes earlier in this order, wins.</p>
    <p>Some transactions are already ordered just because they are on a DAG and they are connected through one or more parent-child links.</p>
    <img src="/user/themes/obyte/assets/technology/svg3.svg" alt="directed acyclic graph">
    <p>Transactions that are not connected by parent-child links, are ordered around the so called <strong>Main Chain</strong>. The Main Chain is a chain on the DAG that gravitates to transactions authored by frequently posting users called <a href="/technology/order-providers">Order Providers</a> (formerly called Witnesses). The transactions that they regularly post serve as <strong>waypoints</strong> that allow all nodes to build the MC around these waypoints. All nodes run an algorithm that builds the MC based on the waypoints they see, and by running the same algorithm, they eventually arrive at the same result.</p>    
    <p>Once the Main Chain is established, all transactions are ordered around it by assigning an index to each transaction on the MC and for all non-MC transactions finding the earliest MC index when this transaction gets included on the MC.</p>
    <img src="/user/themes/obyte/assets/technology/svg4.svg" alt="main chain in dag">
    <p>The above is a brief overview of Obyte consensus algorithm. For more details, refer to the <a href="/Byteball.pdf">white paper</a>. Also, see what opportunities Obyte offers for <a href="developers">developers</a>.</p>
</div>






