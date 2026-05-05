import { getDb } from "./api/queries/connection";
import { services, diagnosticTests } from "./db/schema";

async function main() {
  const db = getDb();
  const svcCount = (await db.select().from(services)).length;
  const diagCount = (await db.select().from(diagnosticTests)).length;
  console.log("Services:", svcCount);
  console.log("Diagnostics:", diagCount);
}

main().catch(console.error);
