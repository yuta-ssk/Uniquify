export interface DiffResult {
  kept: any[]
  removed: any[]
  keepIndices: number[]
  removeIndices: number[]
}

export function calculateDiff(
  originalData: any[],
  deduplicatedData: any[],
  selectedFields: string[]
): DiffResult {
  const kept: any[] = []
  const removed: any[] = []
  const keepIndices: number[] = []
  const removeIndices: number[] = []

  // 重複排除後のデータのキーセットを作成
  const deduplicatedKeys = new Set<string>()
  deduplicatedData.forEach((row) => {
    const keyParts: string[] = []
    selectedFields.forEach((field) => {
      const value = row[field]
      keyParts.push(value !== undefined && value !== null ? String(value) : '')
    })
    deduplicatedKeys.add(keyParts.join('|||'))
  })

  // 各行が保持されたか削除されたかを判定
  const usedKeys = new Set<string>()
  
  originalData.forEach((row, index) => {
    const keyParts: string[] = []
    selectedFields.forEach((field) => {
      const value = row[field]
      keyParts.push(value !== undefined && value !== null ? String(value) : '')
    })
    const key = keyParts.join('|||')

    if (deduplicatedKeys.has(key) && !usedKeys.has(key)) {
      // 初回出現のため保持
      kept.push(row)
      keepIndices.push(index)
      usedKeys.add(key)
    } else {
      // 重複のため削除
      removed.push(row)
      removeIndices.push(index)
    }
  })

  return {
    kept,
    removed,
    keepIndices,
    removeIndices
  }
}