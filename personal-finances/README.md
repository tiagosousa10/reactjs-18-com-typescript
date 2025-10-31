# Personal Finances

A modern and clean personal finance management application built with React 18, TypeScript, and styled-components. This application helps users track their income and expenses, manage transactions, and monitor their financial balance through an intuitive dashboard.

## 🚀 Features

- **User Authentication**: Secure sign-in and sign-up with JWT token-based authentication
- **Dashboard**: Overview of balance, pending and completed transactions with month/year filtering
- **Transaction Management**: Create, edit, and view all your financial transactions
- **Account Management**: Manage your user account and profile settings
- **Theme Support**: Light and dark themes with customizable color palettes
- **Responsive Layout**: Clean and modern UI with sidebar navigation
- **Protected Routes**: Authentication middleware to protect private routes

## 🛠️ Technologies & Libraries

### Core Technologies
- **React 18.3.1**: Modern React with latest features
- **TypeScript 5.6.2**: Type-safe JavaScript for better code quality
- **Vite 6.0.1**: Fast build tool and development server

### State Management
- **Redux Toolkit 2.4.0**: Modern Redux for state management
- **React Redux 9.1.2**: React bindings for Redux

### Routing
- **React Router DOM 6.28.0**: Client-side routing and navigation

### Styling
- **Styled Components 6.1.13**: CSS-in-JS styling solution with theme support

### HTTP Client
- **Axios 1.7.9**: Promise-based HTTP client for API requests

### UI Libraries
- **React Icons 5.4.0**: Comprehensive icon library
- **React Spinners 0.15.0**: Loading spinner components

### Development Tools
- **ESLint**: Code linting and quality assurance
- **TypeScript ESLint**: TypeScript-specific linting rules

## 📁 Project Structure

```
src/
├── @types/              # TypeScript type definitions
│   ├── Auth.ts
│   └── Transaction.ts
├── assets/              # Static assets (images, icons)
├── components/          # Reusable React components
│   ├── Alert/
│   ├── Button/
│   ├── Layout/
│   │   ├── Navbar/
│   │   └── Sidebar/
│   ├── Loading/
│   ├── SelectInput/
│   ├── TextInput/
│   └── TransactionsTable/
├── hooks/              # Custom React hooks
│   ├── auth.ts
│   └── theme.ts
├── middlewares/        # Route protection middleware
│   └── AuthMiddleware.tsx
├── pages/              # Page components
│   ├── Account/
│   ├── Auth/
│   ├── Home/
│   ├── NotFound/
│   └── Transaction/
│       ├── Edit/
│       ├── New/
│       └── Transactions/
├── redux/              # Redux store and slices
│   ├── hooks.ts
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── themeSlice.ts
│   └── store.ts
├── routes/             # Application routes
│   └── index.tsx
├── services/           # API services
│   ├── api.ts
│   └── request.ts
├── themes/             # Theme configurations
│   ├── darkTheme.ts
│   ├── lightTheme.ts
│   └── styled.d.ts
└── utils/              # Utility functions
    ├── formatDate.ts
    └── formatValue.ts
```

## 🔄 Application Flow

### Authentication Flow

1. **Initial Load**:
   - App checks for stored authentication token in localStorage
   - If token exists, validates it with the backend API
   - User state is set in Redux store based on validation result

2. **Sign In/Sign Up**:
   - User enters credentials on `/signin` or `/signup` pages
   - Credentials are sent to the backend API
   - Upon successful authentication, token is stored in localStorage
   - User data and auth status are updated in Redux store
   - User is redirected to the home page

3. **Protected Routes**:
   - `AuthMiddleware` component wraps protected routes
   - Checks authentication status from Redux store
   - If not authenticated, redirects to `/signin`
   - Shows loading spinner while verifying authentication

4. **Logout**:
   - Token is removed from localStorage
   - Redux store is cleared
   - User is redirected to sign-in page

### Transaction Flow

1. **Dashboard (Home)**:
   - Displays financial overview: balance, pending and completed transactions
   - Users can filter by month and year
   - Data is fetched from the API based on selected filters
   - Quick access button to create new transactions

2. **Viewing Transactions**:
   - Navigate to `/transacoes` to see all transactions
   - Transactions are displayed in a table format
   - Each transaction shows type, amount, date, and status

3. **Creating Transactions**:
   - Click "Nova Transação" button or navigate to `/transacoes/nova`
   - Fill in transaction form (type, amount, description, date)
   - Submit form to create transaction via API
   - Redirect to transactions list upon success

4. **Editing Transactions**:
   - Click edit button on any transaction
   - Navigate to `/transacoes/:id/editar`
   - Form is pre-filled with existing transaction data
   - Update and save changes via API
   - Redirect to transactions list upon success

### Theme Flow

1. **Theme Initialization**:
   - On app load, checks localStorage for saved theme preference
   - Applies light or dark theme based on user preference
   - Default theme is applied if no preference is saved

2. **Theme Switching**:
   - User can toggle theme via UI control
   - Theme preference is saved to localStorage
   - Redux store is updated with new theme
   - Styled-components ThemeProvider updates all themed components

## 🎨 Theme System

The application uses a sophisticated theming system with two color palettes:

### Light Theme
- Primary colors: Blue tones (`#6D94C5`)
- Background: Clean whites with subtle transparency
- Sidebar/Navbar: `#6D94C5`
- Accent colors: `#F5EFE6`, `#E8DFCA`, `#CBDCEB`

### Dark Theme
- Primary colors: Blue-gray tones (`#456882`, `#234C6A`)
- Background: `#222831` (dark gray)
- Sidebar/Navbar: `#234C6A`
- Text colors: High contrast light colors for readability
- Accent colors: `#1B3C53`, `#456882`, `#D2C1B6`

All components use theme tokens from styled-components, ensuring consistent styling across the application.

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-finances
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=your-api-base-url
VITE_LOCAL_STORAGE_AUTH_KEY=your-auth-key-name
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Environment Variables

- `VITE_API_BASE_URL`: Base URL for the backend API
- `VITE_LOCAL_STORAGE_AUTH_KEY`: Key name for storing authentication token in localStorage

## 🔒 Authentication

The application uses JWT token-based authentication:
- Tokens are stored in localStorage
- Tokens are included in API request headers via Axios interceptors
- Protected routes require valid authentication
- Automatic token validation on app initialization

## 📦 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint to check code quality

## 🎯 Key Features Implementation

- **Redux Store**: Manages authentication state and theme preferences
- **Custom Hooks**: `useAuth` and `useTheme` for state management
- **API Service Layer**: Centralized API calls with error handling
- **Route Protection**: Middleware component for authentication checks
- **Type Safety**: Full TypeScript implementation with type definitions
- **Responsive Design**: Mobile-friendly layout with sidebar navigation

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome!

## 📄 License

This project is for educational purposes.
