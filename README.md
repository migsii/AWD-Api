# AWD-Api# AWD-Api: Systems Inventory Project (Academic)

A lightweight Node.js Express API designed for educational purposes. This project simulates a backend system for managing assets, intended for testing via **Postman**.

---

## Tech Stack & Setup

- **Backend:** Node.js + Express
- **Environment:** Render (Deployment)
- **Testing Tool:** Postman
- **Mock Data:** Local JSON array in `src/data.js`

### Installation

1. Clone the repository.
2. Run `npm install` to download dependencies.
3. Start the server in development mode: `npm run dev`

---

## API Endpoints (Postman)

| Method | Endpoint     | Description             | Status     |
| :----- | :----------- | :---------------------- | :--------- |
| GET    | `/items`     | Fetch all system assets | Functional |
| POST   | `/items`     | Create a new asset      | Functional |
| PUT    | `/items/:id` | Update asset by ID      | **TODO**   |
| DELETE | `/items/:id` | Remove asset by ID      | **TODO**   |

---

## How to Contribute

To keep our project clean, **do not code directly on the `main` or `dev` branches.** Follow these steps:

1. **Create your branch:** `git checkout -b feature/your-name-task`
2. **Work on your task:**
   - Open `src/index.js` to add your logic.
3. **Commit & Push:**
   - `git add .`
   - `git commit -m "feat: added delete functionality"`
   - `git push origin feature/your-name-task`
4. **Merge:** Create a Pull Request (PR) on GitHub to merge into `dev`.

---

## 📝 Project Structure

- `src/index.js`: Main server entry point and API routes.
- `src/data.js`: Our "Mock Database" containing the inventory array.
- `package.json`: Project configuration and start scripts.
