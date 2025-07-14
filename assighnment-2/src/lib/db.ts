import { createClient } from '@supabase/supabase-js'
import { MongoClient } from 'mongodb'

// Initialize databases
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const mongoClient = new MongoClient(process.env.MONGODB_URI!);

// Save summary to Supabase
export async function saveSummary(url: string, summary: string) {
  const { error } = await supabase
    .from('summaries')
    .insert([{ url, summary }]);
  
  if (error) console.error("Supabase error:", error);
}

// Save full content to MongoDB
export async function saveFullContent(url: string, content: string) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('nexium-mongo');
    const collection = db.collection('blogs');
    await collection.insertOne({ url, content, created_at: new Date() });
  } finally {
    await mongoClient.close();
  }
}