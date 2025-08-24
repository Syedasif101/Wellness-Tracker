import React, { useState } from 'react';
import SummaryCard from './SummaryCard';
import StatsChart from './StatsChart';
import EntryList from '../Entries/EntryList';
import EntryForm from '../Entries/EntryForm';
import { FaWalking, FaBed, FaSmile, FaPlus } from 'react-icons/fa';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useUserEntries } from '../../hooks/useUserEntries';
import Button from '../UI/Button';

const Dashboard = () => {
  const [user] = useLocalStorage('user', null);
  const [entries, setEntries] = useUserEntries(user);
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  
  // Calculating latest values Here
  const latestEntry = entries[entries.length - 1] || {};
  const latestSteps = latestEntry.steps || 0;
  const latestSleep = latestEntry.sleep || 0;
  const latestMood = latestEntry.mood || 'Not recorded';

  const handleAddEntry = (entry) => {
    if (editingEntry) {
      setEntries(entries.map(e => e.id === editingEntry.id ? { ...entry, id: editingEntry.id } : e));
      setEditingEntry(null);
    } else {
      setEntries([...entries, { ...entry, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setShowForm(true);
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-grey-900 dark:text-white">Dashboard</h1>
        <Button onClick={() => setShowForm(true)}>
          <FaPlus className="inline mr-2" />
          Add Entry
        </Button>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Steps Today"
          value={latestSteps.toLocaleString()}
          icon={<FaWalking />}
          color="blue"
        />
        <SummaryCard
          title="Sleep Hours"
          value={`${latestSleep} hrs`}
          icon={<FaBed />}
          color="purple"
        />
        <SummaryCard
          title="Current Mood"
          value={latestMood}
          icon={<FaSmile />}
          color="green"
        />
      </div>

      {/* Chart to show weekly Progress */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Weekly Progress</h2>
        <StatsChart entries={entries} />
      </div>

      {/* Entry Form to make entry */}
      {showForm && (
        <EntryForm
          onSubmit={handleAddEntry}
          onClose={() => {
            setShowForm(false);
            setEditingEntry(null);
          }}
          initialData={editingEntry}
        />
      )}

      {/* Entry List */}
      <EntryList 
        entries={entries}
        onEdit={handleEditEntry}
        onDelete={handleDeleteEntry}
      />
    </div>
  );
};

export default Dashboard;
