var reviews = require('reviews-to-slack')
var apps = [
{
	appId:'com.bp.bpmenz'
},
{
	appId:'nz.org.asthmafoundation.asthma'
},
{
	appId:'nz.co.cca.vendswift'
},
{
	appId:'com.bp.bpmeau'
},
{
	appId:'com.firststarcommunications.ampmscratchpower.android'
},
{
	appId:'com.randstad.timesheets'
},
{
	appId:'nz.org.policeassn.nzpa'
},
{
	appId:'com.facebook.katana'
}
]

for (var i = 0; i < apps.length; i++) {
  var app = apps[i]
  reviews.start({
    slackHook: 'https://hooks.slack.com/services/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',
    appId: app.appId,
    channel: '@kate',
    debug: false,
    interval: 60
  })
}