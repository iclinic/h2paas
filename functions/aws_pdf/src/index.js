import { s3EmitPDF } from '../../s3'
import { createPDF } from '../../core'

export default function(e, ctx) {
  return createPDF(e.template, e.options, s3EmitPDF(ctx))
}