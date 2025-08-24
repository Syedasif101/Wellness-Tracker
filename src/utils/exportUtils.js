import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportToCSV = (entries) => {
  const headers = ['Date', 'Steps', 'Sleep (hours)', 'Mood', 'Notes'];
  const csvContent = [
    headers.join(','),
    ...entries.map(entry => [
      entry.date,
      entry.steps,
      entry.sleep,
      entry.mood,
      entry.notes || ''
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wellness-tracker-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const exportToPDF = (entries) => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.text('Wellness Tracker Report', 14, 20);
  
  // Date
  doc.setFontSize(12);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
  
  // Table
  const tableData = entries.map(entry => [
    new Date(entry.date).toLocaleDateString(),
    entry.steps.toString(),
    `${entry.sleep} hrs`,
    entry.mood,
    entry.notes || '-'
  ]);
  
  doc.autoTable({
    head: [['Date', 'Steps', 'Sleep', 'Mood', 'Notes']],
    body: tableData,
    startY: 40,
  });
  
  doc.save(`wellness-tracker-${new Date().toISOString().split('T')[0]}.pdf`);
};
