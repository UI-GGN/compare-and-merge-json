## Contributing

[fork]: https://github.com/UI-GGN/compare-and-merge-json/fork
[pr]: https://github.com/UI-GGN/compare-and-merge-json/compare
[pipeline]: https://github.com/UI-GGN/compare-and-merge-json/actions/workflows/CI.yml

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

### Setting up a project in local
1. Ensure you have node 16.x and yarn installed
2. [Fork](fork) and clone the repository
3. Install dependencies: `yarn install`

### Testing the package in local
Once the local environment is set up, follow the steps to install the package in local and testing it,
1. Build the package: `yarn build`
2. Install the package globally: `npm link` (This will install package globally, now you are ready to test)
3. To verify installation: `npm ls -g`
4. To uninstalling the package: `npm uninstall -g compare-and-merge-json`

### Submitting your pull request
1. Follow the steps provided in [Setting up a project in local](#setting-up-a-project-in-local)
2. Make sure the tests pass on your machine: `yarn test`
3. Create a new branch: `git checkout -b my-branch-name`
4. Make your change and add tests
5. Before making a commit make sure lint, format, tests are passing
    1. To run lint `yarn lint` and for fix `yarn lint-fix`
    2. To run format check `yarn format-check` and to format `yarn format`
    3. To run all the tests `yarn test`
6. Test the package locally by following [Testing the package in local](#testing-the-package-in-local)
7. Push to your fork and submit a [pull request](pr)
8. Make sure build job in the [pipeline](pipeline) is passing

## Resources
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)

