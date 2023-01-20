# zerodeleo

[Client](https://template-fullstack-mern.onrender.com/)

## 💻💻💻 MERN-STACK BOILERPLATE

Follow these easy steps and you will have a fullstack MERN application up and running within 10min.

✅ TS <br/>
✅ Mongoose <br/>
✅ Vite <br/>
✅ Easy setup <br/>
✅ Easy deployment <br/>
✅ Basic authentication service <br/>
✅ CRUD user <br/>
✅ State management: Redux RTK [@reduxjs/toolkit](https://redux-toolkit.js.org/) <br/>

When I started coding I spent so many hours trying to figure out how to create the perfect work environment for my fullstack applications. How do I get it up and running...?

### These are the FAQ that I had which this boilerplate covers:

- How do I deploy my app?
- How do I connect my app to a db?
- How do I manage my db schema?
- How do I manage my state asynchronously?
- How do I connect my backend with my frontend?
- How do I setup my API?
- Backend routing?
- Frontend routing?
- How do I authenticate a user?

# Setup

1. Clone this repo
2. `npm i`

## Run the application in dev mode
1. `npm run dev-client` 
   * make sure it's running on port `5173`
2. In a separate terminal `npm run dev-server`

## 1. Setting up mongodb

- Login to mongodb atlas
- Create new project
- Create new cluster
  - Make sure to name cluster before creating it
  - Add authentication to .env file in server
    - <code>MONGO_URI={the URI you get when clicking connect after cluster is created}</code>
  - Add IP Address access (0.0.0.0 for all access)
- Connect cluster

## 2. Deployment

1. Deploy `client` and `server` separately
   - *Push this entire repo to your vc and authorize access to CDN/CMS*
   - *Choose repo and change root folder to `client` for `client` deployment and `server` for `server` deployment*
   - *Deployment on [Render](https://render.com/) choose `static site` for `client` and `web-service` for `server`*
2. For both `client` and `server`
   - Build command: `build`
   - Start command: `start`
3. For deploying `client` add environment variables to CDN/CMS
   - `VITE_API_URL={placeholder for api url}`
4. For deploying `server` add environment variables to CDN/CMS
   - `CLIENT_URL={placeholder for client url}`
