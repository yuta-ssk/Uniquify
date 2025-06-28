export type Language = 'ja' | 'en';

export type TranslationKeys = {
  // Common
  appTitle: string;
  appDescription: string;
  
  // File upload
  uploadTitle: string;
  uploadDescription: string;
  dragDropText: string;
  orText: string;
  selectFileButton: string;
  
  // Field selection
  fieldSelectionTitle: string;
  fieldSelectionDescription: string;
  
  // Processing
  processButton: string;
  processing: string;
  
  // Results
  resultsTitle: string;
  originalCount: string;
  uniqueCount: string;
  duplicateCount: string;
  downloadButton: string;
  clearButton: string;
  
  // Table
  showDuplicates: string;
  showUnique: string;
  sortBy: string;
  ascending: string;
  descending: string;
  deleteRow: string;
  
  // Field selection buttons
  selectAll: string;
  deselectAll: string;
  selectedFields: string;
  
  // Messages
  noFileSelected: string;
  selectAtLeastOneField: string;
  errorProcessingFile: string;
  
  // Language
  language: string;
  japanese: string;
  english: string;
};

export const translations: Record<Language, TranslationKeys> = {
  ja: {
    // Common
    appTitle: 'Uniquify',
    appDescription: 'CSVファイルの重複データを簡単に整理',
    
    // File upload
    uploadTitle: 'CSVファイルをアップロード',
    uploadDescription: 'CSVファイルをドラッグ＆ドロップまたは選択してください',
    dragDropText: 'ここにファイルをドラッグ＆ドロップ',
    orText: 'または',
    selectFileButton: 'ファイルを選択',
    
    // Field selection
    fieldSelectionTitle: 'フィールドを選択',
    fieldSelectionDescription: '重複判定に使用するフィールドを選択してください',
    
    // Processing
    processButton: '重複を整理',
    processing: '処理中...',
    
    // Results
    resultsTitle: '処理結果',
    originalCount: '元のレコード数',
    uniqueCount: 'ユニークなレコード数',
    duplicateCount: '重複レコード数',
    downloadButton: 'CSVダウンロード',
    clearButton: 'クリア',
    
    // Table
    showDuplicates: '重複を表示',
    showUnique: 'ユニークを表示',
    sortBy: '並び替え',
    ascending: '昇順',
    descending: '降順',
    deleteRow: '削除',
    
    // Field selection buttons
    selectAll: 'すべて選択',
    deselectAll: 'すべて解除',
    selectedFields: '選択されたフィールド',
    
    // Messages
    noFileSelected: 'ファイルが選択されていません',
    selectAtLeastOneField: '少なくとも1つのフィールドを選択してください',
    errorProcessingFile: 'ファイルの処理中にエラーが発生しました',
    
    // Language
    language: '言語',
    japanese: '日本語',
    english: 'English',
  },
  en: {
    // Common
    appTitle: 'Uniquify',
    appDescription: 'Easily organize duplicate data in CSV files',
    
    // File upload
    uploadTitle: 'Upload CSV File',
    uploadDescription: 'Drag and drop or select a CSV file',
    dragDropText: 'Drag and drop file here',
    orText: 'or',
    selectFileButton: 'Select File',
    
    // Field selection
    fieldSelectionTitle: 'Select Fields',
    fieldSelectionDescription: 'Select fields to use for duplicate detection',
    
    // Processing
    processButton: 'Process Duplicates',
    processing: 'Processing...',
    
    // Results
    resultsTitle: 'Results',
    originalCount: 'Original Records',
    uniqueCount: 'Unique Records',
    duplicateCount: 'Duplicate Records',
    downloadButton: 'Download CSV',
    clearButton: 'Clear',
    
    // Table
    showDuplicates: 'Show Duplicates',
    showUnique: 'Show Unique',
    sortBy: 'Sort By',
    ascending: 'Ascending',
    descending: 'Descending',
    deleteRow: 'Delete',
    
    // Field selection buttons
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    selectedFields: 'Selected Fields',
    
    // Messages
    noFileSelected: 'No file selected',
    selectAtLeastOneField: 'Please select at least one field',
    errorProcessingFile: 'Error processing file',
    
    // Language
    language: 'Language',
    japanese: '日本語',
    english: 'English',
  },
};