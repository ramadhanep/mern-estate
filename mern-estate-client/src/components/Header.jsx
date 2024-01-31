import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4">
        <Link to="/">
          <h1 className="text-xl font-bold">Mern Estate Client</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
