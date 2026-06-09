# Commits and branches
fix/ feat/ chore/
{fix or feat or chore}: {version number} - {changes}

git checkout -b feat/{version number}-{feature}
git checkout main
git merge {branch name}
git tag {version number}

# Commands
npm run dev                 # Vite dev server, HMR at http://localhost:5173
npm run build               # Production build → dist/
npm run preview             # Preview prod build locally

docker compose up --build   # Build + run container
docker compose down         # Stop

# Important notes
Claude tends to use legacy packages and old versions of builds.
Always check what version to use and update if necessary.

## V2
Updated nvm, npm and Node. Manually changed the package.json versions to current ones.
After these updates works as wanted.

Migration is now completed and added a blog section.

## V3
For version 3 create the working blog feature.