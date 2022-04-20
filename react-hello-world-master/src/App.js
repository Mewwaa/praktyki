const express = require('express');
const app = express();
const port = 3000;

// Display the Sign in with Slack button

app.get('/sign-in', async (_, res) => {
  // TODO: adding one-time state parameter as well
  const scopes = "identity.basic,identity.email"; // don't mix other non-`identity.` scopes here
  // if you already have another Redirect URL for "Add to Slack", you may need to pass redirect_uri as well
  const clientId = '3372401797858.3408464854688'
  const url = `https://slack.com/oauth/v2/authorize?user_scope=${scopes}&client_id=${clientId}`;

  res.status(200)
    .header('Content-Type', 'text/html; charset=utf-8')
    // https://api.slack.com/docs/sign-in-with-slack#generator
    .send(`<html>
  <body>
  <a href="${url}"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack@2x.png"/></a>
  </body>
  </html>
  `);
});


// Verify the installation
const { WebClient } = require('@slack/web-api');
const client = new WebClient();

app.get('/sign-in-callback', async (req, res) => {
  // TODO: verify state parameter
  try {
    const response = await client.oauth.v2.access({
      client_id: process.env.SLACK_CLIENT_ID,
      client_secret: process.env.SLACK_CLIENT_SECRET,
      code: req.query.code,
    });
    console.log(response);

    const identity = await client.users.identity({
      token: response.authed_user.access_token
    });
    console.log(identity);
    // Now you can assume this user logged in with his/her Slack account
    // TODO: set-cookie etc
    res.status(200).send("You've logged in with your Slack account!");
  } catch (e) {
    console.log(e);
    res.status(500).send("Something wrong!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/sign-in`)
});