PROJECT_BASE := $(shell pwd)
PROJECT_OUTPUT := $(PROJECT_BASE)/output
PKG_COMMON := packages/common
PKG_PUBLIC_SITE := packages/public-site

main: print-vars build-public-site

print-vars:
	@echo "Make vars..."
	@echo PROJECT_BASE=$(PROJECT_BASE)
	@echo PROJECT_OUTOUT=$(PROJECT_OUTPUT)
	@echo PKG_COMMON=$(PKG_COMMON)
	@echo PKG_PUBLIC_SITE=$(PKG_PUBLIC_SITE)


##
# setup
##

.PHONY: setup
setup: setup-project setup-public-site

.PHONY: setup-project
setup-project:
	@echo "Installing packages..."
	npm install
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
