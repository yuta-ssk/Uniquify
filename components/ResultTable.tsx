'use client'

import React, { useState } from 'react'
import Papa from 'papaparse'
import { DeduplicateResult } from '../lib/deduplicate'

interface ResultTableProps {
  result: DeduplicateResult | null
  headers: string[]
}

export const ResultTable: React.FC<ResultTableProps> = ({ result, headers }) => {
  const [showAll, setShowAll] = useState(false)
  
  if (!result) {
    return null
  }

  const downloadCSV = () => {
    const csv = Papa.unparse({
      fields: headers,
      data: result.data
    })
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `deduplicated_${new Date().toISOString().slice(0, 10)}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
        
        <button
          onClick={downloadCSV}
          className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          CSVをダウンロード
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-medium text-gray-700">
            データプレビュー {showAll ? `(全 ${result.data.length} 行)` : `(最初の10行)`}
          </h3>
          {result.data.length > 10 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              {showAll ? '最初の10行のみ表示' : 'すべて表示'}
            </button>
          )}
        </div>
        
        <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
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
              {(showAll ? result.data : result.data.slice(0, 10)).map((row, index) => (
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
        
        {!showAll && result.data.length > 10 && (
          <p className="mt-2 text-sm text-gray-500 text-center">
            他 {result.data.length - 10} 行があります
          </p>
        )}
      </div>
    </div>
  )
}