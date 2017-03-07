import { DockerNg2DashboardPage } from './app.po';

describe('docker-ng2-dashboard App', () => {
  let page: DockerNg2DashboardPage;

  beforeEach(() => {
    page = new DockerNg2DashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
