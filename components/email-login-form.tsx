// components/email-login-form.js or integrate this directly into your existing login page
"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function EmailLoginForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('email', { email, redirect: false });
        if (result?.error) {
            alert(result.error);
        } else {
            alert('Check your email for the sign-in link!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input" // Apply your own input styling
            />
            <button type="submit" className="button">Continue</button> {/* Apply your own button styling */}
        </form>
    );
}

