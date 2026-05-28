import { Link } from 'react-router-dom'
import { useState } from 'react'

function TakeProductsSection() {
  const [selectedSize, setSelectedSize] = useState('2')
  const [quantity, setQuantity] = useState(1)

  return (
    <section className="px-16 py-16 bg-gray-50">
      <div className="flex items-start gap-16">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Take Your Products to the Next Level with KR Customizer
          </h2>
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Don't limit your ideas. KR Customizer gives you more ways to create. From basic prints to embroidery and all-over designs, you can turn your vision into real products. Try different styles. Stand out from the crowd. Build something that feels truly yours.
          </p>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">PREMIUM</span>
            <img src="https://picsum.photos/400/350?random=5" alt="product" className="rounded-lg w-full" />
          </div>
          <div className="mt-4">
            <p className="font-bold text-gray-900 mb-1">Craftsman Essential Tee <span>$28.00</span></p>
            <p className="text-gray-500 text-sm mb-3">Heavyweight 240gsm Cotton</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">Size: {selectedSize}</span>
              <div className="flex gap-2">
                {['2','3','4','5','6'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-8 h-8 rounded border text-sm font-medium cursor-pointer ${selectedSize === s ? 'bg-red-700 text-white border-red-700' : 'border-gray-300 hover:border-gray-500'}`}
                  >{s}</button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-600">Quantity</span>
              <div className="flex items-center border rounded">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">-</button>
                <span className="px-3 py-1">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">+</button>
              </div>
            </div>
            <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded mb-3 hover:bg-yellow-500 cursor-pointer">SHOP NOW</button>
            <button className="w-full border border-gray-300 text-gray-900 font-bold py-3 rounded hover:bg-gray-50 cursor-pointer">CUSTOMIZE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShowCase() {
  return (
    <div className="font-sans">
      <section className="flex items-center justify-between px-16 py-16 bg-white">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Print on Demand in Canada - your store, your way with KR Customizer
          </h1>
          <p className="text-gray-600 mb-6 font-semibold leading-relaxed">
            Create and sell custom products shipped fast and duty-free from right here in Canada
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-gray-700">✦ Trusted by thousands of sellers</li>
            <li className="flex items-center gap-2 text-gray-700">✦ Fast delivery across provinces</li>
            <li className="flex items-center gap-2 text-gray-700">✦ No inventory, no risk</li>
          </ul>
          <Link to="/login" className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded hover:bg-yellow-500 inline-block">
            Start Your Custom Store in Canada →
          </Link>
        </div>
        <div className="w-1/2">
          <img src="https://picsum.photos/600/400" alt="hero" className="rounded-lg" />
        </div>
      </section>


      <section className="px-16 py-16 bg-gray-50">
        <div className="flex items-center gap-16">
          <div className="w-1/2">
            <img src="https://picsum.photos/500/400" alt="print on demand" className="rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Print on Demand?</h2>
            <p className="text-yellow-500 font-semibold mb-2">Your Brand, Your Designs, Zero Inventory</p>
            <p className="text-gray-600 mb-6 font-semibold leading-relaxed">
              Print on Demand is a smart ecommerce model where you sell custom-designed products, from t-shirts to mugs, and KR Customizer prints and ships after someone orders. That means no stock to manage, no high upfront costs, and full control over your brand.
            </p>
            <Link to="/login" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 inline-block">
              GET STARTED FREE
            </Link>
          </div>
        </div>
      </section>


      <section className="px-16 py-16" style={{backgroundColor: '#FEFEFE'}}>
        <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center leading-tight">
          Rule the Canadian eCommerce <br/> Market with KRCustomizer
        </h2>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <img src="https://picsum.photos/500/350" alt="customizer" className="rounded-lg w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Big Ideas. Small Ideas. We Handle Them All.
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed">
              KR Customizer helps you sell custom clothing and products without the hassle. You design. We print. We ship. Quality stays high. Every time. No matter the size of your business. Ready to sell custom products across Canada? You're in the right place.
            </p>
          </div>
        </div>
      </section>

      <section className="px-16 py-16 bg-white">
        <div className="flex items-center gap-16">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Made in Canada. Built for Canada.
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed">
              Serving Ontario, Toronto, and beyond. Our fulfillment centre in Ontario keeps things fast and smooth. Orders reach customers across Canada quickly — including Toronto and nearby cities. No surprise customs. No hidden duty fees. Just clean, reliable delivery. Every product goes through a strict quality check before shipping. So what your customers receive? Always top-notch.
            </p>
          </div>
          <div className="w-1/2">
            <img src="https://picsum.photos/500/400" alt="made in canada" className="rounded-lg w-full" />
          </div>
        </div>
      </section>

      <section className="px-16 py-16 bg-gray-50">
        <div className="flex items-start gap-16">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose KR Customizer for Print on Demand in Canada?
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              Starting a print-on-demand business in Canada can feel confusing. KR Customizer makes it easier. You don't have to buy products in advance. There's no inventory sitting around. Items are made only after someone places an order. That means less risk and less stress. We focus on serving Canadian sellers. Orders are fulfilled locally, so customers get their products faster. No long waits. No unnecessary delays. Pricing is simple, too. There are no setup fees and no monthly plans. You pay only when you actually sell something.
            </p>
            <p className="text-gray-600 font-semibold leading-relaxed">
              With reliable print quality and smooth shipping, KR Customizer lets you focus on your designs and marketing. We handle the rest, quietly in the background.
            </p>
          </div>
          <div className="w-1/2">
            <img src="https://picsum.photos/500/400" alt="why choose" className="rounded-lg w-full" />
          </div>
        </div>
      </section>
      <section className="px-16 py-16 bg-white">
        <div className="flex gap-16">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              How to Start Your Print-on-Demand Business in Canada?
            </h2>
            <p className="text-gray-500 text-sm font-semibold mb-8">
              Everything You Need to Know to Start and Grow Your POD Business in the Canadian Market.
            </p>
            <img src="https://picsum.photos/500/400" alt="products" className="rounded-lg w-full" />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-green-600 font-bold text-xl">01</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-2">Design your products</h3>
              <p className="text-gray-600 text-sm font-semibold">Upload your art or use our intuitive design tools to make standout products your audience will love.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <span className="text-red-500 font-bold text-xl">02</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-2">Set up your online store</h3>
              <p className="text-gray-600 text-sm font-semibold">Connect your store to Shopify, WooCommerce, or your favourite platform, all with seamless integrations.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <span className="text-purple-500 font-bold text-xl">03</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-2">Add Products & Billings</h3>
              <p className="text-gray-600 text-sm font-semibold">Once your designs are ready, add the products to your store. Set your prices the way you want. Everything stays simple and clear in Canadian dollars. No complicated steps. No confusion.</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <span className="text-yellow-600 font-bold text-xl">04</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-2">Launch and Sell</h3>
              <p className="text-gray-600 text-sm font-semibold">Before going live, you can order samples to check the print and quality yourself. When you're happy, launch your store. Start selling to your customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-16 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Print-on-Demand for Creators, <br /> Businesses & Brands
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <img src="https://picsum.photos/400/200?random=1" alt="creators" className="rounded-lg w-full mb-6" />
            <h3 className="font-bold text-gray-900 text-lg mb-3">For Creators</h3>
            <p className="text-gray-600 text-sm font-semibold mb-6">
              Creators can turn their ideas into real products. No need to take tension about printing or shipping. Just create and sell. The rest is handled for you.
            </p>
            <Link to="/login" className="border border-yellow-400 text-yellow-500 font-semibold px-5 py-2 rounded hover:bg-yellow-400 hover:text-black text-sm inline-block">
              Start Selling Your Designs
            </Link>
          </div>
          <div className="bg-white-400 rounded-xl p-8">
            <img src="https://picsum.photos/400/200?random=2" alt="businesses" className="rounded-lg w-full mb-6" />
            <h3 className="font-bold text-gray-900 text-lg mb-3">For Small & Medium Businesses</h3>
            <p className="text-gray-800 text-sm font-semibold mb-6">
              Small and medium businesses can grow without pressure. You don't have to store products or manage stock. Custom items are made only when someone orders. It keeps things simple and stress-free.
            </p>
            <Link to="/login" className="bg-yellow-400 text-white font-semibold px-5 py-2 rounded hover:bg-yellow-600 text-sm inline-block">
              Start Your Store Today
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8">
            <img src="https://picsum.photos/400/200?random=3" alt="brands" className="rounded-lg w-full mb-6" />
            <h3 className="font-bold text-gray-900 text-lg mb-3">For Large Brands</h3>
            <p className="text-gray-600 text-sm font-semibold mb-6">
              Large brands can expand their product range easily. Quality stays consistent. Orders are handled smoothly. You can scale your business without slowing down.
            </p>
            <Link to="/login" className="border border-yellow-400 text-yellow-500 font-semibold px-5 py-2 rounded hover:bg-yellow-400 hover:text-black text-sm inline-block">
              Scale Your Brand Now
            </Link>
          </div>
        </div>
      </section>

      <section className="px-16 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why More Canadian Brands Trust KR Customizer
        </h2>
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="border-r border-gray-200 pr-8">
            <div className="text-2xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">High-Quality Products</h3>
            <p className="text-gray-600 text-sm font-semibold">We focus on quality from the start. Products are made using professional and reliable print methods. Your designs look clean, sharp, and professional.</p>
          </div>
          <div className="border-r border-gray-200 pr-8">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Fast, Local Shipping</h3>
            <p className="text-gray-600 text-sm font-semibold">Orders are shipped from within Canada. This means faster delivery and happier customers. No long waits or delays.</p>
          </div>
          <div>
            <div className="text-2xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Less Waste, No Extra Stock</h3>
            <p className="text-gray-600 text-sm font-semibold">Products are made only after a sale happens. Nothing sits in storage. Nothing goes to waste.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div></div>
          <div className="border-r border-gray-200 pr-8">
            <div className="text-2xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">No Minimum Orders</h3>
            <p className="text-gray-600 text-sm font-semibold">Sell one item or sell in bulk. There are no limits. You can start small with zero risk.</p>
          </div>
          <div>
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">No Setup Fees</h3>
            <p className="text-gray-600 text-sm font-semibold">Signing up is free. Designing products is free. Connecting your store is free. You only pay when you make a sale.</p>
          </div>
        </div>
      </section>

      <TakeProductsSection />

      <section className="px-16 py-16 bg-white">
        <div className="flex items-center gap-16">
          <div className="w-1/2">
            <img src="https://picsum.photos/500/400?random=6" alt="market" className="rounded-lg w-full" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Market, Your Choice: Local or Global
            </h2>
            <p className="text-gray-600 text-sm font-semibold leading-relaxed">
              You decide where to sell your products. Focus on Canada for fast delivery and no customs fees, so your customers get their orders quickly. Or take your business global and reach buyers all over the world using our reliable fulfillment network. You don't have to take tension about logistics because KR Customizer handles printing, packing, and shipping. You just create, sell, and grow your brand with ease.
            </p>
          </div>
        </div>
      </section>

 <section className="px-16 py-16 bg-white">
  <div className="flex items-center gap-16">
    <div className="w-1/2">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Connect Your Store to Shopify, BigCommerce, WooCommerce, & More in Canada
      </h2>

      <p className="text-gray-600 text-sm font-semibold leading-relaxed">
        KR Customizer makes running your store simple. You can connect it to Shopify, Etsy,
        WooCommerce, BigCommerce and more. All orders sync automatically. No manual work.
        No mistakes. Whether you sell in Toronto, Ontario, or nearby cities, your customers
        get fast, reliable shipping. You can concentrate on design and sales while KR
        Customizer keeps everything organized in one place.
      </p>
    </div>
         </div>
       </section>
       <section className="px-16 py-16 bg-[#f7f3f7]">
  <div className="flex items-center gap-16">
    
    <div className="w-1/2">
      <img
        src="https://picsum.photos/600/400?random=9"
        alt="shipping"
        className="rounded-2xl w-80"
      />
    </div>

    <div className="w-1/2">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Start Selling Custom Products Across Canada
      </h2>

      <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-6">
        Want to start a Canadian print-on-demand business? No need to
        worry about printing, shipping, fulfillment, and taxes. Grow your
        brand with smart shipping and promotion. Focus on product creation.
        We handle logistics. Selling online has never been easier.
      </p>

      <Link
        to="/login"
        className="bg-yellow-400 text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 inline-block"
      >
        Get Started →
      </Link>
    </div>

  </div>
</section>
    </div>
  )
}

export default ShowCase