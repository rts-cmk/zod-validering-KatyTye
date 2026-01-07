import { useState } from "react"

export default function RegistrationForm() {
	const [errors, setErrors] = useState({})

	return (
		<form className="reg-form">
			<h2 className="reg-form__title">
				Register Account
			</h2>

			<label htmlFor="username" className="reg-form__field">
				<span className="reg-form__field-text">Username</span>
				<input type="text" name="username"
					className="reg-form__field-input" autoComplete={"username"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="firstname" className="reg-form__field">
				<span className="reg-form__field-text">First name</span>
				<input type="text" name="firstname"
					className="reg-form__field-input" autoComplete={"given-name"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="lastname" className="reg-form__field">
				<span className="reg-form__field-text">Last name</span>
				<input type="text" name="lastname"
					className="reg-form__field-input" autoComplete={"family-name"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="email" className="reg-form__field">
				<span className="reg-form__field-text">E-Mail</span>
				<input type="email" name="email"
					className="reg-form__field-input" autoComplete={"email"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="password" className="reg-form__field">
				<span className="reg-form__field-text">Password</span>
				<input type="password" name="password"
					className="reg-form__field-input" autoComplete={"new-password"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="repeatedPassword" className="reg-form__field">
				<span className="reg-form__field-text">Repeat Password</span>
				<input type="password" name="repeatedPassword"
					className="reg-form__field-input" autoComplete={"new-password"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="birthday" className="reg-form__field">
				<span className="reg-form__field-text">Birthday</span>
				<input type="date" name="birthday"
					className="reg-form__field-input" autoComplete={"bday-year"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="phone" className="reg-form__field">
				<span className="reg-form__field-text">Phonenumber</span>
				<input type="tel" name="phone"
					className="reg-form__field-input" autoComplete={"tel"}></input>
				<ul className="reg-form__field-errors"></ul>
			</label>

			<label htmlFor="newsletter" className="reg-form__field">
				<input type="checkbox" name="newsletter"
					className="reg-form__field-input" autoComplete={"false"}></input>
				<span className="reg-form__field-text">I accept to recive newsletters every month.</span>
			</label>
		</form>
	)
}