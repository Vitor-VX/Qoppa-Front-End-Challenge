const ansi_colors = require("ansi-colors")

const figlet = require("figlet")

figlet("QoppaTech", (err, result) => {
    if (err) return console.log(chalk.yellow("NÃO FOI POSSÍVEL CARREGAR A ARTE DO FIGLET"));

    console.log(ansi_colors.blue(result));
})

console.log(ansi_colors.blue("Bem vindo ao CLI da API do teste de front-end da QoppaTech."));
console.log(ansi_colors.blue("Confira as informações em: https://github.com/QoppaTech/Qoppa-Front-End-Challenge/tree/main/api"));
console.log("----------------------------------------------------------------")

const express = require("express")
const app = express();

// cors
const cors = require("cors")

// porta
const PORTA = 3000

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => res.status(200).send("<h1>API DESAFIO: QoppaTech </h1>"))

app.post("/singUp", (req, res) => {
    console.log(ansi_colors.yellow("⏺ Requisição do tipo POST recebida na rota correta!"));

    const bd = req.body

    if (!bd.username || !bd.email || !bd.password) {
        console.log(ansi_colors.red("⛔️ Dados enviados incorretos ou não recebidos, confira os dados que devem ser recebidos em: https://github.com/QoppaTech/Qoppa-Front-End-Challenge/tree/main/api"));
        res.status(401).send();
        return;
    }

    console.log(ansi_colors.green("✅ Reconhecido! Parabéns!"))
    res.status(200).send();
    return;
})

app.post("*", (req, res) => {
    console.log(ansi_colors.red("❌ Requisição do tipo POST recebida na rota incorreta!"));
    res.status(404).send()
    return;
})

app.get("*", (req, res) => {
    res.status(404).send("<h1>API DESAFIO: 404 -> PÁGINA NÃO ENCONTRADA -> quoppaTech </h1>");
    return;
})

app.listen(PORTA, () => console.log(ansi_colors.green(`Qoppa_Desafio: Rodando na porta ${PORTA}`)));
