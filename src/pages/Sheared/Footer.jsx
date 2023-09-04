import React from 'react';
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer-center'>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <h3 className='text-3xl'>CONTACT US</h3>
                    <ul>
                        <li>123 ABS Street, Uni 21, Bangladesh</li>
                        <li>+88 123456789</li>
                        <li>Mon - Fri: 08:00 - 22:00</li>
                        <li>Sat - Sun: 10:00 - 23:00</li>
                    </ul>
                </aside>
                <aside>
                    <h3 className='text-3xl'>Follow US</h3>
                    <p className='text-lg'>Join us on social media</p>
                    <div className='flex gap-5'>
                        <FaFacebookF className='w-[30px] h-[30px]' />
                        <FaInstagram className='w-[30px] h-[30px]' />
                        <FaTwitter className='w-[30px] h-[30px]' />
                    </div>

                </aside>

            </div>
            <footer className="footer  p-4 bg-neutral text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </footer>
    );
};

export default Footer;