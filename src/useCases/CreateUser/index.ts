import { MailtrapEmailProvider } from "../../providers/implementations/MailtrapEmailProvider";
import { MySqlUserrepository } from "../../repositories/implementations/MySqlUserrepository";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapEmailProvider = new MailtrapEmailProvider()
const mySqlUserrepository = new MySqlUserrepository()

const createUserCase = new CreateUserCase(
	mySqlUserrepository,
	mailtrapEmailProvider
)

const createUserController = new CreateUserController(
	createUserCase
)

export { createUserCase,createUserController }
