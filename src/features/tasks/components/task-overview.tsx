import { PencilIcon } from "lucide-react";

import { MemberAvatar } from "@/features/members/components/member-avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { taskEnumToTitle } from "@/features/tasks/utils";
import { DottedSeparator } from "@/components/dotted-separator";

import { TaskDate } from "./task-date";
import { OverviewProperty } from "./overview-property";

import { Task } from "../types";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";

interface TaskOverviewProps {
  task: Task;
};

export const TaskOverview = ({
  task
}: TaskOverviewProps) => {
  const { open } = useEditTaskModal();

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Общие сведения</p>
          <Button onClick={() => open(task.$id)} size="sm" variant="secondary">
            <PencilIcon className="size-4 mr-2" />
            Редактировать
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Ответственный">
            <MemberAvatar
              name={task.assignee.name}
              className="size-6"
            />
            <p className="text-sm font-medium">{task.assignee.name}</p>
          </OverviewProperty>
          <OverviewProperty label="Срок исполнения">
            <TaskDate value={task.dueDate} className="text-sm font-medium" />
          </OverviewProperty>
          <OverviewProperty label="Состояние">
            <Badge variant={task.status}>
              {taskEnumToTitle(task.status)}
            </Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};
