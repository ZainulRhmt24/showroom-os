import React from "react";

export const metadata = {
  title: "Terms of Service | ShowroomOS",
  description: "Terms of Service for ShowroomOS",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using ShowroomOS (the "SaaS"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. SaaS Usage</h2>
            <p>ShowroomOS is provided as a Software as a Service. You are granted a non-exclusive, non-transferable, revocable license to use the platform in accordance with your subscription plan.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree not to use the platform for any unlawful activities or to transmit any malicious content.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. WhatsApp Integration</h2>
            <p>ShowroomOS integrates with WhatsApp. You agree to comply with WhatsApp's Business Terms of Service and Commerce Policy. You are solely responsible for the content of the messages sent through our platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. AI Assistant</h2>
            <p>Our AI Assistant is designed to help automate and improve your workflow. While we strive for high accuracy, we do not guarantee the completeness or reliability of AI-generated responses. You are responsible for reviewing and verifying AI outputs.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Account Termination</h2>
            <p>We reserve the right to suspend or terminate your account at any time for violations of these Terms of Service or for any other reason at our sole discretion.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
