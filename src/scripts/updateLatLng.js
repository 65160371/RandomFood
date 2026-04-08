import { db } from "../firebase"; // เช็ค path ให้ตรง
import { doc, updateDoc } from "firebase/firestore";
import { seedMenus } from "../data/seedMenus";

export const updateLatLng = async () => {
  for (const menu of seedMenus) {
    const ref = doc(db, "menus", menu.id);

    await updateDoc(ref, {
      lat: menu.lat,
      lng: menu.lng
    });
  }

  console.log("✅ อัปเดต lat/lng แล้ว");
};