import { computed, toValue } from 'vue'
import { useDisplay } from 'vuetify'

function cloudinaryHref(image, transformation, params) {
  const parts = [
    '',
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    'image',
    'upload'
  ]

  if (transformation && transformation.cloudinary_parameters)
    parts.push(
      transformation.cloudinary_parameters.replace(
        /{([.\w]+)}/g,
        (_, k) => params[k]
      )
    )

  parts.push(image.filename_disk)

  return new URL(parts.join('/'), import.meta.env.VITE_CLOUDINARY_BASE).href
}

export function useImgResponsive(data, keys, sizes) {
  const { thresholds } = useDisplay()

  return computed(() => {
    let aspectRatio = toValue(data.aspectRatio)
    let image = toValue(data.image)
    let transformation = toValue(data.transformation)

    const value = toValue(data.value)
    if (value && keys) {
      if (keys.aspectRatio) aspectRatio = value[keys.aspectRatio]
      if (keys.image) image = value[keys.image]
      if (keys.transformation) transformation = value[keys.transformation]
    }

    if (!aspectRatio) aspectRatio = 1
    aspectRatio = +aspectRatio.toFixed(5)

    let resp = {}

    if (
      image &&
      image.filename_disk &&
      image.storage === import.meta.env.VITE_CLOUDINARY_STORAGE
    ) {
      resp.sizes = []

      resp.src = cloudinaryHref(image, transformation, {
        aspectRatio,
        width: 1280 // Hardcoded default
      })
      resp.srcset = []

      for (const [bp, width] of Object.entries(thresholds.value)) {
        if (width <= 0) continue

        const srcSize = sizes?.[bp]
        if (srcSize) resp.sizes.push(`(min-width: ${width}px) ${srcSize}`)

        const href = cloudinaryHref(image, transformation, {
          aspectRatio,
          width
        })
        resp.srcset.push(`${href} ${width}w`)
      }

      resp.sizes.push('100vw')
      resp.sizes = resp.sizes.join(',')
      resp.srcset = resp.srcset.join(',')
    }

    return resp
  })
}
