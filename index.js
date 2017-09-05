var reviews = require('reviews-to-slack')
var apps = [
	{
		appId:'com.bp.bpmenz',
		appName: 'BPMe NZ',
		store: 'google-play',
		region: 'en'
	},
	{
		appId:'nz.org.asthmafoundation.asthma',
		appName: 'My Asthma',
		store: 'google-play',
		region: 'en'
	},
	{
		appId:'com.bp.bpmeau',
		appName: 'BPMe AU',
		store: 'google-play',
		region: 'en'
	},
	{
		appId:'com.firststarcommunications.ampmscratchpower.android',
		appName: 'AMPM ScratchPower',
		store: 'google-play',
		region: 'en'
	},
	{
		appId:'com.randstad.timesheets',
		appName: 'Randstad Timesheets',
		store: 'google-play',
		region: 'en'
	},
	{
		appId:'nz.org.policeassn.nzpa',
		appName: 'NZPA',
		store: 'google-play',
		region: 'en'
	},
	{
		appId:'nz.co.paperkite.beervana',
		appName: 'Beervana',
		store: 'google-play',
		region: 'nz'
	},
	{
		appId:'1116524739',
		appName: 'BPMe NZ',
		store: 'app-store',
		region: 'nz'
	},
	{
		appId:'1231326408',
		appName: 'My Asthma',
		store: 'app-store',
		region: 'nz'
	},
	{
		appId:'1132394222',
		appName: 'BPMe AU',
		store: 'app-store',
		region: 'au'
	},
	{
		appId:'564049196',
		appName: 'AMPM ScratchPower',
		store: 'app-store',
		region: 'us'
	},
	{
		appId:'785021889',
		appName: 'Randstad Timesheets',
		store: 'app-store',
		region: 'au'
	},
	{
		appId:'932094923',
		appName: 'NZPA',
		store: 'app-store',
		region: 'nz'
	},
	{
		appId:'1265690792',
		appName: 'Beervana',
		store: 'app-store',
		region: 'nz'
	},
	{
		appId:'460256659',
		appName: 'Hell',
		store: 'app-store',
		region: 'nz'
	},
	{
		appId:'1119044123',
		appName: 'Rydges',
		store: 'app-store',
		region: 'nz'
	}
]

for (var i = 0; i < apps.length; i++) {
	var app = apps[i]
	reviews.start({
		slackHook: 'https://hooks.slack.com/services/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',
		appId: app.appId,
		channel: '#testing-ground',
		debug: true,
		interval: 60,
		appName: app.appName,
		store: app.store,
		region: app.region
	})
}
