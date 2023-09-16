# Dog service website

# Dockerize application

## To dockerize mongodb and node application

- Since we are using cloud database so we need to create two container
- One for node and other for mongodb so we are using compose file
- Also we are using .env so we need to include dockerignore
- So our sensitive data is safe
- We store environment variable reference in compose file
- To build docker container 
      - docker build -t your-image-name .
- To run compose to start server 
      - docker-compose up
