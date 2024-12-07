import api from './api';

// Download Resume
// GET /api/resume
// Response: Blob data of the PDF file
export const downloadResume = async () => {
  // Mock response - in real API this would fetch from backend
  const mockPdfUrl = '/resume.pdf';
  const response = await fetch(mockPdfUrl);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'harsh-gupta-resume.pdf';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};