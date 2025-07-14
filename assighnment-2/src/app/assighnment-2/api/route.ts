import { NextResponse } from 'next/server';
import { saveFullContent, saveSummary } from '@/lib/db';
import { isTargetBlog, BLOG_CONTENT, STATIC_SUMMARY } from '@/lib/summarize';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    
    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }
    
    if (!isTargetBlog(url)) {
      return NextResponse.json(
        { error: "Only the specified blog URL is supported" },
        { status: 400 }
      );
    }
    
    // Save to databases
    await saveSummary(url, STATIC_SUMMARY);
    await saveFullContent(url, BLOG_CONTENT);
    
    return NextResponse.json({ summary: STATIC_SUMMARY });
  } catch (error) {
    // Log the error for debugging
    console.error('Error processing blog:', error);
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}