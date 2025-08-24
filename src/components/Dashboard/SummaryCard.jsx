import React from 'react';

const colorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-900',
  purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-200 dark:border-purple-900',
  green: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-900',
};

const SummaryCard = ({ title, value, icon, color = 'blue' }) => {
  return (
    <div className={`p-5 rounded-lg border shadow-sm ${colorMap[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium opacity-80">{title}</div>
          <div className="text-2xl font-bold mt-1">{value}</div>
        </div>
        <div className="text-3xl opacity-80">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
