import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema: Yeh check karega ki NGO ne form sahi bhara hai ya nahi
const ngoSchema = z.object({
  ngoName: z.string().min(3, "NGO Name must be at least 3 characters"),
  registrationNumber: z.string().min(5, "Valid Registration Number is required"),
  cause: z.string().min(1, "Please select a cause"),
  description: z.string().min(20, "Please write at least 20 characters about your work"),
});

export default function NgoRegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ngoSchema)
  });

  // Jab form submit hoga toh yeh function chalega
  const onSubmit = (data) => {
    console.log("New NGO Registered:", data);
    alert("NGO Listed Successfully! (Check Console)");
    // Phase 2 mein hum yahan se backend ko data bhejenge
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg mt-8 text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">List Your NGO</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">NGO Name</label>
          <input 
            {...register("ngoName")} 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none" 
            placeholder="e.g. Save Earth Foundation"
          />
          {errors.ngoName && <p className="text-red-400 text-sm mt-1">{errors.ngoName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Govt. Registration Number (Darpan ID)</label>
          <input 
            {...register("registrationNumber")} 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none" 
            placeholder="e.g. UP/2021/0123456"
          />
          {errors.registrationNumber && <p className="text-red-400 text-sm mt-1">{errors.registrationNumber.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Primary Cause</label>
          <select 
            {...register("cause")} 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          >
            <option value="">Select a Cause...</option>
            <option value="education">Education & Literacy</option>
            <option value="health">Healthcare & Medical</option>
            <option value="environment">Environment & Nature</option>
            <option value="food">Food & Hunger</option>
          </select>
          {errors.cause && <p className="text-red-400 text-sm mt-1">{errors.cause.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Brief Description</label>
          <textarea 
            {...register("description")} 
            rows="3"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none" 
            placeholder="What does your NGO do?"
          />
          {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Register NGO
        </button>
      </form>
    </div>
  );
}