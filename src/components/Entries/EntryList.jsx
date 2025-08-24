import React from 'react';
import EntryItem from './EntryItem';
import { exportToCSV, exportToPDF } from '../../utils/exportUtils';
import Button from '../UI/Button';
import { FaFileExport } from 'react-icons/fa';

const EntryList = ({ entries, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Your Entries
          </h2>
          <div className="flex space-x-2">
            <Button onClick={() => exportToCSV(entries)} variant="secondary">
              <FaFileExport className="inline mr-2" />
              Export CSV
            </Button>
            <Button onClick={() => exportToPDF(entries)} variant="secondary">
              <FaFileExport className="inline mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
        
        {entries.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No entries yet. Start by adding your first entry!
          </p>
        ) : (
          <div className="space-y-2">
            {entries.slice().reverse().map(entry => (
              <EntryItem
                key={entry.id}
                entry={entry}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EntryList;
