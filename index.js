var reviews = require('reviews-to-slack')
var apps = [
	{
		appId:'com.bp.bpmenz',
		appName: 'BPMe NZ'
	},
	{
		appId:'nz.org.asthmafoundation.asthma',
		appName: 'My Asthma'
	},
	{
		appId:'nz.co.cca.vendswift',
		appName: 'VendSwift'
	},
	{
		appId:'com.bp.bpmeau',
		appName: 'BPMe AU'
	},
	{
		appId:'com.firststarcommunications.ampmscratchpower.android',
		appName: 'AMPM ScratchPower'
	},
	{
		appId:'com.randstad.timesheets',
		appName: 'Randstad Timesheets '
	},
	{
		appId:'nz.org.policeassn.nzpa',
		appName: 'NZPA'
	},
	{
		appId:'com.app.allblacks2014',
		appName: 'All Blacks'
	}
]

for (var i = 0; i < apps.length; i++) {
	var app = apps[i]
	reviews.start({
		slackHook: 'https://hooks.slack.com/services/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',
		appId: app.appId,
		channel: '#app-reviews',
		debug: false,
		interval: 60,
		appName: app.appName
	})
}
