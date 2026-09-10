import { PersonalDetail } from "./PersonalDetail";

export function About() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="panel">
        <div className="panel-title">
          <span className="size-2 rounded-full bg-error/80" />
          <span className="size-2 rounded-full bg-warning/80" />
          <span className="size-2 rounded-full bg-primary/80" />
          <span className="ml-2">about.md</span>
        </div>
        <div className="space-y-4 p-5">
          <p className="text-text-primary">
            I&apos;m <span className="text-primary">Caden Luksic</span>, I'm Majoring in Computer Science, I also work part-time as an undergrad at the University of South Carolina.
          </p>
          <p className="text-text-secondary">I am currently an undergrad TA for Java 145 the intro programming class we have at UofSC. I have a slight focus on going into project managment.</p>
        </div>
      </article>
      <article className="panel">
        <div className="panel-title">
          <span className="text-primary">▸</span>
          Profile
        </div>
        <div className="flex flex-col gap-1 p-2 sm:p-3">
          <PersonalDetail
            label={"UNIVERSITY"}
            detail={"University of South Carolina"}
          />
          <PersonalDetail label={"MAJOR"} detail={"Computer Science"} />
          <PersonalDetail label={"GRADUATION"} detail={"Class of 2028"} />
          <PersonalDetail
            label={"STATUS"}
            detail={"Working at USC, open to internships."}
          />
        </div>
      </article>
    </div>
  );
}
