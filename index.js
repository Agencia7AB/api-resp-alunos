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
app.post("/resposta", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { email } = data;

    const formBody = new URLSearchParams();
    formBody.append("email", email || "");
    formBody.append("u", "179");
    formBody.append("f", "179");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "282bcbc441bfa104db19e2f7e7a3c049");

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


// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor Ativo`);
});