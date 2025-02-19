export default eventHandler(async (event) => {
  const { page } = await hubBrowser()
  await page.goto(`${getRequestURL(event).origin}/`)

  setHeader(event, 'Content-Type', 'application/pdf')
  return page.pdf({ format: 'A4' })
})
