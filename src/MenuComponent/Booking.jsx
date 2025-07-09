import React, { useEffect, useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaTrash
} from 'react-icons/fa';

function Booking() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  const fetchAppointments = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/appointments');
      if (!res.ok) throw new Error('Failed to fetch appointments');
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      setStatus('❌ Failed to load appointments');
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this appointment?');
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Delete failed');

      // Remove from state
      setAppointments((prev) => prev.filter((appt) => appt._id !== id));
    } catch (err) {
      alert('❌ Failed to delete appointment');
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="w-full max-h-[85vh] overflow-y-auto px-4 py-4">
      <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">
        Appointment Messages
      </h2>

      {status && <p className="text-red-500 text-center">{status}</p>}

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center">No appointments found.</p>
      ) : (
        appointments.map((appt) => (
          <div key={appt._id} className="border p-4 mb-3 rounded shadow bg-white relative">
            <p className="font-bold text-purple-700 flex items-center gap-2">
              <FaUser /> {appt.fullName}
            </p>
            <p className="text-sm"><FaEnvelope className="inline" /> {appt.email}</p>
            <p className="text-sm"><FaPhone className="inline" /> {appt.phone}</p>
            <p className="text-sm"><strong>Service:</strong> {appt.service}</p>
            <p className="text-sm flex items-center gap-2">
              <FaCalendarAlt /> {appt.date} <FaClock className="ml-2" /> {appt.time}
            </p>
            {appt.notes && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Notes:</strong> {appt.notes}
              </p>
            )}

            <button
              onClick={() => deleteAppointment(appt._id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-sm"
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Booking;
