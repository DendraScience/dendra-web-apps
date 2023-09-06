import { computed } from 'vue'
import { useDisplay } from 'vuetify'

function makeTrHref(image, { aspectRatio, crop, effects, gravity }, width) {
  const c1 = []
  const c2 = []
  const c3 = []

  // Build c1
  if (aspectRatio) c1.push(`ar_${+aspectRatio.toFixed(5)}`)
  if (crop) c1.push(crop)
  else c1.push('c_fill')
  if (gravity) c1.push(gravity)

  // Build c2
  if (Array.isArray(effects)) c2.push(...effects)

  // Build c3
  if (width) c3.push('c_scale', `w_${width}`)

  const tr = []
  if (c1.length) tr.push(c1.join(','))
  if (c2.length) tr.push(c2.join(','))
  tr.push('f_auto')
  tr.push('q_auto:best')
  if (c3.length) tr.push(c3.join(','))

  return new URL(
    `/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/${tr.join(
      '/'
    )}/${image.public_id}.${image.extension}`,
    import.meta.env.VITE_CLOUDINARY_BASE
  ).href
}

export function useResponsive(data, key, sizes) {
  const { thresholds } = useDisplay()

  return computed(() => {
    const image = key ? data.source.value?.[key] : data.source.value

    let resp = {}

    if (image.hash && image.ext) {
      resp.src = `${import.meta.env.VITE_UPLOADS_CDN}/${image.hash}${image.ext}`
    } else if (image.public_id && image.extension) {
      const aspectRatio = data.aspectRatio.value

      resp.sizes = []
      resp.src = makeTrHref(
        image,
        {
          aspectRatio,
          ...image.transformations
        },
        1280 // Hardcoded default
      )
      resp.srcset = []

      for (const [bp, width] of Object.entries(thresholds.value)) {
        if (width <= 0) continue

        const srcSize = sizes?.[bp]
        if (srcSize) resp.sizes.push(`(min-width: ${width}px) ${srcSize}`)

        const href = makeTrHref(
          image,
          {
            aspectRatio,
            ...image.transformations
          },
          width
        )
        resp.srcset.push(`${href} ${width}w`)
      }

      resp.sizes.push('100vw')
      resp.sizes = resp.sizes.join(',')
      resp.srcset = resp.srcset.join(',')
    }

    return resp
  })
}
