'use client'

import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Papa from 'papaparse'

interface FileUploaderProps {
  onFileUpload: (data: any[], headers: string[]) => void
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    
    if (!file) return

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const headers = results.meta.fields || []
        onFileUpload(results.data, headers)
      },
      error: (error) => {
        console.error('CSV解析エラー:', error)
        alert('CSVファイルの解析に失敗しました。')
      }
    })
  }, [onFileUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv']
    },
    maxFiles: 1
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
    >
      <input {...getInputProps()} />
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive
          ? 'ファイルをドロップしてください'
          : 'CSVファイルをドラッグ&ドロップ、またはクリックして選択'}
      </p>
      <p className="text-xs text-gray-500 mt-1">CSV形式のみ対応</p>
    </div>
  )
}