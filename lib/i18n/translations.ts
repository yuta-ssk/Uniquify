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
  
  // Instructions
  howToUseTitle: string;
  howToStep1: string;
  howToStep2: string;
  howToStep3: string;
  howToStep4: string;
  featuresTitle: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  
  // Privacy
  privacyTitle: string;
  privacyMessage: string;
  privacyIcon: string;
  
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
  
  // Common UI
  operation: string;
  totalRows: string;
  dataPreview: string;
  allRows: string;
  deleteThisRow: string;
  
  // Result view
  processingResult: string;
  originalRows: string;
  deduplicatedRows: string;
  deletedDuplicates: string;
  downloadProcessedCSV: string;
  processedData: string;
  beforeData: string;
  diffView: string;
  rows: string;
  
  // Diff view
  unchanged: string;
  removed: string;
  legend: string;
  all: string;
  kept: string;
  keptData: string;
  removedData: string;
  duplicateDetectionField: string;
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
    
    // Instructions
    howToUseTitle: '使い方',
    howToStep1: 'CSVファイルをドラッグ＆ドロップまたは選択してアップロードします',
    howToStep2: '重複判定に使用するフィールド（列）を選択します',
    howToStep3: '「重複を整理」ボタンをクリックして処理を開始します',
    howToStep4: '処理結果を確認し、必要に応じてCSVファイルをダウンロードします',
    featuresTitle: '主な機能',
    feature1: '選択したフィールドの組み合わせで重複を判定',
    feature2: '重複データとユニークデータを分けて表示',
    feature3: '処理後のデータを個別に削除可能',
    feature4: '整理されたデータをCSV形式でダウンロード',
    
    // Privacy
    privacyTitle: 'プライバシー保護',
    privacyMessage: 'すべての処理はお使いのブラウザ内で完結します。アップロードされたファイルやデータは一切サーバーに送信されません。',
    privacyIcon: '🔒',
    
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
    
    // Common UI
    operation: '操作',
    totalRows: '総行数',
    dataPreview: 'データプレビュー',
    allRows: '全',
    deleteThisRow: 'この行を削除',
    
    // Result view
    processingResult: '処理結果',
    originalRows: '元の行数',
    deduplicatedRows: '重複除去後の行数',
    deletedDuplicates: '削除された重複',
    downloadProcessedCSV: '処理後CSVをダウンロード',
    processedData: '処理後データ',
    beforeData: '処理前データ',
    diffView: '差分ビュー',
    rows: '行',
    
    // Diff view
    unchanged: '変更なし',
    removed: '削除済み',
    legend: '凡例',
    all: 'すべて',
    kept: '保持',
    keptData: '保持されたデータ',
    removedData: '削除されたデータ',
    duplicateDetectionField: '重複判定対象フィールド',
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
    
    // Instructions
    howToUseTitle: 'How to Use',
    howToStep1: 'Upload a CSV file by dragging and dropping or selecting it',
    howToStep2: 'Select the fields (columns) to use for duplicate detection',
    howToStep3: 'Click the "Process Duplicates" button to start processing',
    howToStep4: 'Review the results and download the CSV file if needed',
    featuresTitle: 'Key Features',
    feature1: 'Detect duplicates based on selected field combinations',
    feature2: 'Display duplicate and unique data separately',
    feature3: 'Delete individual records after processing',
    feature4: 'Download organized data in CSV format',
    
    // Privacy
    privacyTitle: 'Privacy Protection',
    privacyMessage: 'All processing happens entirely in your browser. No files or data are ever sent to any server.',
    privacyIcon: '🔒',
    
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
    
    // Common UI
    operation: 'Action',
    totalRows: 'Total Rows',
    dataPreview: 'Data Preview',
    allRows: 'All',
    deleteThisRow: 'Delete this row',
    
    // Result view
    processingResult: 'Processing Result',
    originalRows: 'Original Rows',
    deduplicatedRows: 'Deduplicated Rows',
    deletedDuplicates: 'Deleted Duplicates',
    downloadProcessedCSV: 'Download Processed CSV',
    processedData: 'Processed Data',
    beforeData: 'Before Processing',
    diffView: 'Diff View',
    rows: 'rows',
    
    // Diff view
    unchanged: 'Unchanged',
    removed: 'Removed',
    legend: 'Legend',
    all: 'All',
    kept: 'Kept',
    keptData: 'Kept Data',
    removedData: 'Removed Data',
    duplicateDetectionField: 'Duplicate Detection Field',
  },
};