'use client';

import { CountTokensResponse, countTokens } from "@/app/count-tokens";
import { OTHER_MODELS, POPULAR_MODELS } from "@/app/models";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";

const renderModel = (model: string) => (
  <SelectItem key={model} value={model}>
    {model}
  </SelectItem>
);

export default function Form() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<null | CountTokensResponse>(null)

  return (
    <form action={(formData) => startTransition(() => countTokens(formData).then((r) => setResult(r)))} className="space-y-4">
      <Select name="model">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent className="max-h-48">
          <SelectGroup>
            <SelectLabel>Popular</SelectLabel>
            {POPULAR_MODELS.map(renderModel)}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Other</SelectLabel>
            {OTHER_MODELS.map(renderModel)}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea name="text" className="text-gray-800 h-48" placeholder="Type text here..." />
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        Submit
      </Button>
      {result ? (
        result.error ? (
          <p className="text-red-500">{result.error.message}</p>
        ) : (
          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <p>Characters</p>
              <p className="text-xl">{result.characters}</p>
            </div>
            <div className="flex justify-between">
              <p>Words</p>
              <p className="text-xl">{result.words}</p>
            </div>
            <div className="flex justify-between">
              <p>Tokens</p>
              <p className="text-xl font-bold">{result.tokens_count}</p>
            </div>
          </div>
        )
      ) : null}
    </form>
  )
}