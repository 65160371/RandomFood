// src/data/seedMenus.js
// ข้อมูลเมนูจริงจากร้านในบางแสน
// รูปภาพ: วางไฟล์รูปไว้ใน /public/images/menus/ ตามชื่อ imageFile
// เช่น /public/images/menus/1-khaokaengkaree.jpg

export const seedMenus = [
  {
    id: 'menu_001',
    imageFile: '1-khaokaengkaree',
    restaurantName: 'ร้านแกงกะหรี่ ๑๐๐ ปี',
    menuName: 'ข้าวแกงกะหรี่',
    address: '67 14 ถ. เนตรดี ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/sx36UgQvjzWgaZdi7',
    lat: 13.26953,
    lng: 100.92577
  },
  {
    id: 'menu_002',
    imageFile: '2-khaomangai',
    restaurantName: 'โกก้อง บางแสน',
    menuName: 'ข้าวมันไก่',
    address: '49 14 ถ. เนตรดี ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/pL5xyWgsHahC6xMR8',
    lat: 13.27264,
    lng: 100.93106
  },
  {
    id: 'menu_003',
    imageFile: '3-khaokamoo',
    restaurantName: 'ขาหมู หมูกรอบ by ป้าติ้ว',
    menuName: 'ข้าวขาหมู',
    address: 'ตลาดซีไซร์, 4 ถนนบางแสนสาย4 ใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/Qso1Hc6mop5NJZxD9',
    lat: 13.27825,
    lng: 100.93121
  },
  {
    id: 'menu_004',
    imageFile: '4-khaopatmoo',
    restaurantName: 'ร้านป้าแสงจันทร์',
    menuName: 'ข้าวผัดหมู',
    address: '59, 41 ถนนบางแสนสาย4 ใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/jai3NGUUQrp4wCxn6',
    lat: 13.28449,
    lng: 100.92876
  },
  {
    id: 'menu_005',
    imageFile: '5-khaomoodaengmookrob',
    restaurantName: 'หลงสมัย ก๋วยเตี๋ยวต้มยำ',
    menuName: 'ข้าวหมูแดงหมูกรอบ',
    address: '85 9 ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/jkFw9F9wBxps1Hjz5',
    lat: 13.27345,
    lng: 100.92388
  },
  {
    id: 'menu_006',
    imageFile: '6-ssmalatang',
    restaurantName: 'Super Soup MaLaTang - Bangsaen',
    menuName: 'หม่าล่าทั่ง',
    address: '110 ถ. เนตรดี ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/Kv255Kn6jVxJpZGKA',
    lat: 13.27036,
    lng: 100.92610
  },
  {
    id: 'menu_007',
    imageFile: '7-ttmalatang',
    restaurantName: 'ร้านทงทงหม่าล่า',
    menuName: 'หม่าล่าทั่ง',
    address: '20/22 ถนนบางแสนล่าง ซอย 4/2 ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/Gtx5g7uy5FWaecNT7',
    lat: 13.28226,
    lng: 100.91877
  },
  {
    id: 'menu_008',
    imageFile: '8-kuaytiewnamtok',
    restaurantName: 'ร้านก๋วยเตี๋ยวลุงกับป้า ซอยลีลา',
    menuName: 'ก๋วยเตี๋ยวน้ำตก',
    address: '16 114 ถนนบางแสนสาย4 ใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/75c6RYtugQ7XXHek6',
    lat: 13.27883,
    lng: 100.92951
  },
  {
    id: 'menu_009',
    imageFile: '9-Kuaytiewyentafo',
    restaurantName: 'ร้านก๋วยเตี๋ยวลุงกับป้า ซอยลีลา',
    menuName: 'ก๋วยเตี๋ยวเย็นตาโฟ',
    address: '16 114 ถนนบางแสนสาย4 ใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/75c6RYtugQ7XXHek6',
    lat: 13.27883,
    lng: 100.92951
  },
// เพิ่มเมนูที่เหลือได้ที่นี่ในรูปแบบเดียวกัน
  {
    id: 'menu_010',
    imageFile: '10-yakiya',
    restaurantName: 'หม้อไฟเกาหลี JAGIYA บางแสน',
    menuName: 'บิบิมบับ',
    address: '59 41 ถนนบางแสนสาย 4 ใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/9emp3B7YgGdn6Fvn7',
    lat: 13.28117,
    lng: 100.91989
  },
  {
    id: 'menu_011',
    imageFile: '11-sarang',
    restaurantName: 'ซารัง บุฟเฟต์',
    menuName: 'หมูย่างเกาหลี',
    address: '85 12 ถนน บางแสนลำง ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/swRnm7BkdnbDih4S6',
    lat: 13.27432,
    lng: 100.92363
  },
  {
    id: 'menu_012',
    imageFile: '12-cutepig',
    restaurantName: 'Cute Pig Korean BBQ บางแสน',
    menuName: 'บาร์บีคิวเกาหลี',
    address: '37 6 ถนน บางแสนล่าง ตำบลแสนสุข เมือง ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/eCKiAVQC6vmPss368',
    lat: 13.28109,
    lng: 100.91999
  },
  {
    id: 'menu_013',
    imageFile: '13-nouekateam',
    restaurantName: 'JOBJAB จ๊อบแจ๊บ - ไก่อบซี่โครงอบ บางแสน@ซอยสดใส',
    menuName: 'เนื้อกระเทียม',
    address: '59 ร้าน JOBJAB ใต้หอพัก สุขสัมพันธ์อพาทเมนท์ 7 ถนนบางแสนสาย 4 ใต้ ต.แสนสุข อ.เมือง ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/p89r8AnCjvowCb318',
    lat: 13.27980,
    lng: 100.93046
  },
  {
    id: 'menu_014',
    imageFile: '14-mhukropkapowkaidow',
    restaurantName: 'Charm กะเพรา',
    menuName: 'หมูกรอบกะเพราไข่ดาว',
    address: '16 52 ถนนบางแสนสาย 4 ใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/JKaSm9mHXzzUGvba9',
    lat: 13.27661,
    lng: 100.93016
  },
  {
    id: 'menu_015',
    imageFile: '15-pingping',
    restaurantName: 'Pingping ice cream & friends',
    menuName: 'บิงซู',
    address: '63/8 Sansuek, ตำบล เหมือง อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/PNLU63NFqxJqZrkg9',
    lat: 13.27002,
    lng: 100.92661
  },
  {
    id: 'menu_016',
    imageFile: '16-radnha',
    restaurantName: 'ราดหน้ายอดผัก นายสน',
    menuName: 'ราดหน้าหมี่กรอบ',
    address: 'ถ. บางแสนสาย 4 น. ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/4bnQeSMxXpM4JqxF9',
    lat: 13.28454,
    lng: 100.92857
  },
  {
    id: 'menu_017',
    imageFile: '17-icecream',
    restaurantName: 'I SEA CREAM',
    menuName: 'ไอศครีมโฮมเมด',
    address: '108/16-17 ห้อง1 ชั้น 1 ถนน บางแสนล่าง ซอย 12/1 ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/gT6RxV2JYZ579CQFA',
    lat: 13.27224,
    lng: 100.92255
  },
  {
    id: 'menu_018',
    imageFile: '18-meyokped',
    restaurantName: 'ร้านเป็ดย่าง BY ลุงเป็ด ซอยลีลา',
    menuName: 'หมี่หยกเป็ด',
    address: 'ล็อค20-21 ข้างตึกเลิศหิรัญ แมนชั่น 14/98 ถนน 4 สายใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/S6VC1R1VHf9xTT1q9',
    lat: 13.27895,
    lng: 100.92970
  },
  {
    id: 'menu_019',
    imageFile: '19-khaomhukrob',
    restaurantName: 'ร้านเป็ดย่าง BY ลุงเป็ด ซอยลีลา',
    menuName: 'ข้าวหมูกรอบ',
    address: 'ล็อค20-21 ข้างตึกเลิศหิรัญ แมนชั่น 14/98 ถนน 4 สายใต้ ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/S6VC1R1VHf9xTT1q9',
    lat: 13.27895,
    lng: 100.92970
  },
  {
    id: 'menu_020',
    imageFile: '20-ramen',
    restaurantName: 'โนะมิสุเกะ ราเมง',
    menuName: 'ราเม็งทงคัตสึ',
    address: 'บางแสนสาย 1 ตำบลแสนสุข อำเภอเมืองชลบุรี ชลบุรี 20130',
    mapsUrl: 'https://maps.app.goo.gl/rEAw9FYTZoSkQB11A',
    lat: 13.27344,
    lng: 100.92207
  },
  {
    id: 'menu_021',
    imageFile: '21-sushiro',
    restaurantName: 'Sushiro',
    menuName: 'ซูชิสายพาน',
    address: 'ห้องเลขที่ 354, 355, 356, ชั้น 3 ศูนย์การค้าเซ็นทรัล ชลบุรี ตำบล เสม็ด อำเภอเมืองชลบุรี ชลบุรี 20000',
    mapsUrl: 'https://maps.app.goo.gl/9MiSg23eCkKi89Lj9',
    lat: 13.35544,
    lng: 100.96189
  }
  
  

]
