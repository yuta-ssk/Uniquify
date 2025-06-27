'use client'

import React, { useState } from 'react'
import { DiffResult } from '../lib/diff'

interface DiffViewerProps {
  originalData: any[]
  diffResult: DiffResult
  headers: string[]
  selectedFields: string[]
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
  originalData,
  diffResult,
  headers,
  selectedFields
}) => {
  const [filter, setFilter] = useState<'all' | 'kept' | 'removed'>('all')

  const getFilteredData = () => {
    const data: Array<{ row: any; index: number; status: 'kept' | 'removed' }> = []
    
    if (filter === 'all') {
      originalData.forEach((row, index) => {
        const status = diffResult.keepIndices.includes(index) ? 'kept' : 'removed'
        data.push({ row, index, status })
      })
    } else if (filter === 'kept') {
      diffResult.keepIndices.forEach((index) => {
        data.push({ row: originalData[index], index, status: 'kept' })
      })
    } else {
      diffResult.removeIndices.forEach((index) => {
        data.push({ row: originalData[index], index, status: 'removed' })
      })
    }
    
    return data
  }

  const filteredData = getFilteredData()

  const getRowClass = (status: 'kept' | 'removed') => {
    const baseClass = "hover:bg-opacity-80"
    if (status === 'kept') {
      return `bg-green-50 border-l-4 border-green-400 ${baseClass}`
    } else {
      return `bg-red-50 border-l-4 border-red-400 ${baseClass}`
    }
  }

  const getStatusIcon = (status: 'kept' | 'removed') => {
    if (status === 'kept') {
      return (
        <span className="text-green-600 font-bold text-lg" title="保持">
          +
        </span>
      )
    } else {
      return (
        <span className="text-red-600 font-bold text-lg" title="削除">
          -
        </span>
      )
    }
  }

  const isSelectedField = (field: string) => {
    return selectedFields.includes(field)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          差分ビュー
        </h3>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-sm rounded ${
                filter === 'all'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              すべて ({originalData.length})
            </button>
            <button
              onClick={() => setFilter('kept')}
              className={`px-3 py-1 text-sm rounded ${
                filter === 'kept'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              保持 ({diffResult.kept.length})
            </button>
            <button
              onClick={() => setFilter('removed')}
              className={`px-3 py-1 text-sm rounded ${
                filter === 'removed'
                  ? 'bg-red-600 text-white'
                  : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}
            >
              削除 ({diffResult.removed.length})
            </button>
          </div>
          
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-green-600 font-bold">+</span>
              <span>保持されたデータ</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-red-600 font-bold">-</span>
              <span>削除されたデータ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                  
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  #
                </th>
                {headers.map((header) => (
                  <th
                    key={header}
                    className={`px-3 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isSelectedField(header)
                        ? 'bg-blue-100 text-blue-800 font-bold'
                        : 'text-gray-500'
                    }`}
                  >
                    {header}
                    {isSelectedField(header) && (
                      <span className="ml-1 text-blue-600" title="重複判定対象フィールド">
                        🔑
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredData.map(({ row, index, status }, displayIndex) => (
                <tr key={`${index}-${displayIndex}`} className={getRowClass(status)}>
                  <td className="px-2 py-3 text-center">
                    {getStatusIcon(status)}
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-500 font-mono">
                    {index + 1}
                  </td>
                  {headers.map((header) => (
                    <td
                      key={header}
                      className={`px-3 py-3 text-sm max-w-xs truncate ${
                        isSelectedField(header)
                          ? 'font-medium text-gray-900'
                          : 'text-gray-700'
                      }`}
                      title={String(row[header] || '')}
                    >
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}