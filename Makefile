PROJECT_BASE := $(shell pwd)
PROJECT_OUTPUT := $(PROJECT_BASE)/output
PKG_COMMON := packages/common
PKG_MAIN_APP := packages/main-app
PKG_PUBLIC_SITE := packages/public-site
PKGS := main-app-pkg public-site-pkg
SETUP_TASKS=${PKGS:-pkg=-setup}
BUILD_TASKS=${PKGS:-pkg=-build}
DEV_TASKS=${PKGS:-pkg=-dev}
SERVE_TASKS=${PKGS:-pkg=-serve}

main: print-vars build

print-vars:
	@echo "Make vars..."
	@echo PROJECT_BASE=$(PROJECT_BASE)
	@echo PROJECT_OUTPUT=$(PROJECT_OUTPUT)
	@echo PKG_COMMON=$(PKG_COMMON)
	@echo PKG_MAIN_APP=$(PKG_MAIN_APP)
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
dev:
	@echo "Starting dev servers..."
	@bash -c "trap 'echo Bye!; exit 0' SIGINT; \
		PORT=3002 npm run --prefix $(PKG_PUBLIC_SITE) dev & \
		PORT=3004 npm run --prefix $(PKG_MAIN_APP) dev & \
		wait $(jobs -p)"
	@printf "\e[32mSuccess!\e[39m\n"

.PHONY: $(DEV_TASKS)
$(DEV_TASKS):
	@echo "Starting dev server..."
	npm run --prefix packages/${@:-dev=} dev
	@printf "\e[32mSuccess!\e[39m\n"


##
# serve
##

.PHONY: serve
serve:
	@echo "Starting production servers..."
	@bash -c "trap 'echo Bye!; exit 0' SIGINT; \
		serve -c serve.json -p 3000 & \
		wait $(jobs -p)"
	@printf "\e[32mSuccess!\e[39m\n"
