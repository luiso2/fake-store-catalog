# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

# Install serve to run the application
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built application from build stage
COPY --from=build /app/dist ./dist

# Copy start script
COPY start.sh ./start.sh

# Make start script executable
RUN chmod +x ./start.sh

# Expose port
EXPOSE 3000

# Start the application using the start script
CMD ["./start.sh"]
