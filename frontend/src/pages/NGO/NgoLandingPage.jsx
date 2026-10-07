import NgoRegistrationForm from '../../components/NGO/NgoRegistrationForm';

export default function NgoLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Scale Your NGO's Impact with Total Transparency</h1>
        <p className="text-xl max-w-2xl mx-auto text-blue-200 mb-10">
          Join India's first tamper-proof donation network. Get verified, attract premium corporate sponsors, and showcase your on-ground work flawlessly.
        </p>
        <a href="#register" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
          Join the Network Today
        </a>
      </section>

      {/* Trusted By Section (Sponsors & Partners) */}
      <section className="py-12 bg-white text-center border-b border-gray-200">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by Top Sponsors & NGOs</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-60">
          {/* Dummy Logos (In real app, you will use actual images) */}
          <div className="text-2xl font-black font-serif">Tata Trusts</div>
          <div className="text-2xl font-black font-serif">Reliance Foundation</div>
          <div className="text-2xl font-black font-serif">Goonj</div>
          <div className="text-2xl font-black font-serif">GiveIndia</div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Onboard With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-blue-800">1. List Your Projects</h3>
            <p className="text-gray-600">Break down your big goals into small, fundable checkpoints.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-blue-800">2. Upload Evidence</h3>
            <p className="text-gray-600">Upload photos and bills. Our system secures them instantly.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-blue-800">3. Build Ultimate Trust</h3>
            <p className="text-gray-600">Donors see verified checkmarks, increasing your funding speed by 3x.</p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-20 bg-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Amplify Your Cause?</h2>
          <p className="text-gray-400">Fill out the initial verification details below. Our team will review your Darpan ID within 24 hours.</p>
        </div>
        
        {/* Tumhara original form yahan smoothly embed ho gaya */}
        <NgoRegistrationForm />
      </section>

    </div>
  );
}