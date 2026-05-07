import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Destination Wholesale',
  description: 'Privacy Policy for Destination Wholesale.',
};

export default function PrivacyPage() {
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
            Privacy <span className="italic font-light opacity-60">Policy.</span>
          </h1>
          <div className="w-20 h-px bg-[#a6549e] mx-auto animate-soft-fade delay-400" />
        </div>
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-[#171717]">
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Destination Aesthetics is responsible for the processing of your personal data is dependent on the purpose for which it is collected. For each processing purpose you will be informed of the responsible company.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We take appropriate technical and organisational measures to protect against unauthorised or unlawful processing of your personal data, including encrypting your data to applicable industry standards. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">So, you only need to look in one place to find out all you need to know about how we collect and process your personal data this policy covers our Website, our stores and any correspondence you have with us, in relation to our retail offering.</p>
          <p className="font-body text-[15px] text-gray-600 mb-12 leading-relaxed">Any changes we make to this policy will be reflected on this page, where appropriate.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">Who we are?</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">As set out in our terms and conditions, this Website and the App are operated by Destination Aesthetics, Blue Post Offices, 128 Newland Street, Witham, Essex, CM8 1BA.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Destination Aesthetics are the data controller in respect of personal data collected when you browse this Website and the App and purchase our products. If you have any queries regarding our use of your personal data or this privacy policy, you can write to Data Protection: Destination Aesthetics, Blue Post Offices, 128 Newland Street, Witham, Essex, CM8 1BA.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">Information we may hold about you</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">When you register to use our Website or App, purchase a product, register to receive our emails, apply for a job, register for our membership or loyalty services, enter a competition or promotion run by us or contact us, personal data you provide, such as your name, date of birth, contact details (including social media accounts), telephone number, transaction history, log in and payment information, and gender may be collected along with proof of identity (ID).</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">When you browse our Website or App, whether or not you are registered, purchase a product, register to receive our marketing email, receive and open or click our emails, or make a job application , we and our partner advertising networks, advertisers and advertising affiliates (Third Party Advertisers), will collect user information such as your location, language, assumed gender, IP address, when you visited our Website or App, how you arrived on our Website or App, where you visit after our Website or App, the pages you visited, how long you spend browsing individual pages on our Website or App, any products you have viewed, purchased, or put in your basket, and the browser (where applicable) and device you used to access our Website or App.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">In our premises, we may use CCTV to monitor and record images for the purposes of security, the prevention and detection of crime and health and safety, and store the images centrally.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">In circumstances where you contact us by telephone, calls may be recorded for quality, training and security purposes. Calls may also be monitored without your consent in the following circumstances: to provide evidence of a business transaction; to prevent or detect a crime; to ensure that we comply with regulatory procedures; to see that quality standards or targets are being met; and to secure the effective operation of the telecom system.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">How we may use your personal data</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We may use your personal data in the following ways:</p>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li>to fulfil your order – we require your identification, contact and payment information to enable the relevant company to enter into a contract with you and are unable to do so without this information (please note that your details may need to be passed to another company third party, such as one of our couriers or one of their customs clearance agents, in order for them to supply or deliver the product that you ordered and certain products will be processed and delivered direct from some of our supplier partners either as part of our drop ship model or market place offering (“Direct Supply”). We may retain your details for a reasonable period of time after you have completed the transaction in order to fulfil any contractual obligations such as refunds, guarantees etc and to meet any legal obligations for the retention of transactional data).</li>
            <li>to tell you about similar products and services, or products and services that you ask us to send you information about, by email, post, mobile, telephone and/or through other digital means (depending on your stated preferences) including social media platforms;</li>
            <li>to provide you with services you request from us including, the sale and/or distribution of products made available to you through Direct Supply, including the administration of your membership or loyalty services;</li>
            <li>to register you on the Website or App (where this involves setting you up with an account, we will use your personal data to maintain and update your account (e.g. such as a change of address or change in your marketing preferences);</li>
            <li>to administer our Website and App;</li>
            <li>to analyse, and improve, the use of our Website, App and retail offering, including how you move around our Website, App or retail stores;</li>
            <li>to administer any competition run us. Please refer to the specific terms and conditions for each competition;</li>
            <li>to measure and analyse our advertising;</li>
            <li>to make suggestions and recommendations to you, other users of our Website and App, and users of the services of our Third Party Advertisers about products or services that may interest you or them;</li>
            <li>to keep in touch with you regarding your marketing preferences;</li>
            <li>to keep our Website, App and network safe and secure;</li>
            <li>to process payments, and detect and prevent fraudulent transactions and/or any other criminal activity (we may pass your details to a third party to carry out these functions); and</li>
            <li>to assess and process your job application</li>
            <li>we will receive your personal data from other companies/legal entities or provide it to other companies if we merge with or acquire another business to link the account you hold with us to the account you have with the other brand and to share information about your purchases.</li>
            <li>where necessary when merging with or acquiring another business or re-organising our business, in which case some of your information may be shared with a prospective buyer or otherwise but only so far as is strictly necessary for the purposes of such sale or administration.</li>
            <li>to seek your feedback or undertake customer research to improve our products and services</li>
          </ul>

          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We can only use your personal data if we have a proper reason for doing so, e.g.:</p>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li>to comply with our legal and regulatory obligations;</li>
            <li>for the performance of our contract with you or to take steps at your request before entering into a contract;</li>
            <li>for our legitimate interests or those of a third party; or</li>
            <li>where you have given consent.</li>
          </ul>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">A legitimate interest is when we have a business or commercial reason to use your information, so long as this is not overridden by your own rights and interests, such as to provide appropriate marketing and to maintain our services.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">How long we keep your information</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We will not keep your personal data for any purpose(s) for longer than is necessary and we will only retain the relevant personal data that is necessary in relation to the purpose.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We will retain the personal data you provided on registering an account on our Website or App so long as that account remains in existence.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">In the case of any contact you may have with our customer services department, we will retain those details for as long as is necessary to resolve your query and for a short period after the query is closed.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">On making a purchase through our Website or App, we will retain certain limited personal data such as your name, email address and postal address until you ask us to update or delete those details for the purpose of reporting new and existing users to our affiliate advertisers. We retain transaction information for longer if you hold a Loyalty Programme Account or if required by law.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">If we are legally required or if it is reasonably necessary to meet regulatory requirements, resolve disputes, prevent fraud and abuse, or enforce our terms and conditions, we may also retain some of your personal data for a limited period of time, even after you have closed your account.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We retain CCTV recordings centrally for up to 30 days, and for a longer period if they are relevant to an incident, complaint, investigation or legal proceedings.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We will retain information relating to any job application for as long as it takes to process your application and, if it is unsuccessful, for an additional period of around 6 months. If your application is successful, your information will be retained in accordance with our staff privacy policy.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We will retain your information for a short time beyond the specified retention period, to allow for information to be reviewed and any deletion to take place.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">How we might share your personal data</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We may share your personal data in connection with any merger, acquisition, insolvency situation or otherwise, in which case we will only disclose your information so far as is necessary.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We may also share your personal data with carefully selected third parties who assist us in providing you with products, advertisements and services. This will include the following types of third party:</p>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li>Our professional advisers, including, without limitation, our insurers;</li>
            <li>Our suppliers, business partners and sub-contractors;</li>
            <li>Our Third Party Advertisers;</li>
            <li>Our Direct Supply partners, who will provide certain products/services directly to you and will require your personal data to process and deliver your order (including warehousing, order packing, delivery, returns and general administration);</li>
            <li>Our Direct Supply middleware providers, who operate the platform through which the order you place on this Website is shared with the relevant Direct Supply partner; and,</li>
            <li>Search engine and web analytics providers.</li>
          </ul>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We only allow our service providers to handle your personal data if we are satisfied they take appropriate measures to protect your personal data. We also impose contractual obligations on service providers relating to ensure they can only use your personal data to provide services to us and to you. In the event that we were to sell our business or assets, we may disclose your personal data to any prospective/actual purchaser and/or their advisers. We may also disclose your personal data where we are subject to a legal obligation to do so, in connection with the prevention or detection of crime, for the purpose of establishing, exercising or defending our legal rights, or where we consider that we receive a valid request for disclosure. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You should be aware that if we are requested by law enforcement agencies such as the Police, or any other regulatory or government authority investigating suspected illegal activities we may disclose and exchange your personal data or any other information we obtain about you.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Our Website and App may, from time to time, contain links to and from the websites of third parties or utilise a piece of software or a service which requires your personal data to be shared with a third party. Please note that these third-party websites/providers have their own privacy policies and we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">Where we store your personal data</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The personal data that we collect from you may be transferred to and stored outside the European Economic Area (“EEA”). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers, third party providers, including, Direct Supply partners and middleware providers. Where we do so, the third country’s data protection laws will have been approved as adequate by the European Commission, or other applicable safeguards are in place.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">Your rights</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Under the [UK] GDPR, you have the following rights which, in most cases, you can exercise free of charge:</p>
          
          <h3 className="text-lg font-display font-medium mt-8 mb-4">Right of Access</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">This is commonly referred to as a Subject Access request or ‘SAR’.<br />
          The right to be provided with a copy of your personal data and to certain other supplementary information that this Privacy Policy is already designed to address.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Right to Rectification</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The right to have inaccurate personal data rectified e.g., if you consider that your personal data is incorrect, out of date or incomplete.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Right to Erasure</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">This right is also known as ‘the Right to be Forgotten’.<br />
          The right to require us to delete your personal data.<br />
          This right is not absolute and only applies in certain circumstances.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Right to Restrict Processing</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The right to restrict the processing of your personal data where you may have a particular reason for wanting the restriction.<br />
          This right is not absolute and only applies in certain circumstances.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Right to Data Portability</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The right to receive personal data that you have provided to us in a structured, commonly used, and machine-readable format. It also gives you the right to request that we transmit this data directly to another data controller.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Right to Object</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The right to object to the processing of your personal data at any time. This effectively allows you to stop or prevent us from processing your personal data.<br />
          The right to object only applies in certain circumstances.<br />
          You have the absolute right to object to the processing of your personal data if it is for direct marketing purposes (refer to section below).</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Rights related to automated decision-making including profiling</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">The right not to be subject to a decision based solely on automated processing (including profiling) that produces legal effects concerning you or similarly significantly affects you.</p>

          <h3 className="text-lg font-display font-medium mt-8 mb-4">Your right to withdraw consent</h3>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Where you have given us your consent to use your personal data, you have the right to change your mind at any time and withdraw that consent</p>

          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">If you would like to exercise any of these rights, please write to the Data Protection Team, Destination Aesthetics, Blue Post Offices, 128 Newland Street, Witham, Essex, CM8 1BA.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">If we choose not to action your request, we will explain the reasons for our refusal.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">To maintain the security of our customers’ personal details, we may need to request proof of identity before we disclose personal data to you in response to any of the above requests.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">How can you stop the use of your personal data for direct marketing?</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">There are several ways you can stop direct marketing communications from us:</p>
          <ul className="list-disc pl-6 mb-6 font-body text-[15px] text-gray-600 space-y-2">
            <li>Click the ‘unsubscribe’ link in any email communication that we send you. We will then stop any further emails from us.</li>
            <li>If you have an account, log in into your account, visit the ‘My Account’ area and change your preferences.</li>
            <li>In our apps, you can manage your preferences and opt out from one or all of the different push notifications by selecting or deselecting the relevant options in the ‘Settings’ section.</li>
            <li>Write to the Data Protection, Destination Aesthetics, Blue Post Offices, 128 Newland Street, Witham, Essex, CM8 1BA.</li>
          </ul>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">Please note that you may continue to receive communications for a short period after changing your preferences while our systems are fully updated.</p>

          <h2 className="text-2xl font-display font-medium mt-12 mb-4">How to complain</h2>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">We hope that the Data Protection team can resolve any query or concern you may raise about our use of your personal data.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">However, if you feel that your personal data has not been handled correctly, or you are unhappy with our response to any requests you have made to us regarding the use of your personal data, you have the right to lodge a complaint with the Information Commissioner’s Office (ICO) or any other competent supervisory authority in the country of residence.</p>
          <p className="font-body text-[15px] text-gray-600 mb-6 leading-relaxed">You can contact the ICO by calling 0303 123 1113 or go online to <a href="https://www.ico.org.uk/concerns" className="text-[#a6549e] hover:underline" target="_blank" rel="noreferrer">www.ico.org.uk/concerns</a> (opens in a new window; please note we can’t be responsible for the content of external websites).</p>
        </div>
      </div>
    </div>
  );
}
