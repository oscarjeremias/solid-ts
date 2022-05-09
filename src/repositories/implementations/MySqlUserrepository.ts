import {User} from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class MySqlUserrepository implements IUserRepository {
	private users: User[] = [];
	async findByEmail(email: string): Promise<User | undefined> {
		const userExist = this.users.find(user => {
			return user.email === email
		})

		return userExist
	}

	async save(user: User): Promise<void> {
		this.users.push(user)
	}

}
