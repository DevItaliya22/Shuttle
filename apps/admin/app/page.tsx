import { Button } from "@repo/ui"
export default function Admin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button appName="admin" className="bg-red-500">
        Admin
      </Button>
    </div>
  )
}
