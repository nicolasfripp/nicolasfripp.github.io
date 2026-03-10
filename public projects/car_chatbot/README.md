# Car Chatbot with RAG

A conversational chatbot that allows users to search and query a dataset of 38,000+ cars using natural language. Built with a RAG (Retrieval-Augmented Generation) architecture using LangChain, OpenAI embeddings, and FAISS as the vector store.

Users can ask questions like "Show me cheap SUVs" or "Compare Honda vs Toyota" and the chatbot retrieves the most relevant cars from the dataset and generates a natural language response with specific details (brand, model, year, price, etc.). It also supports conversational memory, so follow-up questions like "Which one is the cheapest?" work as expected.

## Mini Version

A mini version of this project is presented in the `chatbot_autos_openai_directo.ipynb` notebook, which demonstrates the full pipeline — from data loading and vectorization to interactive chat — in a single, self-contained notebook ready to run on Google Colab.
