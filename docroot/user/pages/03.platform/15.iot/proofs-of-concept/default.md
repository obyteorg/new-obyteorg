---
title: Proofs-of-concept
media_order: 'DLT Vending machine 2.JPG,DLT Vending machine.JPG,Hackers at work.JPG,Lego Energy trading 2.JPG,Lego Energy trading.JPG,Unlocking the door.JPG,Connectory Hackathon pic.jpeg,Consumer goods Marketplace.JPG'
---

# Proofs-of-concept developed in Bosch Stuttgart Connectory
Over the last 2 years Obyte has developed a strong relationship with the Bosch Connectory in Stuttgart, which has led to numerous collaborations. We exhibited together at the Blockchain Future Festival in Stuttgart in February 2019, and Obyte has been a key technology supplier to the 2 annual Bosch Connectory Hackathons in May 2018 and September 2019.  In December 2019, the Connectory became an independent Order provider on the Obyte public network.

In the first Connectory Hackathon in May of 2018 Bosch developed the first [coffee machine](https://www.stuttgartconnectory.com/iot-experiences?target=_blank) powered by cryto, which sells coffee for Bosch coins (a token created on the Obyte platform) Later in September of 2018 Obyte and Bosch used similar technology to put a 3D printer onto the Obyte ledger and which was managed remotely and also powered by Bosch Coins.  
![](../Rui%20Connectory%20CryptoMonday.jpeg)

In September 2019, Obyte participated in the Second Connectory Hackathon and assisted the attendees (Bosch employees and special guests) in developing the following applications:
![](Connectory%20Hackathon%20pic.jpeg)

## Autonomous Agent: Dutch auction
Sell items in a reverse auction where the price drops at a specified interval of time. In this type of auction buyers risk the availability of the product vs acquiring it for a lower price.

UI – built on Obyte chatbot interface

Seller inputs all data about the auction (Start price, lowest price, amount of price drop, interval for price drop etc.) through chatbot and sends to the DAG. The Perspective Buyer chooses from products that are on offer and places a bet and if it is the lowest bid then the Buyer wins the auction.

The AA manages different states confirmed in the DAG, i.e. an item is being shipped, that the Buyer has received the item, and then the AA releases the money to the Seller and adds a reputation rating.
![](../Autonomous%20Agent%20-%20Dutch%20Auction.jpeg)

## Energy trading:
Obyte integrated with smart home app for Pay by Use/Streaming Payments. One party is producing surplus energy (Producer) via solar panels and wants to sell it to another party (Buyer) with a minimum risk of not getting paid for electricity delivered.

Obyte Streaming Payments are used via BIoT library and wallet to manage these transactions. A payment channel is opened between the wallets of the 2 parties and frequent microtransactions are used to insure that both parties incur the minimum risk and that the Buyer is charged for only what has been actually consumed.

Depending on the usage requirements of the Buyer, i.e. how many electric devices are in operation, the Buyer pays the Producer every 15 seconds for the amount of energy consumed. Once the transaction is complete the payment channels are closed, or in the case of ongoing usage the amount of the transactions fluctuates in real time with the amount of energy used.
![](Lego%20Energy%20trading.JPG)![](Lego%20Energy%20trading%202.JPG)

## Powertool vending machine:
Onsite vending machine is filled with power tools needed by workers at a construction site. Workers rent the tools on a pay-by-use basis.
Workers choose which tools that they want, scan the QR code that appears on the screen with their Bosch Wallet to pay with Bosch Coins (based on Obyte). Item is released by the vending machine.

Attestation and data sharing could also be implemented and incentivized by rewarding users for data with discounts and/or Bosch Coins.
The vending machine doesn’t hold any private keys, but is able to generate new deposit addresses for users via Extended Public Key, which means that it will will not lose the funds if the machine is stolen or damaged and Administrator gets notified about payments in real-time from the wallet where the Extended Public Key is actually from.

![](DLT%20Vending%20machine%202.JPG) ![](DLT%20Vending%20machine.JPG)

## Consumer goods marketplace:
Create a searchable database of connected printers (and later any kind of power tool) that are attested by the owners of the tools, and can be accessed by consumers looking to pay for use of these tools.

Obyte Lite Wallet integrated on the tool/printer and connected by Rasberry Pi or integrated Bluetooth if available. Built an app to allow owners to register/attest the tools/printers, then user scans QR code of device to add device to searchable database and create device profile. The attestor signs the transaction with his address to confirm the info and store it in the DAG. Some information will be publicly available and some other information will be kept private. When informational transaction is confirmed in the DAG, the device will be listed as available.

The team also built a search crawler to look for available devices and once a device is found the user can upload a job request and the device will be able to price the job and send the user a payment request. Once the payment is processed the job will begin and the payment will be deposited into the wallet of the device administrator.

Further development will allow the printer to communicate with the Administrator to refill materials etc. based on the jobs in its queue.
![](../Bosch%20P2P%20consumer%20Marketplace.jpeg) ![](Consumer%20goods%20Marketplace.JPG)

## Booking conference rooms with Bosch coins:
Use Member Portal App from Connectory (Stuttgart and London) to book meeting rooms and pays with Bosch Coins to facilitate reconciling inter-departmental charges.

Member chooses from available rooms (as well as other goods and services) and books time required and pays with Obyte powered Bosch Coins. The room will then be blocked from booking again at the same time and access is granted to the specific user for the time of the booking and the user will be able to unlock the door with their Tapkey card. 

In order to distribute Bosch Coins, they also developed an Autonomous Agent to keep track for Bosch Coin allowances for each department, which allows more efficient distribution and avoids purchasing more Bosch Coins that the department needs.
![](Hackers%20at%20work.JPG)![](Unlocking%20the%20door.JPG)

