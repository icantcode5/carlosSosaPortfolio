import React from "react"
import { useState } from "react"
import styles from "./styles/ContactForm.module.css"
import axios from "axios"

function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})

	function handleChange(event) {
		const { name, value } = event.target
		setFormData((prevFormData) => {
			return { ...prevFormData, [name]: value }
		})
	}

	async function handleSubmit(event) {
		event.preventDefault()

		let response = await axios.post("http://localhost:5000/contact", formData)
		console.log(response.data)
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		})
	}

	return (
		<section className={styles.section}>
			<h2>Contact Me</h2>

			<div className={styles.formDiv}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						required
						name="name"
						type="string"
						value={formData.name}
						onChange={handleChange}
					/>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						required
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<label htmlFor="subject">Subject</label>
					<input
						id="subject"
						required
						name="subject"
						type="string"
						value={formData.subject}
						onChange={handleChange}
					/>
					<label htmlFor="message">message</label>
					<textarea
						id="email"
						required
						name="message"
						type="string"
						value={formData.message}
						onChange={handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		</section>
	)
}

export default ContactForm
