# Advanced Usage

Learn about advanced features and customization options.

## Advanced Field Selection

### Partial Field Matching

While Uniquify uses exact matching by default, you can combine fields strategically:

1. **Email-only deduplication**: Select only email field
2. **Name deduplication**: Select both first and last name
3. **Address matching**: Select street, city, and zip code

### Handling Special Cases

#### Empty Values
- Empty cells are treated as unique values
- To ignore empty values, manually delete those rows first

#### Case Sensitivity
- Matches are case-sensitive ("John" ≠ "john")
- Pre-process your data if case-insensitive matching is needed

#### Whitespace
- Leading/trailing spaces are preserved
- Clean your data first if needed

## Performance Optimization

### Large Files

For files over 10,000 rows:

1. **Split processing**:
   ```
   - Process in batches
   - Combine results afterward
   ```

2. **Browser selection**:
   - Chrome: Best performance
   - Firefox: Good alternative
   - Safari: May be slower with large files

### Memory Management

- Close other browser tabs
- Clear browser cache before processing
- Use 64-bit browser version

## Data Preparation Tips

### Before Upload

1. **Standardize formats**:
   - Dates: Use consistent format
   - Phone numbers: Remove formatting
   - Names: Consistent capitalization

2. **Clean data**:
   ```csv
   # Bad
   john.doe@email.com ,John,Doe
   JOHN.DOE@EMAIL.COM,John ,Doe
   
   # Good
   john.doe@email.com,John,Doe
   john.doe@email.com,John,Doe
   ```

3. **Remove extra columns**:
   - Keep only necessary fields
   - Reduces processing time

## Export Options

### Custom Filename

Downloaded files are named: `deduplicated_YYYY-MM-DD.csv`

To customize:
1. Download the file
2. Rename as needed
3. Maintain `.csv` extension

### Further Processing

After export, you can:
- Import to Excel/Google Sheets
- Use with other data tools
- Merge with other datasets

## Automation Ideas

### Batch Processing

Create a workflow:
1. Prepare multiple CSV files
2. Process each through Uniquify
3. Combine results with a script

### Regular Cleaning

Set up a schedule:
- Weekly customer list cleanup
- Monthly inventory deduplication
- Quarterly database maintenance

## Integration Possibilities

While Uniquify is a standalone tool, you can:

1. **Pre-process with scripts**:
   ```python
   # Standardize before upload
   df['email'] = df['email'].str.lower()
   df.to_csv('prepared.csv')
   ```

2. **Post-process results**:
   ```python
   # Further analysis
   original = pd.read_csv('original.csv')
   cleaned = pd.read_csv('deduplicated.csv')
   removed = len(original) - len(cleaned)
   ```

## Tips & Tricks

1. **Preview before processing**: Always review field selection
2. **Test with sample**: Try a small file first
3. **Keep originals**: Always maintain backup copies
4. **Document your process**: Note which fields you used