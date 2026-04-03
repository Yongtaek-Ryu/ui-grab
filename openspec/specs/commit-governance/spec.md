# commit-governance Specification

## Requirements

### Requirement: Commit-rule compliance is mandatory
The repository governance phrase "커밋 규칙 반드시 지키기" means commit-message rules are mandatory for branch history that will be reviewed or shared.

#### Scenario: Preparing a branch for review
Given a contributor is preparing branch history for review, push, or handoff
When they inspect the commits that are about to be shared
Then every unpublished commit in that branch history complies with the repository commit convention

### Requirement: Branch commits must follow repository commit convention
Commits prepared for review or sharing MUST use English conventional commit messages.

#### Scenario: Preparing a local branch
Given a contributor is about to share a branch
When the branch contains unpublished commits
Then each commit message uses a conventional commit type prefix such as `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, or `test:`
And the summary text is written in English

### Requirement: Unpublished history must be normalized before sharing
If a local unpublished commit violates the commit convention, that branch history MUST be rewritten before the branch is shared further.

#### Scenario: Local history contains a non-conforming commit
Given a contributor notices an unpublished commit that does not follow the commit convention
When the branch is prepared for review or push
Then the contributor rewrites that unpublished commit message into a conforming conventional commit message first
