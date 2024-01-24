# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3001
EXPOSE 3001

# Define the command to run your app
CMD ["npm", "start"]
