const walletsData = [
    {
        name:"Coinbase",
        rating:5,
        rank:"1",
        description:`
        Coinbase, which went public in April, is the best known cryptocurrency exchange in the US. The company makes it easy to trade well-known cryptocurrencies from bitcoin to dogecoin, and has its own Visa-backed debit card that integrates with Apple Pay and Google. 
        If you're new to cryptocurrency, the Coinbase Wallet is a good place to start. It can be downloaded as an app for Android or iOS, the interface is intuitive and the wallet is fully integrated with the company's exchange, which makes it easy to conduct transactions -- including purchasing coins and tokens with traditional currency. 
        Unlike the company's exchange, the Coinbase Wallet is noncustodial; that means that only you have access to your wallet's private key, which is generated with a 12-word recovery phrase when you sign up. Note that there's a difference between storing your cryptocurrency on Coinbase's exchange, which is custodial, and the wallet, which is not. But the integration between them makes it fairly simple to transfer funds back and forth.
        `,
        website:"https://www.coinbase.com/",
        image:"https://www.cnet.com/a/img/resize/54a5d914c1307702780ac5d776e421a019d5cac4/hub/2021/02/25/957d75f3-a76d-4f0b-9762-bb705e780b29/coinbase-crypto-cryptocurrency-bitcoin-trading-3047.jpg?auto=webp&fit=crop&height=362&width=644",
        id:"1"
    },
    {
        name:"Trezor",
        rating:4.5,
        rank:"2",
        description:`
        Trezor's new user interface, Trezor Suite, just came out earlier this month, replacing the company's Wallet Web app. This analysis reflects our initial impression of a new product, therefore. But Trezor has been around for quite some time, established back in 2011 as a subsidiary of Czech-based SatoshiLabs. 
        The $255 Model T is Trezor's second-generation hardware wallet, and it comes with many of the same features as the Ledger Nano X, detailed below. One major difference is that Trezor's software is completely open-source, which affords some additional protection -- theoretically, at least: The code that powers the wallet is available for scrutiny, and, the thinking goes, sunlight is the best disinfectant. 
        Trezor Suite is designed to run natively on your desktop, which generally provides greater security than a web-based app, though you can also access Trezor Suite through the company's website. Trezor wallets currently support more than 1,800 coins and tokens, and you can make transactions directly in Trezor Suite with the company's integrated exchange. 
        Shaped like an old-school stopwatch, the Model T comes with a touchscreen and a USB cable to connect to your computer; it also features a microSD card if you want to add encrypted storage directly to your hardware wallet. It does not feature Bluetooth support, however -- an omission that some security advocates prefer, as Bluetooth connectivity could be an attack vector for hackers to exploit. 
        `,
        website:"https://shop.trezor.io/",
        image:"https://www.cnet.com/a/img/resize/b0f6b8b2e6deb6df6b1426a0b82568189b471d28/hub/2021/07/26/2700867e-b6ae-48e9-9ff1-fac516db3a45/trezor-logo-1.png?auto=webp&fit=crop&height=362&width=644",
        id:"2"
    },
    {
        name:"Exodus",
        rating:4.5,
        rank:"3",
        description:`
        Exodus is a hot wallet, which means it's a software wallet that's connected to the internet; but it's noncustodial, which means that only you have access to your private key -- a 12-word password phrase that protects access to your crypto assets. 
        The Exodus wallet is designed to run on Mac, Windows and Linux computers, though there's a companion app available for Android and iOS devices. The desktop user interface is slick and easy to learn. Your wallet is seamlessly integrated into the Exodus exchange, so it's easy to make transactions. 
        Exodus supports more than 260 types of cryptocurrency including bitcoin, ether, tether USD and dogecoin. But the exchange has some noteworthy limits: If you want to purchase crypto with US dollars and store it in the Exodus wallet, you'll need to first purchase the asset on a centralized crypto exchange, such as Coinbase, and then transfer the assets to Exodus. The app version allows purchases of bitcoin with US dollars. And once you have an asset in your wallet, it can be easily exchanged for other supported assets. While the wallet itself is free to use, Exodus charges a fee for transactions made via its exchange.
        Hot storage wallets are generally considered less secure than cold storage wallets, and some Exodus users may eventually want to upgrade to cold storage. The good news: Exodus is fully compatible with Trezor's One and Model T hardware.
        `,
        website:"https://www.exodus.com/",
        image:"https://www.cnet.com/a/img/resize/37acadee07457e376227e5a5c8c2848785d71e16/hub/2021/07/26/2a85a0f6-393f-4719-9da2-6204a7ca95ec/exodus.png?auto=webp&fit=crop&height=362&width=644",
        id:"3"
    },
    {
        name:"Mycelium",
        rating:4,
        rank:"4",
        description:`
        Mycelium has been around since the beginning of the crypto era, and the Mycelium wallet is one of the oldest and best-known bitcoin wallets. This is a mobile-only wallet -- there is currently no desktop version -- that supports both Android and iOS. 
        The Mycelium wallet has an appealingly simple interface but it supports fewer kinds of crypto than others profiled here: You can send and receive bitcoin, ether and ERC-20 tokens such as tether USD, USD coin and binance USD -- but not the hundreds of esoteric coins that have been developed over the past few years. You can buy and sell bitcoin directly in the app, and Mycelium lets you buy bitcoin with regular fiat currency. 
        The Mycelium wallet is noncustodial, so you'll have sole access to your private key and PIN. This wallet is also the only hot storage wallet on our list that's completely open-source. Though there are security advantages in that, it also comes with limited tech support options; basically, if you get stuck, you can submit a help ticket to the email address listed at the bottom of the webpage. 
        For more advanced users, Mycelium supports QR codes, allows you to set custom transaction fees and offers compatibility with hardware wallets from Trezor, Ledger and KeepKey. 
        `,
        website:"https://wallet.mycelium.com/",
        image:"https://www.cnet.com/a/img/resize/a4e7d830edc9a3943c3ba160d30bfc66e1102468/hub/2018/03/29/782b5709-b668-4f72-937f-31eb1c1a06de/mycelium.png?auto=webp&fit=crop&height=362&width=644"
    },
    {
        name:"numberfive",
        rating:4,
        rank:"5",
        description:"asdadssada",
        website:"asdasdasdsa",
        image:"",
        id:"5"
    },
    {
        name:"numbersix",
        rating:3.5,
        rank:"6",
        description:"asdadssada",
        website:"asdasdasdsa",
        image:"",
        id:"6"
    }
]

export default walletsData