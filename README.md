Postify Creative Microservices Application

# Microservices App

A 3-tier containerized microservices application with:

- Frontend (static HTML/JS)
- User service (Node.js)
- Product service (Node.js)
- Nginx reverse proxy with SSL support
- Docker Compose deployment

---

## Table of Contents

- [Project Structure](#project-structure)  
- [Prerequisites](#prerequisites)  
- [Setup](#setup)  
- [SSL Setup](#ssl-setup)  
- [Running the Project](#running-the-project)  
- [Access URLs](#access-urls)  
- [Notes](#notes)

---

## Project Structure

microservices-app/
├── docker-compose.yml
├── frontend-service/
├── user-service/
├── product-service/
├── nginx-reverse-proxy/
├── ssl/ # SSL certificates
└── README.md


---

## Prerequisites

- Docker >= 20.x  
- Docker Compose >= 1.29.x  
- Domain names pointing to your server (e.g., `frontend.postifycreative.com`, `user.postifycreative.com`, `products.postifycreative.com`)  

---

## Setup

**1. Clone the repo:**

git clone https://github.com/mansoorulhaqofficial/microservices-app.git
cd microservices-app

**Optional:** Create a .env file if you plan to use environment variables

**Build Docker images:**
docker-compose build

**SSL Setup**

SSL certificates are stored in ssl/ folder. To generate your own SSL with Certbot:

mkdir -p ssl/{certbot,certs}

docker run --rm \
  -p 80:80 \
  -v $(pwd)/ssl/certs:/etc/letsencrypt \
  -v $(pwd)/ssl/certbot:/var/lib/letsencrypt \
  certbot/certbot certonly \
  --standalone \
  -d frontend.postifycreative.com \
  -d user.postifycreative.com \
  -d products.postifycreative.com \
  --agree-tos \
  -m your-email@example.com \
  --no-eff-email

Make sure ports 80 and 443 are free before running Certbot.

## **Running the Project**

Start all services:
docker-compose up -d

Check running containers:
docker ps

nginx-reverse-proxy → ports 80 & 443
frontend-service → port 80 (internal)
user-service → port 3000 (internal)
product-service → port 3000 (internal)




