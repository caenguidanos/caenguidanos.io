interface PlaywrightStoryContext {
   metadata: {
      title: string;
      tags: string[];
   };
   story: {
      as: "user" | "component";
      want: string;
      for: string;
   };
}

export function createStory(options: PlaywrightStoryContext): string {
   const content = options.metadata.title;
   return content.concat(
      ["sb", ...options.metadata.tags].reduce(
         (accumulator, current) => `${accumulator} @${current}`,
         ""
      )
   );
}
