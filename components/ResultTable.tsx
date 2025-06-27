'use client'

import React, { useState } from 'react'
import Papa from 'papaparse'
import { DeduplicateResult } from '../lib/deduplicate'
import { DiffViewer } from './DiffViewer'
import { calculateDiff } from '../lib/diff'

interface ResultTableProps {
  result: DeduplicateResult | null
  originalData: any[]
  headers: string[]
  selectedFields: string[]
}

export const ResultTable: React.FC<ResultTableProps> = ({ result, originalData, headers, selectedFields }) => {
  const [activeTab, setActiveTab] = useState<'after' | 'before' | 'diff'>('after')
  
  if (!result) {
    return null
  }

  const downloadCSV = (data: any[], filename: string) => {
    const csv = Papa.unparse({
      fields: headers,
      data: data
    })
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const diffResult = calculateDiff(originalData, result.data, selectedFields)
  
  const getCurrentData = () => {
    if (activeTab === 'before') return originalData
    if (activeTab === 'after') return result.data
    return []
  }
  
  const getCurrentTitle = () => {
    if (activeTab === 'before') return '処理前データ'
    if (activeTab === 'after') return '処理後データ'
    return '差分ビュー'
  }
  
  const currentData = getCurrentData()
  const currentTitle = getCurrentTitle()

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">処理結果</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">元の行数</p>
            <p className="text-2xl font-bold text-blue-900">{result.totalRows}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600 font-medium">重複除去後の行数</p>
            <p className="text-2xl font-bold text-green-900">{result.uniqueRows}</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-red-600 font-medium">削除された重複</p>
            <p className="text-2xl font-bold text-red-900">{result.duplicatesRemoved}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => downloadCSV(result.data, 'deduplicated')}
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            処理後CSVをダウンロード
          </button>
          <button
            onClick={() => downloadCSV(originalData, 'original')}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            処理前CSVをダウンロード
          </button>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('after')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'after'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            処理後データ ({result.data.length}行)
          </button>
          <button
            onClick={() => setActiveTab('before')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'before'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            処理前データ ({originalData.length}行)
          </button>
          <button
            onClick={() => setActiveTab('diff')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'diff'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            差分ビュー ({diffResult.removed.length}削除)
          </button>
        </div>
      </div>

      {activeTab === 'diff' ? (
        <DiffViewer
          originalData={originalData}
          diffResult={diffResult}
          headers={headers}
          selectedFields={selectedFields}
        />
      ) : (
        <div className="overflow-x-auto">
          <div className="mb-4">
            <h3 className="text-md font-medium text-gray-700">
              {currentTitle} (全 {currentData.length} 行)
            </h3>
          </div>
          
          <div className="border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {index + 1}
                    </td>
                    {headers.map((header) => (
                      <td
                        key={header}
                        className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate"
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
      )}
    </div>
  )
}