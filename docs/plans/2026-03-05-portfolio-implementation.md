# Portfolio GitHub Pages - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a professional portfolio site on GitHub Pages showcasing Nicolas Fripp's data science projects from the UTEC/MIT specialization.

**Architecture:** 3 static HTML pages sharing 1 CSS file. No frameworks. index.html (profile + project cards), car-chatbot.html (project detail), futbol-predictor.html (project detail). Modern dark theme with responsive design.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts (Inter)

---

### Task 1: Create shared CSS stylesheet

**Files:**
- Overwrite: `estilo.css`

**Step 1: Write the complete CSS**

Full stylesheet with:
- CSS custom properties (colors: #0f172a background, #1e293b cards, #38bdf8 accent cyan, #e2e8f0 text)
- Base styles (Inter font, dark background, responsive container)
- Header styles (gradient background, centered text)
- Profile section (flex layout, photo placeholder circle, bio text)
- Project cards (grid layout, hover effects, shadows, border-left accent)
- Technology tags/badges (inline-block, rounded, colored backgrounds)
- Project detail page styles (sections with headers, back navigation)
- Footer styles (centered links, icons)
- Responsive breakpoints (mobile < 768px: stack columns, reduce padding)
- Smooth transitions and hover effects

**Step 2: Verify visually**

Open `index.html` in browser to confirm CSS loads (even with old HTML).

**Step 3: Commit**

```bash
git add estilo.css
git commit -m "feat: complete CSS stylesheet for portfolio dark theme"
```

---

### Task 2: Build main page (index.html)

**Files:**
- Overwrite: `index.html`

**Step 1: Write the complete HTML**

Structure:
```
<header>
  - Name: Nicolas Fripp Rodriguez
  - Subtitle: Especialización en Ciencia de Datos e IA
  - Institution: UTEC / MIT
</header>

<main>
  <section id="about">
    - Profile photo placeholder (div with initials "NF")
    - Bio paragraph 1: Ingeniero en Computación (UDELAR), fullstack developer,
      egresado de la Especialización en Ciencia de Datos e IA (UTEC/MIT).
    - Bio paragraph 2: Formación en técnicas avanzadas de análisis de datos,
      aprendizaje automático e IA, enfoque práctico orientado a problemas reales.
    - Paragraph about the site purpose (difundir proyectos de la especialización)
  </section>

  <section id="projects">
    <h2>Proyectos Destacados</h2>

    <div class="project-card">
      <h3>Car Chatbot - Búsqueda Semántica de Vehículos</h3>
      <p>Aplicación full-stack RAG que permite buscar entre 38,531 vehículos
         mediante lenguaje natural, con memoria conversacional.</p>
      <div class="tags">
        FastAPI, React, FAISS, OpenAI GPT-4o-mini, LangChain, Python, RAG
      </div>
      <a href="car-chatbot.html" class="btn">Ver Proyecto</a>
    </div>

    <div class="project-card">
      <h3>Futbol Predictor - Predicción de Resultados La Liga</h3>
      <p>Sistema de machine learning para predecir resultados de partidos
         usando modelos ensemble y 10 temporadas de datos históricos.</p>
      <div class="tags">
        XGBoost, LightGBM, Random Forest, Optuna, Pandas, scikit-learn
      </div>
      <a href="futbol-predictor.html" class="btn">Ver Proyecto</a>
    </div>
  </section>

  <section id="links">
    <h2>Enlaces Profesionales</h2>
    - LinkedIn (link real)
    - CVUy (placeholder "#")
    - GitHub (link a nicolasfripp)
  </section>
</main>

<footer>
  Universidad Tecnológica del Uruguay (UTEC) / MIT - 2026
</footer>
```

**Step 2: Verify visually**

Open in browser. Check: header, bio, 2 project cards, footer links, responsive on mobile.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: main portfolio page with profile and project cards"
```

---

### Task 3: Build Car Chatbot project page

**Files:**
- Create: `car-chatbot.html`

**Step 1: Write the complete HTML**

Content based on analysis of /Users/nicolasfripp/Documents/UTEC/GITHUB/car-chatbot:

```
<header>
  - Back link: "← Volver al Portafolio"
  - Title: Car Chatbot - Búsqueda Semántica de Vehículos
</header>

<main>
  <section "Objetivo">
    Desarrollar una aplicación conversacional que permita a usuarios buscar
    vehículos mediante lenguaje natural, superando las limitaciones de los
    filtros tradicionales de búsqueda.
  </section>

  <section "Problema Abordado">
    Los sistemas tradicionales de búsqueda de vehículos requieren que el usuario
    conozca los filtros exactos. Este proyecto permite consultas como "necesito
    un SUV rojo por menos de $10,000" y devuelve resultados relevantes con
    documentación de fuentes.
  </section>

  <section "Decisiones Técnicas">
    - RAG (Retrieval Augmented Generation) sobre filtrado tradicional
    - FAISS para indexación eficiente de 38,531 embeddings
    - GPT-4o-mini por balance costo/rendimiento (~$0.0001 por consulta)
    - SummaryBufferMemory custom para mantener contexto conversacional
    - FastAPI + React separados (arquitectura desacoplada)
  </section>

  <section "Tecnologías y Metodologías">
    Backend: FastAPI, Python, LangChain, FAISS, OpenAI API
    Frontend: React 19, Vite, Axios
    Metodología: RAG Pipeline (Retrieval → Augmentation → Generation)
    Datos: Dataset de 38,531 vehículos con 30 atributos
  </section>

  <section "Arquitectura">
    Pipeline description:
    1. Query del usuario → embeddings (text-embedding-3-small)
    2. FAISS retrieval → top-5 vehículos más similares
    3. Contexto + historial → GPT-4o-mini genera respuesta
    4. SummaryBufferMemory comprime historial (últimos 1000 tokens verbatim,
       resto resumido automáticamente)
  </section>

  <section "Resultados">
    - Tiempo de respuesta: 1-2 segundos
    - Costo por consulta: ~$0.0001 USD
    - Soporte bilingüe (español/inglés)
    - Interfaz responsive con indicador de typing y cards de fuentes expandibles
    - Manejo de preguntas de seguimiento ("¿Cuál es el más barato?")
  </section>
</main>
```

**Step 2: Verify visually**

Open in browser. Check all sections render, back link works, responsive.

**Step 3: Commit**

```bash
git add car-chatbot.html
git commit -m "feat: car chatbot project detail page"
```

---

### Task 4: Build Futbol Predictor project page

**Files:**
- Create: `futbol-predictor.html`

**Step 1: Write the complete HTML**

Content based on analysis of /Users/nicolasfripp/Documents/UTEC/GITHUB/futbol-predictor:

```
<header>
  - Back link: "← Volver al Portafolio"
  - Title: Futbol Predictor - Predicción de Resultados La Liga
</header>

<main>
  <section "Objetivo">
    Construir un sistema de machine learning capaz de predecir resultados de
    partidos de La Liga española, generando probabilidades para victoria local,
    empate y victoria visitante.
  </section>

  <section "Problema Abordado">
    La predicción de resultados deportivos es un problema de clasificación
    multiclase con alta incertidumbre. El proyecto aborda esto combinando
    estadísticas históricas, datos de mercado y cuotas de apuestas para
    dos escenarios: pre-partido y en vivo (medio tiempo).
  </section>

  <section "Decisiones Técnicas">
    - Split temporal (2016-2023 train, 2024-2025 test) en lugar de aleatorio
    - Ventanas móviles de 5 partidos para estadísticas rolling
    - Class weights para manejar desbalance (más empates)
    - Optuna con 50 trials y 3-fold CV para hiperparámetros
    - Dual-scenario: modelos pre-partido vs. in-play para distintos casos de uso
  </section>

  <section "Tecnologías y Metodologías">
    ML: XGBoost, LightGBM, Random Forest, Optuna
    Data: Pandas, NumPy, scikit-learn
    Visualización: Matplotlib, Seaborn, Plotly
    Features (41 pre-match): rolling stats, market values, betting odds,
    efficiency ratios
    Features adicionales in-play: goles medio tiempo, diferencia tarjetas
  </section>

  <section "Fuentes de Datos">
    - Estadísticas de partidos: 10 temporadas La Liga (2016-2025)
    - Datos Transfermarkt: valores de mercado
    - Cuotas de 5 casas de apuestas: Bet365, Betwin, Pinnacle, William Hill, VCBet
  </section>

  <section "Resultados">
    - 6 modelos entrenados (3 algoritmos × 2 escenarios)
    - Métricas: Accuracy, Log Loss, F1-Weighted, F1-Macro
    - Modelos in-play mejoran accuracy incorporando datos de medio tiempo
    - Análisis de importancia de features
    - Matrices de confusión y reportes de clasificación completos
  </section>
</main>
```

**Step 2: Verify visually**

Open in browser. Check all sections, back link, responsive.

**Step 3: Commit**

```bash
git add futbol-predictor.html
git commit -m "feat: futbol predictor project detail page"
```

---

### Task 5: Final review and polish

**Files:**
- Review: all HTML and CSS files

**Step 1: Cross-page consistency check**

- Verify navigation links work between all 3 pages
- Check responsive layout on mobile viewport
- Verify all text content is accurate
- Ensure LinkedIn link works

**Step 2: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio site for UTEC/MIT specialization"
```
