import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { ADMIN_EMAIL, ADMIN_PASSWORD, isSuperAdminEmail } from '../constants/admin';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { addToast } = useToast();

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('techverse_user');
      return savedUser ? JSON.parse(savedUser) : {
        name: 'Alexander Pierce',
        email: 'alex.pierce@techverse.io',
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        phone: '+971 50 123 4567',
        addresses: [
          {
            id: 'addr-1',
            type: 'Home',
            name: 'Alexander Pierce',
            street: 'Apartment 1402, Al Saada Tower, Downtown',
            city: 'Dubai',
            state: 'Dubai',
            pincode: '00000',
            phone: '+971 50 123 4567',
            isDefault: true
          }
        ]
      };
    } catch (e) {
      return null;
    }
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      const savedUser = localStorage.getItem('techverse_user');
      if (!savedUser) return false;
      const parsed = JSON.parse(savedUser);
      return isSuperAdminEmail(parsed.email);
    } catch {
      return false;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('techverse_orders');
      return savedOrders ? JSON.parse(savedOrders) : [
        {
          id: 'ORD-89241',
          date: '2026-09-02T14:32:00Z',
          status: 'Delivered',
          items: [
            {
              id: 'prod-2',
              name: 'Razer BlackWidow V4 Pro Mechanical Keyboard',
              price: 649,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80'
            }
          ],
          totalAmount: 649,
          paymentMethod: 'Apple Pay',
          shippingAddress: 'Apartment 1402, Al Saada Tower, Downtown, Dubai - UAE'
        }
      ];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('techverse_user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('techverse_orders', JSON.stringify(orders));
  }, [orders]);

  const login = (email, password) => {
    const normalizedEmail = email?.trim().toLowerCase() || '';

    if (isSuperAdminEmail(normalizedEmail)) {
      if (password !== ADMIN_PASSWORD) {
        addToast('Invalid email or password.', 'error');
        return { success: false, isAdmin: false };
      }
      const adminUser = {
        name: 'Nazeem Admin',
        email: ADMIN_EMAIL,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
        phone: '+971 50 123 4567',
        addresses: []
      };
      setUser(adminUser);
      setIsAdmin(true);
      addToast(`Welcome back, ${adminUser.name}!`, 'success');
      return { success: true, isAdmin: true };
    }

    const mockUser = {
      name: 'Alexander Pierce',
      email: normalizedEmail || 'alex.pierce@techverse.io',
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      phone: '+971 50 123 4567',
      addresses: [
        {
          id: 'addr-1',
          type: 'Home',
          name: 'Alexander Pierce',
          street: 'Apartment 1402, Al Saada Tower, Downtown',
          city: 'Dubai',
          state: 'Dubai',
          pincode: '00000',
          phone: '+971 50 123 4567',
          isDefault: true
        }
      ]
    };
    setUser(mockUser);
    setIsAdmin(false);
    addToast(`Welcome back, ${mockUser.name}!`, 'success');
    return { success: true, isAdmin: false };
  };

  const register = (userData) => {
    const newUser = {
      name: userData.name,
      email: userData.email,
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      phone: userData.phone || '+971 50 000 0000',
      addresses: []
    };
    setUser(newUser);
    setIsAdmin(false);
    addToast('Account created successfully!', 'success');
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('techverse_user');
    addToast('Logged out of TechVerse', 'info');
  };

  useEffect(() => {
    setIsAdmin(isSuperAdminEmail(user?.email));
  }, [user?.email]);

  const placeOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString(),
      status: 'Processing',
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      paymentMethod: orderData.paymentMethod,
      shippingAddress: `${orderData.address.street}, ${orderData.address.city}, ${orderData.address.state} - ${orderData.address.pincode}`
    };

    setOrders((prev) => [newOrder, ...prev]);
    addToast('Order placed successfully! Check My Orders.', 'success');
    return newOrder;
  };

  const addAddress = (newAddr) => {
    setUser((prev) => ({
      ...prev,
      addresses: [...(prev.addresses || []), { ...newAddr, id: `addr-${Date.now()}` }]
    }));
    addToast('New address saved', 'success');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        orders,
        login,
        register,
        logout,
        placeOrder,
        addAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
