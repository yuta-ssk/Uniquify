# Getting Started

This guide will help you get Uniquify up and running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) version 20 or higher
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yoyuta-ssk/uniquify.git
cd uniquify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
uniquify/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── FileUploader.tsx   # CSV upload component
│   ├── FieldSelector.tsx  # Field selection UI
│   ├── ResultTable.tsx    # Results display
│   └── ...
├── lib/                   # Utility functions
│   ├── deduplicate.ts     # Core deduplication logic
│   └── i18n/              # Internationalization
├── docs/                  # Documentation (VitePress)
└── public/                # Static assets
```

## Basic Usage

1. **Upload a CSV File**
   - Drag and drop a CSV file onto the upload area
   - Or click "Select File" to browse

2. **Select Fields**
   - Choose which fields to use for duplicate detection
   - Use "Select All" or "Deselect All" for convenience

3. **Process**
   - Click "Process Duplicates" to start
   - View results in the table below

4. **Export**
   - Download the cleaned CSV file
   - Or continue editing the results

## Next Steps

- Learn about [Features](./features.md)
- Explore [Advanced Usage](./advanced.md)
- Read the [API Reference](./api.md)