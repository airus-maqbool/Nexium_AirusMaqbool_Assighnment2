"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { translateToUrdu } from "@/lib/translation";

export function SummaryCard({ summary }: { summary: string }) {
  const [isUrdu, setIsUrdu] = useState(false);
  
  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Blog Summary</CardTitle>
          <Button 
            variant="outline"
            onClick={() => setIsUrdu(!isUrdu)}
          >
            {isUrdu ? "Show English" : "Translate to Urdu"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">
          {isUrdu ? translateToUrdu(summary) : summary}
        </p>
      </CardContent>
    </Card>
  );
}