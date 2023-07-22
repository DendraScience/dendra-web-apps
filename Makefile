PROJECT_BASE := $(shell pwd)
PROJECT_OUTPUT := $(PROJECT_BASE)/output
PKG_COMMON := packages/common
PKG_DATA_QUERY_APP := packages/data-query-app
PKG_PUBLIC_SITE := packages/public-site

main: print-vars build-public-site

print-vars:
	@echo "Make vars..."
	@echo PROJECT_BASE=$(PROJECT_BASE)
	@echo PROJECT_OUTOUT=$(PROJECT_OUTPUT)
	@echo PKG_COMMON=$(PKG_COMMON)
	@echo PKG_DATA_QUERY_APP=$(PKG_DATA_QUERY_APP)
	@echo PKG_PUBLIC_SITE=$(PKG_PUBLIC_SITE)


##
# setup
##

.PHONY: setup
setup: setup-project setup-data-query-app setup-public-site

.PHONY: setup-project
setup-project:
	@echo "Installing packages..."
	npm install
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: setup-data-query-app
setup-data-query-app:
	@echo "Installing packages..."
	npm install --prefix $(PKG_DATA_QUERY_APP)
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: setup-public-site
setup-public-site:
	@echo "Installing packages..."
	npm install --prefix $(PKG_PUBLIC_SITE)
	@printf "\e[32mSuccess!\e[39m\n"


##
# branding
##

.PHONY: clean-branding
clean-branding:
	rm -rf branding

.PHONY: brand-data-query-app
brand-data-query-app:
	@echo "Copying files to branding..."
	@mkdir -p branding/data-query-app
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_COMMON}/public/ \
		branding/data-query-app/public/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_DATA_QUERY_APP}/public/ \
		branding/data-query-app/public/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_COMMON}/src/assets/ \
		branding/data-query-app/assets/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_DATA_QUERY_APP}/src/assets/ \
		branding/data-query-app/assets/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_DATA_QUERY_APP}/src/locales/ \
		branding/data-query-app/locales/
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: brand-public-site
brand-public-site:
	@echo "Copying files to branding..."
	@mkdir -p branding/public-site
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_COMMON}/public/ \
		branding/public-site/public/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_PUBLIC_SITE}/public/ \
		branding/public-site/public/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_COMMON}/src/assets/ \
		branding/public-site/assets/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_PUBLIC_SITE}/src/assets/ \
		branding/public-site/assets/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_PUBLIC_SITE}/src/locales/ \
		branding/public-site/locales/
	@printf "\e[32mSuccess!\e[39m\n"


##
# data-query-app
##

.PHONY: build-data-query-app
build-data-query-app: brand-data-query-app
	@echo "Running build..."
	npm run --prefix $(PKG_DATA_QUERY_APP) build
	npm run --prefix $(PKG_DATA_QUERY_APP) build-server
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: dev-data-query-app
dev-data-query-app: brand-data-query-app
	@echo "Starting dev server..."
	npm run --prefix $(PKG_DATA_QUERY_APP) dev
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: serve-data-query-app
serve-data-query-app:
	@echo "Starting production server..."
	npm run --prefix $(PKG_DATA_QUERY_APP) server:prod
	@printf "\e[32mSuccess!\e[39m\n"


##
# public-site
##

.PHONY: build-public-site
build-public-site: brand-public-site
	@echo "Running build..."
	npm run --prefix $(PKG_PUBLIC_SITE) build
	npm run --prefix $(PKG_PUBLIC_SITE) build-server
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: dev-public-site
dev-public-site: brand-public-site
	@echo "Starting dev server..."
	npm run --prefix $(PKG_PUBLIC_SITE) dev
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: serve-public-site
serve-public-site:
	@echo "Starting production server..."
	npm run --prefix $(PKG_PUBLIC_SITE) server:prod
	@printf "\e[32mSuccess!\e[39m\n"


# TODO: single dev make
# https://vitejs.dev/guide/features.html
# https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode
# https://github.com/vuejs/language-tools#readme
