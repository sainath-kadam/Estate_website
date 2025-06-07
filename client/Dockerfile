FROM node:18

WORKDIR /app

# Only copy package.json and lock file first (better cache)
COPY package*.json ./

# Install fresh dependencies inside the container
RUN npm install

# Now copy the rest of the frontend code
COPY . .

# Build the frontend app
RUN npm run build

# Use serve to serve the production build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]
