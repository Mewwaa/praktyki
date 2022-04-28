const { WebClient }  = require('@slack/web-api');
const token = 'xoxb-3372401797858-3387082004324-bihHZG2JkMDs9f6HUQjPuzy7'
const web = new WebClient(token);

// (async () => {

//   // Post a message to the channel, and await the result.
//   // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
//   const result = await web.chat.postMessage({
//     text: 'Hello world!',
//     channel: conversationId,
//   });

//   // The result contains an identifier for the message, `ts`.
//   console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
// })();

async function getAllChannels(options) {
  async function pageLoaded(accumulatedChannels, res) {
    // Merge the previous result with the results in the current page
    const mergedChannels = accumulatedChannels.concat(res.channels);

    // When a `next_cursor` exists, recursively call this function to get the next page.
    if (res.response_metadata && res.response_metadata.next_cursor && res.response_metadata.next_cursor !== '') {
      // Make a copy of options
      const pageOptions = { ...options };
      // Add the `cursor` argument
      pageOptions.cursor = res.response_metadata.next_cursor;

      return pageLoaded(mergedChannels, await web.conversations.list(pageOptions));
    }

    // Otherwise, we're done and can return the result
    return mergedChannels;
  }
  return pageLoaded([], await web.conversations.list(options));
}

(async () => {
  const allChannels = await getAllChannels({ exclude_archived: true, types: 'public_channel' });
  console.log(allChannels);
})();