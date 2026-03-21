export interface WorkflowItem {
  number: string;
  title: string;
  description: string;
}

export const workflowItems: WorkflowItem[] = [
  {
    number: "01",
    title: "CONFIGURE HUB",
    description: "SET CONSTRAINTS, TECH STACKS, AND PRIZE CRITERIA IN THE DASHBOARD.",
  },
  {
    number: "02",
    title: "ONBOARD BUILDERS",
    description: "PARTICIPANTS ARE VETTED AND MATCHED INTO HIGH-PERFORMING SQUADS.",
  },
  {
    number: "03",
    title: "EXECUTE & JUDGE",
    description: "PROJECTS ARE BUILT, VERIFIED, AND SCORED IN RECORD TIME WITH PRECISION.",
  },
];
