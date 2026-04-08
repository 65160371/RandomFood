// src/firebase/seedScript.js

import { db } from './config'
import { doc, setDoc } from 'firebase/firestore'
import { seedMenus } from '../data/seedMenus'

// รูปภาพ local อยู่ใน /public/images/menus/
function getImageUrl(imageFile) {
  return `/images/menus/${imageFile}.jpg`
}

export async function runSeed() {
  console.log('Starting seed...')
  let count = 0

  for (const menu of seedMenus) {
    try {
      const ref = doc(db, 'menus', menu.id)

      const { imageFile, ...rest } = menu

      await setDoc(ref, {
        ...rest,
        imageUrl: getImageUrl(imageFile),
        createdAt: new Date()
      })

      console.log("updated:", menu.id)
      count++

    } catch (err) {
      console.error("error at:", menu.id, err)
    }
  }

  console.log(`Seeded ${count} menus`)
}