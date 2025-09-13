// app/actions/getRecentLeads.ts
"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

export type LeadsResult = {
  ok: boolean;
  error?: string;
  data?: any[];
};

export async function getRecentLeadsAction(
  _prev: LeadsResult,
  formData: FormData
): Promise<LeadsResult> {
  const pin = String(formData.get("pin") || "").trim();

  // Simple PIN check
  if (pin !== "12345") {
    return { ok: false, error: "Invalid PIN." };
  }

  try {
    const { databases } = await createAdminClient();

    // Pull latest 50 by creation time (newest first)
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.leadsCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(50)]
    );

    return { ok: true, data: res.documents as any[] };
  } catch (err: any) {
    console.error("getRecentLeadsAction error:", err);
    return { ok: false, error: err?.message ?? "Failed to load leads" };
  }
}
