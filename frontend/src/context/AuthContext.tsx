"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    email: string;
    role: 'VIEWER' | 'ADMIN' | 'SUPER_ADMIN' | 'superadmin' | 'admin'; // mapping legacy roles if needed
    name: string;
}

interface AuthContextType {
    user: User | null;
    signIn: (email: string, pass: string) => Promise<{ error: any }>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (token) {
            api.get('/auth/profile')
                .then((res: any) => setUser(res.data))
                .catch(() => {
                    localStorage.removeItem('token');
                    setUser(null);
                })
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);

    const signIn = async (email: string, pass: string) => {
        try {
            const res = await api.post('/auth/login', { email, password: pass });
            const { access_token, user } = res.data;
            localStorage.setItem('token', access_token);
            setUser(user);
            // router.push handled in component or here? Component has logic based on role.
            // Let's leave routing to component or doing it here?
            // Component logic: if user && role -> redirect.
            // So if I set user here, component effect will trigger redirect.
            return { error: null };
        } catch (err: any) {
            return { error: err.response?.data?.message || 'Login failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, signIn, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
