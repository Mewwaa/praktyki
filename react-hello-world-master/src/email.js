import { MailSlurp } from "mailslurp-client";
import { parse } from 'node-html-parser';


// when Damian finish his job it can be integrate with his html
export async function send_mail(recipient, sub, htmlbody) {
  const mailslurp = new MailSlurp({ apiKey: "51c7aea1aa0037de013b6d67081099f45edd4ce2e493169ed924cc009343e666" });
  const htmlbodyParsed = parse(htmlbody);
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
