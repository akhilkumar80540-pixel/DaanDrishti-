import NgoRegistrationForm from '../../components/NGO/NgoRegistrationForm';

export default function NgoDashboard() {
  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">NGO Operations Center</h1>
        <p className="text-center text-gray-400 mb-8">Manage your NGO profile and verify impact.</p>
        
        {/* Yahan form render hoga */}
        <NgoRegistrationForm />
      </div>
    </div>
  );
}