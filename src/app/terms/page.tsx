import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Destination Wholesale',
  description: 'Terms and Conditions for Destination Wholesale.',
};

export default function TermsPage() {
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
            Terms & <span className="italic font-light opacity-60">Conditions.</span>
          </h1>
          <div className="w-20 h-px bg-[#a6549e] mx-auto animate-soft-fade delay-400" />
        </div>
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-[#171717]">
          <p className="font-body text-[15px] text-gray-500 mb-12 italic">The Terms and Conditions were last updated on 6 November 2025</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">1. Introduction</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">These Terms and conditions apply to this website and to the transactions related to our products and services. You may be bound by additional contracts related to your relationship with us or any products or services that you receive from us. If any provisions of the additional contracts conflict with any provisions of these Terms, the provisions of these additional contracts will control and prevail.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">2. Binding</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">By registering with, accessing, or otherwise using this website, you hereby agree to be bound by these Terms and conditions set forth below. The mere use of this website implies the knowledge and acceptance of these Terms and conditions. In some particular cases, we can also ask you to explicitly agree.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">3. Electronic communication</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">By using this website or communicating with us by electronic means, you agree and acknowledge that we may communicate with you electronically on our website or by sending an email to you, and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement, including but not limited to the requirement that such communications should be in writing.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">4. Intellectual property</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We or our licensors own and control all of the copyright and other intellectual property rights in the website and the data, information, and other resources displayed by or accessible within the website.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">4.1 All the rights are reserved</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Unless specific content dictates otherwise, you are not granted a license or any other right under Copyright, Trademark, Patent, or other Intellectual Property Rights. This means that you will not use, copy, reproduce, perform, display, distribute, embed into any electronic medium, alter, reverse engineer, decompile, transfer, download, transmit, monetize, sell, market, or commercialize any resources on this website in any form, without our prior written permission, except and only insofar as otherwise stipulated in regulations of mandatory law (such as the right to quote).</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">5. Newsletter</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Notwithstanding the foregoing, you may forward our newsletter in the electronic form to others who may be interested in visiting our website.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">6. Third-party property</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Our website may include hyperlinks or other references to other party’s websites. We do not monitor or review the content of other party’s websites which are linked to from this website. Products or services offered by other websites shall be subject to the applicable Terms and Conditions of those third parties. Opinions expressed or material appearing on those websites are not necessarily shared or endorsed by us.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We will not be responsible for any privacy practices or content of these sites. You bear all risks associated with the use of these websites and any related third-party services. We will not accept any responsibility for any loss or damage in whatever manner, however caused, resulting from your disclosure to third parties of personal information.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">7. Responsible use</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">By visiting our website, you agree to use it only for the purposes intended and as permitted by these Terms, any additional contracts with us, and applicable laws, regulations, and generally accepted online practices and industry guidelines. You must not use our website or services to use, publish or distribute any material which consists of (or is linked to) malicious computer software; use data collected from our website for any direct marketing activity, or conduct any systematic or automated data collection activities on or in relation to our website.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Engaging in any activity that causes, or may cause, damage to the website or that interferes with the performance, availability, or accessibility of the website is strictly prohibited.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">8. Registration</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You may register for an account with our website. During this process, you may be required to choose a password. You are responsible for maintaining the confidentiality of passwords and account information and agree not to share your passwords, account information, or secured access to our website or services with any other person. You must not allow any other person to use your account to access the website because you are responsible for all activities that occur through the use of your passwords or accounts. You must notify us immediately if you become aware of any disclosure of your password.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">After account termination, you will not attempt to register a new account without our permission.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">9. Refund and Return policy</h2>
          <h3 className="text-lg font-display font-medium mt-8 mb-4">9.1 Right of withdrawal</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You have the right to withdraw from this contract within 14 days without giving any reason.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The withdrawal period will expire after 14 days from the day on which you acquire, or a third-party other than the carrier and indicated by you acquires, physical possession of the goods.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">To exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an unequivocal statement (for example a letter sent by post, fax, or email). Our contact details can be found below. You may use the attached model withdrawal form, but it is not obligatory.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You can also electronically fill in and submit the model withdrawal form or any other unequivocal statement on our website.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">If you use this option, we will communicate to you an acknowledgement of receipt of such a withdrawal on a durable medium (for example by email) without delay.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">9.2 Effects of withdrawal</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">If you withdraw from this contract, we shall reimburse you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You shall send back the goods or hand them over to us or a person authorised by us to receive the goods, without undue delay and in any event not later than 14 days from the day on which you communicate your withdrawal from this contract to us. The deadline is met if you send back the goods before the period of 14 days has expired.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods, whichever is the earliest.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You will have to bear the direct cost of returning the goods.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics, and functioning of the goods.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Please note that there are some legal exceptions to the right to withdraw, and some items can therefore not be returned or exchanged. We will let you know if this applies in your particular case.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">10. Idea submission</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Do not submit any ideas, inventions, works of authorship, or other information that can be considered your own intellectual property that you would like to present to us unless we have first signed an agreement regarding the intellectual property or a non-disclosure agreement. If you disclose it to us absent such written agreement, you grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">11. Termination of use</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We may, in our sole discretion, at any time modify or discontinue access to, temporarily or permanently, the website or any Service thereon. You agree that we will not be liable to you or any third party for any such modification, suspension or discontinuance of your access to, or use of, the website or any content that you may have shared on the website. You will not be entitled to any compensation or other payment, even if certain features, settings, and/or any Content you have contributed or have come to rely on, are permanently lost. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">12. Warranties and liability</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Nothing in this section will limit or exclude any warranty implied by law that it would be unlawful to limit or to exclude. This website and all content on the website are provided on an “as is” and “as available” basis and may include inaccuracies or typographical errors. We expressly disclaim all warranties of any kind, whether express or implied, as to the availability, accuracy, or completeness of the Content. We make no warranty that:</p>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li>this website or our products or services will meet your requirements;</li>
            <li>this website will be available on an uninterrupted, timely, secure, or error-free basis;</li>
            <li>the quality of any product or service purchased or obtained by you through this website will meet your expectations.</li>
          </ul>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Nothing on this website constitutes or is meant to constitute, legal, financial or medical advice of any kind. If you require advice you should consult an appropriate professional.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The following provisions of this section will apply to the maximum extent permitted by applicable law and will not limit or exclude our liability in respect of any matter which it would be unlawful or illegal for us to limit or to exclude our liability. In no event will we be liable for any direct or indirect damages (including any damages for loss of profits or revenue, loss or corruption of data, software or database, or loss of or harm to property or data) incurred by you or any third party, arising from your access to, or use of, our website.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Except to the extent any additional contract expressly states otherwise, our maximum liability to you for all damages arising out of or related to the website or any products and services marketed or sold through the website, regardless of the form of legal action that imposes liability (whether in contract, equity, negligence, intended conduct, tort or otherwise) will be limited to the total price that you paid to us to purchase such products or services or use the website. Such limit will apply in the aggregate to all of your claims, actions and causes of action of every kind and nature.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">13. Privacy</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">To access our website and/or services, you may be required to provide certain information about yourself as part of the registration process. You agree that any information you provide will always be accurate, correct, and up to date.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We take your personal data seriously and are committed to protecting your privacy. We will not use your email address for unsolicited mail. Any emails sent by us to you will only be in connection with the provision of agreed products or services.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We have developed a policy to address any privacy concerns you may have. For more information, please see our Privacy Statement and our Cookie Policy.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">14. Export restrictions / Legal compliance</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Access to the website from territories or countries where the Content or purchase of the products or Services sold on the website is illegal is prohibited. You may not use this website in violation of export laws and regulations of United Kingdom.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">15. Assignment</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You may not assign, transfer or sub-contract any of your rights and/or obligations under these Terms and conditions, in whole or in part, to any third party without our prior written consent. Any purported assignment in violation of this Section will be null and void.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">16. Breaches of these Terms and conditions</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Without prejudice to our other rights under these Terms and Conditions, if you breach these Terms and Conditions in any way, we may take such action as we deem appropriate to deal with the breach, including temporarily or permanently suspending your access to the website, contacting your internet service provider to request that they block your access to the website, and/or commence legal action against you.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">17. Force majeure</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Except for obligations to pay money hereunder, no delay, failure or omission by either party to carry out or observe any of its obligations hereunder will be deemed to be a breach of these Terms and conditions if and for as long as such delay, failure or omission arises from any cause beyond the reasonable control of that party.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">18. Indemnification</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You agree to indemnify, defend and hold us harmless, from and against any and all claims, liabilities, damages, losses and expenses, relating to your violation of these Terms and conditions, and applicable laws, including intellectual property rights and privacy rights. You will promptly reimburse us for our damages, losses, costs and expenses relating to or arising out of such claims.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">19. Waiver</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Failure to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">20. Language</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">These Terms and Conditions will be interpreted and construed exclusively in English. All notices and correspondence will be written exclusively in that language.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">21. Entire agreement</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">These Terms and Conditions, together with our privacy statement and cookie policy, constitute the entire agreement between you and Destination Aesthetics & PMU LTD in relation to your use of this website.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">22. Updating of these Terms and conditions</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We may update these Terms and Conditions from time to time. It is your obligation to periodically check these Terms and Conditions for changes or updates. The date provided at the beginning of these Terms and Conditions is the latest revision date. Changes to these Terms and Conditions will become effective upon such changes being posted to this website. Your continued use of this website following the posting of changes or updates will be considered notice of your acceptance to abide by and be bound by these Terms and Conditions.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">23. Choice of Law and Jurisdiction</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">These Terms and Conditions shall be governed by the laws of United Kingdom. Any disputes relating to these Terms and Conditions shall be subject to the jurisdiction of the courts of United Kingdom. If any part or provision of these Terms and Conditions is found by a court or other authority to be invalid and/or unenforceable under applicable law, such part or provision will be modified, deleted and/or enforced to the maximum extent permissible so as to give effect to the intent of these Terms and Conditions. The other provisions will not be affected.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">24. Contact information</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">This website is owned and operated by Destination Aesthetics & PMU LTD.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You may contact us regarding these Terms and Conditions through our <Link href="/contact" className="text-[#a6549e] hover:text-[#171717] transition-colors underline underline-offset-4">contact page</Link>.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">25. Download</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You can also download our Terms and Conditions as a PDF.</p>
        </div>
      </div>
    </div>
  );
}
