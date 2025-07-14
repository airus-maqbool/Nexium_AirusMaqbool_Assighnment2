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
    setSummary("");

    try {
      const response = await fetch('/assighnment-2/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to summarize blog");
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
          Blog Summarizer
        </h1>

        <Card className="p-6 shadow-md border-purple-300">
          <UrlForm onSubmit={handleSubmit} isLoading={loading} />

          {loading && <p className="mt-6 text-center text-purple-600">⏳ Processing...</p>}
          {error && <p className="mt-6 text-center text-red-600 font-medium">{error}</p>}

          {summary && <SummaryCard summary={summary} />}
        </Card>
      </div>
    </div>
  );
}
