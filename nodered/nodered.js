/*
mt-mods node-RED config
*/

module.exports = {
	uiPort: process.env.PORT || 1880,

	mqttReconnectTime: 15000,
	serialReconnectTime: 15000,

	adminAuth: require('node-red-auth-github')({
		clientID: "267a29a842bdcece8d64",
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		baseURL: "https://mt-mods.minetest.land/nodered/",
		default: {
			permissions: "read"
		},
		users: [{
			username: "BuckarooBanzay",
			permissions: ["*"]
		},{
			username: "OgelGames",
			permissions: ["*"]
		},{
			username: "S-S-X",
			permissions: ["*"]
		},{
			username: "wsor4035",
			permissions: ["*"]
		}]
	}),

	debugMaxLength: 1000,
	httpAdminRoot: '/nodered',
	httpNodeRoot: '/nodered',

	functionGlobalContext: {
		discord_forums_url: process.env.DISCORD_FORUMS_WEBHOOK_URL
	},

	exportGlobalContextKeys: false,

	contextStorage: {
		default: {
			module:"localfilesystem"
		},
	},

	logging: {
		console: {
			level: "info",
			metrics: false,
			audit: false
		}
	},

	editorTheme: {
		projects: {
			enabled: true
		}
	}
};
