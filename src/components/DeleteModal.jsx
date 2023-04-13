import { useState } from 'react'

const DeleteModal = ({onDelete, onCancel}) => {
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    onDelete();
    setShowModal(false)
  }

  function handleCancel() {
    onCancel();
    setShowModal(false)
  }
  return (
    <>
    <button onClick={() => setShowModal(true)} className="bg-red-500 text-white px-4 py-2 rounded">
    Delete
  </button>

{showModal && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

        <div className="bg-white rounded-lg p-8">
          <h2 className="text-lg font-bold mb-4">Are you sure you want to delete?</h2>
          <p className="text-gray-500 mb-4">This action cannot be undone.</p>

          <div className="flex justify-end">
            <button onClick={handleCancel} className="mr-4 text-gray-500">
              Cancel
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
  </>
);
}

export default DeleteModal













