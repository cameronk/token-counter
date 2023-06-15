import Form from "@/app/Form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CountTokensCard() {
  return (
    <Card className={"max-w-[500px] w-full"}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Token Counter</CardTitle>
        <CardDescription>
          Wraps <a href="https://github.com/dqbd/tiktoken" target="_blank" rel="noreferrer" className="text-blue-400">@dqbd/tiktoken</a> to count the number of tokens used by various OpenAI models.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  )
}