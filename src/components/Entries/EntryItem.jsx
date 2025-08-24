import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EntryItem = ({ entry, onEdit, onDelete }) => {
  const moodColors = {
    Excellent: 'text-green-600',
    Good: 'text-blue-600',
    Average: 'text-yellow-600',
    Poor: 'text-red-600'
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-2">
            <span className="font-medium text-gray-900 dark:text-white">
              {new Date(entry.date).toLocaleDateString()}
            </span>
            <span className={`font-medium ${moodColors[entry.mood]}`}>
              {entry.mood}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div>Steps: {Number(entry.steps).toLocaleString()}</div>
            <div>Sleep: {entry.sleep} hours</div>
            {entry.notes && <div className="sm:col-span-3">Notes: {entry.notes}</div>}
          </div>
        </div>
        
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(entry)}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded"
            aria-label="Edit entry"
            title="Edit entry"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(entry.id)}
            className="p-2 text-red-600 hover:bg-red-100 rounded"
            aria-label="Delete entry"
            title="Delete entry"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryItem;
