import zod from "zod"

const today = new Date()
const minAge = 18

const latestAllowedBirthday = new Date(
	today.getFullYear() - minAge,
	today.getMonth(),
	today.getDate()
)

const validateScheme = zod.object({
	username: zod.string()
		.nonempty("Entering a username is required.")
		.min(4, "Your username must be atleast 4 charachers long.")
		.regex(/[a-zA-Z]/, "Your username must contain letters.")
		.regex(/^\S+$/, "Your username cannot contain any spaces."),
	firstname: zod.string()
		.nonempty("Entering a first name is required."),
	lastname: zod.string()
		.nonempty("Entering a last name is required."),
	email: zod.email("The entered e-mail is not valid."),
	password: zod.coerce.string()
		.nonempty("Entering your password is required.")
		.min(10, "Your password must atleast have 10 charachers.")
		.regex(/[a-z]/, "Your password must contain small letters.")
		.regex(/[A-Z]/, "Your password must contain capital letters.")
		.regex(/[\d]/, "Your password must contain numbers.")
		.regex(/[\W]/, "Your password must contain special characters")
		.regex(/^\S+$/, "Your password cannot contain any spaces."),
	repeatedPassword: zod.coerce.string()
		.nonempty("Repeating the password is required."),
	birthday: zod.coerce.date("Entering your birthday is required.")
		.max(
			latestAllowedBirthday,
			"You're not old enough to register here."
		),
	phone: zod.string()
		.nonempty("Entering your phone number is required.")
		.regex(/^\+?\d{8,15}$/, "Phone number must contain only numbers and be at least 8 digits long.")
})
	.refine((data) => data.password === data.repeatedPassword, {
		message: "Passwords matcher ikke.",
		path: ["repeatedPassword"]
	})

export default validateScheme