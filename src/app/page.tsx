import { getContacts } from "@/lib/api/contacts";

export default async function HomePage() {
  const contacts = await getContacts();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Contacts</h1>

      <ul className="space-y-3">
        {contacts.map((contact) => (
          <li key={contact.id} className="border rounded-lg p-4 shadow-sm">
            <p className="font-semibold">
              {contact.firstName} {contact.lastName}
            </p>
            <p className="text-sm text-gray-600">{contact.email}</p>
            <p className="text-sm text-gray-600">{contact.phone}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
