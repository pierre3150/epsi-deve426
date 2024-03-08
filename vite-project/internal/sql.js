export function sql(strings, ...args) {
  getDbConnection();
  const userId = args[0];
  return { Id: userId, UserName: "JohnDoe", Age: 25 };
}

function getDbConnection() {
  // For the purpose of this exercice we don't have any database
  throw new Error("Database is not configured");
}
