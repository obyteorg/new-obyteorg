---
title: 'Self-Sovereign Identity'
class: identity-wrap
---

# Self-Sovereign Identity
<div class="sub-block">
    On Obyte, users have an option to get any information about themselves verified and easily proven to third parties.
</div>
<div class="sub-text-block">
    <p>For example, a user may opt to have their real name verified, with the personal information being stored in their wallet and nowhere else, then share this information with other users they choose, with other users being able to verify that this information is authentic using the Obyte DAG.</p>
</div>

Knowledge of a user's real-world identity might be necessary e.g. for signing prosaic <br> 
contracts to know that the other party really is who they say they are, or for some apps <br> 
to be compliant with KYC requirements or to prevent fraud.

When sharing private information with their counterparts, users have full control of what they share. For example, having verified a government issued ID that contains one's real name, ID number, date of birth, and expiry date, one can choose to share only the date of birth with an app that needs only to verify the user's age in order to allow access to age restricted goods or services.

Other information, such as email address or social media profiles, can also be verified and shared with apps that need it. Users can also choose to have this information stored publicly on the DAG.

<div class="flex-block one">
    <div class="info-block">
        <h2>How it works</h2>
        <p>
            Verification is performed by attestors — users or businesses trusted by both the user being verified and the relying party (one who needs to know certain information about the user, and know that it is authentic).
        </p>
        <p>
            After a successful verification, the attestor posts an attestation record to the Obyte DAG. This record contains the verified information about the user if the user chose to have it public, or a hash of this information, which makes it impossible for third parties to see the information but proves that it exists. In the latter case, the verified information is also saved privately in the user's wallet, so the user can later share it with interested parties. After this, the verified information can be used independently of the attestor, even if the attestor goes out of business.
        </p>
        <p>
            If the verified information is saved privately in the user's wallet, the user can easily share it with interested parties using the built-in chat:
        </p>
        <img class="info-img" src="/user/themes/obyte/assets/identity/img1-bot.png" alt="">
        <p>while choosing which fields to disclose.</p>
    </div>
    <div class="img-block">
        <img src="/user/themes/obyte/assets/identity/img1.png" alt="">
        <img class="mobile" src="/user/themes/obyte/assets/identity/img1-mob.png" alt="">
    </div>
</div>

## Available attestors
Verifications are usually performed by bots. Here are a few bots whose attestations can be used now:
<br/>
<div class="attestors-list">
    <div class="attestor-block">
        <div class="img-block">
            <img src="/user/themes/obyte/assets/identity/svg1.svg" alt="">
        </div>
        <div class="info-block">
            <h2 class="title">Real name attestation bot</h2>
            <p>verifies user's government issued ID. Information extracted from the ID (name, ID number, country, date of birth, expiry date) is saved in the user's wallet while a hash of this information is posted to the DAG.</p>
        </div>
    </div>
    <div class="attestor-block">
        <div class="img-block">
            <img src="/user/themes/obyte/assets/identity/svg2.svg" alt="">
        </div>
        <div class="info-block">
            <h2 class="title">Email attestation bot</h2>
            <p>Verifies user's email address. Users can opt to have their verified email published to the DAG or saved privately in the user's wallet. If a user chose to have their email published, this enables other users to send payments to the attested user by typing his/her email address instead of Obyte address.</p>
        </div>
    </div>
    <div class="attestor-block">
        <div class="img-block">
            <img src="/user/themes/obyte/assets/identity/svg3.svg" alt="">
        </div>
        <div class="info-block">
            <h2 class="title">Accredited investor attestation bot</h2>
            <p>Verifies that the user qualifies as accredited investor according to the US law and SEC rules. This status enables the user to participate in Security Token Offerings (STOs).</p>
        </div>
    </div>
    <div class="attestor-block">
        <div class="img-block">
            <img src="/user/themes/obyte/assets/identity/svg4.svg" alt="">
        </div>
        <div class="info-block">
            <h2 class="title">Steem attestation bot</h2>
            <p>Verifies that a user has a Steem account and optionally publishes the user's Steem username and reputation. Applications may choose to offer some privileges to users with high Steem reputation. If the Steem username is published, this enables other users to send payments to the attested user by typing "steem/username" instead of Obyte address.</p>
        </div>
    </div>
</div>

Attestations can also be easily done manually by sending an attestation transaction from the attestor's wallet.

<div class="dev-blog">
    <div class="dev-img-block">
        <img src="/user/themes/obyte/assets/chatbots/doc.svg" alt="">
    </div>
    <div class="info-block">
        <div class="cat">Developers</div>
        <div class="title">Using Self-Sovereign Identity in your apps</div>
        <p>
            Developers, see the documentation about <a href="https://developer.obyte.org/private-profiles" target="_blank" rel="noopener">working with attestations in your bots</a>, 
            <a href="https://developer.obyte.org/contracts/reference#attested" target="_blank" rel="noopener">checking for attestations in smart contracts</a>, and <a href="https://developer.obyte.org/autonomous-agents/oscript-language-reference#attestation" target="_blank" rel="noopener">reading the attested data in Autonomous Agents</a>.
        </p>
    </div>
</div>
