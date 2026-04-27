"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold">🧠 Bebe AI</h1>
        <div className="space-x-6">
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/signup" className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-20 px-8">
        <h2 className="text-5xl font-bold mb-6">
          Your AI-Powered E-Commerce Growth Engine
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Generate products, create viral ads, and automate your path to $10k/month
        </p>

        <div className="space-y-4">
          <p className="text-lg">✨ Features:</p>
          <ul className="text-lg space-y-2 inline-block text-left">
            <li>🤖 AI product generation</li>
            <li>📢 Automated ad creation</li>
            <li>🎬 TikTok content generation</li>
            <li>💰 Shopify integration</li>
            <li>📊 Real-time analytics</li>
          </ul>
        </div>

        <Link
          href="/signup"
          className="mt-12 inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
        >
          Start Free Trial
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-white border-opacity-20 mt-20">
        <p>© 2024 Bebe AI. All rights reserved.</p>
      </div>
    </div>
  );
}