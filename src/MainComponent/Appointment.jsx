import React from 'react';

function Appointment() {
  return (
    <div className="w-full max-h-[85vh] overflow-y-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-[purple] mb-4">
        Schedule an Appointment
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 sm:px-2">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Full Name</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[purple]"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Email Address</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[purple]"
            placeholder="example@email.com"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Phone Number</label>
          <input
            type="tel"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[purple]"
            placeholder="+234 801 234 5678"
            required
          />
        </div>

        {/* Service Type */}
        <div className="flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Service Type</label>
          <select
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select a service</option>
            <option value="hr-consulting">HR Consulting</option>
            <option value="compliance">Compliance Audit</option>
            <option value="training">Workforce Training</option>
            <option value="recruitment">Recruitment Services</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Preferred Date</label>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Preferred Time</label>
          <input
            type="time"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2 flex flex-col">
          <label className="mb-1 text-xs sm:text-sm text-gray-700">Additional Notes</label>
          <textarea
            rows="2"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tell us more about your needs..."
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-[purple] text-white py-2 rounded-lg hover:bg-[purple] transition-all text-sm"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
