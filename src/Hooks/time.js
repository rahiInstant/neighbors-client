import {DateTime } from 'luxon'

const udate = DateTime.now().setZone('utc')
const mdate = DateTime.fromFormat("12-03-2020",'dd-mm-yyyy')
console.log(udate,mdate)
console.log(new Object(udate))

// import moment from "moment";
// const date = moment("2020-03-12 04:30:00").unix();
// const nowDate = moment().unix();
// console.log(date);
// console.log(nowDate);
