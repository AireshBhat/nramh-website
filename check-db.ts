import { getDb } from "./api/queries/connection";
import { departments, doctors, services, diagnosticTests } from "./db/schema";

async function main() {
  const db = getDb();
  const depts = await db.select().from(departments);
  const docs = await db.select().from(doctors);
  const svcs = await db.select().from(services).limit(5);
  const diags = await db.select().from(diagnosticTests).limit(5);
  console.log("Departments:", depts.length);
  console.log("Doctors:", docs.length);
  console.log("Services sample:", svcs.length);
  console.log("Diagnostics sample:", diags.length);
}

main().catch(console.error);
