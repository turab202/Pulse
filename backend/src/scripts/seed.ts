import mongoose from "mongoose";
import { User } from "../models/User";

const SEED_USERS = [
  {
    clerkId: "seed_user_1",
    name: "Meysun Mohammed",
    email: "meysun@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    clerkId: "seed_user_2",
    name: "shuayb Abdellah",
    email: "shuayb@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    clerkId: "seed_user_3",
    name: "Numan Abdurahman",
    email: "numan@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    clerkId: "seed_user_4",
    name: "Ametullah Ibrahim",
    email: "ametullah@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    clerkId: "seed_user_5",
    name: "khebab Bilal",
    email: "bilal@example.com",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    clerkId: "seed_user_6",
    name: "Ameturahman Nuh",
    email: "nuh@example.com",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    clerkId: "seed_user_7",
    name: "Yusuf Hamza",
    email: "yusuf@example.com",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    clerkId: "seed_user_8",
    name: "Ayub Sultan",
    email: "ayub@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    clerkId: "seed_user_9",
    name: "Renda khelil",
    email: "renda@example.com",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    clerkId: "seed_user_10",
    name: "Ismail Ibrahim",
    email: "ismail@example.com",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

async function seed() {
  try {
    const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/chat-app";
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");

    // Insert seed users
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
