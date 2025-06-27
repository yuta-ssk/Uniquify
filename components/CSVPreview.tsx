'use client'

import React, { useState } from 'react'
import Papa from 'papaparse'

interface CSVPreviewProps {
  data: any[]
  headers: string[]
  title: string
}

export const CSVPreview: React.FC<CSVPreviewProps> = ({ data, headers, title }) => {
  const [showAll, setShowAll] = useState(false)

  if (data.length === 0) {
    return null
  }

  const downloadCSV = () => {
    const csv = Papa.unparse({
      fields: headers,
      data: data
    })
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `${title}_${new Date().toISOString().slice(0, 10)}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">総行数: {data.length}行</p>
        </div>
        <button
          onClick={downloadCSV}
          className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          CSVダウンロード
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-medium text-gray-700">
            データプレビュー {showAll ? `(全 ${data.length} 行)` : `(最初の10行)`}
          </h4>
          {data.length > 10 && (
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
              {(showAll ? data : data.slice(0, 10)).map((row, index) => (
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
        
        {!showAll && data.length > 10 && (
          <p className="mt-2 text-sm text-gray-500 text-center">
            他 {data.length - 10} 行があります
          </p>
        )}
      </div>
    </div>
  )
}