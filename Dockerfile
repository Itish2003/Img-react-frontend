# Step 1: Build the React app using Vite
FROM node:latest AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build  # This will create the dist/ directory

# Step 2: Serve the build with Nginx
FROM nginx:alpine

RUN apk --no-cache add bash gettext  # Add gettext for envsubst

# Copy the built React app (dist) to Nginx's default HTML directory
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY start-nginx.sh /start-nginx.sh

# Give execute permission to the shell script
RUN chmod +x /start-nginx.sh

# Expose port 8000
EXPOSE 8000

# Start Nginx using the script
CMD ["/start-nginx.sh"]