import React, { useState } from 'react';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { Search } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const AdminUsersPage = () => {
  const [users] = useState([
    {
      id: 'usr-1',
      name: 'Alexander Pierce',
      email: 'alex.pierce@techverse.io',
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      ordersCount: 4,
      totalSpent: 14290,
      dateJoined: '2026-01-15'
    },
    {
      id: 'usr-2',
      name: 'Tariq Mansoor',
      email: 'tariq.mansoor@gmail.com',
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      ordersCount: 2,
      totalSpent: 8948,
      dateJoined: '2026-03-22'
    },
    {
      id: 'usr-3',
      name: 'Sarah Al-Hashemi',
      email: 'sarah.hashemi@outlook.com',
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      ordersCount: 1,
      totalSpent: 649,
      dateJoined: '2026-05-10'
    },
    {
      id: 'usr-4',
      name: 'Rashid Khan',
      email: 'rashid.khan@yahoo.com',
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      ordersCount: 3,
      totalSpent: 5148,
      dateJoined: '2026-06-04'
    },
    {
      id: 'usr-admin',
      name: 'Nazeem Admin',
      email: 'nazeemnazeem449@gmail.com',
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      ordersCount: 0,
      totalSpent: 0,
      dateJoined: '2026-09-01'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(
    (u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-[#090d16] flex text-slate-900 dark:text-slate-100 transition-colors">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-10 space-y-6 overflow-y-auto">
        
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Customer Accounts
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Registered customers, staff privileges, and purchase histories.
            </p>
          </div>
          
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search user by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 overflow-x-auto shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="uppercase text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-700">
              <tr>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Role</th>
                <th className="pb-3">Orders</th>
                <th className="pb-3">Total Spend</th>
                <th className="pb-3">Joined Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 font-medium">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={u.avatar} alt="" className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{u.name}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                        u.role === 'admin'
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3.5 font-semibold text-slate-900 dark:text-white">{u.ordersCount} orders</td>
                  <td className="py-3.5 font-semibold text-slate-900 dark:text-white">
                    {formatPrice(u.totalSpent)}
                  </td>
                  <td className="py-3.5 text-slate-500 dark:text-slate-400">{u.dateJoined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};
