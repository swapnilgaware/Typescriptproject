# Equity Research App

This repository contains a minimal full-stack application for equity research. The frontend is a React (TypeScript) app created with Vite and the backend is a Spring Boot (Java 21) service.

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
mvn spring-boot:run
```

The backend exposes endpoints under `/api/stocks/{symbol}` to retrieve the latest stock price scraped from Yahoo Finance and stored in PostgreSQL.

See [docs/EquityResearchGuide.md](docs/EquityResearchGuide.md) for additional development steps and best practices.
