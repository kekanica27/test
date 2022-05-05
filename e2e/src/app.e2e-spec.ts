import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('BROWSE JOBS');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('browser jobs page verification', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('check jobs in browse job', () => {
    page.navigateTo();
    
      //TODO For all jobs
      //let location = page.getTableLocation(1).toString()
      let title = page.getTableTitle(1).toString();
      page.clickOnTableLine(1);

      expect(page.getTitleTextJob()).toMatch(title); 
      expect(page.getDetailedroleDescription()).toEqual( 
`Design, development and testing of new features in the applications using C#.
Responsible for regular communication with others involved in the development process.
Implement, test, and bug-fix functionality.
Participate as a team member in our agile development process (team meetings, code reviews.
Provide support to end users.`); 
      expect(page.getDesiredSkills()).toEqual( 
`5+ years of software development experience in C#.
.Net Core 2.2 or higher experience.
Solid knowledge and experience in SQL, EF, ADO.NET, Stored procedures, queryoptimisation.
Good knowledge of NoSQL technology (MongoDB).
WEB API (REST, GraphQL).
BS degree in Computer Science or Engineering.
Experience developing data intense applications and/or ETL processes.
Strong in Object Oriented Programming, Design patterns and SOLID principles.`); 
      expect(page.getCareerOpportunity()).toEqual(
`5+ years of software development experience in C#.
.Net Core 2.2 or higher experience.
Solid knowledge and experience in SQL, EF, ADO.NET, Stored procedures, queryoptimisation.
Good knowledge of NoSQL technology (MongoDB).
WEB API (REST, GraphQL).
BS degree in Computer Science or Engineering.
Experience developing data intense applications and/or ETL processes.
Strong in Object Oriented Programming, Design patterns and SOLID principles.`); 
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
