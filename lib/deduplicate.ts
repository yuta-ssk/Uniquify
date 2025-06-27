export interface DeduplicateResult {
  data: any[]
  totalRows: number
  uniqueRows: number
  duplicatesRemoved: number
}

export function deduplicateCSV(
  data: any[],
  selectedFields: string[]
): DeduplicateResult {
  if (data.length === 0 || selectedFields.length === 0) {
    return {
      data: data,
      totalRows: data.length,
      uniqueRows: data.length,
      duplicatesRemoved: 0,
    }
  }

  const uniqueKeys = new Set<string>()
  const uniqueData: any[] = []

  data.forEach((row) => {
    const keyParts: string[] = []
    
    selectedFields.forEach((field) => {
      const value = row[field]
      keyParts.push(value !== undefined && value !== null ? String(value) : '')
    })
    
    const key = keyParts.join('|||')
    
    if (!uniqueKeys.has(key)) {
      uniqueKeys.add(key)
      uniqueData.push(row)
    }
  })

  return {
    data: uniqueData,
    totalRows: data.length,
    uniqueRows: uniqueData.length,
    duplicatesRemoved: data.length - uniqueData.length,
  }
}