From node:20-alpine
WORKDIR /discord-bot

ENV MODE_ENV=production 

COPY package*.json ./ 
RUN npm ci --omit=dev 

COPY . . 

RUN addgroup -S app && adduser -S app && adduser -S app -G app
USER app


CMD ["npm", "start"]