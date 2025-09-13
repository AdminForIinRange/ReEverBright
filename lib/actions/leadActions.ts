// app/actions/leadActions.ts
"use server";

import { revalidatePath } from "next/cache";
import { ID } from "node-appwrite";
import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

export type LeadState = {
  ok: boolean;
  error?: string;
  data?: any;
};

function sanitize(input: unknown) {
  if (typeof input !== "string") return "";
  return input.trim();
}

function isEmail(str: string) {
  // simple validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

export async function submitLeadAction(
  _prevState: LeadState,
  formData: FormData
): Promise<LeadState> {
  try {
    const fullName = sanitize(formData.get("fullName"));
    const phone = sanitize(formData.get("phone"));
    const email = sanitize(formData.get("email"));
    const suburb = sanitize(formData.get("suburb"));
    const helpMessage = sanitize(formData.get("helpMessage"));

    if (!fullName) return { ok: false, error: "Name is required" };
    if (!email || !isEmail(email)) return { ok: false, error: "Valid email is required" };
    if (!phone) return { ok: false, error: "Phone is required" };
    if (!suburb) return { ok: false, error: "Suburb is required" };

    const { databases } = await createAdminClient();

    const doc = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.leadsCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        phone,
        suburb,
        helpMessage,
      }
    );

    // so the page shows the latest confirmation if you re-render
    revalidatePath("/free-quote");

    return { ok: true, data: doc };
  } catch (err: any) {
    console.error("submitLeadAction error:", err);
    return { ok: false, error: err?.message ?? "Failed to submit quote request" };
  }
}
