// lib/appwrite/config.ts
import { getEnvVariable } from "@/lib/getEnvVariable";

export const appwriteConfig = {
  endpointUrl: getEnvVariable("APPWRITE_ENDPOINT"),
  projectId: getEnvVariable("APPWRITE_PROJECT"),
  databaseId: getEnvVariable("APPWRITE_DATABASE"),
  usersCollectionId: getEnvVariable("APPWRITE_USERS_COLLECTION"),
  listingsCollectionId: getEnvVariable("APPWRITE_LISTINGS_COLLECTION"),
  bucketId: getEnvVariable("APPWRITE_BUCKET"),
  secretKey: getEnvVariable("NEXT_APPWRITE_KEY"),
};

