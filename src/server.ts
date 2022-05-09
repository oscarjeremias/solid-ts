import express from "express";
import { createUserController } from "./useCases/CreateUser/index";

const app = express()
const port = 5000
app.use(express.json())

app.post("/",(req,res) => {
	createUserController.handle(req, res)
})

app.listen(port,() =>  {
	console.log(`servedor em pé na porta ${port}`)
})
