(function() {
  var translations = {
    // === index.html ===
    "header.degree1": {
      es: "Ingeniero en Computaci\u00f3n (UDELAR)",
      en: "Computer Engineer (UDELAR)"
    },
    "header.degree2": {
      es: "Especialista en Ciencia de Datos e Inteligencia Artificial (UTEC | MIT)",
      en: "Specialist in Data Science and Artificial Intelligence (UTEC | MIT)"
    },
    "header.cvuy-note": {
      es: "(pr\u00f3ximamente)",
      en: "(coming soon)"
    },
    "about.title": {
      es: "Sobre M\u00ed",
      en: "About Me"
    },
    "about.bio1": {
      es: "Soy Nicol\u00e1s Fripp Rodr\u00edguez, Ingeniero en Computaci\u00f3n egresado de la Universidad de la Rep\u00fablica (UDELAR). Adem\u00e1s, soy egresado de la Especializaci\u00f3n en Ciencia de Datos e Inteligencia Artificial dictada por la Universidad Tecnol\u00f3gica del Uruguay (UTEC), en colaboraci\u00f3n con el Massachusetts Institute of Technology (MIT).",
      en: "I am Nicol\u00e1s Fripp Rodr\u00edguez, a Computer Engineer graduated from Universidad de la Rep\u00fablica (UDELAR). I also hold a Specialization in Data Science and Artificial Intelligence from Universidad Tecnol\u00f3gica del Uruguay (UTEC), in collaboration with the Massachusetts Institute of Technology (MIT)."
    },
    "about.bio2": {
      es: "Mi formaci\u00f3n se centr\u00f3 en el desarrollo y la aplicaci\u00f3n de t\u00e9cnicas avanzadas de an\u00e1lisis de datos, aprendizaje autom\u00e1tico e inteligencia artificial, con un enfoque fuertemente pr\u00e1ctico y orientado a la resoluci\u00f3n de problemas reales en distintos dominios.",
      en: "My training focused on the development and application of advanced techniques in data analysis, machine learning, and artificial intelligence, with a strongly practical approach oriented toward solving real-world problems across various domains."
    },
    "about.bio3": {
      es: "Este sitio web, vinculado a mi repositorio en GitHub, tiene como objetivo difundir y poner a disposici\u00f3n los principales proyectos que desarroll\u00e9 durante la especializaci\u00f3n, los cuales representan los aprendizajes, competencias y desaf\u00edos m\u00e1s significativos de mi recorrido acad\u00e9mico.",
      en: "This website, linked to my GitHub repository, aims to share and make available the main projects I developed during the specialization, which represent the most significant learnings, competencies, and challenges of my academic journey."
    },
    "projects.title": {
      es: "Proyectos Destacados - Especializaci\u00f3n",
      en: "Featured Projects - Specialization"
    },
    "projects.intro": {
      es: "Se presentan algunos de los proyectos m\u00e1s relevantes desarrollados en el marco de la especializaci\u00f3n:",
      en: "Here are some of the most relevant projects developed during the specialization:"
    },
    "project.casas.title": {
      es: "Predicci\u00f3n de Precios de Casas en Uruguay",
      en: "House Price Prediction in Uruguay"
    },
    "project.casas.desc": {
      es: "Modelo predictivo para estimar el valor de casas en Uruguay a partir de +177,000 publicaciones de Mercado Libre y El Gallito, con limpieza exhaustiva de datos y modelos segmentados por departamento.",
      en: "Predictive model to estimate house values in Uruguay from 177,000+ listings on Mercado Libre and El Gallito, with exhaustive data cleaning and models segmented by department."
    },
    "project.futbol.title": {
      es: "Prediccion de partidos de futbol - La Liga",
      en: "Spanish La Liga Match Predictor"
    },
    "project.futbol.desc": {
      es: "Sistema de machine learning para predecir resultados de partidos de La Liga espa\u00f1ola, utilizando modelos ensemble optimizados y 10 temporadas de datos hist\u00f3ricos.",
      en: "Machine learning system to predict Spanish La Liga match outcomes, using optimized ensemble models and 10 seasons of historical data."
    },
    "project.chatbot.title": {
      es: "Car Chatbot - B\u00fasqueda Sem\u00e1ntica de Veh\u00edculos",
      en: "Car Chatbot - Semantic Vehicle Search"
    },
    "project.chatbot.desc": {
      es: "Aplicaci\u00f3n full-stack basada en RAG (Retrieval Augmented Generation) que permite buscar entre 38,531 veh\u00edculos mediante consultas en lenguaje natural, con memoria conversacional y documentaci\u00f3n de fuentes.",
      en: "Full-stack application based on RAG (Retrieval Augmented Generation) that enables searching among 38,531 vehicles through natural language queries, with conversational memory and source documentation."
    },
    "btn.ver": {
      es: "Ver Proyecto \u2192",
      en: "View Project \u2192"
    },
    "btn.codigo": {
      es: "Ver c\u00f3digo \u2197",
      en: "View code \u2197"
    },
    "thesis.title": {
      es: "Tesis de Grado - Ingenier\u00eda en Computaci\u00f3n",
      en: "Degree Thesis - Computer Engineering"
    },
    "project.thesis.title": {
      es: "Sistema de Inspecci\u00f3n de Estructuras Civiles Utilizando Drones Aut\u00f3nomos",
      en: "Civil Structure Inspection System Using Autonomous Drones"
    },
    "project.thesis.desc": {
      es: "Sistema basado en una flota de drones aut\u00f3nomos para realizar inspecciones edilicias en la Facultad de Ingenier\u00eda (UDELAR), mitigando riesgos de seguridad y reduciendo tiempos respecto al proceso manual. Se implementaron algoritmos de A* y Multiple Traveling Salesman Problem (MTSP) para optimizar rutas y asignaci\u00f3n de drones.",
      en: "System based on a fleet of autonomous drones for building inspections at the Faculty of Engineering (UDELAR), mitigating safety risks and reducing times compared to the manual process. A* and Multiple Traveling Salesman Problem (MTSP) algorithms were implemented to optimize routes and drone assignment."
    },
    "btn.colibri": {
      es: "Ver en COLIBRI \u2192",
      en: "View on COLIBRI \u2192"
    },

    // === car-chatbot.html ===
    "back": {
      es: "\u2190 Volver al Portafolio",
      en: "\u2190 Back to Portfolio"
    },
    "chatbot.subtitle": {
      es: "B\u00fasqueda Sem\u00e1ntica de Veh\u00edculos mediante Lenguaje Natural",
      en: "Semantic Vehicle Search through Natural Language"
    },
    "chatbot.obj.title": {
      es: "Objetivo del Proyecto",
      en: "Project Objective"
    },
    "chatbot.obj.text": {
      es: 'Desarrollar una aplicaci\u00f3n conversacional que permita a usuarios buscar veh\u00edculos mediante lenguaje natural. El sistema deb\u00eda ser capaz de interpretar consultas como "necesito un SUV rojo por menos de $10,000" y devolver resultados relevantes con documentaci\u00f3n de fuentes.',
      en: 'Develop a conversational application that allows users to search for vehicles using natural language. The system needed to interpret queries such as "I need a red SUV for under $10,000" and return relevant results with source documentation.'
    },
    "chatbot.prob.title": {
      es: "Problema Abordado",
      en: "Problem Addressed"
    },
    "chatbot.prob.text": {
      es: "Los sistemas tradicionales de b\u00fasqueda de veh\u00edculos requieren que el usuario conozca y utilice filtros exactos (marca, modelo, a\u00f1o, precio). Esto limita la experiencia cuando el usuario tiene una idea general de lo que busca pero no conoce los par\u00e1metros espec\u00edficos. Este proyecto resuelve el problema permitiendo b\u00fasquedas en lenguaje natural sobre un dataset de 38,531 veh\u00edculos con 30 atributos cada uno.",
      en: "Traditional vehicle search systems require the user to know and use exact filters (make, model, year, price). This limits the experience when the user has a general idea of what they're looking for but doesn't know the specific parameters. This project solves the problem by enabling natural language searches over a dataset of 38,531 vehicles with 30 attributes each."
    },
    "chatbot.tech.title": {
      es: "Decisiones T\u00e9cnicas",
      en: "Technical Decisions"
    },
    "chatbot.tech.li1": {
      es: "Se eligi\u00f3 RAG (Retrieval Augmented Generation) sobre filtrado tradicional para permitir consultas sem\u00e1nticas flexibles",
      en: "RAG (Retrieval Augmented Generation) was chosen over traditional filtering to enable flexible semantic queries"
    },
    "chatbot.tech.li2": {
      es: "FAISS (Facebook AI Similarity Search) para indexaci\u00f3n eficiente de 38,531 embeddings vectoriales",
      en: "FAISS (Facebook AI Similarity Search) for efficient indexing of 38,531 vector embeddings"
    },
    "chatbot.tech.li3": {
      es: "GPT-4o-mini como modelo de lenguaje por su balance costo/rendimiento",
      en: "GPT-4o-mini as the language model for its cost/performance balance"
    },
    "chatbot.tech.li4": {
      es: "Implementaci\u00f3n de un SummaryBufferMemory custom que mantiene los \u00faltimos 1,000 tokens verbatim y resume autom\u00e1ticamente el historial anterior",
      en: "Implementation of a custom SummaryBufferMemory that keeps the last 1,000 tokens verbatim and automatically summarizes previous history"
    },
    "chatbot.tech.li5": {
      es: "Arquitectura desacoplada: backend FastAPI + frontend React comunicados via REST API",
      en: "Decoupled architecture: FastAPI backend + React frontend communicating via REST API"
    },
    "chatbot.tecno.title": {
      es: "Tecnolog\u00edas y Metodolog\u00edas",
      en: "Technologies and Methodologies"
    },
    "chatbot.metodologia": {
      es: "Metodolog\u00eda",
      en: "Methodology"
    },
    "chatbot.tag.embeddings": {
      es: "Embeddings Sem\u00e1nticos",
      en: "Semantic Embeddings"
    },
    "chatbot.tag.memoria": {
      es: "Memoria Conversacional",
      en: "Conversational Memory"
    },
    "chatbot.datos.title": {
      es: "Datos",
      en: "Data"
    },
    "chatbot.datos.text": {
      es: "Dataset de 38,531 veh\u00edculos con 30 atributos (marca, modelo, a\u00f1o, precio, color, tipo de carrocer\u00eda, combustible, etc.)",
      en: "Dataset of 38,531 vehicles with 30 attributes (make, model, year, price, color, body type, fuel, etc.)"
    },
    "chatbot.arq.title": {
      es: "Arquitectura del Sistema",
      en: "System Architecture"
    },
    "chatbot.arq.li1": {
      es: "El usuario env\u00eda una consulta en lenguaje natural",
      en: "The user sends a natural language query"
    },
    "chatbot.arq.li2": {
      es: "La consulta se convierte en un vector de embeddings usando text-embedding-3-small de OpenAI",
      en: "The query is converted into an embedding vector using OpenAI's text-embedding-3-small"
    },
    "chatbot.arq.li3": {
      es: "FAISS busca los 5 veh\u00edculos m\u00e1s similares sem\u00e1nticamente en el \u00edndice vectorial",
      en: "FAISS searches for the 5 most semantically similar vehicles in the vector index"
    },
    "chatbot.arq.li4": {
      es: "Los datos de los veh\u00edculos recuperados se formatean como contexto",
      en: "The retrieved vehicle data is formatted as context"
    },
    "chatbot.arq.li5": {
      es: "GPT-4o-mini genera una respuesta en lenguaje natural usando el contexto + historial de conversaci\u00f3n",
      en: "GPT-4o-mini generates a natural language response using the context + conversation history"
    },
    "chatbot.arq.li6": {
      es: "El SummaryBufferMemory actualiza el historial, comprimiendo mensajes antiguos autom\u00e1ticamente",
      en: "The SummaryBufferMemory updates the history, automatically compressing old messages"
    },
    "chatbot.res.title": {
      es: "Resultados Obtenidos",
      en: "Results Obtained"
    },
    "chatbot.res.li1": {
      es: "Tiempo de respuesta r\u00e1pido",
      en: "Fast response time"
    },
    "chatbot.res.li2": {
      es: "Interfaz responsive con indicador de typing en tiempo real",
      en: "Responsive interface with real-time typing indicator"
    },
    "chatbot.res.li3": {
      es: 'Capacidad de manejar preguntas de seguimiento con contexto ("\u00bfCu\u00e1l es el m\u00e1s barato de los que me mostraste?")',
      en: 'Ability to handle follow-up questions with context ("Which is the cheapest of the ones you showed me?")'
    },
    "chatbot.res.li4": {
      es: "Documentaci\u00f3n completa de fuentes: cada respuesta puede mostrar los veh\u00edculos utilizados como referencia",
      en: "Complete source documentation: each response can show the vehicles used as reference"
    },

    // === futbol-predictor.html ===
    "futbol.subtitle": {
      es: "Predicci\u00f3n de Resultados de La Liga Espa\u00f1ola mediante Machine Learning",
      en: "Spanish La Liga Match Prediction through Machine Learning"
    },
    "futbol.obj.title": {
      es: "Objetivo del Proyecto",
      en: "Project Objective"
    },
    "futbol.obj.text": {
      es: "Construir un sistema de machine learning capaz de predecir resultados de partidos de La Liga espa\u00f1ola, generando probabilidades para tres posibles desenlaces: victoria local (H), empate (D) y victoria visitante (A). El sistema implementa dos escenarios de predicci\u00f3n: pre-partido y en vivo (medio tiempo).",
      en: "Build a machine learning system capable of predicting Spanish La Liga match outcomes, generating probabilities for three possible results: home win (H), draw (D), and away win (A). The system implements two prediction scenarios: pre-match and live (halftime)."
    },
    "futbol.prob.title": {
      es: "Problema Abordado",
      en: "Problem Addressed"
    },
    "futbol.prob.text": {
      es: "La predicci\u00f3n de resultados deportivos es un problema de clasificaci\u00f3n multiclase con alta incertidumbre inherente. Los partidos de f\u00fatbol est\u00e1n influenciados por m\u00faltiples factores dif\u00edciles de cuantificar. Este proyecto aborda el desaf\u00edo combinando estad\u00edsticas hist\u00f3ricas de 10 temporadas (2016-2025), datos de mercado de Transfermarkt y cuotas de 5 casas de apuestas para construir modelos predictivos.",
      en: "Sports outcome prediction is a multiclass classification problem with high inherent uncertainty. Football matches are influenced by multiple factors that are difficult to quantify. This project addresses the challenge by combining historical statistics from 10 seasons (2016-2025), Transfermarkt market data, and odds from 5 bookmakers to build predictive models."
    },
    "futbol.tech.title": {
      es: "Decisiones T\u00e9cnicas",
      en: "Technical Decisions"
    },
    "futbol.tech.li1": {
      es: "Split temporal (temporadas 2016-2023 para entrenamiento, 2024-2025 para test) en lugar de aleatorio, respetando la naturaleza secuencial de los datos deportivos",
      en: "Temporal split (2016-2023 seasons for training, 2024-2025 for testing) instead of random, respecting the sequential nature of sports data"
    },
    "futbol.tech.li2": {
      es: "Ventanas m\u00f3viles de 5 partidos para calcular estad\u00edsticas rolling (goles, tiros, corners, tarjetas, puntos)",
      en: "Rolling windows of 5 matches to calculate rolling statistics (goals, shots, corners, cards, points)"
    },
    "futbol.tech.li3": {
      es: "Class weights para manejar el desbalance de clases (los empates son menos frecuentes)",
      en: "Class weights to handle class imbalance (draws are less frequent)"
    },
    "futbol.tech.li4": {
      es: "Optimizaci\u00f3n de hiperpar\u00e1metros con Optuna: 50 trials con TPE sampler y 3-fold cross-validation",
      en: "Hyperparameter optimization with Optuna: 50 trials with TPE sampler and 3-fold cross-validation"
    },
    "futbol.tech.li5": {
      es: "Modelado dual: escenario pre-partido (41 features) y escenario in-play con features adicionales de medio tiempo",
      en: "Dual modeling: pre-match scenario (41 features) and in-play scenario with additional halftime features"
    },
    "futbol.tecno.title": {
      es: "Tecnolog\u00edas y Metodolog\u00edas",
      en: "Technologies and Methodologies"
    },
    "futbol.procesamiento": {
      es: "Procesamiento de Datos",
      en: "Data Processing"
    },
    "futbol.visualizacion": {
      es: "Visualizaci\u00f3n",
      en: "Visualization"
    },
    "futbol.feat.title": {
      es: "Feature Engineering",
      en: "Feature Engineering"
    },
    "futbol.feat.text": {
      es: "41 features pre-match incluyendo rolling stats, valores de mercado, cuotas de apuestas y ratios de eficiencia. Features adicionales in-play: goles al medio tiempo, diferencia de tarjetas.",
      en: "41 pre-match features including rolling stats, market values, betting odds, and efficiency ratios. Additional in-play features: halftime goals, card difference."
    },
    "futbol.fuentes.title": {
      es: "Fuentes de Datos",
      en: "Data Sources"
    },
    "futbol.fuentes.li1": {
      es: "Estad\u00edsticas de partidos: 10 temporadas de La Liga (2016-2025)",
      en: "Match statistics: 10 La Liga seasons (2016-2025)"
    },
    "futbol.fuentes.li2": {
      es: "Datos de Transfermarkt: valores de mercado de los equipos",
      en: "Transfermarkt data: team market values"
    },
    "futbol.fuentes.li3": {
      es: "Cuotas de 5 casas de apuestas: Bet365, Betwin, Pinnacle, William Hill y VCBet",
      en: "Odds from 5 bookmakers: Bet365, Betwin, Pinnacle, William Hill, and VCBet"
    },
    "futbol.fuentes.li4": {
      es: "Variables derivadas: probabilidades impl\u00edcitas normalizadas, ratios de valor de mercado, diferencias de forma",
      en: "Derived variables: normalized implied probabilities, market value ratios, form differences"
    },
    "futbol.res.title": {
      es: "Resultados Obtenidos",
      en: "Results Obtained"
    },
    "futbol.res.li1": {
      es: "6 modelos entrenados: 3 algoritmos (Random Forest, XGBoost, LightGBM) \u00d7 2 escenarios (pre-partido e in-play)",
      en: "6 trained models: 3 algorithms (Random Forest, XGBoost, LightGBM) \u00d7 2 scenarios (pre-match and in-play)"
    },
    "futbol.res.li2": {
      es: "M\u00e9tricas de evaluaci\u00f3n: Accuracy, Log Loss, F1-Weighted y F1-Macro",
      en: "Evaluation metrics: Accuracy, Log Loss, F1-Weighted, and F1-Macro"
    },
    "futbol.res.li3": {
      es: "Los modelos in-play mejoran significativamente la accuracy al incorporar datos de medio tiempo",
      en: "In-play models significantly improve accuracy by incorporating halftime data"
    },
    "futbol.res.li4": {
      es: "An\u00e1lisis completo de importancia de features para cada modelo",
      en: "Complete feature importance analysis for each model"
    },
    "futbol.res.li5": {
      es: "Matrices de confusi\u00f3n y reportes de clasificaci\u00f3n detallados",
      en: "Confusion matrices and detailed classification reports"
    },
    "futbol.res.li6": {
      es: "Comparaci\u00f3n visual entre modelos y escenarios",
      en: "Visual comparison between models and scenarios"
    },

    // === casas-predictor.html ===
    "casas.page.title": {
      es: "Predicci\u00f3n de Precios de Casas en Uruguay",
      en: "House Price Prediction in Uruguay"
    },
    "casas.subtitle": {
      es: "Modelo de Machine Learning para Estimar Valores Inmobiliarios",
      en: "Machine Learning Model for Real Estate Value Estimation"
    },
    "casas.obj.title": {
      es: "Objetivo del Proyecto",
      en: "Project Objective"
    },
    "casas.obj.text": {
      es: "Desarrollar un modelo predictivo capaz de estimar el precio de venta de casas en Uruguay a partir de sus caracter\u00edsticas. El modelo busca servir como herramienta de referencia para vendedores que necesitan fijar un precio, para compradores que quieren detectar oportunidades, y para analizar qu\u00e9 variables son las m\u00e1s determinantes en el valor de una propiedad.",
      en: "Develop a predictive model capable of estimating house sale prices in Uruguay based on their characteristics. The model aims to serve as a reference tool for sellers who need to set a price, for buyers who want to detect opportunities, and to analyze which variables are most determinant in a property's value."
    },
    "casas.prob.title": {
      es: "Problema Abordado",
      en: "Problem Addressed"
    },
    "casas.prob.text": {
      es: 'El mercado inmobiliario uruguayo carece de herramientas accesibles para estimar precios de propiedades de forma objetiva. Se parti\u00f3 de una base de datos de m\u00e1s de 177,000 publicaciones de casas en venta extra\u00eddas mediante web scraping de Mercado Libre y El Gallito, abarcando el per\u00edodo 2023-2025. El desaf\u00edo principal radic\u00f3 en la calidad de los datos: duplicados, valores faltantes, errores de carga por parte de los usuarios (monedas incorrectas, valores ficticios como "1111111"), y la necesidad de unificar dos fuentes de datos con estructuras diferentes.',
      en: 'The Uruguayan real estate market lacks accessible tools for objectively estimating property prices. The starting point was a database of over 177,000 house-for-sale listings extracted via web scraping from Mercado Libre and El Gallito, covering the period 2023-2025. The main challenge lay in data quality: duplicates, missing values, user input errors (incorrect currencies, fictitious values like "1111111"), and the need to unify two data sources with different structures.'
    },
    "casas.tech.title": {
      es: "Decisiones T\u00e9cnicas",
      en: "Technical Decisions"
    },
    "casas.tech.li1": {
      es: "Se unificaron dos fuentes de datos (Mercado Libre y El Gallito) con variables equivalentes pero en columnas distintas, mergeando NEIGHBORHOOD/ADDRESS_CITY_NAME, CONDITION/ITEM_CONDITION y las fechas de proceso",
      en: "Two data sources (Mercado Libre and El Gallito) with equivalent variables in different columns were unified, merging NEIGHBORHOOD/ADDRESS_CITY_NAME, CONDITION/ITEM_CONDITION, and processing dates"
    },
    "casas.tech.li2": {
      es: "Se imputaron departamentos faltantes mediante mapeo por moda de barrio y prompt engineering con IA para los casos restantes, logrando pasar de 94% nulos a 0%",
      en: "Missing departments were imputed through neighborhood mode mapping and AI prompt engineering for remaining cases, going from 94% nulls to 0%"
    },
    "casas.tech.li3": {
      es: "Se mantuvieron dos datasets paralelos: uno con agrupaci\u00f3n de categor\u00edas para regresi\u00f3n lineal y otro preservando todas las categor\u00edas para CatBoost",
      en: "Two parallel datasets were maintained: one with grouped categories for linear regression and another preserving all categories for CatBoost"
    },
    "casas.tech.li4": {
      es: "Se eligi\u00f3 CatBoost como modelo principal dado que 6 de las 10 variables explicativas son categ\u00f3ricas, aprovechando su manejo nativo de este tipo de datos",
      en: "CatBoost was chosen as the main model since 6 of the 10 explanatory variables are categorical, leveraging its native handling of this data type"
    },
    "casas.tech.li5": {
      es: "Se entrenaron modelos segmentados por departamento (Montevideo, Maldonado, Canelones) para capturar din\u00e1micas locales del mercado",
      en: "Models segmented by department (Montevideo, Maldonado, Canelones) were trained to capture local market dynamics"
    },
    "casas.tecno.title": {
      es: "Tecnolog\u00edas y Metodolog\u00edas",
      en: "Technologies and Methodologies"
    },
    "casas.procesamiento": {
      es: "Procesamiento de Datos",
      en: "Data Processing"
    },
    "casas.visualizacion": {
      es: "Visualizaci\u00f3n",
      en: "Visualization"
    },
    "casas.datos.title": {
      es: "Datos",
      en: "Data"
    },
    "casas.datos.text": {
      es: "+177,000 publicaciones de casas en venta en Uruguay (Mercado Libre y El Gallito), reducidas a ~37,000 observaciones tras limpieza. Variables finales: barrio, departamento, \u00e1rea cubierta, ba\u00f1os, dormitorios, garajes, condici\u00f3n, aire acondicionado, tour virtual, tipo de publicaci\u00f3n y origen.",
      en: "177,000+ house-for-sale listings in Uruguay (Mercado Libre and El Gallito), reduced to ~37,000 observations after cleaning. Final variables: neighborhood, department, covered area, bathrooms, bedrooms, garages, condition, air conditioning, virtual tour, listing type, and source."
    },
    "casas.pipeline.title": {
      es: "Transformación y Limpieza de datos",
      en: "Data Transformation and Cleaning"
    },
    "casas.pipeline.li1": {
      es: "Carga y unificaci\u00f3n de dos fuentes de datos con variables equivalentes en columnas distintas",
      en: "Loading and unifying two data sources with equivalent variables in different columns"
    },
    "casas.pipeline.li2": {
      es: "Eliminaci\u00f3n de variables irrelevantes (descripci\u00f3n, t\u00edtulo, IDs, etc)",
      en: "Removal of irrelevant variables (description, title, IDs, etc)"
    },
    "casas.pipeline.li3": {
      es: "Imputaci\u00f3n de datos faltantes: departamentos por moda de barrio + IA, condici\u00f3n reclasificada en 4 categor\u00edas (nuevo, usado, en construcci\u00f3n, sin especificar)",
      en: "Missing data imputation: departments by neighborhood mode + AI, condition reclassified into 4 categories (new, used, under construction, unspecified)"
    },
    "casas.pipeline.li4": {
      es: "Conversi\u00f3n de precios a USD usando tasas de cambio mensuales y eliminaci\u00f3n de registros con errores de moneda",
      en: "Price conversion to USD using monthly exchange rates and removal of records with currency errors"
    },
    "casas.pipeline.li5": {
      es: 'Limpieza de outliers: remoci\u00f3n de valores ficticios ("1111111"), precios menores a USD 1,000, y outliers por IQR',
      en: 'Outlier cleaning: removal of fictitious values ("1111111"), prices below USD 1,000, and IQR-based outliers'
    },
    "casas.pipeline.li6": {
      es: "Eliminaci\u00f3n de duplicados y an\u00e1lisis exploratorio con visualizaciones univariadas y bivariadas",
      en: "Duplicate removal and exploratory analysis with univariate and bivariate visualizations"
    },
    "casas.pipeline.li7": {
      es: "Entrenamiento de modelos: Regresi\u00f3n Lineal (con transformaciones logar\u00edtmicas) y CatBoost (con optimizaci\u00f3n Optuna)",
      en: "Model training: Linear Regression (with logarithmic transformations) and CatBoost (with Optuna optimization)"
    },
    "casas.res.title": {
      es: "Resultados Obtenidos",
      en: "Results Obtained"
    },
    "casas.res.li1": {
      es: "Regresi\u00f3n Lineal: MAPE de 39.9% \u2014 modelo base con limitaciones por la naturaleza categ\u00f3rica de los datos",
      en: "Linear Regression: 39.9% MAPE \u2014 baseline model with limitations due to the categorical nature of the data"
    },
    "casas.res.li2": {
      es: "CatBoost: MAPE de 33.8% \u2014 mejora significativa gracias al manejo nativo de variables categ\u00f3ricas",
      en: "CatBoost: 33.8% MAPE \u2014 significant improvement thanks to native handling of categorical variables"
    },
    "casas.res.li3": {
      es: "CatBoost + Optuna: MAPE de 32.0% \u2014 optimizaci\u00f3n de hiperpar\u00e1metros con validaci\u00f3n cruzada (K-Fold, 5 splits)",
      en: "CatBoost + Optuna: 32.0% MAPE \u2014 hyperparameter optimization with cross-validation (K-Fold, 5 splits)"
    },
    "casas.res.li4": {
      es: "CatBoost + Optuna (Montevideo): MAPE de 25.0% \u2014 mejor resultado, equivalente a un error t\u00edpico de \u00b1 USD 50,000 sobre un precio promedio de USD 200,000",
      en: "CatBoost + Optuna (Montevideo): 25.0% MAPE \u2014 best result, equivalent to a typical error of \u00b1 USD 50,000 on an average price of USD 200,000"
    },
    "casas.res.li5": {
      es: "CatBoost + Optuna (Maldonado): MAPE de 37.0%",
      en: "CatBoost + Optuna (Maldonado): 37.0% MAPE"
    },
    "casas.res.li6": {
      es: "La segmentaci\u00f3n geogr\u00e1fica demostr\u00f3 que los modelos locales capturan mejor las din\u00e1micas de cada mercado",
      en: "Geographic segmentation demonstrated that local models better capture each market's dynamics"
    },
    "casas.res.li7": {
      es: "El modelo final constituye una herramienta confiable para estimar valores inmobiliarios en el mercado uruguayo",
      en: "The final model constitutes a reliable tool for estimating real estate values in the Uruguayan market"
    },

    // === Shared tags that need translation ===
    "tag.regresion": {
      es: "Regresi\u00f3n Lineal (OLS)",
      en: "Linear Regression (OLS)"
    }
  };

  function getLang() {
    return localStorage.getItem('site-lang') || 'es';
  }

  function setLang(lang) {
    localStorage.setItem('site-lang', lang);
    applyTranslations(lang);
    updateToggle(lang);
    document.documentElement.lang = lang;
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (translations[key] && translations[key][lang]) {
        el.innerHTML = translations[key][lang];
      }
    });
  }

  function updateToggle(lang) {
    var btnEs = document.getElementById('lang-es');
    var btnEn = document.getElementById('lang-en');
    if (btnEs && btnEn) {
      btnEs.classList.toggle('active', lang === 'es');
      btnEn.classList.toggle('active', lang === 'en');
    }
  }

  function createToggle() {
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    toggle.innerHTML = '<button id="lang-es" class="lang-btn">ES</button><button id="lang-en" class="lang-btn">EN</button>';
    document.body.appendChild(toggle);

    var lang = getLang();
    updateToggle(lang);

    document.getElementById('lang-es').addEventListener('click', function() { setLang('es'); });
    document.getElementById('lang-en').addEventListener('click', function() { setLang('en'); });
  }

  document.addEventListener('DOMContentLoaded', function() {
    createToggle();
    var lang = getLang();
    if (lang !== 'es') {
      applyTranslations(lang);
    }
    updateToggle(lang);
  });
})();
