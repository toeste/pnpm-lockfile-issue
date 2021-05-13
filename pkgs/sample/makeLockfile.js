var makeDedicatedLockfile = require('@pnpm/make-dedicated-lockfile').default;
var findWorkspaceDir = require('@pnpm/find-workspace-dir').default;

console.log('making lockfile...');

findWorkspaceDir(process.cwd()).then((workspaceDir) => {
  makeDedicatedLockfile(workspaceDir, process.cwd()).then(() => {
    console.log('lockfile complete!');
  });
});
