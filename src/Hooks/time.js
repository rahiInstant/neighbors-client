import {DateTime } from 'luxon'

// const udate = DateTime.now().setZone('utc')
// const mdate = DateTime.fromFormat("12-03-2020",'dd-mm-yyyy')
// console.log(udate,mdate)
// console.log(new Object(udate))

import moment from "moment";
const date = moment().format();
// const nowDate = moment().unix();
// console.log(date);
// console.log(nowDate);


const edate = new Date().toUTCString()
// console.log(edate.toUTCString())
// console.log(edate.toLocaleDateString())
// console.log(edate.toLocaleString())
console.log(edate)
const pdate = new Date(edate)
console.log(pdate.toLocaleString())
const odate = Date.parse(edate)
console.log(odate)