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

class ReactDeveloper extends Developer {
  createCICDPipeline() {
    throw Error("It's not my responsibility");
  }
  createDatabaseTable() {
    throw Error("I am not a Back-end Developer");
  }

  createEndpoints() {
    throw Error("That's for the Back-end");
  }
}

class NodeJSDeveloper extends Developer {
  createHTML() {
    throw Error("I ain't a Front-end Developer");
  }

  createCICDPipeline() {
    throw Error("I am not a DevOps Engineer");
  }
}

class JenkinsDevOpsEngineer extends Developer {
  createHTML() {
    throw Error("I don't do that");
  }

  createDatabaseTable() {
    throw Error("I'm not supposed to do that");
  }

  createEndpoints() {
    throw Error("That's not my responsibility");
  }
}

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

new ReactDeveloper("test", "test").createHTML();

const kazuyaTheFullStackDeveloper = fullStackDeveloper({
  name: "Kazuya",
  company: "ABC Company",
});

kazuyaTheFullStackDeveloper.createCICDPipeline();
kazuyaTheFullStackDeveloper.createEndpoints();
kazuyaTheFullStackDeveloper.createHTML();
kazuyaTheFullStackDeveloper.createDatabaseTable();
