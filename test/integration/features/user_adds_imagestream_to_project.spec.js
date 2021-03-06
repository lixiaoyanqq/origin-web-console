'use strict';

const h = require('../helpers');
const projectHelpers = require('../helpers/project');
const OverviewPage = require('../page-objects/overview').OverviewPage;
const CreateProjectPage = require('../page-objects/createProject').CreateProjectPage;
const ImageStreamsPage = require('../page-objects/imageStreams').ImageStreamsPage;
const centosImageStream = require('../fixtures/image-streams-centos7.json');

describe('User adds an image stream to a project', () => {

  beforeEach(() => {
    h.commonSetup();
    h.login();
    projectHelpers.deleteAllProjects();
  });

  afterEach(() => {
    h.commonTeardown();
  });

  describe('after creating a new project', () => {
    describe('using the Import YAML tab', () => {
      it('should process and create the images in the image stream', () => {
        let project = projectHelpers.projectDetails();
        let createProjectPage = new CreateProjectPage(project);
        createProjectPage.visit();
        createProjectPage.createProject();
        let overviewPage = new OverviewPage(project);
        overviewPage.visit();
        let catalogPage = overviewPage.clickAddToProject();   // implicit redirect to catalog page
        catalogPage
          .processImageStream(JSON.stringify(centosImageStream))
          .then(() => {
            // verify we have the nodejs image stream loaded
            let imageStreamsPage = new ImageStreamsPage(project);
            imageStreamsPage.visit();
            expect(element(by.cssContainingText('td', 'nodejs')).isPresent()).toBe(true); // TODO: use fixture
          });
      });
    });
  });
});
