
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">News Portal</h2>
            <p className="text-sm text-gray-400">Your trusted source for the latest news</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} News Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer