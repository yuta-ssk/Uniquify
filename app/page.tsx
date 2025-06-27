'use client'

import React, { useState } from 'react'
import { FileUploader } from '../components/FileUploader'
import { FieldSelector } from '../components/FieldSelector'
import { ResultTable } from '../components/ResultTable'
import { deduplicateCSV, DeduplicateResult } from '../lib/deduplicate'

export default function Home() {
  const [csvData, setCsvData] = useState<any[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [result, setResult] = useState<DeduplicateResult | null>(null)

  const handleFileUpload = (data: any[], headers: string[]) => {
    setCsvData(data)
    setHeaders(headers)
    setSelectedFields(headers)
    setResult(null)
  }

  const handleFieldToggle = (field: string) => {
    setSelectedFields(prev =>
      prev.includes(field)
        ? prev.filter(f => f !== field)
        : [...prev, field]
    )
  }

  const handleSelectAll = () => {
    setSelectedFields(headers)
  }

  const handleDeselectAll = () => {
    setSelectedFields([])
  }

  const handleDeduplicate = () => {
    if (csvData.length === 0 || selectedFields.length === 0) {
      alert('CSVファイルをアップロードし、少なくとも1つのフィールドを選択してください。')
      return
    }

    const deduplicatedResult = deduplicateCSV(csvData, selectedFields)
    setResult(deduplicatedResult)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">CSV重複排除ツール</h1>
          <p className="mt-2 text-gray-600">
            CSVファイルをアップロードして、重複データを排除します
          </p>
        </div>

        <div className="space-y-6">
          <FileUploader onFileUpload={handleFileUpload} />

          {headers.length > 0 && (
            <>
              <FieldSelector
                fields={headers}
                selectedFields={selectedFields}
                onFieldToggle={handleFieldToggle}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
              />

              <div className="flex justify-center">
                <button
                  onClick={handleDeduplicate}
                  disabled={selectedFields.length === 0}
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  重複を排除
                </button>
              </div>
            </>
          )}

          {result && (
            <ResultTable result={result} headers={headers} />
          )}
        </div>
      </div>
    </main>
  )
}