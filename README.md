# Trace - Team Memory Platform

A comprehensive React-based knowledge management system designed for teams to centralize projects, tasks, documents, decisions, and team collaboration all in one place.

## Features

- **Dashboard** - Get a quick overview of projects, tasks, documents, and recent activity
- **Projects** - Organize work into distinct projects with associated documents and decisions
- **Tasks** - Track work items with status (pending, in progress, done) and priority levels
- **Documents** - Store and organize team knowledge and documentation
- **Decisions** - Log important architectural and strategic decisions with pinning capability
- **Team Management** - Manage team members with role-based access control
- **Analytics** - Visualize team productivity, task completion rates, and activity trends
- **Ask Trace** - AI-powered Q&A about your team's knowledge base (demo mode)
- **Ingest Documents** - Add content via URLs, file uploads, or pasted text
- **Search** - Full-text search across all workspace content
- **Slack Archive** - Searchable archive of Slack conversations
- **Trace Memory** - View indexed team knowledge and memories

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: Radix UI
- **Routing**: Wouter
- **State Management**: React Query
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trace-redesign.git
cd trace-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
trace-redesign/
├── src/
│   ├── components/        # Reusable components (Layout, etc)
│   ├── pages/            # Page components for each route
│   ├── lib/              # Utilities and mock data
│   ├── App.tsx           # Main app routing
│   ├── main.tsx          # React DOM entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md
```

## Available Routes

- `/` - Dashboard
- `/projects` - All projects
- `/projects/:id` - Project detail view
- `/tasks` - All tasks with filtering
- `/documents` - Document library
- `/decisions` - Decision log
- `/team` - Team management
- `/analytics` - Productivity analytics
- `/ingest` - Document ingestion
- `/ask` - Ask Trace (Q&A)
- `/memory` - Trace Memory
- `/search` - Search workspace
- `/slack-archive` - Slack message archive

## Development

### Code Style

The project uses Prettier for code formatting and TypeScript for type safety.

Format code:
```bash
npm run format
```

Type check:
```bash
npm run typecheck
```

### Adding New Pages

1. Create a new file in `src/pages/YourPage.tsx`
2. Add the route to `src/App.tsx`
3. Add navigation link in `src/components/Layout.tsx`

### Adding New Components

Create component files in `src/components/` following the existing patterns with:
- TypeScript interfaces for props
- Tailwind CSS for styling
- CSS custom properties for theming (stored in `:root` in index.css)

## Color Scheme

The application uses a sage green primary color with semantic color system:

- **Primary (Sage)**: `hsl(150 28% 48%)`
- **Accent Colors**:
  - Amber: `hsl(38 90% 48%)`
  - Blue: `hsl(200 70% 48%)`
  - Green: `hsl(150 42% 42%)`
  - Red: `hsl(0 65% 50%)`

Colors are defined as CSS custom properties in `src/index.css` and can be referenced throughout the app.

## Mock Data

The application uses mock data from `src/lib/mockData.ts` for demonstration purposes. To connect to a real backend:

1. Replace mock data imports with API calls
2. Update React Query configurations
3. Add proper error handling and loading states

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT - feel free to use this for personal or commercial projects

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ for team collaboration**
