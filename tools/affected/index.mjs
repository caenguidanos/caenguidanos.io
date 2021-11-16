import chalk from "chalk";
import child_process from "child_process";

main();

async function main() {
   const target = process.argv[2];

   const affected = await subprocessFiles();

   if (affected.length) {
      if (target === "--test") {
         await subprocessTest(affected);
      }

      if (target === "--e2e") {
         const prepareDataE2E = affected.filter((k) => !!k.match(".e2e."));

         if (prepareDataE2E.length) {
            await subprocessE2E(prepareDataE2E);
         } else {
            console.log(`\t${chalk.bgYellowBright(` ${chalk.black("Not found affected e2e")} `)}\n`);
         }
      }
   }
}

function subprocessTest(files) {
   console.log(`\n\t${chalk.bgGreenBright(` ${chalk.black("Runnnig affected tests")} `)}\n`);

   return new Promise((resolve, reject) => {
      const jest = child_process.spawn(
         "pnpm",
         ["test", "--", "--findRelatedTests", "--passWithNoTests", ...files],
         {
            stdio: "inherit"
         }
      );

      jest.on("close", () => {
         resolve();
      });

      jest.on("error", (err) => {
         reject(err);
      });
   });
}

function subprocessE2E(files) {
   console.log(`\n\t${chalk.bgGreenBright(` ${chalk.black("Runnnig affected e2e")} `)}\n`);

   return new Promise((resolve, reject) => {
      const jest = child_process.spawn("pnpm", ["e2e:dev", "--", ...files], {
         stdio: "inherit",
         cwd: process.cwd()
      });

      jest.on("close", () => {
         resolve();
      });

      jest.on("error", (err) => {
         reject(err);
      });
   });
}

function subprocessFiles() {
   return new Promise((resolve) => {
      let counter = 0;

      const source = new Set();

      function exitWithData() {
         counter++;

         if (counter === 3) {
            resolve([...source]);
         } else {
            return;
         }
      }

      function parseData(chunk) {
         return chunk
            .toString()
            .split(/\n/)
            .filter((k) => !!k);
      }

      const modified = child_process.spawn("git", "diff --name-only".split(" "));
      const staged = child_process.spawn("git", "diff --name-only --staged".split(" "));
      const newfiles = child_process.spawn(
         "git",
         "ls-files --other --modified --exclude-standard".split(" ")
      );

      modified.stdout.on("data", (chunk) => {
         const parsed = parseData(chunk);

         if (Array.isArray(parsed)) {
            for (const file of parsed) {
               source.add(file);
            }
         }
      });

      staged.stdout.on("data", (chunk) => {
         const parsed = parseData(chunk);

         if (Array.isArray(parsed)) {
            for (const file of parsed) {
               source.add(file);
            }
         }
      });

      newfiles.stdout.on("data", (chunk) => {
         const parsed = parseData(chunk);

         if (Array.isArray(parsed)) {
            for (const file of parsed) {
               source.add(file);
            }
         }
      });

      modified.on("close", exitWithData);
      staged.on("close", exitWithData);
      newfiles.on("close", exitWithData);
   });
}
