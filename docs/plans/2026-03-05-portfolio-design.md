# Portfolio GitHub Pages - Design Document

## Context
Portfolio profesional para Nicolas Fripp Rodriguez, egresado de la Especialización en Ciencia de Datos e IA (UTEC/MIT). Debe servir como carta de presentación técnica con los proyectos desarrollados durante la especialización.

## Architecture
- 3 páginas HTML estáticas + 1 CSS compartido
- Sin frameworks, HTML/CSS/JS vanilla
- Hosted en GitHub Pages (nicolasfripp.github.io)

## Pages

### 1. `index.html` - Página principal
- **Header**: Nombre completo, título de la especialización (UTEC/MIT)
- **Perfil**: Foto placeholder + biografía (ingeniero en computación UDELAR, fullstack dev, especialización UTEC/MIT en ciencia de datos e IA)
- **Proyectos destacados**: 2 cards con resumen, tecnologías (tags), botón "Ver proyecto"
  - Car Chatbot (RAG + NLP)
  - Futbol Predictor (ML)
- **Footer**: LinkedIn, CVUy (placeholder), GitHub (opcional)

### 2. `car-chatbot.html` - Proyecto Car Chatbot
- Navegación de vuelta al portafolio
- Secciones: Objetivo, Problema, Decisiones técnicas, Tecnologías/Metodologías, Arquitectura, Resultados
- Contenido: RAG app full-stack, FastAPI + React + FAISS + OpenAI, 38,531 vehículos, memoria conversacional

### 3. `futbol-predictor.html` - Proyecto Futbol Predictor
- Navegación de vuelta al portafolio
- Secciones: Objetivo, Problema, Decisiones técnicas, Tecnologías/Metodologías, Resultados
- Contenido: ML para predicción La Liga, RF + XGBoost + LightGBM + Optuna, 10 temporadas, modelos pre-partido e in-play

## Visual Design
- **Estilo**: Moderno profesional (portfolio tech)
- **Palette**: Fondo oscuro (#0f172a), cards semi-transparentes, acentos azul/cyan
- **Tipografía**: Google Fonts (Inter), sans-serif moderna
- **Componentes**: Cards con sombras, hover effects, tags/badges de tecnologías
- **Responsive**: Mobile-friendly

## Data
- **Nombre**: Nicolas Fripp Rodriguez
- **Formación**: Ingeniero en Computación (UDELAR)
- **Trabajo**: Fullstack developer en empresa de software
- **LinkedIn**: https://uy.linkedin.com/in/nicolás-fripp-rodríguez-82526420a
- **CVUy**: Placeholder (pendiente)

## Projects Source
- Car Chatbot: /Users/nicolasfripp/Documents/UTEC/GITHUB/car-chatbot
- Futbol Predictor: /Users/nicolasfripp/Documents/UTEC/GITHUB/futbol-predictor
