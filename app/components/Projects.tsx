import { Project } from "./Project";

export function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Project
        title={"Software Engineering Class App"}
        description={"My team of 4 developed a Java app similar to LinkedIn x LeetCode"}
        technologies={["Java", "GitHub", "Git", "Maven", "LucidChart"]}
        liveLink={"https://your-project.vercel.app"}
        githubLink={"https://github.com/CadenAL/javadelights-interview-project"}
      />
      <Project
        title={"Python Discord Bot"}
        description={"I made a very crude Python Discord Webhook bot."}
        technologies={["Python", "Discord"]}
        liveLink={"https://your-other-project.vercel.app"}
        githubLink={"https://github.com/CadenAL/discord-bot"}
      />
    </div>
  );
}
