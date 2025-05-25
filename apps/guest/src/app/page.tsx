import { Button } from "@repo/ui";
export default function Guest() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button appName="guest" className="bg-red-500">
        Guest
      </Button>
    </div>
  );
}
