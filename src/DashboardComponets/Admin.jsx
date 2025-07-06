import React, { useState } from 'react';
import Welcome from '../MenuComponent/Welcome';
import BlogManager from '../MenuComponent/BlogManager';
import Upload from '../MenuComponent/Upload';
import Message from '../MenuComponent/Message';

function Admin() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Welcome />;
      case 'blogs':
        return <BlogManager />;
      case 'works':
        return <Upload />;
      case 'contacts':
        return <Message />;
      default:
        return <div>Select a section from the menu.</div>;
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col md:flex-row">
      {/* Mobile Top Dropdown Menu */}
      <div className="md:hidden bg-[#af08af] text-white px-4 py-4">
        <label className="block text-sm font-medium mb-2">Select Page</label>
        <select
          className="w-full bg-white text-black rounded px-3 py-2"
          value={activePage}
          onChange={(e) => setActivePage(e.target.value)}
        >
          <option value="dashboard">🏠 Dashboard</option>
          <option value="blogs">📰 Blog Manager</option>
          <option value="works">📸 Upload Works</option>
          <option value="contacts">📥 Contact Messages</option>
        </select>
      </div>

      {/* Sidebar (Desktop) */}
      <div className="hidden md:flex md:flex-col w-60 bg-[#af08af] text-white h-screen p-6">
        <h2 className="text-xl font-bold mb-8">AGILE360 Admin</h2>
        <nav className="flex flex-col space-y-4">
          {[
            { key: 'dashboard', label: '🏠 Dashboard' },
            { key: 'blogs', label: '📰 Blog Manager' },
            { key: 'works', label: '📸 Upload Works' },
            { key: 'contacts', label: '📥 Contact Messages' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActivePage(key)}
              className={`text-left transition hover:text-yellow-300 ${
                activePage === key ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              {label}
            </button>
          ))}
          <button className="mt-6 text-left text-red-300 hover:text-red-500">
            🚪 Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
  );
}

export default Admin;
