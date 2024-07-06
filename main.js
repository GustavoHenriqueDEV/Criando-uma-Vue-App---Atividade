const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: "its is socks",
            image: './assets/images/socks_green.jpg',
            url: "https://www.amazon.com.br/Pares-Meias-Esportiva-Algod%C3%A3o-Original/dp/B07RML3H5T/ref=asc_df_B07RML3H5T/?tag=googleshopp00-20&linkCode=df0&hvadid=405678917935&hvpos=&hvnetw=g&hvrand=2976682021886224058&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031442&hvtargid=pla-893290818879&psc=1&mcid=1448a48e62c53418be116153e7986f76",
            inStock: true,
            inventory: 1,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ],
            sizes: ["S", "X", "L"]
        }
    }
})
