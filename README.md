# React.js 18 with TypeScript - Course Projects

This repository contains a collection of projects created during a React.js 18 with TypeScript course. Each project focuses on different React concepts and patterns, built using modern tools like Vite, TypeScript, and various React libraries.

## 📚 Course Projects Overview

### 1. **primeiro-projeto-vite**
**Description**: First React project setup with Vite  
**Technologies**: React 18, TypeScript, Vite  
**Focus**: Basic React setup, components, and Vite configuration  
**Key Features**:
- Initial project scaffolding with Vite
- Basic React component structure
- TypeScript configuration

---

### 2. **hooks-vite**
**Description**: Introduction to React Hooks  
**Technologies**: React 18, TypeScript, Vite  
**Focus**: Understanding and implementing React Hooks  
**Key Features**:
- Custom hooks implementation
- Built-in React hooks usage (useState, useEffect, etc.)
- Component examples using hooks
- Reusable components (Button, Card)

---

### 3. **estilizacoes-vite**
**Description**: Styling in React with styled-components  
**Technologies**: React 18, TypeScript, Vite, styled-components  
**Focus**: CSS-in-JS styling and theme management  
**Key Features**:
- styled-components implementation
- Theme configuration and theming system
- Type-safe styling with TypeScript
- Custom styled components (Input)

---

### 4. **context-api**
**Description**: React Context API and state management  
**Technologies**: React 18, TypeScript, Vite  
**Focus**: Global state management using Context API and useReducer  
**Key Features**:
- Context API implementation
- useReducer for complex state management
- Theme and user state management
- Auth components demonstration
- Reducer pattern implementation

---

### 5. **react-router-vite**
**Description**: Client-side routing with React Router  
**Technologies**: React 18, TypeScript, Vite, React Router DOM  
**Focus**: Multi-page application navigation  
**Key Features**:
- React Router DOM setup and configuration
- Route definitions and navigation
- Protected routes with middleware
- Multiple page components
- Route guards and authentication middleware

---

### 6. **redux**
**Description**: State management with Redux Toolkit  
**Technologies**: React 18, TypeScript, Vite, Redux Toolkit, React Redux  
**Focus**: Centralized state management using Redux  
**Key Features**:
- Redux Toolkit implementation
- Store configuration
- Slices and reducers
- React Redux integration
- Type-safe Redux with TypeScript

---

### 7. **requisicoes-vite**
**Description**: HTTP requests and API integration  
**Technologies**: React 18, TypeScript, Vite, Axios  
**Focus**: Making API calls and handling HTTP requests  
**Key Features**:
- Axios HTTP client setup
- API request handling
- Error handling
- Async operations in React

---

### 8. **todo-list**
**Description**: Complete Todo List application  
**Technologies**: React 18, TypeScript, Vite, Context API  
**Focus**: Full-featured application with state management  
**Key Features**:
- Todo creation, editing, and deletion
- Local storage persistence
- Context API for state management
- Custom hooks (useSaveTodos)
- Modern UI with CSS modules
- Component-based architecture (Header, TodoList, etc.)

---

### 9. **personal-finances**
**Description**: Full-stack personal finance management application  
**Technologies**: React 18, TypeScript, Vite, Redux Toolkit, React Router, styled-components, Axios  
**Focus**: Complete application with authentication, routing, state management, and API integration  
**Key Features**:
- **Authentication**: JWT-based sign-in and sign-up
- **Dashboard**: Financial overview with balance and transaction filtering
- **Transaction Management**: Create, edit, and view transactions
- **Protected Routes**: Authentication middleware
- **Theme Support**: Light and dark themes with styled-components
- **Redux State Management**: Auth and theme state
- **API Integration**: Full CRUD operations with backend API
- **Responsive Layout**: Sidebar navigation and modern UI
- **Account Management**: User profile and settings

**Architecture**:
- Redux Toolkit for state management
- React Router for navigation
- Styled-components for theming
- Axios for HTTP requests
- Custom hooks (useAuth, useTheme)
- Middleware for route protection
- Type-safe implementation with TypeScript

---

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1**: Latest React features and improvements
- **TypeScript 5.6.2**: Type-safe JavaScript
- **Vite 6.0.1**: Fast build tool and development server

### Libraries & Tools
- **React Router DOM 6.28.0**: Client-side routing
- **Redux Toolkit 2.4.0**: State management
- **React Redux 9.1.2**: React bindings for Redux
- **styled-components 6.1.13**: CSS-in-JS styling
- **Axios 1.7.9**: HTTP client
- **React Icons 5.4.0**: Icon library
- **ESLint**: Code linting and quality

## 📁 Project Structure

```
reactjs-18-com-typescript/
├── primeiro-projeto-vite/      # Initial Vite setup
├── hooks-vite/                  # React Hooks examples
├── estilizacoes-vite/           # Styled-components
├── context-api/                 # Context API & useReducer
├── react-router-vite/           # React Router
├── redux/                       # Redux Toolkit
├── requisicoes-vite/            # API requests with Axios
├── todo-list/                   # Todo application
└── personal-finances/           # Finance management app
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Running a Project

1. Navigate to the desired project directory:
```bash
cd <project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The production build will be generated in the `dist` directory of each project.

## 📝 Common Scripts

All projects include these standard scripts:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 🎯 Learning Path

The projects are organized in a progressive learning path:

1. **Fundamentals**: primeiro-projeto-vite, hooks-vite
2. **Styling**: estilizacoes-vite
3. **State Management**: context-api, redux
4. **Routing**: react-router-vite
5. **API Integration**: requisicoes-vite
6. **Complete Applications**: todo-list, personal-finances

## 📄 License

This project is for educational purposes.

