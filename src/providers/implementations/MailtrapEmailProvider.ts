import { IEmailProvider,IMassege } from "../IEmailProvider";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailtrapEmailProvider implements IEmailProvider {
	private transporter: Mail;
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: "smtp.mailtrap.io", 
			port: 2525,
			auth: { user: "f8d8ee1a44e2da", pass: "a911cf4a7494b5" }
		})
	}
	async sendEmail(massege: IMassege): Promise<void> {
		 await this.transporter.sendMail({
			to: {
				name: massege.to.name,
				address: massege.to.email
			},
			from: {
				name: massege.from.name,
				address: massege.from.email
			},
			subject: massege.subejct,
			html: massege.body
		})
	}
}


