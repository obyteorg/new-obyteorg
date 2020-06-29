---
title: Tokens
class: issue-tokens-wrap
---

# Issuing tokens
<div class="sub-block">
    One can easily issue a new token on Obyte, and this token can represent anything.
</div>
<div class="sub-text-block">
    Unlike Ethereum, tokens in Obyte are first-class citizen, their transfer is handled by the core and it happens according to the same rules as the transfer of Bytes &mdash; the native currency. Since they exist on the platform level, one doesn't have to reimplement basic transfer functions over and over again for every token, and there is no way these functions can go wrong.
    Token supply can be fixed or unlimited. The latter is usually used by <a href="/platform/autonomous-agents">Autonomous Agents</a> which issue tokens programmatically, strictly according to rules, in a predictable way.
</div>

When a new token type is defined, its properties can be tailored to the environment it is going to be used in.

<div class="white-block">
    <p>
        For example, in <b>regulated environments</b> the property <code>cosigned_by_definer</code> might be useful for compliance and other reasons. This property allows to require that each transaction with the token be cosigned by the issuer (e.g. a financial institution).
    </p>
    <p>
        Also for regulated environments, <code>spender_attested</code> property can be set to restrict ownership and 
        transferrability of the new token only to attested users whose <a href="/platform/identity">identity</a> 
        has been verified by a trusted attestor. Attestation can include not just having a verified identity but 
        also having some other status such as <b>accredited investor</b>, which might be useful for security 
        token offerings (STOs) and is supported by <a href="https://ico-platform.obyte.org">Obyte ICO platform</a>.
    </p>
    <p>
        Where privacy matters, one can use <code>is_private</code> property to make all transfers with the token 
        private, not visible on the DAG, conveyed only directly peer-to-peer between sender and recipient. 
        <a href="/platform/blackbytes">Blackbytes</a> is one such currency which is also widely distributed as it was distributed along with Bytes.
    </p>
    <p>
        Loyalty point operators might want to set <code>is_transferrable</code> property to <code>false</code> (it is
         <code>true</code> by default) if the issuer wants to prohibit the transfer of tokens between users, i.e. 
         disable trading on a secondary market, and only allow them to be redeemed with the issuer.    
    </p>
    <p>
        One can also set more complex conditions for when issue or transfer of tokens is allowed.
    </p>
</div>


<div class="dev-blog">
    <div class="dev-img-block">
        <img src="/user/themes/obyte/assets/issue-tokens/doc.svg" alt="">
    </div>
    <div class="info-block">
        <div class="cat">Developers</div>
        <div class="title">Using tokens in your apps</div>
        <p>
            Developers, please refer to the <a href="https://developer.obyte.org/issuing-assets-on-byteball">documentation about issuing tokens on Obyte</a>.
            <a target="_blank" href="https://obyte.app/#!/asset/order">Obyte Asset Registry</a> website helps to issue new tokens and set some of their parameters without developer knowledge.
        </p>
    </div>
</div>



