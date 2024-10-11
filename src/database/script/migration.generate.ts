import { exec } from 'node:child_process';

const command = `node --loader ts-node/esm ./node_modules/.bin/typeorm migration:generate -d ./src/database/services/database.service.ts ./src/database/migrations/${process.argv[2]}`;

(() =>
  exec(command, (error, stdout, stderr) => {
    if (error !== null) {
      console.error(stderr);
    }
    console.log(stdout);
  }))();
