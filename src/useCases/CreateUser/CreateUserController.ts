import { Request,Response } from "express";
import { CreateUserCase } from "./CreateUserCase";

export class CreateUserController {
	constructor(
		private createUserCase:CreateUserCase
	) {}

	async handle(req: Request,res: Response) {
		const { name,email,password } = req.body
		try {
		await this.createUserCase.execute({
			name,
			email,
			password
		})
		return res.status(201).send()

		} catch(err) {
			console.log(err)
			return res.status(400).json({
				message: "Unexpected error"
			})	
		}
	}
}
