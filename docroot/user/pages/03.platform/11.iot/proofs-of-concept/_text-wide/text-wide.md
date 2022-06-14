---
title: 'Proofs of Concept'
class: section poc-wrap
---

<div class="top-block">
    <div class="container grid-xl">
        <h1>Proofs-of-concept developed in Bosch Stuttgart Connectory</h1>
        <div class="flex-block right">
            <div class="info-block">
                <p class="w-550">
                    Over the last 2 years Obyte has developed a strong relationship with the <a href="https://www.stuttgartconnectory.com" target="_blank" rel="noopener">Bosch Connectory in Stuttgart</a>, which has led to numerous collaborations. We exhibited together at the Blockchain Future Festival in Stuttgart in February 2019, and Obyte has been a key technology supplier to the 2 annual Bosch Connectory Hackathons in May 2018 and September 2019. In December 2019, the Connectory became an independent Order Provider on the Obyte public network.
                </p>
                <p class="w-670">
                    In the first Connectory Hackathon in May of 2018 Bosch developed the first coffee machine powered by crypto, which sells coffee for Bosch coins (a token created on the Obyte platform). Later in September of 2018 Obyte and Bosch used similar technology to put a 3D printer onto the Obyte ledger and which was managed remotely and also powered by Bosch Coins.
                </p>
                <p class="w-745">
                    In September 2019, Obyte participated in the Second Connectory Hackathon and assisted the attendees (Bosch employees and special guests) in developing the following
                </p>
            </div>
            <div class="img-block">
                <img class="img1" src="/user/themes/obyte/assets/poc/img1.jpg" alt="bosch connectory coffee and printer">
            </div>
        </div>
        <div class="flex-block">
            <img class="img1" src="/user/themes/obyte/assets/poc/img2.jpg" alt="bosch connectory 2nd hackathon">
        </div>
        <div class="flex-block right">
            <div class="info-block">
                <h2>Autonomous Agent: Dutch auction</h2>
                <p>
                    Sell items in a reverse auction where the price drops at a specified interval of time. In this type of auction buyers risk the availability of the product vs acquiring it for a lower price.
                </p>
                <p>
                    UI – built on Obyte chatbot interface.
                </p>
                <p>
                    Seller inputs all data about the auction (Start price, lowest price, amount of price drop, interval for price drop etc.) through chatbot and sends to the DAG. The perspective buyer chooses from products that are on offer and places a bet and if it is the lowest bid then the Buyer wins the auction.
                </p>
                <p>
                    The AA manages different states confirmed in the DAG, i.e. an item is being shipped, that the Buyer has received the item, and then the AA releases the money to the Seller and adds a reputation rating.
                </p>
            </div>
            <div class="img-block">
                <img class="img1" src="/user/themes/obyte/assets/poc/img3.jpg" alt="dutch auction">
            </div>
        </div>
        <div class="flex-block left">
            <div class="img-block">
                <img class="img1" src="/user/themes/obyte/assets/poc/img4.jpg" alt="energy trading">
            </div>
            <div class="info-block">
                <h2>Energy trading</h2>
                <p>
                    Obyte integrated with smart home app for Pay-by-Use/Streaming Payments. One party is producing surplus energy (Producer) via solar panels and wants to sell it to another party (Buyer) with a minimum risk of not getting paid for electricity delivered.
                </p>
                <p>
                    Obyte <a href="/platform/payment-channels">Streaming Payments</a> are used via <a href="https://github.com/BIoTws/biot-core" target="_blank" rel="noopener">BIoT library</a> and wallet to manage these transactions. A payment channel is opened between the wallets of the 2 parties and frequent microtransactions are used to ensure that both parties incur the minimum risk and that the Buyer is charged for only what has been actually consumed.
                </p>
                <p>
                    Depending on the usage requirements of the Buyer, i.e. how many electric devices are in operation, the Buyer pays the Producer every 15 seconds for the amount of energy consumed. Once the transaction is complete the payment channels are closed, or in the case of ongoing usage the amount of the transactions fluctuates in real time with the amount of energy used.
                </p>
            </div>
        </div>
        <div class="flex-block right">
            <div class="info-block">
                <h2>Powertool vending machine</h2>
                <p>
                    Onsite vending machine is filled with power tools needed by workers at a construction site. Workers rent the tools on a pay-by-use basis. Workers choose which tools that they want, scan the QR code that appears on the screen with their Bosch Wallet to pay with Bosch Coins (based on Obyte). Item is released by the vending machine.
                </p>
                <p>
                    Attestation and data sharing could also be implemented and incentivized by rewarding users for data with discounts and/or Bosch Coins. The vending machine doesn’t hold any private keys, but is able to generate new deposit addresses for users via Extended Public Key, which means that it will not lose the funds if the machine is stolen or damaged and Administrator gets notified about payments in real-time from the wallet where the Extended Public Key is actually from.
                </p>
            </div>
            <div class="img-block">
                <img class="img1" src="/user/themes/obyte/assets/poc/img5.jpg" alt="powertool vending machine">
            </div>
        </div>
        <div class="flex-block left">
            <div class="img-block">
                <img class="img1" src="/user/themes/obyte/assets/poc/img6.jpg" alt="consumer goods marketplace">
            </div>
            <div class="info-block">
                <h2>Consumer goods marketplace</h2>
                <p>
                    Create a searchable database of connected printers (and later any kind of power tool) that are attested by the owners of the tools, and can be accessed by consumers looking to pay for use of these tools.
                </p>
                <p>
                    Obyte Lite Wallet integrated on the tool/printer and connected by Rasberry Pi or integrated Bluetooth if available. Built an app to allow owners to register/attest the tools/printers, then user scans QR code of device to add device to searchable database and create device profile. The attestor signs the transaction with his address to confirm the info and store it in the DAG. Some information will be publicly available and some other information will be kept private. When informational transaction is confirmed in the DAG, the device will be listed as available.
                </p>
                <p>
                    The team also built a search crawler to look for available devices and once a device is found the user can upload a job request and the device will be able to price the job and send the user a payment request. Once the payment is processed the job will begin and the payment will be deposited into the wallet of the device administrator.
                </p>
                <p>Further development will allow the printer to communicate with the Administrator to refill materials etc. based on the jobs in its queue.</p>
            </div>
        </div>
        <div class="flex-block right">
            <div class="info-block">
                <h2>Booking conference rooms with Bosch coins</h2>
                <p>
                    Use Member Portal App from Connectory (Stuttgart and London) to book meeting rooms and pays with Bosch Coins to facilitate reconciling inter-departmental charges.
                </p>
                <p>
                    Member chooses from available rooms (as well as other goods and services) and books time required and pays with Obyte powered Bosch Coins. The room will then be blocked from booking again at the same time and access is granted to the specific user for the time of the booking and the user will be able to unlock the door with their Tapkey card.
                </p>
                <p>In order to distribute Bosch Coins, they also developed an Autonomous Agent to keep track for Bosch Coin allowances for each department, which allows more efficient distribution and avoids purchasing more Bosch Coins than the department needs.</p>
            </div>
            <div class="img-block">
                <img class="img1" src="/user/themes/obyte/assets/poc/img7.jpg" alt="booking with bosch coins">
            </div>
        </div>
    </div>
</div>
