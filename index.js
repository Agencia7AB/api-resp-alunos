import express from "express";
import fetch from "node-fetch";
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3080;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Olá, este é o servidor da API da OSF");
});

// Rota para receber a requisição POST
app.post("/resposta/fc9", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { email, resposta } = data;

    const formBody = new URLSearchParams();
    formBody.append("email", email || "");
    formBody.append("field[192]", resposta || "");
    formBody.append("u", "181");
    formBody.append("f", "181");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "73f3799754257e3451a39318545f89f8");

    response = await fetch("https://brunobonibilia.activehosted.com/proc.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
});


app.post("/resposta/g14", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { email, resposta } = data;

    const formBody = new URLSearchParams();
    formBody.append("email", email || "");
    formBody.append("field[193]", resposta || "");
    formBody.append("u", "182");
    formBody.append("f", "182");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "c0e3e1b739c72c07cfcdcbcd7aa0eb9e");

    response = await fetch("https://brunobonibilia.activehosted.com/proc.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
});

app.post("/resposta/al1", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { email, resposta } = data;

    const formBody = new URLSearchParams();
    formBody.append("email", email || "");
    formBody.append("field[45]", resposta || "");
    formBody.append("u", "16");
    formBody.append("f", "16");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "95d8ed29775c3420333c697134d5691e");

    response = await fetch("https://rayanepinto66712.activehosted.com/proc.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor Ativo`);
});
