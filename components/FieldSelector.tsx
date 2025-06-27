'use client'

import React from 'react'

interface FieldSelectorProps {
  fields: string[]
  selectedFields: string[]
  onFieldToggle: (field: string) => void
  onSelectAll: () => void
  onDeselectAll: () => void
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  fields,
  selectedFields,
  onFieldToggle,
  onSelectAll,
  onDeselectAll
}) => {
  if (fields.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          重複判定に使用するフィールドを選択
        </h2>
        <div className="space-x-2">
          <button
            onClick={onSelectAll}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            すべて選択
          </button>
          <button
            onClick={onDeselectAll}
            className="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          >
            すべて解除
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {fields.map((field) => (
          <label
            key={field}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <input
              type="checkbox"
              checked={selectedFields.includes(field)}
              onChange={() => onFieldToggle(field)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 truncate" title={field}>
              {field}
            </span>
          </label>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        選択されたフィールド: {selectedFields.length} / {fields.length}
      </div>
    </div>
  )
}