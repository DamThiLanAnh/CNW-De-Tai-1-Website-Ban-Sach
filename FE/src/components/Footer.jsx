import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
const Footer = () => {
    const contactLinks = [
        { label: 'Phone', value: '850-123-5021', href: 'tel:850-123-5021' },
        { label: 'Email', value: 'info@lorem.mail', href: 'mailto:info@lorem.mail' },
        { label: 'Address', value: '312 Lovely Street, NY', href: 'https://www.google.com/maps' },
    ];

    const socialLinks = [
        {
            href: '/', icon: <FaFacebookSquare className="h-5 w-5 text-gray-500" />
        },
        {
            href: '/', icon: <BiLogoInstagramAlt className="h-5 w-5 text-gray-500" />
        },
        { href: '/', icon: <FaTwitter className="h-5 w-5 text-gray-500" /> },
    ];

    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                        <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
                    </a>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <p className="mt-4 text-sm text-gray-800">
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    {contactLinks.map((link, index) => (
                        <div key={index} className="flex">
                            <p className="mr-1 text-gray-800">{link.label}:</p>
                            <a href={link.href} aria-label={link.label} title={link.label} className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                {link.value}
                            </a>
                        </div>
                    ))}
                </div>

                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
                    <div className="flex items-center mt-1 space-x-3">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">© Copyright 2020 Lorem Inc. All rights reserved.</p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    {['F.A.Q', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                        <li key={index}>
                            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
