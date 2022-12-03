import React from 'react';

export default function CreateProduct() {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter product title..."
      />

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-gray-600"
      >
        Create
      </button>
    </form>
  );
}
