// Mock Database: A collection of diverse system assets
// Use Postman to GET these or POST new ones to the array
let items = [
  {
    id: 1,
    name: "Main Server",
    category: "Infrastructure",
    status: "Online",
    priority: "High",
  },
  {
    id: 2,
    name: "Backup Drive",
    category: "Storage",
    status: "Offline",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Network Switch",
    category: "Hardware",
    status: "Online",
    priority: "Low",
  },
  {
    id: 4,
    name: "Security Gateway",
    category: "Security",
    status: "Maintenance",
    priority: "Critical",
  },
];

// Exporting the array so it can be managed by your routes
module.exports = { items };
