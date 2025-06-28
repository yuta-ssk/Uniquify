'use client'

import React, { useState } from 'react'
import { FileUploader } from '../components/FileUploader'
import { FieldSelector } from '../components/FieldSelector'
import { ResultTable } from '../components/ResultTable'
import { CSVPreview } from '../components/CSVPreview'
import LanguageSelector from '../components/LanguageSelector'
import Instructions from '../components/Instructions'
import { deduplicateCSV, DeduplicateResult } from '../lib/deduplicate'
import { useLanguage } from '../lib/i18n/context'

export default function Home() {
  const { t } = useLanguage()
  const [csvData, setCsvData] = useState<any[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [result, setResult] = useState<DeduplicateResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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
      alert(t('selectAtLeastOneField'))
      return
    }

    const deduplicatedResult = deduplicateCSV(csvData, selectedFields)
    setResult(deduplicatedResult)
  }

  const handleReset = () => {
    setCsvData([])
    setHeaders([])
    setSelectedFields([])
    setResult(null)
  }

  const handleDeleteRow = (index: number) => {
    if (window.confirm(t('deleteRow') + '?')) {
      const newData = csvData.filter((_, i) => i !== index)
      setCsvData(newData)
      setResult(null) // 結果をリセット
    }
  }

  const handleDeleteProcessedRow = (data: any[], index: number) => {
    if (window.confirm(t('deleteRow') + '?')) {
      // 削除する行を特定
      const rowToDelete = data[index]
      
      // 元データから該当行を削除
      const newCsvData = csvData.filter(row => row !== rowToDelete)
      setCsvData(newCsvData)
      
      // 結果を再計算
      if (selectedFields.length > 0) {
        const newResult = deduplicateCSV(newCsvData, selectedFields)
        setResult(newResult)
      }
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('appTitle')}</h1>
          <p className="mt-2 text-gray-600">
            {t('appDescription')}
          </p>
        </div>

        <div className="space-y-6">
          <FileUploader 
            onFileUpload={handleFileUpload} 
            isLoading={isLoading}
            onLoadingChange={setIsLoading}
          />

          {/* CSVアップロード前に説明を表示 */}
          {csvData.length === 0 && !isLoading && (
            <Instructions />
          )}

          {headers.length > 0 && !result && !isLoading && (
            <>
              <FieldSelector
                fields={headers}
                selectedFields={selectedFields}
                onFieldToggle={handleFieldToggle}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
                onDeduplicate={handleDeduplicate}
              />

              <CSVPreview 
                data={csvData} 
                headers={headers} 
                title={t('uploadTitle')} 
                onDeleteRow={handleDeleteRow}
              />
            </>
          )}

          {result && !isLoading && (
            <>
              <div className="flex justify-center mb-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {t('clearButton')}
                </button>
              </div>
              
              <ResultTable 
                result={result} 
                originalData={csvData}
                headers={headers}
                selectedFields={selectedFields}
                onDeleteRow={handleDeleteProcessedRow}
              />
            </>
          )}
        </div>
      </div>
    </main>
  )
}