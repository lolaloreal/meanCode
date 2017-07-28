const path = require("path")

const users = require("./../controllers/users.js")
const polls = require("./../controllers/polls.js")
//this users.js module exports is exporting an object with methods within it
//we are accessing the obect and then calling a method

module.exports = (app) => {
    //these handle session
	app.post("/login", users.login)
	app.get("/all_users", users.index)
	app.get("/logout", users.logout)
	app.get("/get_logged_in_user", users.get_logged_in_user)

	app.post('/add_question', polls.add_question)
	app.get('/polls', polls.index)
	app.post('/polls/destroy', polls.destroy)
	app.post('/polls/id', polls.getOne)

	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./public/dist/index.html"))//ALWAYS last make angular name
	})
}
