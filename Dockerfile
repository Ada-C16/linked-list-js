# Install latest version of node (older versions are not guaranteed to work with Learn)
FROM node:latest

# Install bash (must be installed for alpine builds)
# RUN apk update && apk add bash

# Create directory for app
RUN mkdir /app

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package.json from upstream
ADD package.json /app

# Install dependencies
RUN npm install

# Add entire student fork (overwrites previously added pa$
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# Overwrite files in student fork with upstream files
ADD test.sh /app
ADD package.json /app
RUN npm install
ADD test /app/test


