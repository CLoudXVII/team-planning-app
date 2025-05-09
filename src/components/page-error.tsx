import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Button } from "./ui/button";

interface PageErrorProps {
  message: string;
}

export const PageError = ({
  message = "Что-то пошло не так...",
}: PageErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-2">
      <AlertTriangle className="size-6 text-muted-foreground" />
      <p className="text-sm font-medium text-muted-foreground">
        {message}
      </p>
      <Button variant="secondary" size="sm">
        <Link href="/">
          Вернуться на главную страницу
        </Link>
      </Button>
    </div>
  );
};
