## 🛡️ Shielded Node API

A secure and minimal Node.js REST API with JWT-based authentication, built using modern security best practices.

Inspired by [this freeCodeCamp guide](https://www.freecodecamp.org/news/how-to-harden-your-nodejs-apis-security-best-practices).

---

### 🚀 Features

- ✅ **Register & Login** with hashed passwords
- 🔐 **JWT Authentication** with protected routes
- 🧪 **Zod Validation** for all inputs
- 🛡️ **Helmet** for secure HTTP headers
- ⛔ **Rate Limiting** to prevent abuse
- 🧼 **Manual Input Sanitization** (No `$` or `.` injection)
- 🌐 CORS enabled for frontend integration
- 💾 MongoDB (local or Atlas)
- 📦 Clean Express project structure

---

### 📁 Folder Structure

```
shielded-node-api/
├── config/            # DB config
├── controllers/       # Auth logic
├── middleware/        # Custom middleware (auth, validation, sanitize)
├── models/            # Mongoose models
├── routes/            # API routes
├── validators/        # Zod schemas
├── .env
├── server.js
```

---

### 🧪 API Endpoints

| Method | Route                 | Description           | Auth Required |
| ------ | --------------------- | --------------------- | ------------- |
| POST   | `/api/auth/register`  | Register a new user   | ❌ No         |
| POST   | `/api/auth/login`     | Login and get a JWT   | ❌ No         |
| GET    | `/api/auth/protected` | Access protected data | ✅ Yes        |

---

### 🛠 Setup Instructions

#### 🔧 Backend (Node.js)

```bash
git clone https://github.com/kaveeshagim/shielded-node-api.git
cd shielded-node-api
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/shielded-api
JWT_SECRET=superSecretKey
JWT_EXPIRES_IN=1d
```

Run the server:

```bash
npm run dev
```

#### 💻 Frontend (React)

Frontend is inside the `/frontend` folder.

```bash
cd frontend
npm install
npm run dev
```

### 🔒 Security Focus

This project integrates key backend security practices, including:

- Zod-based schema validation
- Helmet middleware
- Manual NoSQL injection defense
- Rate limiting
- Error handling separation
- JWT token management

---

### 🧠 Want to Contribute?

PRs, ideas, and improvements welcome! This repo is beginner-friendly and perfect for practicing secure full-stack development.
