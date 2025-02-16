// Switch to the database (it will create the DB if it doesn't exist)
db = db.getSiblingDB("crud-app");

// Create collections if they don’t exist
db.createCollection("users");
db.createCollection("tasks");

// Insert sample data into users collection
db.users.insertMany([
  { name: "Admin", email: "admin@example.com" },
  { name: "Houssam", email: "houssam@example.com" }
]);

// Optionally insert sample data into tasks collection
db.tasks.insertMany([
  { title: "Task 1", description: "Sample task 1", completed: false },
  { title: "Task 2", description: "Sample task 2", completed: true }
]);

// Output a success message
print("✅ Database initialized successfully!");
