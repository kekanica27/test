import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.xpath('/html/body/app-root/app-jobs/h1')).getText() as Promise<string>;
  }

  getTitleTextJob(): Promise<string> {
    return element(by.xpath('/html/body/app-root/app-job/h1')).getText() as Promise<string>;
  }

  getJobLocation(): Promise<string> {
    return element(by.xpath('/html/body/app-root/app-job/p')).getText() as Promise<string>;
  }

  getText(nameClass: string): Promise<string>{
      return element(by.className(nameClass)).getText() as Promise<string>;
  }

  getTableTitle(i: number): Promise<string>{
    return element(by.xpath('/html/body/app-root/app-jobs/ul/li['+i+']/a/span[1]')).getText() as Promise<string>;
  }

  getTableLocation(i: number): Promise<string>{
    return element(by.xpath('/html/body/app-root/app-jobs/ul/li['+i+']/a/span[2]')).getText() as Promise<string>;
  }

  getTableDate(i: number): Promise<string>{
    return element(by.xpath('/html/body/app-root/app-jobs/ul/li['+i+']/a/span[3]')).getText() as Promise<string>;
  }

  clickOnTableLine(i: number) {
    return element(by.xpath('/html/body/app-root/app-jobs/ul/li['+i+']/a/span')).click();
  }

  clickOnTabletitle(name: string) {
    return element(by.className(name)).click();
  }

  getDetailedroleDescription(): Promise<string>{
    return element(by.xpath('/html/body/app-root/app-job/ul[1]')).getText() as Promise<string>;
  }

  getDesiredSkills(): Promise<string>{
    return element(by.xpath('/html/body/app-root/app-job/ul[2]')).getText() as Promise<string>;
  }

  getCareerOpportunity(): Promise<string>{
    return element(by.xpath('/html/body/app-root/app-job/ul[2]')).getText() as Promise<string>;
  }
  

  


}
