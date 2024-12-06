import { useState } from 'react';

const FAQData = [
  {
    question: 'Is littlediet’s UGGU free from preservatives, sugar and salt? ',
    answer: 'Yes completely. We do not add any preservatives, artificial flavors, artificial colors, refined sugar or salt. So you can safely give our food products to your child without a worry.'
},
  {
    question: 'Is there any allergy risk I should be aware of?',
    answer: 'Please check the list of ingredients on the pack or website before you feed your child. UGGU will contain nuts, since they are highly nutritious. If you are not aware of any such allergy and your child has never had nuts before – it is advisable to let your child have a taste and wait for 3 days to see if there is any allergic reaction.',
  },
  {
    question: 'What is the expiry date of the UGGU?',
    answer: 'The expiry date is 3 months from the date of manufacture if stored in an airtight container and kept inside the refrigerator.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center bg-backgroundColor">
      <div className="max-w-4xl w-full py-10 px-4 bg-backgroundColor rounded-md">
        <div className='flex justify-center'>
            <img src="/green_leaf.png" alt="" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">Your Questions, Answered</h2>
        <div className="space-y-4">
          {FAQData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden hover:bg-slate-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <div className='flex'>
                  <img src="/questionIcon.png" alt="" className='w-5 h-5 mt-1'/>
                  <span className="text-lg font-medium pl-2">{faq.question}</span>
                </div>
                <span className="text-xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
