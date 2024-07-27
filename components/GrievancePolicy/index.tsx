import React from 'react';

const GrievancePolicy = () => {
  return (
    <div className="mt-17 max-w-4xl mx-auto p-6 rounded-lg md:mt-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Dawai<span className='text-[#12a701]'>Wala</span> Grievance Redressal Policy</h1>
      
      {/* PURPOSE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. PURPOSE</h2>
        <p className="text-gray-600">
          The purpose of this Grievance Redressal Policy is to provide a transparent and efficient mechanism for addressing and resolving customer grievances related to the delivery of medicines within 20 minutes of the order time.
        </p>
      </section>

      {/* SCOPE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. SCOPE</h2>
        <p className="text-gray-600">
          This policy applies to all customers of My DawaiWala who have placed orders for medicines through our online platform and have not received their deliveries within the promised timeframe of 20 minutes from the order time.
        </p>
      </section>

      {/* GRIEVANCE REDRESSAL PROCESS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. GRIEVANCE REDRESSAL PROCESS</h2>
        
        <div className="ml-4">
          <h3 className="text-xl font-medium mb-2 text-gray-700">3.1 Submission of Grievance</h3>
          <p className="mb-2 text-gray-600">
            Customers who have not received their medicine deliveries within 20 minutes of the order time may submit a grievance through one of the following channels:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-600">
            <li>Call our customer support hotline at [Customer Support Number].</li>
            <li>Send an email to infodawaiwala@gmail.com.</li>
            <li>Use the "Grievance Redressal" feature on our website to submit a written complaint.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 text-gray-700">3.2 Investigation and Resolution</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-600">
            <li>Upon receiving a grievance, our customer support team will initiate an investigation into the matter.</li>
            <li>We will prioritize resolving grievances related to delayed deliveries within the shortest possible time frame.</li>
            <li>Our team will communicate with relevant stakeholders, including delivery personnel and logistics partners, to determine the cause of the delay.</li>
            <li>Once the cause of the delay is identified, we will take appropriate corrective actions to resolve the issue and ensure timely delivery of the medicines.</li>
            <li>We will keep the customer informed about the status of their grievance and the steps being taken to address it.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 text-gray-700">3.3 Escalation</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>If a customer is dissatisfied with the resolution provided by our customer support team, they may escalate the grievance to the Grievance Redressal Officer.</li>
            <li>The Grievance Redressal Officer will conduct a thorough review of the grievance and the actions taken to resolve it.</li>
            <li>The Grievance Redressal Officer will communicate the final decision to the customer and take any additional steps necessary to address the grievance.</li>
          </ul>
        </div>
      </section>

      {/* RECORD KEEPING */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. RECORD KEEPING</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>We will maintain records of all grievances received and the actions taken to resolve them.</li>
          <li>These records will be kept confidential and used for internal review and improvement of our services.</li>
        </ul>
      </section>

      {/* REVIEW AND IMPROVEMENT */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. REVIEW AND IMPROVEMENT</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>We will periodically review our grievance redressal process to identify areas for improvement.</li>
          <li>Customer feedback and suggestions will be taken into consideration to enhance the effectiveness of our grievance redressal mechanism.</li>
        </ul>
      </section>

      {/* CONTACT US */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. CONTACT US</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about our Grievance Redressal Policy, please contact us at [Contact Information]
        </p>
      </section>
    </div>
  );
};

export default GrievancePolicy;