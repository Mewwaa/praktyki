import { MailSlurp } from "mailslurp-client";
import { parse } from 'node-html-parser';
import { handleClickChannel } from './dashboard.js'
const myDashboard = require('./dashboard.js');



const eMailTemplate = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" type="text/css"href="styles2.css"> <title>Message</title></head><body> <div id="glowny"> <div id="gora"> <h1>Slack channel name</h1> <ol class="channel" id="channel"> <li>General</li><li>Random</li></ol> </div><div id="srodek"> <h1>Message</h1> <ol class="message"> <li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li></ol> </div><div id="dol"> <h1>Conversation</h1> <ol class="conversation"> <li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li><li>Random</li><li>General</li><li>General</li><li>Random</li></ol> </div></div></body></html>'


// when Damian finish his job it can be integrate with his html
export async function send_mail(recipient, sub, htmlbody = '<ul id="list"><li>Hello World</li></ul>') {
  // const html = fs.readFile(__dirname + "/email_template.html", "utf8");
  // console.log(html)

  const mailslurp = new MailSlurp({ apiKey: "51c7aea1aa0037de013b6d67081099f45edd4ce2e493169ed924cc009343e666" });
  const htmlbodyParsed = parse(eMailTemplate);
  let channels = htmlbodyParsed.querySelector('#channel')
  let channelsRendered = ''
  for (let i=0; i<5; i++) {
      channelsRendered += `<li>Hello World ${i}</li>`
  }
  channels.set_content(channelsRendered);
  //TODO - edit passed html to contain all necessary information
  const sentEmail = await mailslurp.inboxController.sendEmailAndConfirm(
    {
      inboxId: "7df0fa27-b699-41a0-b211-5ab470003b1c",
      sendEmailOptions: {
        to: recipient,
        subject: sub,
        body: htmlbodyParsed.toString(),
        html: true
      }
    }
  );
  return sentEmail
}
