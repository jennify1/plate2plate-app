import React from 'react';
import Card from './notifications/Card';

const NotificationPage = ({ onClose }) => {
  return (
    <div className="flex flex-col h-full">
      <button
        onClick={onClose}
        className="self-end text-sm text-gray-500 hover:text-gray-700 mb-4"
      >
        Close
      </button>

      <div className="space-y-4">
        <Card
          type="alert"
          title="Addi Road Food Pantry Camperdown"
          subtitle="Shortage of food! Urgently need milk and eggs."
          button="SHARE!"
        />
        <Card
          type="alert"
          title="Sydney City Lifestyle & Mission Centre"
          subtitle="Shortage of food! Urgently need vegetables, nuts."
          button="SHARE!"
        />
        <Card
          type="success"
          title={
            <>
              <u>
                <em>Laura</em>
              </u>{' '}
              got your food!
            </>
          }
          subtitle="Hi, thank you so much for the pasta, I love it!"
          button="PAST SHARING"
        />
      </div>
    </div>
  );
};

export default NotificationPage;

