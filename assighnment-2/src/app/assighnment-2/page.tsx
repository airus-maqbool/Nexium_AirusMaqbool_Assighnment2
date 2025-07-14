"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { UrlForm } from '@/components/ui/UrlForm';
import { SummaryCard } from '@/components/ui/SummaryCard';

export default function Assignment2Page() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (url: string) => {
    setLoading(true);
    setError("");
    setSummary(""); // Clear previous summary

    try {
      const response = await fetch('/assighnment-2/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      
      if (!response.ok) {
        // Try to get the error message from the response
        const errorText = await response.text();
        throw new Error(errorText || "Failed to summarize blog");
      }
      
      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      // Handle the error which is of type unknown
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Blog Summarizer</h1>
      
      <Card className="p-6">
        <UrlForm onSubmit={handleSubmit} isLoading={loading} />
        
        {loading && <p className="mt-4 text-center">Processing...</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        
        {summary && <SummaryCard summary={summary} />}
      </Card>
    </div>
  );
}