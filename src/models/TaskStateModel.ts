import { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCyrcle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};