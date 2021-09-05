import fs from 'fs'
import path from 'path'

const fileDirectory = path.join(process.cwd(), 'calculations')

export const writeToFile = async (fileName: string, data: string) => {
  const fullPath = path.join(fileDirectory, fileName)
  await fs.writeFile(fullPath, data, (error) => {
    if(error) {
      throw error; 
    }
  })
} 

export const readFromFile = async (fileName: string) => {
  const fullPath = path.join(fileDirectory, fileName)
  let content = "";
  return await fs.readFileSync(fullPath, 'utf8')
} 