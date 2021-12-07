function topologicalSort(jobs, deps) {
  let dependsOn = {};
  let dependencyFor = {};
  let executedJobs = [];
  deps.forEach(([job, dependentJob]) => {
    if(!dependsOn[job]) {
      dependsOn[job] = new Set()
    }
    if(!dependsOn[dependentJob]) {
      dependsOn[dependentJob] = new Set();
    }

    if(!dependencyFor[job]) {
      dependencyFor[job] = new Set()
    }
    if(!dependencyFor[dependentJob]) {
      dependencyFor[dependentJob] = new Set();
    }
    dependsOn[dependentJob].add(job);
    dependencyFor[job].add(dependentJob);

  })
  console.log( dependsOn, dependencyFor);
debugger;
  while(executedJobs.length < jobs.length) {
    let executed = false;
    for(let i = 0; i < jobs.length; i++) {
      if(dependsOn[jobs[i]] && !dependsOn[jobs[i]].size) {
        resolveDependency(dependencyFor, dependsOn, jobs[i]);
        executedJobs.push(jobs[i]);
        executed = true;
      }
    }
    if(!executed) break;
  }

  return executedJobs;
}

function resolveDependency(dependencyFor, dependsOn, completedJob) {
  let dependentJobs = dependencyFor[completedJob];
  for(let dependentJob of Array.from(dependentJobs)) {
    dependsOn[dependentJob].delete(completedJob);
  }
  delete dependencyFor[completedJob];
}

topologicalSort([1, 2, 3, 4, 5, 6, 7, 8], [
  [3, 1],
  [8, 1],
  [8, 7],
  [5, 7],
  [5, 2],
  [1, 4],
  [1, 6],
  [1, 2],
  [7, 6]
]);

// Do not edit the line below.
exports.topologicalSort = topologicalSort;
