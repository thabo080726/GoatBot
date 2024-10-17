module.exports = {  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "AceGun x Samir Œ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["61558534761993"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "I apologize only 🖤 Thabo Siyabonga Dlamini 🖤 can use that command",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `From today you are the administrator of the group!🖤`,
        threadID
      );
    } catch (error) {
      console.error("Master, I'm not one of the admins 👥 to add you there, all my apologies 😭 🛐:", error);
      api.sendMessage(" 🖤😔 Sorry Thabo Siyabonga Dlamini 🖤😔", event.threadID);
    }
  },
};
