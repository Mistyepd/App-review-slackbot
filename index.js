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
}
]

for (var i = 0; i < apps.length; i++) {
  var app = apps[i]
  reviews.start({
    slackHook: 'https://hooks.slack.com/services/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',
    appId: app.appId,
    channel: '#app-reviews',
    debug: false,
    interval: 60
  })
}