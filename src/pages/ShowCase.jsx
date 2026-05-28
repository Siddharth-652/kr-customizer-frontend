import { Link } from "react-router-dom"
import { useState } from "react"

import heroCap from "../assets/hero cap.png"
import manImg from "../assets/man.png"
import tshirtImg from "../assets/T-sirt.png"
import heroTshirt from "../assets/hero t-sirt.png"
import girlImg from "../assets/girl.png"
import cupImg from "../assets/cup img.png"
import briefcaseImg from "../assets/briefcase.png"
import brandImg from "../assets/brand.png"
import blogImg from "../assets/blog.png"

function TakeProductsSection() {
  const [selectedSize, setSelectedSize] = useState("1")
  const [quantity, setQuantity] = useState(2)

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Take Your Products to the Next <br /> Level with KR Customizer
          </h2>
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
          Don’t limit your ideas. KR Customizer gives you more ways to create. From basic prints to embroidery and all-over designs, you can turn your vision into real products. Try different styles. Stand out from the crowd. Build something that feels truly yoursWant to start a Canadian print-on-demand business? Not as hard as you think. Our services include shipping, fulfillment, and taxes. Grow your brand with smart pricing and promotion. Focus on product creation. We handle logistics. Selling online has never been easier..
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative">
            <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              PREMIUM
            </span>
            <img
              src={tshirtImg}
              alt="product"
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>

          <div className="mt-4 max-w-md mx-auto">
            <p className="font-bold text-gray-900 mb-1">
              Craftsman Essential Tee <span>$28.00</span>
            </p>
            <p className="text-gray-500 text-sm mb-3">Heavyweight 240gsm Cotton</p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">Size: {selectedSize}</span>
              <div className="flex gap-2">
                {["2", "3", "4", "5", "6"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-8 h-8 rounded border text-sm font-medium cursor-pointer ${
                      selectedSize === s
                        ? "bg-red-700 text-white border-red-700"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-600">Quantity</span>
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded mb-3 hover:bg-yellow-500 cursor-pointer">
              SHOP NOW
            </button>
            <button className="w-full border border-gray-300 text-gray-900 font-bold py-3 rounded hover:bg-gray-50 cursor-pointer">
              CUSTOMIZE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShowCase() {
  return (
    <div className="font-sans overflow-hidden">
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
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

            <Link
              to="/login"
              className="bg-yellow-400 text-black font-semibold px-6 md:px-8 py-3 rounded hover:bg-yellow-500 inline-block"
            >
              Start Your Custom Store in Canada →
            </Link>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={heroCap}
              alt="hero"
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src={manImg}
              alt="print on demand"
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What is Print on Demand?
            </h2>
            <p className="text-yellow-500 font-semibold mb-2">
              Your Brand, Your Designs, Zero Inventory
            </p>
            <p className="text-gray-600 mb-6 font-semibold leading-relaxed">
              Print on Demand is a smart e-commerce model where you sell custom-designed products, from t-shirts to mugs, and KR Customizer prints and ships them only after someone orders. That means no stock to manage, no high upfront costs, and full control over your brand.
            </p>
            <Link
              to="/login"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 inline-block"
            >
              GET STARTED FREE
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center leading-tight">
            Rule the Canadian eCommerce <br /> Market with KRCustomizer
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <img
                src={tshirtImg}
                alt="customizer"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Big Ideas. Small Ideas. We Handle Them All.
              </h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
               KR Customizer helps you sell custom clothing and products without the hassle. You design. We print. We ship. Quality stays high. Every time. No matter the size of your business. Ready to sell custom products across Canada? You’re in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {[
        ["Made in Canada. Built for Canada.", "Serving Ontario, Toronto, and beyond. Our fulfillment centre in Ontario keeps things fast and smooth. Orders reach customers across Canada quickly — including Toronto and nearby cities. No surprise customs. No hidden duty fees. Just clean, reliable delivery. Every product goes through a strict quality check before shipping. So what your customers receive? Always top-notch.", 
          "made in canada"],
        ["Why Choose KR Customizer for Print on Demand in Canada?", "Starting a print-on-demand business in Canada can feel confusing. KR Customizer makes it easier. You don’t have to buy products in advance. There’s no inventory sitting around. Items are made only after someone places an order. That means less risk and less stress.We focus on serving Canadian sellers. Orders are fulfilled locally, so customers get their products faster. No long waits. No unnecessary delays. Pricing is simple, too. There are no setup fees and no monthly plans. You pay only when you actually sell something.With reliable print quality and smooth shipping, KR Customizer lets you focus on your designs and marketing. We handle the rest, quietly in the background..", "why choose"],
      ].map(([title, text, alt], index) => (
        <section
          key={title}
          className={`px-4 md:px-8 lg:px-16 py-12 md:py-16 ${index === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className={`max-w-6xl mx-auto flex flex-col ${index === 0 ? "lg:flex-row" : "lg:flex-row"} items-center gap-8 lg:gap-16`}>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-600 font-semibold leading-relaxed">{text}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
            src={heroTshirt}
                alt={alt}
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              How to Start Your Print-on-Demand Business in Canada?
            </h2>
            <p className="text-gray-500 text-sm font-semibold mb-8">
              Everything You Need to Know to Start and Grow Your POD Business in the Canadian Market.
            </p>
            <img
              src={cupImg}
              alt="products"
              className="rounded-lg w-fullmx-auto"/></div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {[
              ["01", "Design your products", "Upload your art or use our intuitive design tools to make standout products your audience will love.", "bg-green-50", "text-green-600"],
              ["02", "Set up your online store", "Connect your store to Shopify, WooCommerce, or your favourite platform.", "bg-red-50", "text-red-500"],
              ["03", "Add Products & Billings", "Once your designs are ready, add the products to your store.", "bg-purple-50", "text-purple-500"],
              ["04", "Launch and Sell", "Before going live, you can order samples to check the print and quality yourself.", "bg-yellow-50", "text-yellow-600"],
            ].map(([num, title, text, bg, color]) => (
              <div key={num} className={`${bg} rounded-xl p-5 md:p-6`}>
                <span className={`${color} font-bold text-xl`}>{num}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
      Print-on-Demand for Creators, <br /> Businesses & Brands
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        [
          blogImg,
          "For Creators",
          "Creators can turn their ideas into real products. No need to take tension about printing or shipping.",
          "Start Selling Your Designs",
        ],
        [
          briefcaseImg,
          "For Small & Medium Businesses",
          "Small and medium businesses can grow without pressure. You don't have to store products or manage stock.",
          "Start Your Store Today",
        ],
        [
          brandImg,
          "For Large Brands",
          "Large brands can expand their product range easily. Quality stays consistent.",
          "Scale Your Brand Now",
        ],
      ].map(([img, title, text, btn]) => (
        <div key={title} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <img
            src={img}
            alt={title}
            className="w-16 h-16 object-contain mb-6"
          />

          <h3 className="font-bold text-gray-900 text-xl mb-3">
            {title}
          </h3>

          <p className="text-gray-600 text-sm font-semibold mb-6">
            {text}
          </p>

          <button className="border border-yellow-400 text-gray-900 font-semibold px-5 py-3 rounded-lg hover:bg-yellow-400 transition text-sm">
            {btn}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Why More Canadian Brands Trust KR Customizer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["🔄", "High-Quality Products", "We focus on quality from the start. Your designs look clean, sharp, and professional."],
              ["💡", "Fast, Local Shipping", "Orders are shipped from within Canada. This means faster delivery."],
              ["✅", "Less Waste, No Extra Stock", "Products are made only after a sale happens."],
              ["🔄", "No Minimum Orders", "Sell one item or sell in bulk. There are no limits."],
              ["💡", "No Setup Fees", "Signing up is free. You only pay when you make a sale."],
            ].map(([icon, title, text]) => (
              <div key={title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TakeProductsSection />

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/500/400?random=6"
              alt="market"
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Market, Your Choice: Local or Global
            </h2>
            <p className="text-gray-600 text-sm font-semibold leading-relaxed">
             You decide where to sell your products. Focus on Canada for fast delivery and no customs fees, so your customers get their orders quickly. Or take your business global and reach buyers all over the world using our reliable fulfillment network. You don’t have to take tension about logistics because KR Customizer handles printing, packing, and shipping. You just create, sell, and grow your brand with ease.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Connect Your Store to Shopify, BigCommerce, WooCommerce, & More in Canada
            </h2>
            <p className="text-gray-600 text-sm font-semibold leading-relaxed">
             KR Customizer makes running your store simple. You can connect it to Shopify, Etsy, WooCommerce, BigCommerce and more. All orders sync automatically. No manual work. No mistakes. Whether you sell in Toronto, Ontario, or nearby cities, your customers get fast, reliable shipping. These interfaces simplify corporate management and save time. You can concentrate on design and sales. Whether your customers are across Canada or worldwide, everything stays organized in one place. Setting up your store is quick. Running it is stress-free. With KR Customizer, managing your online shop has never been this simple.
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-50 rounded-2xl p-6 shadow-sm">
            {["Shopify", "WooCommerce", "BigCommerce"].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 mb-4 flex items-center justify-between shadow-sm">
                <span className="font-bold text-gray-800">{item}</span>
                <span className="text-green-500 font-bold">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-[#f7f3f7]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src={girlImg}
              alt="shipping"
              className="rounded-2xl w-full max-w-md mx-auto"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Start Selling Custom Products Across Canada
            </h2>
            <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-6">
             Want to start a Canadian print-on-demand business? Not as hard as you think. Our services include shipping, fulfillment, and taxes. Grow your brand with smart pricing and promotion. Focus on product creation. We handle logistics. Selling online has never been easier.
            </p>
            <Link
              to="/login"
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded hover:bg-yellow-500 inline-block">Get Started → </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShowCase