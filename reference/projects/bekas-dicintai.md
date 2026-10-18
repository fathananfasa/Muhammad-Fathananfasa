
# Project: Bekas Dicintai

## Basic Information

- Project name: Bekas Dicintai
- Project type: Preloved E-Commerce Website
- Project category: Web Application
- Development context: Undergraduate thesis

## Project Overview

### English
Bekas Dicintai is a website-based e-commerce application designed to facilitate the buying and selling of preloved items. The application features an AI-assisted negotiation system that allows buyers to negotiate item prices with the help of AI as a negotiator.

### Indonesian
Bekas Dicintai merupakan aplikasi e-commerce berbasis website yang dirancang untuk memfasilitasi jual beli barang preloved. Aplikasi ini menyediakan fitur tawar menawar dimana pembeli dapat menawar harga barang yang diberikan dengan bantuan AI sebagai negotiator.

## Problem and Goal

### Problem
Sistem jual-beli barang preloved biasanya menggunakan sosial media pribadi sebagai sarana menawarkan barang yang diperjualbelikan. Terdapat kendala dalam proses jual-beli tersebut, calon pembeli harus mencari barang yang diinginkan dengan cara scrolling sosial media penjual satu persatu dan harus menanyakan kepada penjual apakah barang tersebut masih tersedia atau tidak. Dari sisi penjual sistem jual-beli tersebut membuat volume pesan yang masuk kepada penjual menjadi cukup tinggi, menyebabkan banyak pesan dari calon pembeli tidak dapat di respons. 

### Goal
Provide a web-based platform for browsing preloved products and support product discovery through content-based filtering without losing the essence of bargaining.

## Verified Features

The project includes the following features based on the existing implementation:

- User authentication and role-based access for administrators and buyers.
- Product catalog and product category browsing.
- Product search supported by Content-Based Filtering.
- Shopping cart.
- Product price negotiation between buyers and sellers.
- Transaction and payment flow.
- Midtrans sandbox payment integration.
- Shipping cost integration using RajaOngkir Komerce.
- Product management for administrators.
- Bargaining the price.

Only describe a feature as completed if it is working in the version being showcased. Payment, shipping, and other external integrations may have environment-specific limitations.

## Recommendation / Search System

- Method: Content-Based Filtering (CBF).
- Text processing: lowercase conversion, text normalization, stopword removal, and stemming.
- Text processing library: Sastrawi.
- Main algorithm components: TF-IDF and cosine similarity.
- Search relevance uses product names, categories, and descriptions with different weights.
- The Python service uses Flask.
- The Laravel application communicates with the search service through an API.

Do not claim that the system uses collaborative filtering or user browsing history to generate recommendations.

## Technology Stack

- Backend: PHP and Laravel
- Frontend: HTML, CSS, JavaScript, and Tailwind CSS
- Database: MySQL
- Search service: Python and Flask
- Text processing: Sastrawi
- Search algorithm: TF-IDF and cosine similarity
- Payment integration: Midtrans Sandbox
- Shipping integration: RajaOngkir Komerce

## My Contribution
- Requirements analysis and system design.
- Database design and implementation.
- Backend and frontend development.
- Search algorithm implementation and integration.
- Testing and deployment.
- Documentation and evaluation.

## Project Assets
Screenshot directory: `assets/projects/bekas-dicintai/`

Use only screenshots that actually exist. Choose the clearest 3–5 images for the portfolio.

## Display Guidelines

- Present this as a featured project.
- Highlight the e-commerce workflow and Content-Based Filtering implementation.
- Use real screenshots from the project.
- Never fabricate user counts, sales figures, performance metrics, or business impact.
- Do not display fake GitHub or demo links.
