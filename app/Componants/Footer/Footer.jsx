import React from 'react'
import Logo from '../Navbar/Logo'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">


                <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Services</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white transition-colors">Web Development</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Mobile Apps</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Cloud Solutions</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Software Miantanance</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Connect with us</h3>
                    <div class="flex space-x-4 mb-4">
                        <a href="https://www.linkedin.com/company/devit-bd/">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p class="text-gray-500 text-sm">official@devitbd.com</p>
                    <p class="text-gray-500 text-sm">+880 1991870343</p>
                    <p class="text-gray-500 text-sm">Level 5, Blue Water Shopping, Sylhet, Bangladesh </p>
                </div>
                <div>
                    <Logo />
                    <p class="text-gray-400 mb-4">
                        Transforming your online vision into reality!!
                    </p>
                    <p class="text-gray-500 text-sm">© 2025 DevIT BD. All rights reserved.</p>
                </div>

            </div>
        </footer>

    )
}
