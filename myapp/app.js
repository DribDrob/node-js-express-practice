const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

// app.METHOD(PATH, HANDLER)

// Де:
// app — це екземпляр express програми.
// METHOD -— метод запиту HTTP (GET, POST, PUT, PATCH, DELETE).
// PATH —- шлях на сервері, у нашому випадку це корінь сайту '/'.
// HANDLER —- функція, що виконується при зіставленні маршруту.

// ?, +, * и().
// '/con?tact'
// Символ ? у маршруті вказує, що попередній символ може зустрічатися 1 раз або відсутній. Наведений нижче шлях маршруту зіставляє cotact та contact.
// Символ + вказує, що попередній символ може зустрічатися 1 і більше разів. Цей шлях маршруту зіставляє contact, conntact, connntact і т.д.
// Символ зірочка * вказує, що на місці цього символу може бути будь-яка кількість символів. Цей шлях маршруту зіставляє contact, conxtact, con123tact і т.д.
