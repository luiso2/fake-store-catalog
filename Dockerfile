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

# Expose port
EXPOSE 3000

# Start the application
# Use -l tcp://0.0.0.0:3000 to listen on all interfaces
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3000"]
