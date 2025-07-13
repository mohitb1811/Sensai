// test-db.js
import { db } from "./lib/prisma.js"; // make sure this path is correct

async function test() {
  try {
    const users = await db.user.findMany(); // or another simple query
    console.log("Users:", users);
  } catch (e) {
    console.error("DB error:", e);
  } finally {
    await db.$disconnect(); // cleanly close Prisma connection
  }
}

test();
