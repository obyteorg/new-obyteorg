---
title: Developers
class: developer-wrap
highlight:
    theme: monokai
---

#Obyte for developers222
Imagine a global, ownerless, shared database any app can freely read from
```js
const objUnit = await storage.readUnit('Xrs9FcyJ6F/54BM2D4HCT1RQOoiXHCs/AlNRd/dNXoo=');
const data = objUnit.messages.find(m => m.app === 'data').payload;
```


