import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3080;

app.use(express.json());

const API_URL = "https://unnichat.com.br/w/GJWhbBQHEFyfvYvpFAUu";
const API_KEY = "fb6ab904-43fe-4d87-b180-dc8e9833a31e";


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
    formBody.append("field[129]", "ManyChat");
    formBody.append("field[130]", "Automação");
    formBody.append("field[131]", "Captação");
    formBody.append("field[132]", "AutomaçãoDeCadastro");
    formBody.append("u", "140");
    formBody.append("f", "140");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "8946301f3aab4b1376755ea8480813fd");

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
    formBody.append("u", "141");
    formBody.append("f", "141");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "cb7d3bb7942749b52c97958cf1731e32");

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


// Rota para processar a requisição diretamente
app.post("/process-data", async (req, res) => {
  try {
    const receivedData = req.body;

    // Validação: Confirma que o JSON contém o parâmetro "telefone"
    if (!receivedData.telefone) {
      return res.status(400).json({ message: "Parâmetro 'telefone' não encontrado." });
    }

    const requestBody = {
      apiKey: API_KEY,
      data: {
        user: {
          phoneNumber: receivedData.telefone,
          name: "",
          email: ""
        }
      }
    };

    // Fazendo a requisição diretamente ao endpoint
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    // Resposta final para o cliente
    res.status(200).json({
      message: "Requisição enviada com sucesso!",
      response: result
    });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error.message);
    res.status(500).json({
      message: "Erro interno ao enviar a requisição.",
      error: error.message
    });
  }
});

app.post("/integracao/clint", async (req, res) => {
  const data = req.body;
  try {
    if (data) {
      // Isolando os campos `name` e `whatsapp_phone`
      const payload = {
        telefone: String(data.contact.phoneNumber)
      };

      // Enviando a requisição para o webhook
      const response = await fetch("https://functions-api.clint.digital/endpoints/integration/webhook/870fd5a2-917e-48fc-bed6-e15372980303", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar dados para o webhook: ${response.statusText}`);
      }
    }
    
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
