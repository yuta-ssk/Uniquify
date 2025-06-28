# Requirements Specification

## Overview

Uniquify is a web-based CSV deduplication tool that allows users to upload CSV files, select fields for duplicate detection, and download cleaned data.

## Goals

- Provide an easy-to-use interface for CSV deduplication
- Process data entirely in the browser (no server required)
- Support flexible field selection for duplicate detection
- Deploy as a static site on GitHub Pages

## Technical Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) with App Router |
| UI Framework | [Tailwind CSS](https://tailwindcss.com/) |
| Language | TypeScript |
| CSV Parsing | [PapaParse](https://www.papaparse.com/) |
| File Upload | [react-dropzone](https://react-dropzone.js.org/) |
| Deployment | GitHub Pages (static export) |
| Documentation | [VitePress](https://vitepress.dev/) |

## Functional Requirements

### Core Features

1. **CSV Upload**
   - Drag and drop support
   - File selection dialog
   - Format validation

2. **Field Selection**
   - Automatic header detection
   - Checkbox for each field
   - Select/deselect all options

3. **Deduplication Logic**
   - Exact match on selected fields
   - Keep first occurrence
   - Remove subsequent duplicates

4. **Results Display**
   - Statistics (total, unique, removed)
   - Tabbed view (before/after/diff)
   - Sortable columns

5. **Export**
   - Download cleaned CSV
   - Preserve original structure
   - Date-stamped filename

### Additional Features

- **Internationalization**: English and Japanese support
- **Individual Row Deletion**: Manual cleanup after processing
- **Visual Diff**: Color-coded change visualization
- **Local Processing**: All operations in browser

## Non-Functional Requirements

### Performance
- Handle CSV files up to 10MB
- Process 10,000 rows in < 5 seconds
- Smooth UI interactions

### Security
- No data transmission to servers
- No persistent storage
- Client-side only processing

### Usability
- Intuitive interface
- Clear visual feedback
- Responsive design
- Accessibility support

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Architecture

```
uniquify/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with i18n
│   └── page.tsx           # Main application page
├── components/            # React components
│   ├── FileUploader.tsx   # CSV upload handling
│   ├── FieldSelector.tsx  # Field selection UI
│   ├── ResultTable.tsx    # Results display
│   ├── CSVPreview.tsx     # Data preview
│   ├── DiffViewer.tsx     # Diff visualization
│   └── Instructions.tsx   # Usage guide
├── lib/                   # Core logic
│   ├── deduplicate.ts     # Deduplication algorithm
│   ├── diff.ts            # Diff calculation
│   └── i18n/              # Internationalization
├── docs/                  # VitePress documentation
└── public/                # Static assets
```

## Deployment Strategy

1. **Development**
   ```bash
   npm run dev
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Push to `main` branch
   - GitHub Actions builds and deploys
   - Available at `https://username.github.io/uniquify/`

## Future Enhancements

- [ ] CSV encoding detection
- [ ] Custom delimiter support
- [ ] Fuzzy matching options
- [ ] Batch file processing
- [ ] Export to other formats
- [ ] API endpoint for programmatic access