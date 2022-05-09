export interface IAddress {
	name: string;
	email: string;
}

export interface IMassege {
	to: IAddress;
	from: IAddress;
	subejct: string;
	body: string
}

export interface IEmailProvider {
	sendEmail(massege: IMassege): Promise<void>
}
