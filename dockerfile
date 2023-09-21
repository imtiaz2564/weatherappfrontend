# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install the latest version of npm globally
RUN npm install -g npm@latest

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application directory into the container
COPY . .

# Expose the port your Nest.js application is running on
EXPOSE 3000

# Command to start your application
CMD ["yarn", "dev"]
