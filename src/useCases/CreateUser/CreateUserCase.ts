import { IUserRepository } from "../../repositories/IUserRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IEmailProvider } from "../../providers/IEmailProvider";

export class CreateUserCase {
	constructor(
		private userRepository: IUserRepository,
		private emailProvider: IEmailProvider
	) {}
 async execute(data: ICreateUserRequestDTO) {
	 const userAlreadyExists = await this.userRepository.findByEmail(data.email)

	 if (userAlreadyExists) {
		 throw new Error("user already exists")
	 }

	 const user = new User(data)

	 await this.userRepository.save(user)

	 await this.emailProvider.sendEmail({
		 to: {
			 name: data.name,
			 email: data.email
		 },
		 from: {
			 name: "oscar jeremias",
			 email: "oscarjeremiasdev@gmail.com"
		 },
		 subejct: "Seja ben-vindo a nossa plataforma",
		 body: "Você já podes fazer login na nossa plataforma."
	 })
 }
}
