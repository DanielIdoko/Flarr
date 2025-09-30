# Flarr
Flarr is driven towards empowering the lives of teenagers, youths and giving opportnities to those who don't have. 

We help schools prepare their student for the future, guide and assists youths to become innovative and help companies find talents in a smooth process.

## 🗺  Scope
We hope to help and empower students, youths and contribute to the economies greatly not just in Nigeria but beyond Africa.


## 🤸‍♂️ How to get started
### For the backend (Node js + Express js + Clerk + MongoDB)
1. Provide the environment variables in the ``.env.development.local`` and ``.env.production.local`` files.
```js
// PORT
PORT=

// NODE_ENV
NODE_ENV= // Node environment. 'development' or 'production'

 
//MONGO_DB_URI=
MONGO_DB_URI=

// CLERK
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
```

### 🚀 Stack
#### ✨ Frontend
- Next.js
- TailwindCSS
- Shadcn UI,

#### ⚙ Backend
- Nodejs
- Express
- Clerk (Authentication)
- Gemini API (API integration)
- Paystack (Payments integration)


### Testing (backend)
1. cd into project
2. cd into backend directory

#### For testing with clerk webhook: 

1. run ```ngrok http PORT-NUMBER``` 

This will generate a web address that you can use for tests on clerk's dashboard. 

`` Note: `` This won't work if you have your system's firewall or defender on.