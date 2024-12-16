'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'colleges', 'how-it-works']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://cdn.customgpt.ai/js/embed.js"
    script.defer = true
    script.setAttribute('div_id', 'customgpt_chat')
    script.setAttribute('p_id', '48180')
    script.setAttribute('p_key', 'f3ff141eaa9b8d433e74247710b3e36b')
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // const openChatbot = () => {
  //   if (window.CustomGPT && typeof window.CustomGPT.toggle === 'function') {
  //     window.CustomGPT.toggle()
  //   }
  // }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">AIdmit.mba</div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link href="#home" className={`hover:text-blue-500 transition-colors ${activeSection === 'home' ? 'text-blue-500' : ''}`}>Home</Link>
            <Link href="#how-it-works" className={`hover:text-blue-500 transition-colors ${activeSection === 'how-it-works' ? 'text-blue-500' : ''}`}>How It Works</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Features</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
            Sign Up
          </button>
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
            <Link href="#home" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Home</Link>
            <Link href="#how-it-works" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>How It Works</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Features</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Pricing</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Contact</Link>
            <button className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
              Sign Up
            </button>
          </div>
        )}
      </header>

      <main className="pt-16 sm:pt-20">
        <section id="home" className="container mx-auto px-4 py-12 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">AI-Powered College Application Assistance</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Get personalized feedback on your college essays from our AI chatbots tailored to specific schools.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg transition-colors">
            Get Started
          </button>
        </section>

        <section id="colleges" className="bg-gray-900 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Choose Your College Chatbot</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {['Harvard Business School', 'Stanford University', 'MIT'].map((college) => (
                <div key={college} className="bg-gray-800 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">{college[0]}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{college}</h3>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded transition-colors text-sm sm:text-base"
                    // onClick={college === 'Harvard Business School' ? openChatbot : undefined}
                  >
                    Explore Chatbot
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: 'Choose College', description: 'Select the specific college chatbot for customized guidance.' },
              { title: 'Initiate Chat', description: 'Begin an interactive chat session with the selected college\'s chatbot.' },
              { title: 'Share Drafts', description: 'Upload or share your essay drafts within the chat.' },
              { title: 'Receive Feedback', description: 'Get AI-powered feedback tailored to your chosen college.' },
            ].map((step, index) => (
              <div key={step.title} className="bg-gray-800 rounded-lg p-4 sm:p-6 text-center relative">
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#home" className="hover:text-blue-500 transition-colors">Home</Link></li>
                <li><Link href="#how-it-works" className="hover:text-blue-500 transition-colors">How It Works</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-500 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect With Us</h3>
              <p className="mb-4">Email: support@aidmit.mba</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded transition-colors text-sm sm:text-base">
                Book a Call
              </button>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-sm sm:text-base">&copy; 2024 AIdmit.mba. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div id="customgpt_chat"></div>
    </div>
  )
}