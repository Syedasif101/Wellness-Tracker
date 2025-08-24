import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const EntryForm = ({ onSubmit, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    steps: '',
    sleep: '',
    mood: 'Good',
    notes: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {initialData ? 'Edit Entry' : 'Add New Entry'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          
          <Input
            label="Steps"
            type="number"
            value={formData.steps}
            onChange={(e) => setFormData({ ...formData, steps: parseInt(e.target.value) || '' })}
            required
          />
          
          <Input
            label="Sleep (hours)"
            type="number"
            step="0.5"
            value={formData.sleep}
            onChange={(e) => setFormData({ ...formData, sleep: parseFloat(e.target.value) || '' })}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mood
            </label>
            <select
              value={formData.mood}
              onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="3"
            />
          </div>
          
          <div className="flex space-x-3">
            <Button type="submit">
              {initialData ? 'Update' : 'Add'} Entry
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
