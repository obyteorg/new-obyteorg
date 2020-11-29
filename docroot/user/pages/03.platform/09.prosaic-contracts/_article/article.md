---
title: 'Prosaic Contracts'
class: prosaic-contracts-wrap
---

<div class="text-block">
    <h1>Prosaic Contracts</h1>
    <div class="sub-title">
        Prosaic contracts are just regular contracts signed by two Obyte wallets. 
        They make it easy for one party to compose and offer a contract to the other party, 
        and for the other party to accept it in two clicks.
    </div>
    <p>
        The two parties use chat in Obyte wallet to make offers, privately exchange the texts of the contracts, 
        and signal acceptance. The texts of the contracts are stored privately in the wallets of the parties, 
        while a hash of the contract signed by the two parties is stored on Obyte DAG. Should a dispute arise, 
        a thrird party (an arbitrator, mediator, judge) will be able to use this hash to verify that the contract 
        was really signed by the two parties and that it was not altered after signing.
    </p>
</div>
<div class="content-wrap">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/prosaic/mobile-img.png?v1" alt="">
        <img class="mobile" src="/user/themes/obyte/assets/prosaic/mobile-img2.png?v1" alt="">
    </div>
    <div class="content-block">
        <div class="content-small">
            <div class="title">Real names attached</div>
            <p>
                Before signing a prosaic contract, the parties can (and are recommended to) exchange their 
                <a href="/platform/identity">real world identities linked to their wallet addresses</a> in order to prove who they are.
            </p>
            <div class="content-img">
                <img src="/user/themes/obyte/assets/prosaic/insert-private-profile.png?v1" alt="">
            </div>
        </div>
        <div class="content-small">
            <div class="title">Enforcement</div>
            <p>
                Prosaic contracts do not lock any funds that could gurantee contract execution, they are not <a href="/platform/smart-contracts">smart 
                contracts</a>. They have to be enforced like regular contracts, and the signatures created when 
                signing prosaic contracts are classified as <b>advanced electronic signatures</b> under the European 
                electronic signature regulation and similar laws of some other countries.
            </p>
            <p>
                Smart contracts that do lock funds to guarantee contract execution and also have a prosaic part 
                attached, are currently <a target="_blank" href="https://medium.com/obyte/whats-next-for-obyte-contracts-with-arbiter-7e625e05811a">being developed</a>.
            </p>
        </div>
    </div>
</div>

<div class="dev-blog">
    <div class="img-block">
        <img src="/user/themes/obyte/assets/resources/resource5.svg" alt="">
    </div>
    <div class="info-block">
        <div class="cat">Developers</div>
        <div class="title">Integrate prosaic contracts in your apps</div>
        <p>
            The process of offering and acceptance of prosaic contracts can be automated using Obyte chatbots,
            <a target="_blank" href="https://developer.obyte.org/contracts/prosaic-contracts">see developer documentation about prosaic contracts</a>.
        </p>
        <p>Learn more about prosaic contracts in our <a target="_blank" href="https://medium.com/obyte/introducing-prosaic-contracts-5d3564638a20">introductory blog post</a>.</p>
    </div>
</div>
