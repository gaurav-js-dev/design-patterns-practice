class Developer {
  constructor(name, company) {
    this.developerName = name;
    this.developerCompany = company;
  }

  createHTML() {
    console.log("I create wonderful User Interfaces");
  }

  createDatabaseTable() {
    console.log("I create Normalized Database Tables");
  }

  createCICDPipeline() {
    console.log("I automate deployments.");
  }

  createEndpoints() {
    console.log(" I create Restful APIs");
  }
}

class ReactDeveloper extends Developer {}
class NodeJSDeveloper extends Developer {}

class JenkinsDevOpsEngineer extends Developer {}

const frontEndDeveloper = ({ name, company }) => ({
  createHTML: () => {
    console.log(`${name} from ${company} can create Wonderful User Interfaces`);
  },
});

const backEndDeveloper = ({ name, company }) => ({
  createDatabaseTable: () => {
    console.log(
      `${name} from ${company} can create Normalized Database Tables`
    );
  },
  createEndpoints: () => {
    console.log(`${name} from ${company} can create useful Restful APIs`);
  },
});

const devOpsEngineer = ({ name, company }) => ({
  createCICDPipeline: () => {
    console.log(`${name} from ${company} can automate Deployments`);
  },
});

const fullStackDeveloper = ({ name, company }) => {
  // composition of all FE, BE, DEVOPS
  const developer = { name, company };

  return {
    ...developer,
    ...frontEndDeveloper(developer),
    ...backEndDeveloper(developer),
    ...devOpsEngineer(developer),
  };
};
