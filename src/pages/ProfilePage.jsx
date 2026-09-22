import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  MapPin, 
  Package, 
  ShieldCheck, 
  Plus, 
  Check, 
  LogOut, 
  Mail, 
  Phone,
  LayoutDashboard,
  Building,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
  const { user, isAdmin, logout, addAddress } = useAuth();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'addresses'

  // New Address Form State
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddr, setNewAddr] = useState({
    type: 'Home',
    name: user?.name || '',
    street: '',
    city: 'Dubai',
    state: 'Dubai',
    pincode: '00000',
    phone: user?.phone || ''
  });

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (!newAddr.street) return;
    addAddress(newAddr);
    setShowAddAddress(false);
    setNewAddr({ type: 'Home', name: user?.name || '', street: '', city: 'Dubai', state: 'Dubai', pincode: '00000', phone: user?.phone || '' });
  };

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-4 px-4 bg-slate-50 dark:bg-[#090d16]">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Please Sign In</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">You need to be logged in to view your profile and saved addresses.</p>
        <Link to="/login" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-semibold text-white shadow-sm transition-colors">
          Go to Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Profile Card */}
        <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
              />
              <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 bg-blue-600 text-white font-semibold text-[10px] rounded-full uppercase">
                {user.role}
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">{user.name}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> {user.email}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> {user.phone}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Link
              to="/orders"
              className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-colors"
            >
              <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" /> My Orders
            </Link>

            {isAdmin && (
              <Link
                to="/admin"
                className="px-4 py-2 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" /> Admin Panel
              </Link>
            )}

            <button
              onClick={logout}
              className="px-4 py-2 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 border border-rose-200 dark:border-rose-800 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-5 py-3 border-b-2 flex items-center gap-2 transition-colors -mb-px ${
              activeTab === 'profile'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <User className="w-4 h-4" /> Account Details
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-5 py-3 border-b-2 flex items-center gap-2 transition-colors -mb-px ${
              activeTab === 'addresses'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <MapPin className="w-4 h-4" /> Saved Addresses ({user.addresses?.length || 0})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3">
                Personal Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Full Name</span>
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">{user.name}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Email Address</span>
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">{user.email}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Phone Number</span>
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">{user.phone}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3">
                Security & Account Status
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">Two-Factor Authentication</span>
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                    ACTIVE
                  </span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Password</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Protected & Encrypted</p>
                  </div>
                  <Link to="/forgot-password" className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Change
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white">Your Delivery Addresses</h3>
              <button
                onClick={() => setShowAddAddress(!showAddAddress)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4" /> Add New Address
              </button>
            </div>

            {/* Add Address Form Modal / Inline */}
            {showAddAddress && (
              <form onSubmit={handleSaveAddress} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 space-y-4 shadow-md">
                <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">Add New Address</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Address Label</label>
                    <select
                      value={newAddr.type}
                      onChange={(e) => setNewAddr({ ...newAddr, type: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Recipient Name</label>
                    <input
                      type="text"
                      required
                      value={newAddr.name}
                      onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      placeholder="Flat no., Building, Street name"
                      value={newAddr.street}
                      onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">City / Area</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Downtown Dubai, Business Bay"
                      value={newAddr.city}
                      onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Emirate & Makani / PO Box</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={newAddr.state}
                        onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                      >
                        {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map((em) => (
                          <option key={em} value={em}>{em}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Makani / PO Box"
                        value={newAddr.pincode}
                        onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddAddress(false)}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-semibold text-white shadow-sm transition-colors"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            )}

            {/* Address Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.addresses?.map((addr) => (
                <div key={addr.id} className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 relative space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 rounded-full font-semibold text-[10px] flex items-center gap-1">
                      {addr.type === 'Home' ? <Home className="w-3 h-3" /> : <Building className="w-3 h-3" />}
                      {addr.type}
                    </span>
                    {addr.isDefault && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[10px] flex items-center gap-1">
                        <Check className="w-3 h-3" /> Default Address
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">{addr.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{addr.street}, {addr.city}, {addr.state} - {addr.pincode}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">Phone: {addr.phone}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
