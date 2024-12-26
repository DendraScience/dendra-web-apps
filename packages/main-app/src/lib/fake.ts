import { OrganizationSchema } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_pb'
import { AccessLevel } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/types_pb'
import { create } from '@bufbuild/protobuf'
import { DurationSchema, timestampFromDate } from '@bufbuild/protobuf/wkt'
import { faker } from '@faker-js/faker'

export function generateOrganization() {
  const name = faker.company.name()

  return create(OrganizationSchema, {
    id: faker.database.mongodbObjectId(),
    isEnabled: true,
    isHidden: false,
    name,
    fullName: name,
    description: faker.lorem.paragraph(),
    slug: faker.helpers.slugify(name).toLowerCase(),
    sortValue: faker.number.int({ min: 10, max: 100, multipleOf: 10 }),
    email: faker.internet.email(),
    url: faker.internet.url(),

    accessLevels: {
      memberLevel: AccessLevel.DOWNLOAD,
      publicLevel: faker.number.int({
        min: AccessLevel.RESTRICTED,
        max: AccessLevel.DOWNLOAD
      })
    },

    modification: {
      createdAt: timestampFromDate(faker.date.past()),
      createdBy: 'auth0|' + faker.string.uuid(),
      updatedAt: timestampFromDate(faker.date.recent()),
      updatedBy: 'auth0|' + faker.string.uuid()
    },

    address: {
      country: 'US',
      locality: faker.location.city(),
      postalCode: faker.location.zipCode(),
      region: faker.location.state(),
      streetAddress: faker.location.streetAddress()
    },

    operationalSettings: {
      defaultTimeZone: faker.location.timeZone(),
      sampleInterval: create(DurationSchema, { seconds: BigInt(10 * 60) }),
      stationOfflineThreshold: create(DurationSchema, {
        seconds: BigInt(60 * 60)
      })
    }
  })
}
