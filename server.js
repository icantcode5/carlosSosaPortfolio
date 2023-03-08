const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")
const connectDB = require("./config/database")
const path = require("path")
const nodemailer = require("nodemailer")

require("dotenv").config({ path: "./config/.env" })

connectDB()

//Static folder
if (process.env.NODE_ENV === "production") {
	app.use(express.static("./client/build"))
}

//Body Parsing, data in body is sent as a string so we need to parse it to json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		//store property has been updated and can be found in docs
		store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
	})
)

//Setup to receive email
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
			response.json({ status: "Error" })
		} else {
			response.json({ status: "Message Sent" })
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