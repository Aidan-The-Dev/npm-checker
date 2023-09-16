const fetch = require('node-fetch')

async function checkPackageAvailability(packageName) {
  try {
    const response = await fetch(`https://registry.npmjs.com/-/v1/search?text=${packageName}&size=1`)
    const data = await response.json()

    if(data.objects.length === 0) {
      console.log(`The npm package "${packageName}" does not exist. It is available for use.`)
    } else {
      const existingPackage = data.objects[0].package;
      console.log(`The npm package "${packageName}" already exists with the following details:`)
      console.log(`Name: ${existingPackage.name}`)
      console.log(`Description: ${existingPackage.description}`)
      console.log(`Version: ${existingPackage.version}`)
    }
  } catch (error) {
    console.error(`An error occured while checking for the npm package: ${error.message}`)
  }
}

const packageName = 'your-package-name'
checkPackageAvailability(packageName)
