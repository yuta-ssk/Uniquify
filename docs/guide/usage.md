# Basic Usage

This guide walks you through the typical workflow of using Uniquify.

## Step-by-Step Guide

### Step 1: Upload Your CSV File

There are two ways to upload your file:

1. **Drag and Drop**
   - Simply drag your CSV file from your file explorer
   - Drop it onto the dashed upload area

2. **File Browser**
   - Click the "Select File" button
   - Navigate to your CSV file
   - Click "Open"

<!-- ![Upload Interface](../assets/upload.png) -->

### Step 2: Review Your Data

Once uploaded, you'll see:
- Total number of rows
- A preview of all data in a table format
- Column headers from your CSV

### Step 3: Select Fields for Duplicate Detection

This is the most important step:

1. By default, all fields are selected
2. Uncheck fields you don't want to use for matching
3. Use the quick actions:
   - **Select All**: Check all fields
   - **Deselect All**: Uncheck all fields

**Example**: If you have a customer list with columns `[Email, Name, Phone, Address]`, you might only select `Email` to find duplicate email addresses.

### Step 4: Process Duplicates

Click the "Process Duplicates" button to start the deduplication process.

The system will:
1. Group rows by the selected fields
2. Keep the first occurrence of each unique combination
3. Mark all subsequent occurrences as duplicates

### Step 5: Review Results

After processing, you'll see:

- **Statistics Panel**
  - Original row count
  - Unique rows (kept)
  - Duplicates removed

- **Result Tabs**
  - **Processed Data**: The cleaned dataset
  - **Before Processing**: Original data for reference
  - **Diff View**: Visual comparison showing what was removed

### Step 6: Export or Continue Editing

You have several options:

1. **Download CSV**: Save the cleaned data
2. **Delete Individual Rows**: Further refine by removing specific rows
3. **Clear and Start Over**: Process a new file

## Tips and Best Practices

### Choosing Fields Wisely

- **Email deduplication**: Select only the email field
- **Full record matching**: Select all fields
- **Name matching**: Consider selecting first and last name together
- **Address deduplication**: Select address fields but exclude names

### Handling Edge Cases

1. **Empty values**: Rows with empty values in selected fields are considered unique
2. **Case sensitivity**: Currently case-sensitive (e.g., "John" ≠ "john")
3. **Whitespace**: Leading/trailing spaces are preserved

### Performance Tips

- Files up to 10,000 rows process instantly
- Larger files may take a few seconds
- Use Chrome for best performance

## Common Use Cases

### 1. Email List Cleanup
```
Selected fields: [Email]
Result: One entry per unique email address
```

### 2. Customer Database Deduplication
```
Selected fields: [FirstName, LastName, Phone]
Result: Removes customers with identical name and phone
```

### 3. Inventory Management
```
Selected fields: [SKU]
Result: One entry per unique product SKU
```

### 4. Event Registration
```
Selected fields: [Email, EventID]
Result: One registration per person per event
```