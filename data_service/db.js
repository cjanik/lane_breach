// let AWS = require("aws-sdk");
//
// AWS.config.update({
//   region: "us-west-2"
// });
//
// let docClient = new AWS.DynamoDB.DocumentClient();
//
//
// // todo: generify
// let params = {
//   Item: {
//     address                        : '2500 MASON ST, SAN FRANCISCO, CA, 94133',
//     agency_responsible             : 'Parking Enforcement Dispatch Queue',
//     closed_date                    : '2018-04-19T10:49:14.000',
//     lat                            : '37.80713',
//     long                           : '-122.4131',
//     media_url                      : 'http://mobile311.sfgov.org/media/san_francisco/report/photos/5b49212b52465b25131953b3/report.jpg',
//     s3_image_url                   : 'https://s3-us-west-1.amazonaws.com/lane-breach/311-sf/images/9218274.png',
//     neighborhoods_sffind_boundaries: 'Fisherman\'s Wharf',
//     point                          : {
//       type       : 'Point',
//       coordinates: [-122.42123031,37.78580544]
//     },
//     police_district                : 'CENTRAL',
//     requested_datetime             : '2018-04-19T10:14:00.000',
//     service_details                : 'White - Air Ride Equipped - 289185Z',
//     service_name                   : 'Parking Enforcement',
//     service_request_id             : '8891327',
//     service_subtype                : 'Blocking_Bicycle_Lane',
//     source                         : 'Twitter',
//     status_description             : 'Closed',
//     status_notes                   : 'Officer responded to request under CAD # 181091332. Unable to Locate.',
//     supervisor_district            : '3',
//     updated_datetime               : '2018-04-19T10:49:14.000'
//   },
//   TableName             : "BikeLaneReports"
// };
//
// docClient.put(params, function(err, data) {
//   if(err) console.log(err, err.stack); // an error occurred
//   else console.log(data);           // successful response
//   /*
//   data = {
//    ConsumedCapacity: {
//     CapacityUnits: 1,
//     TableName: "Music"
//    }
//   }
//   */
// });

const moment = require('moment')

// let month =
// console.log(moment().get('year'))
// console.log(moment().get('month') + 1)
// console.log(moment().get('date'))
// console.log(moment().get('hour'))
// console.log(moment().get('minute'))
// console.log(moment().get('second'))


let date = moment().local()
date = date.subtract(1,'days').format('YYYY-MM-DDTHH:mm:ss')

console.log(date)
