import ClientComponentCallingServerComponentAsAction from "./client-component-calling-server-component-as-action"

export default async function Experiment() {
  async function ServerComponentThatYouCanPassClientStateTo(state: number) {
    "use server"

    return (
      <div className="space-y-2">
        <div>
          {`"This component is rendered on the server.
            By the way, I incremented your state"`}
        </div>
        <div>Your new state: </div>
        <div>{state + 1}</div>
      </div>
    )
  }

  return (
    <div>
      <ClientComponentCallingServerComponentAsAction
        serverComponentAsAnAction={ServerComponentThatYouCanPassClientStateTo}
      />
    </div>
  )
}
