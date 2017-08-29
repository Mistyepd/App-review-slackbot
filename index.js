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
		appId:'nz.co.paperkite.beervana',
		appName: 'Beervana'
	},
	{
		appId:'1116524739',
		appName: 'BPMe NZ'
	},
	{
		appId:'1231326408',
		appName: 'My Asthma'
	},
	{
		appId:'1132394222',
		appName: 'BPMe AU'
	},
	{
		appId:'564049196',
		appName: 'AMPM ScratchPower'
	},
	{
		appId:'785021889',
		appName: 'Randstad Timesheets '
	},
	{
		appId:'932094923',
		appName: 'NZPA'
	},
	{
		appId:'1265690792',
		appName: 'Beervana'
	},
	{
		appId:'460256659',
		appName: 'Hell'
	},
	{
		appId:'1119044123',
		appName: 'Rydges'
	}
]

for (var i = 0; i < apps.length; i++) {
	var app = apps[i]
	reviews.start({
		slackHook: 'https://hooks.slack.com/services/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',
		appId: app.appId,
		channel: '#app-reviews',
		debug: false,
		interval: 300,
		appName: app.appName
	})
}
