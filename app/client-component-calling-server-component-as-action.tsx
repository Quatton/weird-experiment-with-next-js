"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function ClientComponentCallingServerComponentAsAction({
  serverComponentAsAnAction,
}: {
  serverComponentAsAnAction: (state: number) => Promise<JSX.Element>
}) {
  const [state, setState] = useState(0)
  const [serverComponentAsAState, setServerComponentAsAState] =
    useState<JSX.Element>()

  return (
    <div className="space-y-4 p-8">
      <h2>Can it render?</h2>
      <div className="flex gap-2">
        <Button onClick={() => setState(state + 1)}>+1</Button>
        <Button onClick={() => setState(state - 1)}>-1</Button>
        <Button
          onClick={async () =>
            setServerComponentAsAState(await serverComponentAsAnAction(state))
          }
        >
          Mount
        </Button>
        <Button
          onClick={async () => {
            setState(state + 1)
            setServerComponentAsAState(
              await serverComponentAsAnAction(state + 1)
            )
          }}
        >
          +1 & Mount
        </Button>
      </div>
      <div className="space-y-2">
        <h2>Client State</h2>
        <pre className="min-w-24 bg-muted px-2 text-muted-foreground">
          {state}
        </pre>
      </div>
      <div className="space-y-2">
        <h2>Server Component Called From An Action</h2>
        <div className="min-w-24 break-words bg-muted px-2 font-mono text-muted-foreground">
          {serverComponentAsAState ?? "Not mounted yet"}
        </div>
      </div>
    </div>
  )
}
