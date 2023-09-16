# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY ./src ./src

# Expose the port your app is running on
EXPOSE 4003

# Command to start your Node.js application
CMD ["npm", "start"]
