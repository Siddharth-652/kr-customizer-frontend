
function ShowCase() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="flex items-center justify-between px-16 py-16 bg-white">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Print on Demand in Canada - your store, your way with KR Customizer
          </h1>
          <p className="text-gray-600 mb-6">
            Create and sell custom products shipped fast and duty-free from right here in Canada
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-gray-700">✦ Trusted by thousands of sellers</li>
            <li className="flex items-center gap-2 text-gray-700">✦ Fast delivery across provinces</li>
            <li className="flex items-center gap-2 text-gray-700">✦ No inventory, no risk</li>
          </ul>
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded hover:bg-yellow-500">
            Start Your Custom Store in Canada →
          </button>
        </div>
        <div className="w-1/2">
          <img src="https://picsum.photos/600/400" alt="hero" className="rounded-lg" />
        </div>
      </section>

    {/* print on demand */}
      <section className="px-16 py-16 bg-gray-50">
        <div className="flex items-center gap-16">
          <div className="w-1/2">
            <img src="https://picsum.photos/500/400" alt="print on demand" className="rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Print on Demand?</h2>
             <p className="text-yellow-500 font-semibold mb-2">Your Brand, Your Designs, Zero Inventory</p>
            <p className="text-gray-600 mb-6">
              Print on Demand is a smart ecommerce model where you sell custom-designed products, from t-shirts to mugs, and KR Customizer prints and ships after someone orders That means no stock to manage, no high upfront costs, and full control over your brand .
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500">
              GET STARTED FREE 
            </button>
          </div>
        </div>
          </section>
         
         
<section className="px-16 py-16 bg-gray-50">
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
      <p className="text-gray-600 leading-relaxed">
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
      <p className="text-gray-600 leading-relaxed">
        Serving Ontario, Toronto, and beyond. Our fulfillment centre in Ontario keeps things fast and smooth. Orders reach customers across Canada quickly — including Toronto and nearby cities. No surprise customs. No hidden duty fees. Just clean, reliable delivery. Every product goes through a strict quality check before shipping. So what your customers receive? Always top-notch.
      </p>
    </div>
    <div className="w-1/2">
      <img src="https://picsum.photos/500/400" alt="made in canada" className="rounded-lg w-full" />
    </div>
  </div>
</section>

    </div>
  )
}

export default ShowCase