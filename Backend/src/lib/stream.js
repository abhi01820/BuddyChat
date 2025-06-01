import { StreamChat} from "stream-chat";
import "dotenv/config";

const apikey=process.env.STREAM_API_KEY;
const apiSecret=process.env.STREAM_API_SECRET;

if (!apikey || !apiSecret){
  console.error("Stream API key or Secret is Missing ");
}


const streamClient=StreamChat.getInstance(apikey,apiSecret);

export const upsertStreamUser=async(userData)=>{
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error Upserting Stream User : ",error);
  }
};


export const generateStreamToken=(userId)=>{
  try {
    const userIdStr=userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.log("Error generating Stream token : ",error);
  }
};