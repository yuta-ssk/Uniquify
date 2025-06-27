'use client'

import React, { useState, useMemo } from 'react'
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

type SortDirection = 'asc' | 'desc' | null

export const ResultTable: React.FC<ResultTableProps> = ({ result, originalData, headers, selectedFields }) => {
  const [activeTab, setActiveTab] = useState<'after' | 'before' | 'diff'>('after')
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  
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

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortColumn(null)
        setSortDirection(null)
      }
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection || activeTab === 'diff') {
      return currentData
    }

    const sorted = [...currentData]
    sorted.sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      const aStr = String(aValue).toLowerCase()
      const bStr = String(bValue).toLowerCase()

      const aNum = parseFloat(aStr)
      const bNum = parseFloat(bStr)

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDirection === 'asc' ? aNum - bNum : bNum - aNum
      }

      return sortDirection === 'asc' 
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr)
    })

    return sorted
  }, [currentData, sortColumn, sortDirection, activeTab])

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    }
    
    if (sortDirection === 'asc') {
      return (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      )
    } else {
      return (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
        </svg>
      )
    }
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
            onClick={() => {
              setActiveTab('after')
              setSortColumn(null)
              setSortDirection(null)
            }}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'after'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            処理後データ ({result.data.length}行)
          </button>
          <button
            onClick={() => {
              setActiveTab('before')
              setSortColumn(null)
              setSortDirection(null)
            }}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'before'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            処理前データ ({originalData.length}行)
          </button>
          <button
            onClick={() => {
              setActiveTab('diff')
              setSortColumn(null)
              setSortDirection(null)
            }}
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
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort(header)}
                    >
                      <div className="flex items-center space-x-1">
                        <span>{header}</span>
                        {getSortIcon(header)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedData.map((row, index) => (
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