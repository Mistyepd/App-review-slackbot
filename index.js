var reviews = require('reviews-to-slack')
var apps = [
{
	appId:'com.bp.bpmenz',
	channel:'@kate'
},
{
	appId:'nz.org.asthmafoundation.asthma',
	channel:'@kate'
}
]

for (var i = 0; i < apps.length; i++) {
  var app = app[i]
  reviews.start({
    slackHook: 'https://hooks.slack.com/services/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',
    appId: app.appId,
    channel: app.channel,
    debug: true,
    interval:30
  })
}