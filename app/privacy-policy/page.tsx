import React from "react";

export const metadata = {
  title: "Privacy Policy | ShowroomOS",
  description: "Privacy Policy for ShowroomOS detailing data processing, WhatsApp API usage, and AI usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>Welcome to ShowroomOS. This Privacy Policy explains how we collect, use, and process your data when you use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Data Processed</h2>
            <p>We process the following types of data to provide our services:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Customer Data:</strong> Contact information, interaction history, and profile data provided by users or their end-customers.</li>
              <li><strong>WhatsApp Data:</strong> Messages, media, and metadata transmitted through our WhatsApp integration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Meta and WhatsApp API Usage</h2>
            <p>Our platform integrates with Meta and WhatsApp APIs. By using ShowroomOS, you agree to our processing of messages and data in compliance with WhatsApp Business Terms of Service. We do not use WhatsApp data for our own marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. AI Usage</h2>
            <p>We employ Artificial Intelligence (AI) to enhance the user experience, automate responses, and analyze customer interactions. Data processed by AI is strictly used for improving your specific tenant's experience and is not shared across different users or used to train public models.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Storage and Security</h2>
            <p>We implement robust security measures to protect your data. All data is encrypted in transit and at rest. Access to data is restricted to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. User Rights</h2>
            <p>You have the right to access, modify, or delete your personal data. You can also request a copy of the data we hold about you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact our support team.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
