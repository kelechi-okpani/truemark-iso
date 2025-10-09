'use client'

const WarningPrompt = ({ count, max, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center animate-in fade-in zoom-in">
        <h2 className="text-xl font-bold text-red-600 mb-4">⚠️ Warning</h2>
        <p className="text-gray-700 mb-2">
          Abnormal behavior detected.
        </p>
        <p className="text-gray-700 mb-4">
         Please stay on this exam tab.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Warning {count}/{max}
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#387467] text-white rounded-lg hover:bg-[#2f5f54] transition"
        >
          Continue Exam
        </button>
      </div>
    </div>
  );
};

export default WarningPrompt