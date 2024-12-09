import express from "express";
import fetch from "node-fetch"; // Importe o módulo fetch

const app = express();
const PORT = 3080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá, este é o servidor da API da OSF para lançamentos");
});

// Rota para receber a requisição POST
app.post("/cadastro/manychat", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { custom_fields } = data;
    const {
      "[Email]": manychatEmail,
      Nome: manychatNome,
      Tel: manychatTel,
    } = custom_fields;

    const formBody = new URLSearchParams();
    formBody.append("fullname", manychatNome || "");
    formBody.append("email", manychatEmail || "");
    formBody.append("phone", "");
    formBody.append("field[106]", "ManyChat");
    formBody.append("field[107]", "Automação");
    formBody.append("field[108]", "Captação");
    formBody.append("field[109]", "AutomaçãoDeCadastro");
    formBody.append("u", "122");
    formBody.append("f", "122");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "6f3b81517423c5e85688fd0fb3b20d57");

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

app.post("/cadastro/devzapp", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { telefone, nome, email } = data;

    const formBody = new URLSearchParams();
    formBody.append("fullname", nome || "");
    formBody.append("email", email || "");
    formBody.append("phone", telefone || "");
    formBody.append("field[106]", "Devzapp");
    formBody.append("field[107]", "Automação");
    formBody.append("field[108]", "Captação");
    formBody.append("field[109]", "AutomaçãoDeCadastro");
    formBody.append("u", "122");
    formBody.append("f", "122");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "6f3b81517423c5e85688fd0fb3b20d57");

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

app.post("/atualizacao/manychat", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { custom_fields } = data;
    const {
      "[Email]": manychatEmail,
      Nome: manychatNome,
      Tel: manychatTel,
    } = custom_fields;

    const formBody = new URLSearchParams();
    formBody.append("fullname", manychatNome || "");
    formBody.append("email", manychatEmail || "");
    formBody.append("phone", "");
    formBody.append("u", "123");
    formBody.append("f", "123");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "85171ef2e6daa09f38fc3367d0539daa");

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

app.post("/atualizacao/devzapp", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { telefone, nome, email } = data;

    const formBody = new URLSearchParams();
    formBody.append("fullname", nome || "");
    formBody.append("email", email || "");
    formBody.append("phone", telefone || "");
    formBody.append("u", "123");
    formBody.append("f", "123");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "85171ef2e6daa09f38fc3367d0539daa");

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
