export class Commit {
  author: Author;
  date: Date;
  message: string;
  modifications: Array<Modification>;
}

export class Author {
  name: string;
  email: string;
  modifications: Array<Commit>;
}

export class Modification {
  type: string;
  path: string;
}

export function getCommits(commitJson) {
  let commitData: Array<Commit> = [];

  for (let commit of commitJson) {
    let commitObject: Commit = convertToCommitObject(commit);
    commitData.push(commitObject);
  }

  return commitData;
}

export function convertToCommitObject(commitJson) {
  let commit: Commit = new Commit();
  commit.date = commitJson.date;
  commit.message = commitJson.message;
  commit.author = commitJson.author as Author;
  let modifications: Array<Modification> = [];

  for (let modificationJson of commitJson.modifications) {
    let modificationObject: Modification = modificationJson as Modification;
    modifications.push(modificationObject);
  }

  commit.modifications = modifications;

  return commit;
}
