import { s3EmitPDF } from 'functions/s3'
import { createPDF } from 'functions/core'

export default function(e, ctx) {
  return createPDF(e.template, e.options, s3EmitPDF(ctx))
}