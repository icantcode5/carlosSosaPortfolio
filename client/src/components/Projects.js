import React from "react"
import styles from "./styles/Projects.module.css"
import workoutAppImg from "../assets/WorkoutApp.png"
import { Link as Linked } from "react-router-dom"

export default function Projects() {
	return (
		<section className={styles.section} id="work">
			<h2>Projects</h2>

			<div className={styles.projectsContainer}>
				<div className={styles.descriptionContainer}>
					<h3>Workout Tracker</h3>
					<p>
						Never forget how much weight you lifted, how many sets you
						accomplished and how many reps you worked for. To get started,
						easily register/login, and start adding each workout you did that
						day. You can view all your past workouts with timestamps and see how
						you stack up against yourself overtime.
					</p>

					<div className={styles.techContainer}>
						<span>JavaScript</span>
						<span>Node.js</span>
						<span>MongoDB</span>
						<span>React</span>
						<span>CSS3</span>
						<span>JWT</span>
					</div>
				</div>

				<div className={styles.projectImg}>
					<Linked
						to="https://workouttrackerapp-production.up.railway.app/"
						target="_blank">
						<img src={workoutAppImg} alt="workout app" />
					</Linked>
					<Linked className={styles.codeLink}>View Code</Linked>
				</div>
			</div>

			<div className={styles.projectsContainer}>
				<div className={styles.descriptionContainer}>
					<h3>React Trivia Game</h3>
					<p>
						Test your Tech knowledge with this fun and quick trivia game. Select
						your answers, and update them before submitting. See which ones you
						got right, which ones you answered incorrectly and if you didn't
						select an answer, view the correct answer regardless
					</p>

					<div className={styles.techContainer}>
						<span>JavaScript</span>
						<span>React</span>
						<span>CSS3</span>
					</div>
				</div>

				<div className={styles.projectImg}>
					<Linked to="https://5questiontrivia.netlify.app/" target="_blank">
						<img src={workoutAppImg} alt="workout app" />
					</Linked>
					<Linked className={styles.codeLink}>View Code</Linked>
				</div>
			</div>

			<div className={styles.projectsContainer}>
				<div className={styles.descriptionContainer}>
					<h3>E-Commerce</h3>
					<p>
						Never forget how much weight you lifted, how many sets you
						accomplished and how many reps you worked for. To get started,
						easily register/login, and start adding each workout you did that
						day. You can view all your past workouts with timestamps and see how
						you stack up against yourself overtime.
					</p>
				</div>

				<div className={styles.projectImg}>
					<Linked to="https://5questiontrivia.netlify.app/" target="_blank">
						<img src={workoutAppImg} alt="workout app" />
					</Linked>
					<Linked className={styles.codeLink}>View Code</Linked>
				</div>
			</div>
		</section>
	)
}
