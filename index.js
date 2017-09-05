var reviews = require('reviews-to-slack')
var apps = [
	{
		appId:'com.bp.bpmenz',
		appName: 'BPMe NZ',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'nz.org.asthmafoundation.asthma',
		appName: 'My Asthma',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'com.bp.bpmeau',
		appName: 'BPMe AU',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'com.firststarcommunications.ampmscratchpower.android',
		appName: 'AMPM ScratchPower',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'com.randstad.timesheets',
		appName: 'Randstad Timesheets',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'nz.org.policeassn.nzpa',
		appName: 'NZPA',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'nz.co.paperkite.beervana',
		appName: 'Beervana',
		store: 'google-play',
		regions: ['nz']
	},
	{
		appId:'1116524739',
		appName: 'BPMe NZ',
		store: 'app-store',
		regions: ['nz']
	},
	{
		appId:'1231326408',
		appName: 'My Asthma',
		store: 'app-store',
		regions: ['nz']
	},
	{
		appId:'1132394222',
		appName: 'BPMe AU',
		store: 'app-store',
		regions: ['au']
	},
	{
		appId:'564049196',
		appName: 'AMPM ScratchPower',
		store: 'app-store',
		regions: ['us']
	},
	{
		appId:'785021889',
		appName: 'Randstad Timesheets',
		store: 'app-store',
		regions: ['au', 'nz']
	},
	{
		appId:'932094923',
		appName: 'NZPA',
		store: 'app-store',
		regions: ['nz']
	},
	{
		appId:'1265690792',
		appName: 'Beervana',
		store: 'app-store',
		regions: ['nz']
	},
	{
		appId:'460256659',
		appName: 'Hell',
		store: 'app-store',
		regions: ['nz']
	},
	{
		appId:'1119044123',
		appName: 'Rydges',
		store: 'app-store',
		regions: ['nz']
	}
]

for (var i = 0; i < apps.length; i++) {
	var app = apps[i]
	for (region of app.regions) {
		reviews.start({
			slackHook: 'https://hooks.slack.com/services/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',
			appId: app.appId,
			channel: '#app-reviews',
			debug: false,
			interval: 300,
			appName: app.appName,
			store: app.store,
			region: region
		})
	}
}
