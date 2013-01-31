// The below code doesn't work -- it's just to show examples.

// Expand this list of professions!
var professionNames = ['accountant', 'advertiser', 'analyst', 'athlete',
	'cartoonist', 'chef', 'coder', 'cook', 'cop', 'dentist', 'director',
	'doctor', 'electrician', 'entrepreneur', 'financier', 'fireman', 'founder',
	'gambler', 'hitman', 'househusband', 'housewife', 'judge', 'lawyer', 'maid',
	'marketer', 'nurse', 'plumber', 'poet', 'policeman', 'politician', 'president',
	'professor', 'programmer', 'repairman', 'researcher', 'student', 'sysadmin',
	'teacher', 'telemarketer', 'unemployed', 'writer'];

// Here's an example of what making a new achievement for a specific profession would look like.
var exampleProfessionAchievement = new ProfessionAchievements({ profession:
	'programmer', name: professionName, title: 'Fork It All!', subtitle:
	'Opened Github Account', points: 50, desc:
	"Gotta have a presence on Github if you want to be in the game, son." });

// Example models for profession-related stuff.  Extend this!
module.exports.configureSchema = function(Schema, mongoose) {

	var Hobbies = new Schema({
		pid: { type: Number, default: -99 }
		, sender: { type: String, default: "Anonymous" }
		, category: { type: String, default: 'general' }
		, desc: { type: String, default: '' }
		, name: { type: String, default: '' }
		, level: { type: Number, default: '' }
		, to_next_level: { type: Number, default: 100 }
		, started: { type: Date, default: Date.now }
		, ended: { type: Date, default: Date.now }
	});

	var Jobs = new Schema({
		pid: { type: Number, default: -99 }
		, sender: { type: String, default: "Anonymous" }
		, category: { type: String, default: 'general' }
		, desc: { type: String, default: '' }
		, name: { type: String, default: '' }
		, level: { type: Number, default: '' }
		, to_next_level: { type: Number, default: 100 }
		, started: { type: Date, default: Date.now }
		, ended: { type: Date, default: Date.now }
	});

	var Professions = new Schema({
		pid: { type: Number, default: -99 }
		, sender: { type: String, default: "Anonymous" }
		, category: { type: String, default: 'general' }
		, desc: { type: String, default: '' }
		, name: { type: String, default: '' }
		, level: { type: Number, default: '' }
		, to_next_level: { type: Number, default: 100 }
		, started: { type: Date, default: Date.now }
		, ended: { type: Date, default: Date.now }
	});

	var ProfessionAchievements = new Schema({
		achieved: { type: Date, default: Date.now }
		, profession: { type: String, default: '' }
		, desc: { type: String, default: '' }
		, title: { type: String, default: '' }
		, subtitle: { type: String, default: '' }
		, points: { type: Number, default: '' }
	});

	var Skills = new Schema({
		pid: { type: Number, default: -99 }
		, sender: { type: String, default: "Anonymous" }
		, category: { type: String, default: 'general' }
		, desc: { type: String, default: '' }
		, name: { type: String, default: '' }
		, level: { type: Number, default: '' }
		, to_next_level: { type: Number, default: 100 }
		, started: { type: Date, default: Date.now }
		, ended: { type: Date, default: Date.now }
	});
};