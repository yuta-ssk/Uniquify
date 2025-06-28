# Contributing to Uniquify

Thank you for your interest in contributing to Uniquify! This guide will help you get started.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- Git
- A GitHub account

### Setup

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/uniquify.git
   cd uniquify
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Locally

```bash
# Start development server
npm run dev

# Run documentation
npm run docs:dev

# Build for production
npm run build
```

### Code Style

We use TypeScript and follow these conventions:

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for imports, double for strings
- **Semicolons**: No semicolons (except where required)
- **Components**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### Project Structure

```
uniquify/
├── app/          # Next.js app directory
├── components/   # React components
├── lib/          # Core logic
├── docs/         # Documentation
└── public/       # Static assets
```

## Making Changes

### Types of Contributions

- **Bug Fixes**: Fix issues reported in GitHub Issues
- **Features**: Add new functionality
- **Documentation**: Improve or translate docs
- **Tests**: Add missing tests
- **Performance**: Optimize existing code

### Commit Guidelines

Follow conventional commits:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Build/tooling changes

Examples:
```bash
feat(upload): add drag and drop support
fix(dedupe): handle empty fields correctly
docs(readme): add installation instructions
```

### Pull Request Process

1. **Update your branch**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes**:
   ```bash
   npm run build
   npm run lint
   ```

3. **Update documentation** if needed

4. **Submit PR**:
   - Clear title and description
   - Reference any related issues
   - Add screenshots for UI changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Tested on different browsers

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Updated documentation
- [ ] No console errors
```

## Testing

### Manual Testing

1. Test with various CSV files:
   - Small files (< 100 rows)
   - Large files (> 10,000 rows)
   - Files with special characters
   - Files with empty fields

2. Test all features:
   - File upload (drag & drop and button)
   - Field selection
   - Deduplication
   - Result views (tabs)
   - Export functionality
   - Language switching

3. Cross-browser testing:
   - Chrome
   - Firefox
   - Safari
   - Edge

### Automated Testing (TODO)

```bash
# Run tests
npm test

# Run tests in watch mode
npm test --watch

# Coverage report
npm test --coverage
```

## Code Review

All submissions require code review. We look for:

- **Correctness**: Does it work as intended?
- **Performance**: Is it efficient?
- **Readability**: Is the code clear?
- **Consistency**: Does it follow our patterns?
- **Security**: Are there any vulnerabilities?

## Community

### Communication

- **Issues**: Bug reports and feature requests
- **Discussions**: General questions and ideas
- **Pull Requests**: Code contributions

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive criticism
- No harassment or discrimination

## Release Process

1. Maintainers merge PRs to `main`
2. GitHub Actions builds and tests
3. Automatic deployment to GitHub Pages
4. Tag releases for major versions

## Getting Help

- Check existing issues and PRs
- Read the documentation
- Ask in GitHub Discussions
- Review similar projects

## Recognition

Contributors are recognized in:
- GitHub contributors page
- Release notes
- Documentation credits

Thank you for contributing to Uniquify! 🎉