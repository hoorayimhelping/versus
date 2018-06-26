SHELL := /bin/bash

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: clean ## Build the app bundle for production
	yarn build

watch: ## Dev mode: Watch for changes and rebuild only relevant parts
	yarn watch

lint: ## Lint js files to find runtime errors
	yarn lint

test: ## Run tests
	yarn test

clean: ## Reinstall dependencies and clear compiled modules
	rm -rf lib/
	yarn
