# Manu - DevOps Portfolio

Personal portfolio for Manu, an aspiring DevOps Engineer. Built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are created in the `dist` folder.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example `portfolio`) and push this project to it.
2. Build the site with `npm run build`.
3. Install the deploy helper once: `npm install --save-dev gh-pages`.
4. Add this script to `package.json` under `"scripts"`: `"deploy": "npm run build && gh-pages -d dist"`.
5. Run `npm run deploy`.
6. In the repository on GitHub, open **Settings > Pages**, choose the `gh-pages` branch and the root folder, and save.

Your site will be available at `https://mxnubhxrxdwxj.github.io/<repository-name>/`.

## Updating content

All text, links and project details live in `src/data/portfolio.ts`.

- **Projects:** add a new object to the `projects` list. The card layout is reused automatically.
- **GitHub repository link:** set `repoUrl` on a project to its repository URL.
- **Skills:** edit `skillGroups` for mastered skills and `currentlyLearning` for skills still in progress.
- **Certifications:** add an entry to `certifications` and place its PDF in `public/assets/certifications/`.
- **LinkedIn:** set `linkedinUrl` in `profile`.
- **Resume:** place your PDF at `public/assets/resume/Manu_Bharadwaj_Resume.pdf`. The Download Resume button uses this file. If you use a different file name, update `resumeFile` in `profile`.
- **Profile photo:** replace the file in `public/assets/images/` and update `photoFile` in `profile` if the name changes.
