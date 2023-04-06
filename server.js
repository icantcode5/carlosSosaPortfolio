const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const path = require("path")
const nodemailer = require("nodemailer")

require("dotenv").config({ path: "./config/.env" })

//Static folder
if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/build"))
}

//Body Parsing, data in body is sent as a string so we need to parse it to json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//Setup to receive email
//We are essentially sending an email to ourselves where we grab the subject, the sender's email and the message to display it. This way we can email them at the email they entered and start a new email conversation.
const contactEmail = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "carlossosa54321@gmail.com",
		pass: process.env.EmailPass,
	},
})

contactEmail.verify((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log("Ready to Send")
	}
})

//Email functionality
app.post("/contact", (request, response) => {
	const { name, email, subject, message } = request.body

	const mail = {
		from: name,
		to: "carlossosa54321@gmail.com",
		subject: subject,
		html: `<p> Name: ${name}</p>
           <p> Email: ${email}</p>
		       <p>${message}</p>`,
	}
	contactEmail.sendMail(mail, (err) => {
		if (err) {
			response.json({
				status: "Error! Something went wrong. Please try again.",
			})
		} else {
			response.json({ status: "Success! Message sent" })
		}
	})
})

//When running in production, send html which renders client code
if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/build/index.html"))
	})
}

//Server Running
app.listen(process.env.PORT, () => {
	console.log("Server is running")
})
