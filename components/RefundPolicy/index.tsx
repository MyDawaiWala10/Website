import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="mt-17 md:mt-20 max-w-4xl mx-auto px-4 py-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Dawai<span className='text-[#12a701]'>Wala</span> Return Refund and Cancellation Policy</h1>
      
      <p className="mb-4 text-gray-600">
        SwfitMeds Pharma Private Limited ("My DawaiWala") team facilitates processing correct medicines, and we strive to ensure your satisfaction with every purchase. However, we understand that a situation may arise where a return or refund is necessary. We also strongly recommend the items are checked at the time of delivery.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Return Policy:</h2>
      
      <p className="mb-4 text-gray-600">
        If you receive a damaged product, please refuse delivery upon arrival. If you discover any damage after opening the package, you may return the product for a refund. Please note that while we strive to replace the damaged products whenever possible, availability may vary. In such cases we will provide a refund instead.
      </p>
      
      <p className="mb-4 text-gray-600">
        You may return the Product in an order, subject to the following conditions:
      </p>
      
      <ol className="list-alpha pl-6 mb-4 text-gray-600">
        <li className="mb-2">Wrong item being delivered other than what You had ordered in an order or,</li>
        <li className="mb-2">If items are substantially damaged or have deteriorated in quality at the time of delivery, you agree to provide us with all the necessary evidence, including but not limited to images of products showing the issues.</li>
      </ol>
      
      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Items eligible for return</h3>
      
      <p className="mb-4 text-gray-600">
        Items are eligible for a return exclusively under the following circumstances:
      </p>
      
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li className="mb-2">Products are delayed beyond 1 hour of the estimated time of delivery communicated to the customer at the time of placement of the order.</li>
        <li className="mb-2">Product(s) delivered do not match the order: This would include items that are different from what the customer ordered.</li>
        <li className="mb-2">Product(s) were delivered in damaged/non-working condition.</li>
        <li className="mb-2">Product(s) have missing parts or accessories or are different from their description on the product page.</li>
        <li className="mb-2">Product(s) are returned in original packaging i.e. with labels, barcode, price tags, original serial no. etc.</li>
        <li className="mb-2">Batch number of the product(s) being returned matches with the one(s) mentioned in the invoice.</li>
        <li className="mb-2">Product(s)/medicines(s)/bottle(s) are unused. Opened medicine strip(s)/bottle(s) are not eligible for returns.</li>
        <li className="mb-2">The damages/defects are covered under the manufacturer's warranty</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certain categories of products are not eligible for return</h2>
      
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left text-gray-800">Categories</th>
            <th className="border border-gray-300 p-2 text-left text-gray-800">Type of products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Temperature controlled medicines</td>
            <td className="border border-gray-300 p-2 text-gray-600">Vials, Injections, Pen-fills, Vaccines or other products or specialty medicines cold storage</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Baby Care</td>
            <td className="border border-gray-300 p-2 text-gray-600">Breast Pumps, Diapers, Ear Syringes, Wipe Warmers, Bottle Nipples</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Food and Nutrition</td>
            <td className="border border-gray-300 p-2 text-gray-600">Health supplements and drink</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Healthcare device</td>
            <td className="border border-gray-300 p-2 text-gray-600">Glucometer Lancet, Healthcare Devices, Surgical, Health Monitors</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Sexual Wellness</td>
            <td className="border border-gray-300 p-2 text-gray-600">Condoms, Fertility Kit, Lubricants, Pregnancy Kit</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Personal Care</td>
            <td className="border border-gray-300 p-2 text-gray-600">Oral Care (Toothbrushes, toothpastes, mouthwashes etc); Feminine Hygiene (Sanitary Pads, Panty Liners, Menstrual Cups etc.); Shaving and Hair Removal (Men's Shaving – Razors, Blades, Shaving Foams, Brushes etc.; Men's Beard Care – Beard Oil, Beard Serum etc.; Women's Hair Removal – Wax Strips, Creams, Razors etc</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Family Nutrition</td>
            <td className="border border-gray-300 p-2 text-gray-600">Infant Baby Food, Toddlers' and Kids' Health Drink</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Vitamin and Mineral Supplements</td>
            <td className="border border-gray-300 p-2 text-gray-600">Core Letter Vitamins, Multi-Vitamin</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Health Care Product</td>
            <td className="border border-gray-300 p-2 text-gray-600">Ayurveda Products, Pain Relief Products, Herbal Supplements, Medical Supplies, Adult Diapers, COVID masks (N95, surgical masks and others if unpacked)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-gray-600">Others</td>
            <td className="border border-gray-300 p-2 text-gray-600">Any wearable (COPD vest, bandages, bandage, knee caps) and any item (solid, gel, aerosol) which may have been partially used</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Refund Policy:</h2>
      <p className="mb-4 text-gray-600">
        Please be informed that when You opt to cancel or return the Products, upon our verification of the Products and the documents relating thereto, the refund amount for such Products which are eligible for return as per these Terms, will be processed within a period of seven (7) business days from the date of us verifying and confirming the refund request. Your refund will be processed only when the conditions as may be stipulated by Us are fulfilled. The refund amount will be credited to the source account. You acknowledge that after initiation of refund, it may take additional time for Your refund to reflect in Your account which is subject to Your financial institution or payment gateway service provider terms and conditions.
      </p>
      <p className="mb-4 text-gray-600">
        In all the above cases, if the claim is found to be valid, Refund will be made as mentioned below:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-600">
        <li className="mb-2">Order placed through online wallet will be credited to the wallet; and</li>
        <li className="mb-2">Order placed through cash on delivery will be refunded through fund transfer to the customer bank account.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Cancellation Policy:</h2>
      <ol className="list-alpha pl-6 mb-4 text-gray-600">
        <li className="mb-2">The Consumer has the option to cancel any order free of charge at any time before the Company accepts it. Once the Company accepts the order, cancellation from the consumer's end is not permitted.</li>
        <li className="mb-2">There may be certain orders that the Company is unable to accept and service and these may need to be canceled. Some situations that may result in your order being canceled include, non-availability of the product or quantities ordered by you or inaccuracies or errors in pricing information specified by our partners.</li>
        <li className="mb-2">If the Company cancels any order, you will not incur any charges, and any payments already made will be refunded to you according to our "Refund Policy".</li>
      </ol>
      <p className="mb-4 text-gray-600">
        My DawaiWala also reserves the right to cancel any orders that classify as 'Bulk Order' or 'Order above Limitations' as determined by My DawaiWala as per certain criteria. An order can be classified as 'Bulk Order' or 'order above Limitations' if it meets with the below mentioned criteria, which may not be exhaustive, viz:
      </p>
      <ol className="list-disc pl-6 mb-4 text-gray-600">
        <li className="mb-2">Products ordered are not for self-consumption but for commercial resale;</li>
        <li className="mb-2">Multiple orders placed for same product at the same address;</li>
        <li className="mb-2">Bulk quantity of the same product ordered;</li>
        <li className="mb-2">Invalid address given in order details;</li>
        <li className="mb-2">Any malpractice used to place the order.</li>
      </ol>
      <p className="mb-4 text-gray-600">
        No cancellation charges shall be levied for cancellation of an order in accordance with the terms of this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Contact Us:</h2>
      <p className="mb-4 text-gray-600">
        If you have any questions or concerns about our return or refund policy please feel free to contact our customer care service team at []. We are here to assist you and ensure your satisfaction.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Changes to Policy:</h2>
      <p className="mb-4 text-gray-600">
        We reserve the right to modify or update our return and refund policy at any time. Any changes will be communicated to our consumers through our website or other appropriate channel.
      </p>

      <p className="mt-8 font-semibold text-gray-800">
        Thank You for Choosing My Dawai<span className='text-[#12a701]'>Wala</span> for your Health Care needs. We appreciate your trust and look forward to serving you.
      </p>
    </div>
  );
};

export default RefundPolicy;