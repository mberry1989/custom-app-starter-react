# Contributing to Kontent.ai Custom App Starter React

Thank you for your interest in contributing to the Kontent.ai Custom App Starter React! We welcome contributions from the community.

## Code of Conduct

This project follows the [Kontent.ai Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How to Contribute

### Reporting Issues

- Use the GitHub issue tracker to report bugs or request features
- Before creating an issue, please search to see if a similar issue already exists
- Provide detailed information including:
  - Steps to reproduce the issue
  - Expected vs actual behavior
  - Environment details (Node.js version, browser, etc.)
  - Code samples or screenshots if applicable

### Contributing Code

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from `main`
4. **Make your changes** following our guidelines
5. **Test your changes** thoroughly
6. **Commit your changes** with descriptive commit messages
7. **Push to your fork** and submit a pull request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/custom-app-starter-react.git
cd custom-app-starter-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Guidelines

- **TypeScript**: All code should be written in TypeScript with proper typing
- **ESLint**: Follow the existing ESLint configuration
- **Formatting**: Use consistent formatting (Prettier recommended)
- **Comments**: Add JSDoc comments for public APIs
- **Testing**: Add tests for new functionality when applicable

### Commit Messages

Use clear and descriptive commit messages:

```
feat: add new configuration validation hook
fix: resolve issue with user roles display
docs: update README with deployment instructions
chore: update dependencies to latest versions
```

### Pull Request Guidelines

- **Branch naming**: Use descriptive branch names (e.g., `feature/user-role-hooks`, `fix/config-validation`)
- **PR description**: Clearly describe what your changes do and why
- **Single responsibility**: Keep PRs focused on a single feature or fix
- **Documentation**: Update documentation if needed
- **Backwards compatibility**: Maintain backwards compatibility when possible

### Project Structure

When adding new features, follow the existing project structure:

```
src/
├── customApp/          # Core custom app logic
├── hooks/              # React hooks
├── components/         # React components
└── ...
```

### Adding New Hooks

When adding new hooks:
1. Place them in the `src/hooks/` directory
2. Export them from `src/hooks/index.ts`
3. Add proper TypeScript types
4. Include JSDoc documentation
5. Follow the existing naming convention (`use*`)

### Adding New Components

When adding new components:
1. Place them in the `src/components/` directory
2. Use TypeScript with proper prop interfaces
3. Follow the existing styling patterns
4. Add JSDoc documentation for props
5. Consider accessibility (a11y) requirements

### Testing

While this starter focuses on demonstration, when adding complex logic:
- Add unit tests for utility functions
- Test React hooks with React Testing Library
- Ensure TypeScript compilation passes
- Test the app manually in different scenarios

### Documentation

When making changes:
- Update the README.md if needed
- Add or update JSDoc comments
- Update type definitions
- Consider adding examples for new features

## Release Process

Maintainers handle releases following semantic versioning:
- **Patch** (1.0.x): Bug fixes
- **Minor** (1.x.0): New features, backwards compatible
- **Major** (x.0.0): Breaking changes

## Questions?

If you have questions about contributing:
- Open a GitHub issue for discussion
- Join our [Discord community](https://discord.gg/SKCxwPtevJ)
- Check the [Kontent.ai documentation](https://kontent.ai/learn/)

Thank you for contributing to the Kontent.ai ecosystem! 🚀