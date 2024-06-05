/**
 * @typedef { import("vue").ComputedRef<UseImgResponsiveReturn> } UseImgResponsiveReturnComputedRef
 * @typedef { import("vue").MaybeRefOrGetter<UseImgResponsiveOptions> } UseImgResponsiveOptionsRefOrGetter
 */

/**
 * @typedef {object} DirectusImage
 * @property {number} height
 * @property {number} width
 * @property {string} filename_disk
 * @property {string} storage
 * @property {string} type
 */

/**
 * @typedef {object} ImageTransformation
 * @property {string} [cloudinary_parameters]
 */

/**
 * @typedef {{[name: string]: string}} UseImgResponsiveSizes
 */

/**
 * @typedef {object} UseImgResponsiveOptions
 * @property {number} [aspectRatio]
 * @property {DirectusImage} [image]
 * @property {ImageTransformation} [transformation]
 * @property {UseImgResponsiveSizes} [sizes]
 */

/**
 * @typedef {object} UseImgResponsiveReturn
 * @property {string} [sizes]
 * @property {string} [src]
 * @property {string} [srcset]
 */

import { computed, toValue } from 'vue'
import { useDisplay } from 'vuetify'

/**
 * @param  {DirectusImage} image
 * @param  {ImageTransformation} [transformation]
 * @param  {{[name: string]: string | number}} [params]
 * @return {string}
 */
function cloudinaryHref(image, transformation, params) {
  const parts = [
    '',
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    'image',
    'upload'
  ]

  if (transformation && transformation.cloudinary_parameters && params)
    parts.push(
      transformation.cloudinary_parameters.replace(
        /{([.\w]+)}/g,
        (_, k) => params[k] + ''
      )
    )

  parts.push(image.filename_disk)

  return new URL(parts.join('/'), import.meta.env.VITE_CLOUDINARY_BASE).href
}

/**
 * Responsive image composable.
 * @param  {UseImgResponsiveOptionsRefOrGetter} options
 * @return {UseImgResponsiveReturnComputedRef}
 */
export function useImgResponsive(options) {
  const { thresholds } = useDisplay()

  return computed(() => {
    let {
      aspectRatio,
      image,
      sizes: sizesOpt,
      transformation
    } = toValue(options)

    if (aspectRatio === undefined) aspectRatio = 1
    aspectRatio = +aspectRatio.toFixed(5)

    let resp = {
      sizes: '',
      src: '',
      srcset: ''
    }

    if (
      image &&
      image.filename_disk &&
      image.storage === import.meta.env.VITE_CLOUDINARY_STORAGE
    ) {
      /** @type {string[]} */
      const sizes = []
      /** @type {string[]} */
      const srcset = []

      const src = cloudinaryHref(image, transformation, {
        aspectRatio,
        width: 1280 // Hardcoded default
      })

      for (const [bp, width] of Object.entries(thresholds.value)) {
        if (bp === 'xs') continue

        // If viewport width is equal to ${width}px or greater,
        // then show the image with a width of ${srcSize}
        const srcSize = sizesOpt?.[bp]
        if (srcSize) sizes.push(`(min-width: ${width}px) ${srcSize}`)

        const href = cloudinaryHref(image, transformation, {
          aspectRatio,
          width
        })
        srcset.push(`${href} ${width}w`)
      }

      sizes.push(sizesOpt?.xs || '100vw')

      resp.sizes = sizes.join(',')
      resp.src = src
      resp.srcset = srcset.join(',')
    }

    return resp
  })
}
