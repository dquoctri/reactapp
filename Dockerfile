# pull official base image
FROM node:lts AS builder

ENV NODE_ENV production
ENV GENERATE_SOURCEMAP false
ENV REACT_APP_SERVER_URL=${REACT_APP_SERVER_URL}

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

# add app
COPY public/ public
COPY src/ src

# start app
RUN npm run build

FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs
COPY --from=builder /app/build/ .
RUN chown -R www-data:www-data /usr/local/apache2/htdocs \
    && sed -i "s/Listen 80/Listen \${PORT}/g" /usr/local/apache2/conf/httpd.conf