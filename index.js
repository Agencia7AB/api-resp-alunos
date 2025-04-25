import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3080;

app.use(express.json());

const API_URL = "https://unnichat.com.br/a/lZ0coRozxRsT3vtSorSC";
const API_KEY = "23bea959-2979-44d0-86a8-717f02f3cd3a";


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
    formBody.append("field[11]", "ManyChat");
    formBody.append("field[12]", "Automação");
    formBody.append("field[13]", "Captação");
    formBody.append("field[14]", "AutomaçãoDeCadastro");
    formBody.append("u", "140");
    formBody.append("f", "140");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "bbe4f7f90b97f28721f4a718421d02b8");

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

// Rota para receber a requisição POST
app.post("/cadastro/unnichat", async (req, res) => {

  var API_KEY_AUTH = "e4e002d2-3b27-424c-aa40-0e10b733f984";

  const data = req.body;
  try {
    let response;
    let result;
    const data = req.body.contact; // Acessa o objeto 'contact'
    const { name, email, phoneNumber, id } = data; // Extrai os dados

    console.log("Dados recebidos: ", data)

    const formBody = new URLSearchParams();
    formBody.append("fullname", name || ""); // Usa o nome do JSON
    formBody.append("email", email || ""); // Usa o email do JSON
    formBody.append("phone", phoneNumber || ""); // Usa o telefone do JSON
    formBody.append("field[11]", "Unnichat");
    formBody.append("field[12]", "Automação");
    formBody.append("field[13]", "Captação");
    formBody.append("field[14]", "AutomaçãoDeCadastro");
    formBody.append("u", "149");
    formBody.append("f", "149");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "bbe4f7f90b97f28721f4a718421d02b8");

    response = await fetch("https://rayanepinto66712.activehosted.com/proc.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    let payload = {
      id: id,
      tag_id: "gibeNqsomHdO0JBoFkUh"
    }

    var options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      headers: {
        "Authorization": API_KEY_AUTH
      }
    };

    result = await fetch("https://southamerica-east1-plataforma-unnichat-meta.cloudfunctions.net/unniapi/contact/addTag", options);

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
    formBody.append("or", "bbe4f7f90b97f28721f4a718421d02b8");

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

app.post("/cadastro/forms/fc", async (req, res) => {
  const data = req.body;
  try {
    let response;
    const { telefone, nome, email, utm_source, utm_medium, utm_campaing, utm_content } = data;

    const formBody = new URLSearchParams();
    formBody.append("fullname", nome || "");
    formBody.append("email", email || "");
    formBody.append("phone", telefone || "");
    formBody.append("field[11]", utm_source || "");
    formBody.append("field[12]", utm_medium || "");
    formBody.append("field[13]", utm_campaing || "");
    formBody.append("field[14]", utm_content || "");
    formBody.append("u", "147");
    formBody.append("f", "147");
    formBody.append("s", "");
    formBody.append("c", "0");
    formBody.append("m", "0");
    formBody.append("act", "sub");
    formBody.append("v", "2");
    formBody.append("or", "bbe4f7f90b97f28721f4a718421d02b8");

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

// Rota para processar a requisição diretamente
app.post("/process-data", async (req, res) => {
  try {
    const receivedData = req.body;

    console.log("Dados recebidos: ", receivedData);

    // Validação: Confirma que o JSON contém o parâmetro "telefone"
    if (!receivedData.telefone) {
      return res.status(400).json({ message: "Parâmetro 'telefone' não encontrado." });
    }

    const requestBody = {
      apiKey: API_KEY,
      data: {
        user: {
          phoneNumber: receivedData.telefone,
          name: "Sem nome",
          email: ""
        }
      }
    };

    console.log("Reqisição: ", requestBody);
    // Fazendo a requisição diretamente ao endpoint
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();
    console.log("Resultado: ", result);

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


// Rota para processar a requisição diretamente
app.post("/importacao", async (req, res) => {
  try {
    const receivedData = req.body;

    console.log("Dados recebidos: ", receivedData);

    // Validação: Confirma que o JSON contém o parâmetro "telefone"
    if (!receivedData.whatsapp_phone) {
      return res.status(400).json({ message: "Parâmetro 'telefone' não encontrado." });
    }

    const requestBody = {
      apiKey: "4fa926ee-abf0-4033-95fb-b18002ac739d",
      data: {
        user: {
          phoneNumber: receivedData.whatsapp_phone,
          name: "Sem nome",
          email: ""
        }
      }
    };

    console.log("Reqisição: ", requestBody);
    // Fazendo a requisição diretamente ao endpoint
    const response = await fetch("https://unnichat.com.br/a/rqROLyERi5m4IDsQGnLC", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();
    console.log("Resultado: ", result);

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
      const response = await fetch("https://functions-api.clint.digital/endpoints/integration/webhook/7ea35c16-a46a-4eae-ab04-eee1161268cd", {
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
