import React from "react";

export const metadata = {
  title: "Data Deletion Instructions | ShowroomOS",
  description: "Instructions for requesting data deletion on ShowroomOS.",
};

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Data Deletion Instructions</h1>
        
        <div className="space-y-6">
          <section>
            <p>At ShowroomOS, we respect your privacy and your right to control your personal data. If you wish to have your data removed from our systems, please follow the instructions below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How to Request Data Deletion</h2>
            <ol className="list-decimal pl-5 mt-2 space-y-2">
              <li>Send an email to our support team with the subject line <strong>"Data Deletion Request"</strong>.</li>
              <li>In the email, please include the email address associated with your ShowroomOS account or the phone number associated with your WhatsApp integration.</li>
              <li>Specify whether you want a complete account deletion or deletion of specific customer data.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Deletion Process</h2>
            <p>Once we receive your request:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>We will verify your identity to ensure the request is authorized.</li>
              <li>We will process your request within 30 days of verification.</li>
              <li>You will receive a confirmation email once your data has been permanently deleted from our active databases and third-party integrations (including AI models and Meta APIs).</li>
              <li>Please note that some data may be retained temporarily in our secure backups for up to 90 days before being completely purged, in accordance with our data retention policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Support</h2>
            <p>To initiate a request or if you have any questions, please contact us at:</p>
            <p className="mt-2 font-medium">Email: support@showroomos.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
