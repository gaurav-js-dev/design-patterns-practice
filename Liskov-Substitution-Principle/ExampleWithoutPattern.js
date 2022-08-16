class FrontEndDeveloper {
  constructor(name, company) {
    this.developerName = name;
    this.developerCompany = company;
  }

  createHTML() {
    console.log("I create wonderful User Interfaces");
  }
}

class BackEndDeveloper {
  constructor(name, company) {
    this.developerName = name;
    this.developerCompany = company;
  }

  createDatabaseTable() {
    console.log("I create Normalized Database Tables");
  }

  createEndpoints() {
    console.log("I create Restful API");
  }
}

class DevOpsEngineer {
  constructor(name, company) {
    this.developerName = name;
    this.developerCompany = company;
  }

  createCICDPipeline() {
    console.log("I automate deployments.");
  }
}

class FullStackDeveloper {
  //PROBLEM: There's a whole lot of duplicate functions/codes because we're unable to extend multiple classes at a time
  constructor(name, company) {
    this.developerName = name;
    this.developerCompany = company;
  }

  createHTML() {
    console.log("I create wonderful User Interfaces");
  }
  createCICDPipeline() {
    console.log("I automate deployments.");
  }

  createDatabaseTable() {
    console.log("I create Normalized Database Tables");
  }

  createEndpoints() {
    console.log("I create Restful API");
  }
}

class ReactDevelopmentEngineer extends FrontEndDeveloper {}

class NodeJSDevelopmentEngineer extends BackEndDevelopr {}

class JenkinsEngineer extends DevOpsEngineer {}

class SoftwareEngineer extends FullStackDeveloper {}

const johnTheReactDeveloper = new ReactDevelopmentEngineer(
  "John",
  "ABC Company"
);
johnTheReactDeveloper.createHTML();

const kenTheNodeJSDeveloper = new NodeJSDevelopmentEngineer(
  "Ken",
  "ABC Company"
);

kenTheNodeJSDeveloper.createDatabaseTable();
kenTheNodeJSDeveloper.createEndpoints();

const marvinTheJenkinsDeveloper = new JenkinsEngineer("Marvin", "ABC Company");
marvinTheJenkinsDeveloper.createCICDPipeline();
