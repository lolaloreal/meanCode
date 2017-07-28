const mongoose = require("mongoose")
const Poll = mongoose.model("Poll")

module.exports = {
    add_question: (req, res, next) => {
        let new_poll = new Poll(req.body)
        new_poll.save()
        .then(() => {res.json(true)})
        .catch(err => {res.status(500).json(err)})
    },
    index: (req, res, next) => {
        Poll.find()
        .then(data => res.json(data))
        .catch(err => {res.status(500).json(err)})
    },

    destroy: (req, res, next) => {
        console.log('logging the req.body', req.body)
        let poll = new Poll(req.body);
        console.log("logging new poll", poll)
        Poll.remove({_id: poll._id})
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    getOne: (req, res, next) => {
        console.log('logging the body for one poll', req.body)
        Poll.findOne({_id: req.body.poll_id})
        .then((poll) => {
            console.log('found poll', poll)
            res.json(poll)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

    }
}
