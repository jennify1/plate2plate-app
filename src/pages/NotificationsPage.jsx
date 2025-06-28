import PhoneFrame from '../components/PhoneFrame';
import { Link } from 'react-router-dom';
import React from 'react';
import Card from '../components/notifications/Card';

export const NotificationsPage = () => {
  return (
    <PhoneFrame>
      <div className='min-h-screen bg-white flex flex-col justify-between'>
        <div className='px-4 pt-6'>
          <div className='mt-6 space-y-4'>
            <Card
              type='alert'
              title='Addi Road Food Pantry Camperdown'
              subtitle='shortage of food! Urgently need milk and eggs.'
              button='SHARE!'
            />
            <Card
              type='alert'
              title='Sydney City Lifestyle & Mission Centre'
              subtitle='shortage of food! Urgently need vegetables, nuts.'
              button='SHARE!'
            />
            <Card
              type='success'
              title={
                <>
                  <u>
                    <em>Laura</em>
                  </u>{' '}
                  got your food!
                </>
              }
              subtitle='Hi, thank you so much for the pasta, I love it! (Image)'
              button='PAST SHARING'
            />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};
