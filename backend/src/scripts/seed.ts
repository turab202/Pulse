import mongoose from "mongoose";
import { User } from "../models/User.js";

const SEED_USERS = [
  // ===== FEMALES (NIQAB AVATARS) =====
  {
    clerkId: "seed_user_1",
    name: "Meysun Mohammed",
    email: "meysun@example.com",
    avatar: "https://i.imgur.com/7k12EPD.png",
  },
  {
    clerkId: "seed_user_4",
    name: "Ametullah Ibrahim",
    email: "ametullah@example.com",
    avatar: "https://i.imgur.com/7D7I6dI.png",
  },
  {
    clerkId: "seed_user_6",
    name: "Ameturahman Nuh",
    email: "nuh@example.com",
    avatar: "https://i.imgur.com/JYzXn9A.png",
  },
  {
    clerkId: "seed_user_9",
    name: "Renda Khelil",
    email: "renda@example.com",
    avatar: "https://i.imgur.com/0FJ7G6L.png",
  },

  // ===== MALES (MUSLIM MALE AVATARS) =====
  {
    clerkId: "seed_user_2",
    name: "Shuayb Abdellah",
    email: "shuayb@example.com",
    avatar: "https://i.imgur.com/8Km9tLL.png",
  },
  {
    clerkId: "seed_user_3",
    name: "Numan Abdurahman",
    email: "numan@example.com",
    avatar: "https://i.imgur.com/QCNbOAo.png",
  },
  {
    clerkId: "seed_user_5",
    name: "Khebab Bilal",
    email: "bilal@example.com",
    avatar: "https://i.imgur.com/JgYD2nQ.png",
  },
  {
    clerkId: "seed_user_7",
    name: "Yusuf Hamza",
    email: "yusuf@example.com",
    avatar: "https://i.imgur.com/3GvwNBf.png",
  },
  {
    clerkId: "seed_user_8",
    name: "Ayub Sultan",
    email: "ayub@example.com",
    avatar: "https://i.imgur.com/0y8Ftya.png",
  },
  {
    clerkId: "seed_user_10",
    name: "Ismail Ibrahim",
    email: "ismail@example.com",
    avatar: "https://i.imgur.com/QCNbOAo.png",
  },
];

async function seed() {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/chat-app";

    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");

    await User.deleteMany(); // optional but recommended
    console.log("🧹 Existing users cleared");

    const users = await User.insertMany(SEED_USERS);
    console.log(`🌱 Seeded ${users.length} users:`);

    users.forEach((user) => {
      console.log(`   - ${user.name} (${user.email})`);
    });

    await mongoose.disconnect();
    console.log("✅ Done!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
}

seed();
