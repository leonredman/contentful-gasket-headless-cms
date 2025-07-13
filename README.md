# ShoDaddy: Headless CMS + Testing Sandbox

This project serves as a full-featured sandbox for experimenting with modern web workflows, including:

- Accepts page as a prop
- Headless CMS (Contentful) + Gasket Framework
- React-based front-end rendering of structured content
- CI/CD pipeline with GitHub Actions
- Automated 1:1 Content Testing Assistant with Cypress (E2E) — _linked tool in separate repo_

## Info / Live Demo

CMS Live Site URL: https://dazzling-kelpie-426d25.netlify.app/

MOps Test Assistant Github link(WIP): https://github.com/leonredman/mops-test-assistant

Github link: https://github.com/leonredman/contentful-gasket-headless-cms

Gasket Docs: https://gasket.dev/#/docs/quick-start?id=start

Contentful CMS login: https://be.contentful.com/login/

Local Proj folder: gasket-contentful-sandbox

## Tech Stack

- **Frontend**: React + Gasket
- **CMS**: Contentful (Delivery API)
- **CI/CD**: GitHub Actions
- **Testing**:
  - Cypress (smoke tests)
  - Jest (planned for unit tests)
- **Hosting**: Netlify

## Setup Instructions

```bash
cd Gasket-Test-App

npm install

npx gasket local

npm install contentful

npm install @contentful/rich-text-react-renderer

Update gasket.config.js

create env file and add space Id and Access key

CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_KEY=your_access_token

Links to Docs:
https://gasket.dev/#/
https://gasket.dev/#/docs/quick-start?id=quick-start
```

## Running Locally

```bash
CMD To Run Gasket: gasket local

App will run at: http://localhost:8080
```

## CI/CD Pipeline (GitHub Actions)

- Branch: staging runs Cypress E2E tests on push

- If tests pass, changes are auto-merged to main

- Deploys via Netlify using main branch

CI/CD is configured to:

```bash
Trigger on any push to the 'staging branch'.

Install dependencies.

Run Cypress end-to-end smoke tests against the local dev server.

If tests pass, auto-merge the changes into main.
```

## Required GitHub Secrets

In GitHub > Repo Settings > Secrets and variables > Actions, make sure the following secrets are set:

```bash
CONTENTFUL_SPACE_ID – your Contentful space ID

CONTENTFUL_ACCESS_KEY – your Contentful delivery API token (not preview)

GH_PAT – GitHub personal access token with repo permissions to allow pushing to main
```

## CI YAML File Location

```bash
.github/workflows/ci.yml
```

## End-to-End Testing with Cypress

```bash
Cypress test file: cypress/e2e/homepage.cy.js

Smoke test verifies:

App loads (cy.url().should("include", "/"))

Key homepage components are rendered using data-cy selectors:

[data-cy="marquee"]

[data-cy="multi-column-section"]

[data-cy="card"]

Screenshot of failure is saved to cypress/screenshots/ if any test fails.
```

## Related Tool: MOps Test Assistant

coming soon
A cypress-based companion tool to parse .docx copydocs to generate dynamic content tests for Contentful driven pages (WIP)
https://github.com/leonredman/mops-test-assistant

## Future Enhancements

- Unit tests with Jest
- Component coverage tracking
- Visual regression test
- Integration with Cypress Test Assistant

## Backlog Tasks

- Create a proper Page component that handles rendering of sections from the page object.

  - Accepts page as a prop

  - Loops through and renders components like Marquee, Multi-Column

  - Adds appropriate data-cy selectors so Cypress tests can target it

  - Will replace the logic currently embedded in index.js

  - Needed to make homepage.cy.js end-to-end tests accurate and reflective of content structure
  - Status: Backlogged – not critical to MVP
