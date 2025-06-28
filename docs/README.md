# Uniquify Documentation

This directory contains the documentation for Uniquify, built with VitePress.

## Development

```bash
# Start development server
npm run docs:dev

# Build documentation
npm run docs:build

# Preview production build
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/
│   └── config.mts        # VitePress configuration
├── index.md              # Home page
├── guide/                # User guides
│   ├── getting-started.md
│   ├── features.md
│   ├── usage.md
│   ├── advanced.md
│   └── api.md
├── deployment/           # Deployment guides
│   ├── index.md
│   ├── custom-domain.md
│   └── troubleshooting.md
└── development/          # Development docs
    └── requirements.md
```

## Writing Documentation

1. All documentation is written in Markdown
2. Use frontmatter for page metadata
3. Link to other pages using relative paths
4. Images go in `docs/public/` directory

## Deployment

Documentation is automatically deployed to GitHub Pages along with the main application:
- Main app: `https://username.github.io/uniquify/`
- Documentation: `https://username.github.io/uniquify/docs/`

## Configuration

The VitePress configuration is in `docs/.vitepress/config.mts`. Key settings:
- `base`: Set to `/uniquify/` for GitHub Pages
- `title`: Documentation title
- `description`: Site description
- `themeConfig`: Navigation, sidebar, and other UI settings