const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // щоб працювали index.html + script.js

app.get('/info/:login', (req, res) => {
  const login = req.params.login;

  if (login === 'is-32fiot-23-119') {
    res.json({
      прізвище: "Філіпович",
      імя: "Дмитро",
      курс: 2,
      група: "ІС-32",
      логін: login
    });
  } else {
    res.status(404).json({ error: "Логін не знайдено" });
  }
});

app.listen(port, () => {
  console.log(`Сервер працює: http://localhost:${port}`);
});
