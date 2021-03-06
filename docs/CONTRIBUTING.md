# Contributing to HabitTracker

The main purpose of this project is to help project members in their webdev learning. To facilitate that objective, this document serves as a guide for project members to follow for learning the do's and don'ts of contributing to this project (and also other open-source projects?)

## Summary

* [Code of Conduct](#code-of-conduct)
* [Contributing guidelines](#contributing-guidelines)
* [Issues](#Issues)
* [Pull Requests](#pull-requests)
* [Git workflow](#git-workflow)
* [Join the Project](#join-us)

## Code of Conduct

By participating and contributing to this project, you agree to uphold these rules:

- Give credit where credit is due
- Be respectful to all project participants
- Follow the `Code of Conduct` from [contributor-covenant.org](https://www.contributor-covenant.org/version/1/4/code-of-conduct/)

## Contributing guidelines

Contributions are made to this repo via Issues, Pull Requests (PRs), Github Project board tasks, and discord [server](https://discord.gg/E4ADPxFYjg)

### Issues

**Purpose**:

- Tracking project tasks and features
- Documenting critical issues, bugs, and other concerns
- Tracking topics/ questions that need to be researched
- For proposing new features, suggestions, or enhancements
- Tracking work that is not directly part of the project tasks and features


**Guidelines**:

- Narrow down the issue to one change, task, problem or concern (as much as possible)
- Include the requirements or steps that needs to be performed to resolve the issue
- Using labels:
```md
  - `good first issue` - issues appropiate for those new to webdev to solve
  - `critical issue`   - for reporting critical bugs or issues
  - `documentation`    - any material that provides information on project related concerns (ex: UML diagrams, mockups, etc)
  - `enhancements`     - for suggesting new features for the project
  - `project-meta`     - any material that is related to project configuration, operations, and devops
  - `question`         - for any project-related questions that need to researched
  - `frontend`         - used to denote issue is for frontend only
  - `backend`          - used to denote issue is for backend only
```

### Pull Requests (PR)

**Guidelines**
- PRs must be associated with an issue
- PRs should only address ONE project related concern
- If PR is rejected, code reviewer must provide reason for rejection
- PRs must be reviewed and tested* (*unless the code is small enough to not require testing*)
  - To test the code, code reviewer must pull the PR, run/test the application, and run unit tests (if any)
- Code reviewer should not do any fixes to the PR before letting the PR author do it themselves

### Git Workflow
- Pick an issue from git issues
- Create branch in local repository
  - Branch naming convention: `<issue-number>-<short issue descriptor>`
    - Ex: For git issue `#4 Create contributing.md document`, branch name can look like: `4-add-contributing-doc`
- Work on issue and make regular commits with good commit messages (see commit message guidelines - [link](https://chris.beams.io/posts/git-commit/))
- When ready, push branch to github
- When ready, create pull request; make sure to link the issue in your PR
- Once PR is merged, branch will be deleted

## Join us

On [discord](https://discord.gg/5jfAYzW9)


 
