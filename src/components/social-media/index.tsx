import React from 'react'

export default function SocialMedia() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Connect With Us</h2>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
                      </svg>
                    <button className="text-sm text-gray-900 dark:text-gray-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                      Follow us
                    </button>
                  </li>
                  <li className="flex items-center justify-between text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline-block" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-1.2-.8-3.2-1.184-5.615-1.184s-4.415.384-5.615 1.184c-1.2.8-2.4 2.4-2.4 4.8v4.032c0 2.4 1.2 4 2.4 4.8 1.2.8 3.2 1.184 5.615 1.184s4.415-.384 5.615-1.184c1.2-.8 2.4-2.4 2.4-4.8v-4.032c0-2.4-1.2-4-2.4-4.8zm-7.615 9.816v-6l5 3-5 3z"/>
                      </svg>
                        
                    <button className="text-sm text-gray-900 dark:text-gray-100 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                        Subscribe
                    </button>
                  </li>
                </ul>
            </div>
    )
}
