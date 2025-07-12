import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Message() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          setError('Admin not logged in');
          return;
        }

        const res = await fetch('https://agibackend.onrender.com/api/admin/messages', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch messages');
        const data = await res.json();
        setMessages(data.data);
      } catch (err) {
        console.error(err);
        setError('Unable to load messages. Please try again later.');
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`https://agibackend.onrender.com/api/admin/messages/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error('Failed to delete message:', err);
    }
  };

  return (
    <div className="w-full max-h-[85vh] overflow-y-auto px-4 py-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📥 Contact Messages</h2>

      {error && <div className="text-red-600 text-center py-4">{error}</div>}

      {messages.length === 0 && !error ? (
        <div className="text-gray-500 text-center py-10">No messages received yet.</div>
      ) : (
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-purple-700">{msg.name}</h3>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-2"><strong>Email:</strong> {msg.email}</p>
              <p className="text-sm text-gray-500 mb-2"><strong>Service:</strong> {msg.subject || 'Not specified'}</p>
              {msg.phone && (
                <p className="text-sm text-gray-500 mb-2"><strong>Phone:</strong> {msg.phone}</p>
              )}
              <p className="text-gray-700 mb-2">{msg.message}</p>
              <p className="text-xs text-gray-400">
                📅 {new Date(msg.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Message;
