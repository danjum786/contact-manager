import { Contact } from "@/types";

const API_URL = "http://localhost:4000/contacts";

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  const data: Contact[] = await res.json();
  return data;
}