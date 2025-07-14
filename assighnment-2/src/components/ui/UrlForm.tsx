"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function UrlForm({ onSubmit, isLoading }: { 
  onSubmit: (url: string) => void;
  isLoading?: boolean;
}) {
  const [url, setUrl] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="blog-url">Blog URL</Label>
        <Input
          id="blog-url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://marloesdevries.com/en/blog/jealousy-lessons/"
          disabled={isLoading}
        />
      </div>
      <Button 
        onClick={() => onSubmit(url)}
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Summarize Blog"}
      </Button>
    </div>
  );
}