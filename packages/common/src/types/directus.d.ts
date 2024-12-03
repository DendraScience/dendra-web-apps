export interface paths {
    "/assets/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an Asset
         * @description Image typed files can be dynamically resized and transformed to fit any need.
         */
        get: operations["getAsset"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retrieve a Temporary Access Token
         * @description Retrieve a Temporary Access Token
         */
        post: operations["login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh Token
         * @description Refresh a Temporary Access Token.
         */
        post: operations["refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Log Out
         * @description Log Out
         */
        post: operations["logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/password/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Request a Password Reset
         * @description Request a reset password email to be send.
         */
        post: operations["passwordRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/password/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reset a Password
         * @description The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.
         */
        post: operations["passwordReset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/oauth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List OAuth Providers
         * @description List configured OAuth providers.
         */
        get: operations["oauth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/oauth/{provider}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Authenticated using an OAuth provider
         * @description Start OAuth flow using the specified provider
         */
        get: operations["oauthProvider"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/server/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * System Info
         * @description Perform a system status check and return the options.
         */
        get: operations["serverInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/server/ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ping
         * @description Ping, pong. Ping.. pong.
         */
        get: operations["ping"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/hash/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hash a string
         * @description Generate a hash for a given string.
         */
        post: operations["hash-generate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/hash/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hash a string
         * @description Generate a hash for a given string.
         */
        post: operations["hash-verify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/sort/{collection}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sort Items
         * @description Re-sort items in collection based on start and to value of item
         */
        post: operations["sort"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/import/{collection}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Import Items
         * @description Import multiple records from a JSON or CSV file into a collection.
         */
        post: operations["import"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/export/{collection}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Export Items
         * @description Export a larger data set to a file in the File Library
         */
        post: operations["export"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/cache/clear": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Clear Cache
         * @description Resets both the data and schema cache of Directus.
         */
        post: operations["clear-cache"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utils/random/string": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a Random String
         * @description Returns a random string of given length.
         */
        get: operations["random"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All Fields
         * @description Returns a list of the fields available in the project.
         */
        get: operations["getFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fields/{collection}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Fields in Collection
         * @description Returns a list of the fields available in the given collection.
         */
        get: operations["getCollectionFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fields/{collection}/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a Field
         * @description Retrieves the details of a single field in a given collection.
         */
        get: operations["getCollectionField"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Files
         * @description List the files.
         */
        get: operations["getFiles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a Files
         * @description Retrieve a single file by unique identifier.
         */
        get: operations["getFile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/collections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Collections
         * @description Returns a list of the collections available in the project.
         */
        get: operations["getCollections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/collections/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a Collection
         * @description Retrieves the details of a single collection.
         */
        get: operations["getCollection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/relations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Relations
         * @description List the relations.
         */
        get: operations["getRelations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/relations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a Relation
         * @description Retrieve a single relation by unique identifier.
         */
        get: operations["getRelation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/ctas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the ctas items.
         */
        get: operations["readItemsCtas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/ctas/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single ctas item by unique identifier.
         */
        get: operations["readSingleItemsCtas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/meta_infos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the meta_infos items.
         */
        get: operations["readItemsMetaInfos"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/meta_infos/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single meta_infos item by unique identifier.
         */
        get: operations["readSingleItemsMetaInfos"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_hero_ctas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_hero_ctas items.
         */
        get: operations["readItemsSectionHeroCtas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_hero_ctas/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_hero_ctas item by unique identifier.
         */
        get: operations["readSingleItemsSectionHeroCtas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_hero": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_hero items.
         */
        get: operations["readItemsSectionHero"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_hero/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_hero item by unique identifier.
         */
        get: operations["readSingleItemsSectionHero"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/image_transformations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the image_transformations items.
         */
        get: operations["readItemsImageTransformations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/image_transformations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single image_transformations item by unique identifier.
         */
        get: operations["readSingleItemsImageTransformations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/static_pages_sections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the static_pages_sections items.
         */
        get: operations["readItemsStaticPagesSections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/static_pages_sections/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single static_pages_sections item by unique identifier.
         */
        get: operations["readSingleItemsStaticPagesSections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_differentiators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_differentiators items.
         */
        get: operations["readItemsSectionDifferentiators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_differentiators/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_differentiators item by unique identifier.
         */
        get: operations["readSingleItemsSectionDifferentiators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/differentiators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the differentiators items.
         */
        get: operations["readItemsDifferentiators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/differentiators/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single differentiators item by unique identifier.
         */
        get: operations["readSingleItemsDifferentiators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/static_pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the static_pages items.
         */
        get: operations["readItemsStaticPages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/static_pages/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single static_pages item by unique identifier.
         */
        get: operations["readSingleItemsStaticPages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_capabilities items.
         */
        get: operations["readItemsSectionCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_capabilities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_capabilities item by unique identifier.
         */
        get: operations["readSingleItemsSectionCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_capabilities_capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_capabilities_capabilities items.
         */
        get: operations["readItemsSectionCapabilitiesCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_capabilities_capabilities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_capabilities_capabilities item by unique identifier.
         */
        get: operations["readSingleItemsSectionCapabilitiesCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the capabilities items.
         */
        get: operations["readItemsCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/capabilities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single capabilities item by unique identifier.
         */
        get: operations["readSingleItemsCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_differentiators_differentiators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_differentiators_differentiators items.
         */
        get: operations["readItemsSectionDifferentiatorsDifferentiators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_differentiators_differentiators/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_differentiators_differentiators item by unique identifier.
         */
        get: operations["readSingleItemsSectionDifferentiatorsDifferentiators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/case_studies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the case_studies items.
         */
        get: operations["readItemsCaseStudies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/case_studies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single case_studies item by unique identifier.
         */
        get: operations["readSingleItemsCaseStudies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/tours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the tours items.
         */
        get: operations["readItemsTours"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/tours/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single tours item by unique identifier.
         */
        get: operations["readSingleItemsTours"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_case_studies_case_studies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_case_studies_case_studies items.
         */
        get: operations["readItemsSectionCaseStudiesCaseStudies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_case_studies_case_studies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_case_studies_case_studies item by unique identifier.
         */
        get: operations["readSingleItemsSectionCaseStudiesCaseStudies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_tours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_tours items.
         */
        get: operations["readItemsSectionTours"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_tours/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_tours item by unique identifier.
         */
        get: operations["readSingleItemsSectionTours"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_case_studies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_case_studies items.
         */
        get: operations["readItemsSectionCaseStudies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_case_studies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_case_studies item by unique identifier.
         */
        get: operations["readSingleItemsSectionCaseStudies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_tours_tours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the section_tours_tours items.
         */
        get: operations["readItemsSectionToursTours"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/section_tours_tours/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single section_tours_tours item by unique identifier.
         */
        get: operations["readSingleItemsSectionToursTours"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/tours_ctas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Items
         * @description List the tours_ctas items.
         */
        get: operations["readItemsToursCtas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/items/tours_ctas/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an Item
         * @description Retrieve a single tours_ctas item by unique identifier.
         */
        get: operations["readSingleItemsToursCtas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Files: {
            /**
             * @description Unique identifier for the file.
             * @example 8cbb43fe-4cdf-4991-8352-c461779cec02
             */
            id?: string;
            /**
             * @description Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).
             * @example local
             */
            storage?: string;
            /**
             * @description Name of the file on disk. By default, Directus uses a random hash for the filename.
             * @example a88c3b72-ac58-5436-a4ec-b2858531333a.jpg
             */
            filename_disk?: string;
            /**
             * @description How you want to the file to be named when it's being downloaded.
             * @example avatar.jpg
             */
            filename_download?: string;
            /**
             * @description Title for the file. Is extracted from the filename on upload, but can be edited by the user.
             * @example User Avatar
             */
            title?: string;
            /**
             * @description MIME type of the file.
             * @example image/jpeg
             */
            type?: string;
            /**
             * @description Virtual folder where this file resides in.
             * @example null
             */
            folder?: (string | components["schemas"]["Folders"]) | null;
            /**
             * @description Who uploaded the file.
             * @example 63716273-0f29-4648-8a2a-2af2948f6f78
             */
            uploaded_by?: string | components["schemas"]["Users"];
            /**
             * Format: date-time
             * @description When the file was created.
             * @example 2019-12-03T00:10:15+00:00
             */
            created_on?: string;
            /** Format: uuid */
            modified_by?: string | null;
            /** Format: timestamp */
            modified_on?: string;
            /**
             * @description Character set of the file.
             * @example binary
             */
            charset?: string | null;
            /**
             * @description Size of the file in bytes.
             * @example 137862
             */
            filesize?: number;
            /**
             * @description Width of the file in pixels. Only applies to images.
             * @example 800
             */
            width?: number | null;
            /**
             * @description Height of the file in pixels. Only applies to images.
             * @example 838
             */
            height?: number | null;
            /**
             * @description Duration of the file in seconds. Only applies to audio and video.
             * @example 0
             */
            duration?: number | null;
            /**
             * @description Where the file was embedded from.
             * @example null
             */
            embed?: string | null;
            /** @description Description for the file. */
            description?: string | null;
            /** @description Where the file was created. Is automatically populated based on Exif data for images. */
            location?: string | null;
            /** @description Tags for the file. Is automatically populated based on Exif data for images. */
            tags?: string[] | null;
            /** @description IPTC, Exif, and ICC metadata extracted from file */
            metadata?: Record<string, never>;
            focal_point_x?: number | null;
            focal_point_y?: number | null;
            tus_id?: string | null;
            tus_data?: unknown;
            /**
             * Format: date-time
             * @description When the file was last uploaded/replaced.
             * @example 2019-12-03T00:10:15+00:00
             */
            uploaded_on?: string;
        };
        Folders: {
            /**
             * @description Unique identifier for the folder.
             * @example 0cf0e03d-4364-45df-b77b-ca61f61869d2
             */
            id?: string;
            /**
             * @description Name of the folder.
             * @example New York
             */
            name?: string;
            /**
             * @description Unique identifier of the parent folder. This allows for nested folders.
             * @example null
             */
            parent?: (string | components["schemas"]["Folders"]) | null;
        };
        Roles: {
            /**
             * @description Unique identifier for the role.
             * @example 2f24211d-d928-469a-aea3-3c8f53d4e426
             */
            id?: string;
            /**
             * @description Name of the role.
             * @example Administrator
             */
            name?: string;
            /**
             * @description The role's icon.
             * @example verified_user
             */
            icon?: string;
            /**
             * @description Description of the role.
             * @example Admins have access to all managed data within the system by default
             */
            description?: string | null;
            /**
             * @description Array of IP addresses that are allowed to connect to the API as a user of this role.
             * @example []
             */
            ip_access?: string[];
            /**
             * @description Whether or not this role enforces the use of 2FA.
             * @example false
             */
            enforce_tfa?: boolean;
            /**
             * @description Admin role. If true, skips all permission checks.
             * @example false
             */
            admin_access?: boolean;
            /**
             * @description The users in the role are allowed to use the app.
             * @example true
             */
            app_access?: boolean;
        };
        Users: {
            /**
             * @description Unique identifier for the user.
             * @example 63716273-0f29-4648-8a2a-2af2948f6f78
             */
            id?: string;
            /**
             * @description First name of the user.
             * @example Admin
             */
            first_name?: string;
            /**
             * @description Last name of the user.
             * @example User
             */
            last_name?: string;
            /**
             * Format: email
             * @description Unique email address for the user.
             * @example admin@example.com
             */
            email?: string;
            /** @description Password of the user. */
            password?: string;
            /**
             * @description The user's location.
             * @example null
             */
            location?: string | null;
            /**
             * @description The user's title.
             * @example null
             */
            title?: string | null;
            /**
             * @description The user's description.
             * @example null
             */
            description?: string | null;
            /**
             * @description The user's tags.
             * @example null
             */
            tags?: string[] | null;
            /**
             * @description The user's avatar.
             * @example null
             */
            avatar?: (string | components["schemas"]["Files"]) | null;
            /**
             * @description The user's language used in Directus.
             * @example en-US
             */
            language?: string;
            /**
             * @description What theme the user is using.
             * @example auto
             * @enum {string}
             */
            theme?: "light" | "dark" | "auto";
            /**
             * @description The 2FA secret string that's used to generate one time passwords.
             * @example null
             */
            tfa_secret?: string | null;
            /**
             * @description Status of the user.
             * @example active
             * @enum {string}
             */
            status?: "active" | "invited" | "draft" | "suspended" | "deleted";
            /**
             * @description Unique identifier of the role of this user.
             * @example 2f24211d-d928-469a-aea3-3c8f53d4e426
             */
            role?: string | components["schemas"]["Roles"];
            /** @description Static token for the user. */
            token?: string | null;
            /**
             * Format: date-time
             * @description When this user used the API last.
             * @example 2020-05-31T14:32:37Z
             */
            last_access?: string | null;
            /**
             * @description Last page that the user was on.
             * @example /my-project/settings/collections/a
             */
            last_page?: string | null;
        };
        Query: {
            /**
             * @description Control what fields are being returned in the object.
             * @example [
             *       "*",
             *       "*.*"
             *     ]
             */
            fields?: string[];
            /** @example {
             *       "<field>": {
             *         "<operator>": "<value>"
             *       }
             *     } */
            filter?: Record<string, never>;
            /** @description Filter by items that contain the given search query in one of their fields. */
            search?: string;
            /**
             * @description How to sort the returned items.
             * @example [
             *       "-date_created"
             *     ]
             */
            sort?: string[];
            /** @description Set the maximum number of items that will be returned */
            limit?: number;
            /** @description How many items to skip when fetching data. */
            offset?: number;
            /** @description Cursor for use in pagination. Often used in combination with limit. */
            page?: number;
            /**
             * @description Deep allows you to set any of the other query parameters on a nested relational dataset.
             * @example {
             *       "related_articles": {
             *         "_limit": 3
             *       }
             *     }
             */
            deep?: Record<string, never>;
        };
        "x-metadata": {
            /** @description Returns the total item count of the collection you're querying. */
            total_count?: number;
            /** @description Returns the item count of the collection you're querying, taking the current filter/search parameters into account. */
            filter_count?: number;
        };
        Fields: {
            id?: number;
            /**
             * @description Unique name of the collection this field is in.
             * @example about_us
             */
            collection?: string;
            /**
             * @description Unique name of the field. Field name is unique within the collection.
             * @example id
             */
            field?: string;
            special?: string[] | null;
            interface?: string | null;
            options?: unknown;
            display?: string | null;
            display_options?: unknown;
            readonly?: boolean;
            hidden?: boolean;
            sort?: number | null;
            width?: string | null;
            translations?: unknown;
            note?: string | null;
            conditions?: unknown;
            required?: boolean | null;
            group?: (number | components["schemas"]["Fields"]) | null;
            validation?: unknown;
            validation_message?: string | null;
        };
        Collections: {
            /**
             * @description The collection key.
             * @example customers
             */
            collection?: string;
            icon?: string | null;
            note?: string | null;
            display_template?: string | null;
            hidden?: boolean;
            singleton?: boolean;
            translations?: unknown;
            archive_field?: string | null;
            archive_app_filter?: boolean;
            archive_value?: string | null;
            unarchive_value?: string | null;
            sort_field?: string | null;
            accountability?: string | null;
            color?: string | null;
            item_duplication_fields?: unknown;
            sort?: number | null;
            group?: (string | components["schemas"]["Collections"]) | null;
            collapse?: string;
            preview_url?: string | null;
            versioning?: boolean;
        };
        Relations: {
            /**
             * @description Unique identifier for the relation.
             * @example 1
             */
            id?: number;
            /**
             * @description Collection that has the field that holds the foreign key.
             * @example directus_activity
             */
            many_collection?: string;
            /**
             * @description Foreign key. Field that holds the primary key of the related collection.
             * @example user
             */
            many_field?: string;
            /**
             * @description Collection on the _one_ side of the relationship.
             * @example directus_users
             */
            one_collection?: string;
            /**
             * @description Alias column that serves as the _one_ side of the relationship.
             * @example null
             */
            one_field?: string | null;
            one_collection_field?: string | null;
            one_allowed_collections?: string[] | null;
            /**
             * @description Field on the junction table that holds the many field of the related relation.
             * @example null
             */
            junction_field?: string | null;
            sort_field?: string | null;
            one_deselect_action?: string;
        };
        ItemsCtas: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            action?: string | null;
            href?: string | null;
            title?: string | null;
        };
        ItemsMetaInfos: {
            id?: number;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            description?: string | null;
            og_title?: string | null;
            og_description?: string | null;
            og_image?: (string | components["schemas"]["Files"]) | null;
        };
        ItemsSectionHeroCtas: {
            id?: number;
            section_hero_id?: (number | components["schemas"]["ItemsSectionHero"]) | null;
            ctas_id?: (number | components["schemas"]["ItemsCtas"]) | null;
        };
        ItemsSectionHero: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            paragraph?: string | null;
            background_image?: (string | components["schemas"]["Files"]) | null;
            background_transformation?: (number | components["schemas"]["ItemsImageTransformations"]) | null;
            ctas?: (number | components["schemas"]["ItemsSectionHeroCtas"])[] | null;
        };
        ItemsImageTransformations: {
            id?: number;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            name?: string;
            cloudinary_parameters?: string | null;
        };
        ItemsStaticPagesSections: {
            id?: number;
            static_pages_id?: (string | components["schemas"]["ItemsStaticPages"]) | null;
            item?: (string | components["schemas"]["ItemsSectionHero"] | components["schemas"]["ItemsSectionDifferentiators"] | components["schemas"]["ItemsSectionCapabilities"] | components["schemas"]["ItemsSectionTours"] | components["schemas"]["ItemsSectionCaseStudies"])[] | null;
            collection?: string | null;
            sort?: number | null;
        };
        ItemsSectionDifferentiators: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            paragraph?: string | null;
            differentiators?: (number | components["schemas"]["ItemsSectionDifferentiatorsDifferentiators"])[] | null;
        };
        ItemsDifferentiators: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            description?: string | null;
            icon?: string | null;
        };
        ItemsStaticPages: {
            /** Format: uuid */
            id?: string;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            meta_info?: (number | components["schemas"]["ItemsMetaInfos"]) | null;
            name?: string | null;
            sections?: (number | components["schemas"]["ItemsStaticPagesSections"])[] | null;
        };
        ItemsSectionCapabilities: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            paragraph?: string | null;
            capabilities?: (number | components["schemas"]["ItemsSectionCapabilitiesCapabilities"])[] | null;
        };
        ItemsSectionCapabilitiesCapabilities: {
            id?: number;
            section_capabilities_id?: (number | components["schemas"]["ItemsSectionCapabilities"]) | null;
            capabilities_id?: (number | components["schemas"]["ItemsCapabilities"]) | null;
            sort?: number | null;
        };
        ItemsCapabilities: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            description?: string | null;
            icon?: string | null;
            image?: (string | components["schemas"]["Files"]) | null;
            transformation?: (number | components["schemas"]["ItemsImageTransformations"]) | null;
        };
        ItemsSectionDifferentiatorsDifferentiators: {
            id?: number;
            section_differentiators_id?: (number | components["schemas"]["ItemsSectionDifferentiators"]) | null;
            differentiators_id?: (number | components["schemas"]["ItemsDifferentiators"]) | null;
            sort?: number | null;
        };
        ItemsCaseStudies: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            summary?: string | null;
            body?: string | null;
            cover_image?: (string | components["schemas"]["Files"]) | null;
            cover_transformation?: (number | components["schemas"]["ItemsImageTransformations"]) | null;
        };
        ItemsTours: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            description?: string | null;
            ctas?: (number | components["schemas"]["ItemsToursCtas"])[] | null;
        };
        ItemsSectionCaseStudiesCaseStudies: {
            id?: number;
            section_case_studies_id?: (number | components["schemas"]["ItemsSectionCaseStudies"]) | null;
            case_studies_id?: (number | components["schemas"]["ItemsCaseStudies"]) | null;
            sort?: number | null;
        };
        ItemsSectionTours: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            paragraph?: string | null;
            tours?: (number | components["schemas"]["ItemsSectionToursTours"])[] | null;
        };
        ItemsSectionCaseStudies: {
            id?: number;
            status?: string;
            /** Format: uuid */
            user_created?: string | null;
            /** Format: timestamp */
            date_created?: string | null;
            /** Format: uuid */
            user_updated?: string | null;
            /** Format: timestamp */
            date_updated?: string | null;
            title?: string | null;
            paragraph?: string | null;
            case_studies?: (number | components["schemas"]["ItemsSectionCaseStudiesCaseStudies"])[] | null;
        };
        ItemsSectionToursTours: {
            id?: number;
            section_tours_id?: (number | components["schemas"]["ItemsSectionTours"]) | null;
            tours_id?: (number | components["schemas"]["ItemsTours"]) | null;
            sort?: number | null;
        };
        ItemsToursCtas: {
            id?: number;
            tours_id?: (number | components["schemas"]["ItemsTours"]) | null;
            ctas_id?: (number | components["schemas"]["ItemsCtas"]) | null;
            sort?: number | null;
        };
    };
    responses: {
        /** @description Error: Not found. */
        NotFoundError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error?: {
                        /** Format: int64 */
                        code?: number;
                        message?: string;
                    };
                };
            };
        };
        /** @description Error: Unauthorized request */
        UnauthorizedError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error?: {
                        /** Format: int64 */
                        code?: number;
                        message?: string;
                    };
                };
            };
        };
    };
    parameters: {
        /** @description Index */
        Id: number;
        /** @description Unique identifier for the object. */
        UUId: string;
        /** @description Collection of which you want to retrieve the items from. */
        Collection: string;
        /** @description Filter by items that contain the given search query in one of their fields. */
        Search: string;
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        Page: number;
        /** @description How many items to skip when fetching data. */
        Offset: number;
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *      */
        Sort: string[];
        /** @description What metadata to return in the response. */
        Meta: string;
        /** @description A limit on the number of objects that are returned. */
        Limit: number;
        /** @description Select items in collection by given conditions. */
        Filter: string;
        /** @description Control what fields are being returned in the object. */
        Fields: string[];
        /** @description Saves the API response to a file. Accepts one of "csv", "json", "xml", "yaml". */
        Export: "csv" | "json" | "xml" | "yaml";
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
         *      */
        Version: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getAsset: {
        parameters: {
            query?: {
                /** @description The key of the asset size configured in settings. */
                key?: string;
                /** @description A JSON array of image transformations */
                transforms?: string;
                /** @description Download the asset to your computer */
                download?: boolean;
            };
            header?: never;
            path: {
                /** @description The id of the file. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            404: components["responses"]["NotFoundError"];
        };
    };
    login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Email address of the user you're retrieving the access token for.
                     * @example admin@example.com
                     */
                    email: string;
                    /**
                     * Format: password
                     * @description Password of the user.
                     * @example password
                     */
                    password: string;
                    /**
                     * @description Whether to retrieve the refresh token in the JSON response, or in a httpOnly cookie.
                     * @default json
                     * @enum {string}
                     */
                    mode?: "json" | "cookie" | "session";
                    /** @description The user's one-time-password (if MFA is enabled). */
                    otp?: string;
                };
            };
        };
        responses: {
            /** @description Successful authentification */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            /** @example eyJhbGciOiJI... */
                            access_token?: string;
                            /** @example 900 */
                            expires?: number;
                            /** @example yuOJkjdPXMd... */
                            refresh_token?: string;
                        };
                    };
                };
            };
        };
    };
    refresh: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description JWT access token you want to refresh. This token can't be expired.
                     * @example eyJ0eXAiOiJKV...
                     */
                    refresh_token?: string;
                    /**
                     * @description Whether to submit and retrieve the refresh token in the JSON response, or in a httpOnly cookie.
                     * @default json
                     * @enum {string}
                     */
                    mode?: "json" | "cookie" | "session";
                };
            };
        };
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            /** @example eyJhbGciOiJI... */
                            access_token?: string;
                            /** @example 900 */
                            expires?: number;
                            /** @example Gy-caJMpmGTA... */
                            refresh_token?: string;
                        };
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The refresh token to invalidate. If you have the refresh token in a cookie through /auth/login, you don't have to submit it here.
                     * @example eyJ0eXAiOiJKV...
                     */
                    refresh_token?: string;
                    /**
                     * @description Whether the refresh token is submitted in the JSON response, or in a httpOnly cookie.
                     * @enum {string}
                     */
                    mode?: "json" | "cookie" | "session";
                };
            };
        };
        responses: {
            /** @description Request successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    passwordRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Email address of the user you're requesting a reset for.
                     * @example admin@example.com
                     */
                    email: string;
                };
            };
        };
        responses: {
            401: components["responses"]["UnauthorizedError"];
        };
    };
    passwordReset: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description One-time use JWT token that is used to verify the user.
                     * @example eyJ0eXAiOiJKV1Qi...
                     */
                    token: string;
                    /**
                     * Format: password
                     * @description New password for the user.
                     * @example password
                     */
                    password: string;
                };
            };
        };
        responses: {
            401: components["responses"]["UnauthorizedError"];
        };
    };
    oauth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        public?: boolean;
                        /** @example [
                         *       "github",
                         *       "facebook"
                         *     ] */
                        data?: string[];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    oauthProvider: {
        parameters: {
            query?: {
                /** @description Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned. */
                redirect?: string;
            };
            header?: never;
            path: {
                /** @description Key of the activated OAuth provider. */
                provider: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        public?: boolean;
                        data?: {
                            token?: string;
                        };
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    serverInfo: {
        parameters: {
            query: {
                /** @description The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server. */
                super_admin_token: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: Record<string, never>;
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    ping: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/text": string;
                };
            };
        };
    };
    "hash-generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description String to hash. */
                    string: string;
                };
            };
        };
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example $argon2i$v=19$m=4096,t=3,p=1$pOyIa/zmRAjCVLb2f7kOyg$DasoO6LzMM+6iKfzCDq6JbsYsZWLSm33p7i9NxL9mDc */
                        data?: string;
                    };
                };
            };
        };
    };
    "hash-verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description String to hash. */
                    string: string;
                    /** @description Hash you want to verify against. */
                    hash: string;
                };
            };
        };
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example true */
                        data?: boolean;
                    };
                };
            };
        };
    };
    sort: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Collection identifier */
                collection: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Primary key of item to move */
                    item?: number;
                    /** @description Primary key of item where to move the current item to */
                    to?: number;
                };
            };
        };
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    import: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Collection identifier */
                collection: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    export: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Collection identifier */
                collection: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description What file format to save the export to. One of csv, xml, json
                     * @enum {string}
                     */
                    format: "csv" | "xml" | "json";
                    query: components["schemas"]["Query"];
                    file: components["schemas"]["Files"];
                };
            };
        };
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "clear-cache": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    random: {
        parameters: {
            query?: {
                /** @description Length of the random string. */
                length?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example 1>M3+4oh.S */
                        data?: string;
                    };
                };
            };
        };
    };
    getFields: {
        parameters: {
            query?: {
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Fields"][];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    getCollectionFields: {
        parameters: {
            query?: {
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
            };
            header?: never;
            path: {
                /** @description Unique identifier of the collection the item resides in. */
                collection: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Fields"][];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    getCollectionField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique identifier of the collection the item resides in. */
                collection: string;
                /** @description Unique identifier of the field. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Fields"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    getFiles: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Files"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    getFile: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
            };
            header?: never;
            path: {
                /** @description Unique identifier for the object. */
                id: components["parameters"]["UUId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Files"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    getCollections: {
        parameters: {
            query?: {
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Collections"][];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    getCollection: {
        parameters: {
            query?: {
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
            };
            header?: never;
            path: {
                /** @description Unique identifier of the collection. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Collections"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    getRelations: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
                /** @description Cursor for use in pagination. Often used in combination with limit. */
                page?: components["parameters"]["Page"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Relations"][];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    getRelation: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
            };
            header?: never;
            path: {
                /** @description Index */
                id: components["parameters"]["Id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Relations"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsCtas: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsCtas"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsCtas: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsCtas"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsMetaInfos: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsMetaInfos"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsMetaInfos: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsMetaInfos"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionHeroCtas: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionHeroCtas"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionHeroCtas: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionHeroCtas"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionHero: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionHero"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionHero: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionHero"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsImageTransformations: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsImageTransformations"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsImageTransformations: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsImageTransformations"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsStaticPagesSections: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsStaticPagesSections"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsStaticPagesSections: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsStaticPagesSections"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionDifferentiators: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionDifferentiators"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionDifferentiators: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionDifferentiators"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsDifferentiators: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsDifferentiators"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsDifferentiators: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsDifferentiators"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsStaticPages: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsStaticPages"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsStaticPages: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsStaticPages"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionCapabilities: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCapabilities"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionCapabilities: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCapabilities"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionCapabilitiesCapabilities: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCapabilitiesCapabilities"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionCapabilitiesCapabilities: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCapabilitiesCapabilities"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsCapabilities: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsCapabilities"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsCapabilities: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsCapabilities"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionDifferentiatorsDifferentiators: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionDifferentiatorsDifferentiators"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionDifferentiatorsDifferentiators: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionDifferentiatorsDifferentiators"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsCaseStudies: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsCaseStudies"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsCaseStudies: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsCaseStudies"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsTours: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsTours"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsTours: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsTours"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionCaseStudiesCaseStudies: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCaseStudiesCaseStudies"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionCaseStudiesCaseStudies: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCaseStudiesCaseStudies"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionTours: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionTours"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionTours: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionTours"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionCaseStudies: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCaseStudies"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionCaseStudies: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionCaseStudies"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsSectionToursTours: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionToursTours"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsSectionToursTours: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsSectionToursTours"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
    readItemsToursCtas: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description A limit on the number of objects that are returned. */
                limit?: components["parameters"]["Limit"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description How many items to skip when fetching data. */
                offset?: components["parameters"]["Offset"];
                /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
                 *      */
                sort?: components["parameters"]["Sort"];
                /** @description Select items in collection by given conditions. */
                filter?: components["parameters"]["Filter"];
                /** @description Filter by items that contain the given search query in one of their fields. */
                search?: components["parameters"]["Search"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsToursCtas"][];
                        meta?: components["schemas"]["x-metadata"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    readSingleItemsToursCtas: {
        parameters: {
            query?: {
                /** @description Control what fields are being returned in the object. */
                fields?: components["parameters"]["Fields"];
                /** @description What metadata to return in the response. */
                meta?: components["parameters"]["Meta"];
                /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
                 *      */
                version?: components["parameters"]["Version"];
            };
            header?: never;
            path: {
                /** @description Index of the item. */
                id: number | string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful request */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["ItemsToursCtas"];
                    };
                };
            };
            401: components["responses"]["UnauthorizedError"];
            404: components["responses"]["NotFoundError"];
        };
    };
}
