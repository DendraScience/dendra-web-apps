PROJECT_BASE := $(shell pwd)
PROJECT_OUTPUT := $(PROJECT_BASE)/output
PKG_ACCOUNT_APP := packages/account-app
PKG_COMMON := packages/common
PKG_DATA_QUERY_APP := packages/data-query-app
PKG_PUBLIC_SITE := packages/public-site
PKGS := account-app-pkg data-query-app-pkg public-site-pkg
SETUP_TASKS=${PKGS:-pkg=-setup}
BRAND_TASKS=${PKGS:-pkg=-brand}
BUILD_TASKS=${PKGS:-pkg=-build}
DEV_TASKS=${PKGS:-pkg=-dev}
SERVE_TASKS=${PKGS:-pkg=-serve}

main: print-vars brand build

print-vars:
	@echo "Make vars..."
	@echo PROJECT_BASE=$(PROJECT_BASE)
	@echo PROJECT_OUTPUT=$(PROJECT_OUTPUT)
	@echo PKG_ACCOUNT_APP=$(PKG_ACCOUNT_APP)
	@echo PKG_COMMON=$(PKG_COMMON)
	@echo PKG_DATA_QUERY_APP=$(PKG_DATA_QUERY_APP)
	@echo PKG_PUBLIC_SITE=$(PKG_PUBLIC_SITE)
	@echo PKGS=$(PKGS)


##
# setup
##

.PHONY: setup
setup: setup-project $(SETUP_TASKS)

.PHONY: setup-project
setup-project:
	@echo "Installing packages..."
	npm install
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: $(SETUP_TASKS)
$(SETUP_TASKS):
	@echo "Installing packages..."
	npm install --prefix packages/${@:-setup=}
	@printf "\e[32mSuccess!\e[39m\n"


##
# branding
##

.PHONY: clean-branding
clean-branding:
	rm -rf branding

.PHONY: brand
brand: $(BRAND_TASKS)

.PHONY: $(BRAND_TASKS)
$(BRAND_TASKS):
	@echo "Copying files to branding..."
	@mkdir -p branding/${@:-brand=}
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_COMMON}/public/ \
		branding/${@:-brand=}/public/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		packages/${@:-brand=}/public/ \
		branding/${@:-brand=}/public/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		${PKG_COMMON}/src/assets/ \
		branding/${@:-brand=}/assets/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		packages/${@:-brand=}/src/assets/ \
		branding/${@:-brand=}/assets/
	@rsync -av --ignore-existing --include-from=branding-files.txt --exclude '*' \
		packages/${@:-brand=}/src/locales/ \
		branding/${@:-brand=}/locales/
	@printf "\e[32mSuccess!\e[39m\n"


##
# build
##

.PHONY: clean-output
clean-output:
	rm -rf output

.PHONY: build
build: $(BUILD_TASKS)

.PHONY: $(BUILD_TASKS)
$(BUILD_TASKS):
	@echo "Running build..."
	npm run --prefix packages/${@:-build=} build
	npm run --prefix packages/${@:-build=} build-server
	@printf "\e[32mSuccess!\e[39m\n"


##
# dev
##

.PHONY: dev
dev: brand
	@echo "Starting dev servers..."
	@bash -c "trap 'echo Bye!; exit 0' SIGINT; \
		PORT=3002 npm run --prefix $(PKG_ACCOUNT_APP) dev & \
		PORT=3001 npm run --prefix $(PKG_DATA_QUERY_APP) dev & \
		PORT=3000 npm run --prefix $(PKG_PUBLIC_SITE) dev"
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: $(DEV_TASKS)
$(DEV_TASKS):
	@echo "Starting dev server..."
	npm run --prefix packages/${@:-dev=} dev
	@printf "\e[32mSuccess!\e[39m\n"


##
# serve
##

.PHONY: $(SERVE_TASKS)
$(SERVE_TASKS):
	@echo "Starting production server..."
	npm run --prefix packages/${@:-serve=} server:prod
	@printf "\e[32mSuccess!\e[39m\n"
