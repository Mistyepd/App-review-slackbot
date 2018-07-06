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
		appId:'com.clubsnz.clublocator2',
		appName: 'Clubs NZ',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'1351104504',
		appName: 'Clubs NZ',
		store: 'app-store',
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
	},
	{
		appId:'com.posbosshq.regular',
		appName: 'Regulr',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'govt.nz.mfat.UNHandbook',
		appName: 'UN Handbook',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'nz.co.countdown.android.pickup',
		appName: 'Countdown Pick up',
		store: 'google-play',
		regions: ['en']
	},
	{
		appId:'1278164689',
		appName: 'Countdown Pick up',
		store: 'app-store',
		regions: ['nz']
	},
	{
		appId:'700586133',
		appName: 'UN Handbook',
		store: 'app-store',
		regions: ['nz']
	}
]

for (var i = 0; i < apps.length; i++) {
	var app = apps[i]
	for (region of app.regions) {
		reviews.start({
			slackHook: process.env.SLACK_HOOK_URL,
			appId: app.appId,
			debug: process.env.USE_DEBUG == 'true',
			interval: 300,
			appName: app.appName,
			store: app.store,
			region: region
		})
	}
}
