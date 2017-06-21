
var Slack = require('slack-node');
const webhookUri = "https://hooks.slack.com/services/hogehogehoge....";

exports.handler = (event, context, callback) => {
    slack = new Slack();
    slack.setWebhook(webhookUri);
    for(var i=0;i<event.Records.length;i++){
        var postmsg = event.Records[i].Sns.Subject;
        console.log(postmsg);
        slack.webhook({
            channel: "#general",
            username: "AWS Lambda",
            text: postmsg
        }, function(err, response) {
            console.log(response);
        });
    }
    console.log('event: ', JSON.stringify(event));
};
