import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Destination Wholesale',
  description: 'Cookie Policy for Destination Wholesale.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#171717] pt-48 pb-20 lg:pt-64 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="bg" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold block mb-6 animate-soft-fade">
            Legal Information
          </span>
          <h1 className="text-4xl lg:text-7xl text-white mb-8 font-display font-medium tracking-tight animate-soft-fade delay-200">
            Cookie <span className="italic font-light opacity-60">Policy.</span>
          </h1>
          <div className="w-20 h-px bg-[#a6549e] mx-auto animate-soft-fade delay-400" />
        </div>
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-[#171717]">
          <p className="font-body text-[15px] text-gray-500 mb-12 italic">This Cookie Policy was last updated on 10 April 2026 and applies to citizens and legal permanent residents of the United Kingdom.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">1. Introduction</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Our website, <a href="https://destinationwholesale.co.uk" className="text-[#a6549e] hover:underline">https://destinationwholesale.co.uk</a> (hereinafter: &quot;the website&quot;) uses cookies and other related technologies (for convenience all technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">2. What are cookies?</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">3. What are scripts?</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">4. What is a web beacon?</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">5. Cookies</h2>
          <h3 className="text-lg font-display font-medium mt-8 mb-4">5.1 Technical or functional cookies</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">5.2 Statistics cookies</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We use statistics cookies to optimize the website experience for our users. With these statistics cookies we get insights in the usage of our website. We ask your permission to place statistics cookies.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">5.3 Marketing/Tracking cookies</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">6. Placed cookies</h2>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-4">
            <li><strong>WooCommerce</strong> - Functional (Consent to service woocommerce)</li>
            <li><strong>Google reCAPTCHA</strong> - Functional, Marketing (Consent to service google-recaptcha)</li>
            <li><strong>WordPress</strong> - Functional (Consent to service wordpress)</li>
            <li><strong>Elfsight</strong> - Purpose pending investigation (Consent to service elfsight)</li>
            <li><strong>Woodmart</strong> - Functional (Consent to service woodmart)</li>
            <li><strong>Sourcebuster JS</strong> - Statistics (Consent to service sourcebuster-js)</li>
            <li><strong>Slider Revolution</strong> - Purpose pending investigation (Consent to service slider-revolution)</li>
            <li><strong>Automattic</strong> - Statistics (Consent to service automattic)</li>
            <li><strong>Google Fonts</strong> - Marketing (Consent to service google-fonts)</li>
            <li><strong>Complianz</strong> - Functional (Consent to service complianz)</li>
            <li><strong>Google Analytics</strong> - Statistics (Consent to service google-analytics)</li>
            <li><strong>Miscellaneous</strong> - Statistics (Consent to service miscellaneous)</li>
          </ul>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">7. Consent</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on &quot;Save preferences&quot;, you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">7.1 Manage your consent settings</h3>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li><strong>Functional:</strong> Always active</li>
            <li><strong>Statistics:</strong> Statistics</li>
            <li><strong>Marketing:</strong> Marketing</li>
          </ul>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">8. Enabling/disabling and deleting cookies</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">9. Your rights with respect to personal data</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You have the following rights with respect to your personal data:</p>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
            <li>Right of access: You have the right to access your personal data that is known to us.</li>
            <li>Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
            <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
            <li>Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
            <li>Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
          </ul>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Information Commissioner&apos;s Office (ICO)).</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">10. Contact details</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>
          <div className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed border-l-2 border-[#a6549e] pl-6 py-2 bg-gray-50/50">
            <strong>Destination Aesthetics</strong><br />
            Blue Post Offices, 128 Newland Street, Witham, Essex, CM8 1BA<br />
            United Kingdom<br />
            Website: <a href="https://destinationwholesale.co.uk" className="text-[#a6549e] hover:underline">https://destinationwholesale.co.uk</a><br />
            Email: <a href="mailto:info@destinationwholesale.co.uk" className="text-[#a6549e] hover:underline">info@destinationwholesale.co.uk</a><br />
            Phone number: <a href="tel:+447593264827" className="text-[#a6549e] hover:underline">+447593264827</a>
          </div>

          <p className="font-body text-[15px] text-gray-500 mb-6 leading-relaxed italic">This Cookie Policy was synchronised with cookiedatabase.org on 5 May 2026.</p>
        </div>
      </div>
    </div>
  );
}
