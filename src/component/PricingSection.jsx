import React from 'react';
import Container from '../layer/Container';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'Essential Plan',
    cost: '$25.00',
    imgSrc: '/p.png', 
    details: [
      '1 Restroom cleaning',
      'Up to 3 sleeping rooms cleaning',
      '1 Lounge cleaning',
      'Small kitchen (0 - 150 ft²)',
      'Up to 2 extra rooms cleaning',
    ],
  },
  {
    name: 'Intermediate Plan',
    cost: '$50.00',
    imgSrc: '/p.png',
    details: [
      '2 Restroom cleaning',
      'Up to 4 sleeping rooms cleaning',
      '2 Lounge cleaning',
      'Medium kitchen (150 - 250 ft²)',
      'Up to 3 extra rooms cleaning',
    ],
  },
  {
    name: 'Deluxe Plan',
    cost: '$75.00',
    imgSrc: '/p.png',
    details: [
      '3 Restroom cleaning',
      'Up to 5 sleeping rooms cleaning',
      '3 Lounge cleaning',
      'Large kitchen (250+ ft²)',
      'Up to 4 extra rooms cleaning',
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="py-[90px]">
      <Container>

        <div>
          <h3 className="text-[#2B8761] font-Roboto text-[18px] font-medium text-center">
            Available Plans
          </h3>
          <h2 className="text-[#0C261A] font-Roboto text-[28px] font-medium text-center mt-2">
            Pick the Ideal Plan for You
          </h2>
        </div>


        <div className="flex flex-wrap gap-6 justify-center mt-[50px]">

          {plans.map((plan, index) => (
            <PricingCard
              key={index} 
              planTitle={plan.name}
              planPrice={plan.cost}
              imagePath={plan.imgSrc}
              details={plan.details}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PricingSection;
